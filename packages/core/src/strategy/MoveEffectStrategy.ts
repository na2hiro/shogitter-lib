import {
  BeforeAfterDropStrategy,
  BeforeAfterDropStrategyContainer,
  CommonConfig,
  StrategySerialization,
} from "./Strategy.js";
import Ban, { Species } from "../Ban.js";
import XY, { RelativeType, RelXY } from "../XY.js";
import { Koma } from "../Koma.js";
import { ShogitterCoreException } from "../utils/phpCompat.js";
import { Teban } from "../Teban.js";
import { shogitterDB } from "../ShogitterDB.js";
import { MoveType, QuantumPiece, runQuantum } from "../utils/quantumUtils.js";
import { Direction } from "../Direction.js";

export class MoveEffectStrategyContainer<
  S
> extends BeforeAfterDropStrategyContainer<MoveEffectStrategy<S>> {
  strategyGenre = "移動処理";
}
export default abstract class MoveEffectStrategy<
  S = {}
> extends BeforeAfterDropStrategy {
  strategyGenre = "移動処理";
  protected ban: Ban;
  protected setting: S & CommonConfig;
  constructor(ban: Ban, setting: S & CommonConfig) {
    super();
    this.ban = ban;
    this.setting = setting;
  }
  executeBefore(from: XY) {}
  executeAfter(to: XY, captured = false) {}
  executeDrop(to: XY, additional?: any) {}

  static create<S>(name: string, ban: Ban, setting: S): MoveEffectStrategy<S> {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}
class NormalMoveEffectStrategy extends MoveEffectStrategy {
  abstract = "通常";
  executeAfter(to: XY) {}
}
type CoinMoveEffectConfig = {
  coin: Species; // コインの種類
};
/**
 * コイン将棋
 */
class CoinMoveEffectStrategy extends MoveEffectStrategy<CoinMoveEffectConfig> {
  abstract =
    "駒が動くと同時にコインもそれと平行移動する。コインが他の駒に重なるような手は指せない。";
  protected relXY: RelXY;
  private koma: Koma;
  executeBefore(from: XY) {
    let coinfrom;
    for (const koma of this.ban.getIterator()) {
      if (koma.isNull()) continue;
      if (koma.species !== this.setting.coin) continue;
      coinfrom = koma.XY;
      break;
    }
    if (coinfrom) {
      this.relXY = new RelXY(coinfrom.x - from.x, coinfrom.y - from.y);
      this.koma = this.ban.cut(coinfrom);
    } else {
      this.relXY = this.koma = null;
    }
  }
  executeAfter(to: XY) {
    if (this.relXY) {
      const cointo = to.getCloneRel(this.relXY);
      if (!this.ban.isLegal(cointo))
        throw new ShogitterCoreException("コインが盤からはみ出してしまいます");
      if (this.ban.exists(cointo))
        throw new ShogitterCoreException(
          "コインがほかの駒と重なってしまいます。"
        );

      this.ban.set(cointo, this.koma);
    }
  }
}
/**
 * はさみ将棋処理
 */
class HasamiMoveEffectStrategy extends MoveEffectStrategy {
  abstract =
    "相手の駒を味方の駒で縦か横にはさむか、囲碁のように縦横全てを囲んだ時、その駒を取り去る。";
  executeAfter(to: XY) {
    // Ban#getNipped4に置き換え？
    for (const relXY of RelXY.getVector(RelativeType.TATEYOKO)) {
      const tonari = to.getCloneRel(relXY);
      if (!this.ban.isLegal(tonari)) continue;
      if (
        this.ban.exists(tonari) &&
        this.ban.get(tonari).isEnemy(this.ban.get(to))
      ) {
        for (const value of this.ban.getSurroundedByEnemy(tonari)) {
          this.ban.remove(value);
        }
      }
      // igo is never set
      // if(this.ban.parent.rule.igo) continue;
      //はさまれている
      for (const xy of this.ban.getNipped(to, relXY)) {
        this.ban.remove(xy);
      }
    }
  }
}
type OthelloMoveEffectConfig = {
  must: boolean; // オセロする必要がある
};
/**
 * オセロ
 */
class OthelloMoveEffectStrategy extends MoveEffectStrategy<OthelloMoveEffectConfig> {
  abstract = "相手の駒を縦横斜めにはさんだ時、その駒を味方の駒にする。";
  executeAfter(to: XY) {
    const direction = this.ban.getDirection(to);

    let othelloed = false;
    for (const relXY of RelXY.getVector(RelativeType.ALLROUND)) {
      for (const xy of this.ban.getNipped(to, relXY)) {
        othelloed = true;
        this.ban.get(xy).direction = direction;
      }
    }
    if (this.setting["must"] && !othelloed)
      throw new ShogitterCoreException("ひっくり返す必要があります。");
  }
  executeDrop(to: XY) {
    this.executeAfter(to);
  }
}
/**
 * どんでん返し処理
 * 対面したら駒を入れ替える
 */
class DondenMoveEffectStrategy extends MoveEffectStrategy {
  abstract =
    "相手の駒の前のマスに味方の駒が移動した時、互いの駒の場所と向きが入れ替わる。2つの駒の間にどんでん返しがあり、180度回転するイメージ。";
  executeAfter(to: XY) {
    const toKoma = this.ban.get(to);
    if (toKoma.isNull()) return;

    const vec = new RelXY(0, -1);
    vec.turn(toKoma.direction);
    const donden = to.getCloneRel(vec);
    if (this.ban.isLegal(donden)) {
      const dondenKoma = this.ban.get(donden);
      if (!dondenKoma.isNull() && toKoma.isEnemy(dondenKoma)) {
        const tmp = toKoma.species;
        toKoma.species = dondenKoma.species;
        dondenKoma.species = tmp;
      }
    }
  }
}
/**
 * 水中将棋処理
 * 浮かんだ駒を消す
 */
class UnderwaterMoveEffectStrategy extends MoveEffectStrategy {
  abstract = "外周1マスにある駒と、それらに縦横でつながった駒以外は消える。";
  protected from: XY;
  executeBefore(from: XY) {
    this.from = from;
  }
  executeAfter(to: XY) {
    this.suityuuOne(to);
    this.suityuu(this.from);
  }
  executeDrop(to: XY) {
    this.suityuuOne(to);
  }
  suityuu(from: XY) {
    for (const relXY of RelXY.getVector(RelativeType.TATEYOKO)) {
      //tanvecに駒があったら、その駒が孤立しているかどうか調べる
      const xy = from.getCloneRel(relXY);
      if (!this.ban.isLegal(xy) || !this.ban.exists(xy)) continue; //端か駒がないならok

      for (const value of this.ban.getSurroundedBySpace(xy)) {
        this.ban.remove(value);
      }
    }
  }
  suityuuOne(to: XY) {
    //移動先が孤立していたら消す
    for (const xy of this.ban.getSurroundedBySpace(to)) {
      this.ban.remove(xy);
    }
  }
}
/**
 * 核分裂処理
 * 利きにある駒を全て裏返す
 */
class NuclearMoveEffectStrategy extends MoveEffectStrategy {
  abstract = "駒を動かした時、その駒の利きにある相手の駒を全て裏返す。";
  executeAfter(to: XY) {
    const toKoma = this.ban.get(to);
    for (const kiki of toKoma.getMovable()) {
      const nowkoma = this.ban.get(kiki["XY"]);
      if (!nowkoma.isNull() && toKoma.isEnemy(nowkoma)) {
        nowkoma.promote(2);
      }
    }
  }
  executeDrop(to: XY) {
    this.executeAfter(to);
  }
}
/**
 * 囲碁
 * 囲んだら消す 自殺手禁止
 */
class IgoMoveEffectStrategy extends MoveEffectStrategy {
  abstract = "相手の駒を縦横で囲んだら取る。";
  executeAfter(to: XY) {
    for (const relXY of RelXY.getVector(RelativeType.TATEYOKO)) {
      const tonari = to.getCloneRel(relXY);
      if (!this.ban.isLegal(tonari)) continue;
      if (
        this.ban.exists(tonari) &&
        this.ban.get(tonari).isEnemy(this.ban.get(to))
      ) {
        for (const value of this.ban.getSurroundedByEnemy(tonari)) {
          this.ban.strategy["Capture"].execute(
            value,
            this.ban.get(to).direction
          );
        }
      }
    }
  }
  executeDrop(to: XY) {
    this.executeAfter(to);
  }
}
/**
 * 重力を適用（重力将棋） どうするか
 */
class GravityMoveEffectStrategy extends MoveEffectStrategy {
  abstract =
    "すべての駒は、盤の端か駒にぶつかるまで横方向(数字の小さい方)に滑る。";
  executeAfter(to: XY) {
    for (let y = 1; y <= this.ban.y; y++) {
      let tox = 1;
      for (let fromx = 1; fromx <= this.ban.x; fromx++) {
        if (this.ban.exists(new XY(fromx, y))) {
          this.ban.move(new XY(tox, y), new XY(fromx, y));
          tox++;
        }
      }
    }
  }
  executeDrop(to: XY) {
    this.executeAfter(to);
  }
}
class CheckerMoveEffectStrategy extends MoveEffectStrategy {
  abstract =
    "飛び越えた駒を取る。飛び越えられる場合は必ず取らなくてはならない。";
  protected from: XY;
  protected flagCanJump: boolean;
  executeBefore(from: XY) {
    this.from = from;
    this.flagCanJump = this.canJump(this.ban.get(from).direction);
  }
  executeAfter(to: XY) {
    const from = this.from;
    if (Math.abs(from.x - to.x) < 2 && Math.abs(from.y - to.y) < 2) {
      if (this.flagCanJump)
        throw new ShogitterCoreException("取れる駒を取ってください");
    } else {
      this.ban.remove(
        new XY(Math.floor((from.x + to.x) / 2), Math.floor((from.y + to.y) / 2))
      );
    }
  }
  canJump(direction: Direction): boolean {
    for (const koma of this.ban.getIterator()) {
      if (koma.isNull() || koma.direction != direction) continue;
      for (const kiki of koma.getMovable()) {
        if (
          Math.abs(koma.XY.x - kiki["XY"].x) == 2 &&
          Math.abs(koma.XY.y - kiki["XY"].y) == 2
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
type FlipPutMoveEffectConfig = {
  species: Species;
};
class FlipPutMoveEffectStrategy extends MoveEffectStrategy<FlipPutMoveEffectConfig> {
  abstract = "持ち駒を相手の駒のまま打つ";

  public executeAfter(to: XY) {}
  public executeDrop(to: XY) {
    const koma = this.ban.get(to);
    if (this.setting["species"] == koma.species) {
      koma.flip();
      //echo "flip";
    }
  }
  toHTML() {
    return (
      (this.setting.common.directions
        ? `${this.setting.common.directions
            .map((dir) => Teban.tebanName[0][dir])
            .join(" ")}は`
        : "") +
      `<a href='/koma/${this.setting["species"]}'>${shogitterDB.getKoma(
        this.setting["species"],
        "name"
      )}</a>を相手の駒のまま打つ`
    );
  }
}
/**
 * はさみ天秤端落とし
 */
class HasamiTenbinHashiotoshiMoveEffectStrategy extends MoveEffectStrategy {
  abstract =
    "はさみ：相手の駒を味方の駒で縦か横か斜めにはさむと取れる。天秤：相手にはさまれる手を指した時、はさんだ相手の駒を取れる。端落とし：自分の駒と盤の端ではさむと取れる。";
  executeAfter(to: XY) {
    for (const xy of this.ban
      .getNipped8(to)
      .concat(this.ban.getTenbined(to), this.ban.getHashiotoshied(to))) {
      this.ban.remove(xy);
    }
  }
}
/**
 * てんびん処理
 * はさみ天秤端落とし用だが，同時に処理しないといけないのでこちらは使わない．
class TenbinMoveEffectStrategy extends MoveEffectStrategy{
	abstract = "縦・横・斜めに相手に挟まれる位置に移動した場合、挟んでいる駒を取り去る。";
	executeAfter(to: XY){
		foreach(this.ban.getTenbined(to) as XY){
			this.ban.remove(XY);
		}
	}
}
 */
class EpoxyMoveEffectStrategy extends MoveEffectStrategy {
  abstract = "前後左右に敵駒がいると接着して同時に動く";
  private from: XY;
  private moving: { piece: Koma; from: XY }[];
  public executeBefore(from: XY) {
    this.from = from;
    this.moving = [];
    for (const xy of this.ban.getEpoxied(from)) {
      if (xy.equals(from)) continue;
      this.moving.push({ piece: this.ban.cut(xy), from: xy });
    }
  }
  public executeAfter(to: XY) {
    const vec = this.from.to(to);
    for (const mov of this.moving) {
      const dest = mov["from"].getCloneRel(vec);
      if (!this.ban.isLegal(dest))
        throw new ShogitterCoreException("駒が盤外にはみ出ます");
      if (this.ban.exists(dest))
        throw new ShogitterCoreException("駒が重なります");
      this.ban.set(dest, mov["piece"]);
    }
  }
}
/*
 * 止まる時に焼くのだが，パスした時に焼く処理の書き方が不明．
class CaptureKomaMoveEffectStrategy extends MoveEffectStrategy{
	abstract = "周囲の駒を取る";
	public executeAfter(\to: XY) {
		if(!this.ban.exists(to)) return;
		koma = this.ban.get(to);
		strategies = koma.get("strategy");
		setting = strategies["MoveEffect"]["CaptureKoma"];
		if(!setting) return;
		places = array_map(function(p)use(to){
			rel = new RelXY(p[0], p[1]);
			rel.turn(koma.direction); //turnReverse? 要チェック
			return to.getCloneRel(rel);
		}, setting['place']);

		if(setting["stopException"]){
			foreach(places as XY){
				if(!this.ban.exists(XY)) continue;
				nowkoma=this.ban.get(XY);
				if(this.match(nowkoma, koma.direction, setting["stopException"]))return;
			}
		}
		foreach(places as XY){
			if(!this.ban.exists(XY)) continue;
			nowkoma=this.ban.get(XY);
			if(this.match(nowkoma, koma.direction, setting["exception"]))continue;
			this.ban.strategy["Capture"].execute(XY, koma.direction);
		}

	}
	private match(Koma nowkoma, direction, settings){
		foreach(settings?:array() as komasetting){
			if(komasetting["species"]!==null){
				//種類指定があり，種類が違う
				if(komasetting["species"]!==nowkoma.species) continue;
			}
			if(komasetting["direction"]!==null){
				//向き指定があり
				if(komasetting["direction"]==="friend"){
					//味方のはずだが敵
					if(direction!==nowkoma.direction) continue;
				}else{
					//敵のはずだが味方
					if(direction===nowkoma.direction) continue;
				}
			}
			return true;//やつだ！！
		}
		return false;
	}
}
 *
 */
class AntikirukeMoveEffectStrategy extends MoveEffectStrategy {
  abstract = "駒を取った時に取った駒が初期位置に戻る。";
  public executeAfter(to: XY, captured = false) {
    if (!captured) return;
    const koma = this.ban.get(to);
    if (!koma) return;
    for (const xy of this.ban.getNearestInitPlace(
      koma.direction,
      koma.getPromoted(0),
      to
    )) {
      if (!this.ban.exists(xy)) {
        this.ban.move(xy, to);
        return;
      }
    }
  }
  toHTML() {
    return `アンチキルケ(${this.abstract})`;
  }
}

export type QuantumData = {
  xys: string[]; // 先手後手の場所配列(idが添字)
  d: {
    fulls: QuantumPiece[]; // 売り切れ駒リスト
    kinds: QuantumPiece[][]; // 可能性駒リスト
  };
};
class QuantumMoveEffectStrategy extends MoveEffectStrategy {
  abstract = "量子将棋的駒の動きをする";
  prom: boolean;
  promNow: boolean;
  from: XY;
  to: XY;
  direction: Direction;
  obj: QuantumData[];
  serialize(obj: StrategySerialization) {
    if (!this.obj) {
      this.loadLatestData();
    }
    obj["quantum"] = this.obj;

    return obj;
  }
  /*
   * movetype
   *   Promote: 成り
   *   NoPromote1: 1段目成らず・打ち
   *   NoPromote2: 2段目成らず・打ち
   *   Captured: 取られた
   */
  command(
    position: number,
    vec: RelXY = null,
    promote: boolean,
    movetype: MoveType,
    kinds: QuantumPiece[][]
  ) {
    return runQuantum(position, vec && { vec, promote }, movetype, kinds);
  }
  findPos(xy: XY) {
    const xystr = xy.toString();
    for (const direction of [0, 1]) {
      for (let i = 0; i < this.obj[direction].xys.length; i++) {
        if (xystr === this.obj[direction].xys[i]) {
          return { direction, position: i };
        }
      }
    }
    return null;
  }
  allocatePos(direction: Direction) {
    return { direction, position: this.obj[direction].xys.length };
  }
  findMochigoma(direction: Direction, pos: number | null) {
    for (const dir of [0, 1]) {
      for (let i = 0; i < this.obj[dir].xys.length; i++) {
        if (`mochi${direction}-${pos}` === this.obj[dir].xys[i]) {
          return { direction: dir, position: i };
        }
      }
    }
    throw new ShogitterCoreException("持ち駒が見つかりません");
  }
  countMochigoma(direction: Direction) {
    let cnt = 0;
    for (const dir of [0, 1]) {
      for (const xy of this.obj[dir].xys) {
        if (xy.indexOf(`mochi${direction}-`) === 0) cnt++;
      }
    }
    return cnt;
  }
  shiftMochigoma(direction: Direction, minpos: number) {
    for (const dir of [0, 1]) {
      for (let i in this.obj[dir].xys) {
        const xy = this.obj[dir].xys[i];
        if (xy.indexOf(`mochi${direction}-`) === 0) {
          const pos = parseInt(xy.substring(7));
          if (pos > minpos) {
            this.obj[dir].xys[i] = `mochi${direction}-${pos - 1}`;
          }
        }
      }
    }
  }
  private loadLatestData() {
    this.obj = JSON.parse(
      JSON.stringify(this.ban.parent.kifu.getLatestData("quantum"))
    ) || [
      { xys: [], d: { kinds: [], fulls: [] } },
      { xys: [], d: { kinds: [], fulls: [] } },
    ];
  }
  executeBefore(from: XY) {
    this.loadLatestData();
    const koma = this.ban.get(from);
    this.prom = koma.species === "fg";
    this.from = from;
    this.direction = koma.direction;
  }
  executeAfter(to: XY, captured = false) {
    this.promNow = !this.prom && this.ban.get(to).species === "fg";
    this.to = to;

    //移動
    let capturedPos = captured && this.findPos(this.to);

    const rel = this.from.to(this.to);
    rel.turn(this.direction);
    if (rel.x > 2) rel.x = 2;
    if (rel.x < -2) rel.x = -2;
    if (rel.y > 2) rel.y = 2;
    if (rel.y < -2) rel.y = -2;
    let pos = this.findPos(this.from) || this.allocatePos(this.direction);

    const dan = this.ban.calcDan(this.to, this.direction);
    const movetype: MoveType = this.promNow
      ? MoveType.Promote
      : !this.prom && dan <= 2
      ? [MoveType.NoPromote1, MoveType.NoPromote2][dan - 1]
      : MoveType.Normal;
    this.obj[pos.direction].xys[pos.position] = this.to.toString();
    this.obj[pos.direction].d = this.command(
      pos.position,
      rel,
      this.prom,
      movetype,
      this.obj[pos.direction].d.kinds
    );

    let end = false;
    if (captured) {
      //取った駒が王でしかなければ勝ち
      const capturedDirection = 1 - this.direction;
      if (!capturedPos) {
        const capturedData = this.obj[capturedDirection];
        if (
          capturedData.xys.length == 19 &&
          capturedData.d.fulls.indexOf("Ou") === -1 &&
          capturedData.d.kinds.every((sp) => sp.indexOf("Ou") < 0)
        ) {
          this.ban.parent.gameEnd(
            capturedDirection,
            this.direction,
            "勝ち",
            "王に確定した駒を取りました"
          );
          end = true;
        }
        capturedPos = this.allocatePos(capturedDirection);
      } else {
        const kinds =
          this.obj[capturedPos.direction].d.kinds[capturedPos.position];
        if (kinds.length == 1 && kinds[0] == "Ou") {
          this.ban.parent.gameEnd(
            capturedDirection,
            this.direction,
            "勝ち",
            "王に確定した駒を取りました"
          );
          end = true;
        }
      }

      //王除外
      this.obj[capturedPos["direction"]]["xys"][capturedPos.position] = `mochi${
        this.direction
      }-${this.countMochigoma(this.direction)}`;
      if (!end)
        this.obj[capturedPos.direction].d = this.command(
          capturedPos.position,
          null,
          null,
          MoveType.Captured,
          this.obj[capturedPos.direction].d.kinds
        );
    }
  }
  executeDrop(to: XY, id: number) {
    this.loadLatestData();
    this.to = to;
    this.direction = this.ban.get(to).direction;

    //打ち
    const pos = this.findMochigoma(this.direction, id);
    this.obj[pos["direction"]]["xys"][pos["position"]] = this.to.toString();
    this.shiftMochigoma(this.direction, id);

    const dan = this.ban.calcDan(this.to, this.direction);
    if (dan <= 2) {
      this.obj[pos["direction"]]["d"] = this.command(
        pos["position"],
        null,
        this.prom,
        [MoveType.NoPromote1, MoveType.NoPromote2][dan - 1],
        this.obj[pos.direction].d.kinds
      );
    }
  }
}
const nameToStrategy: {
  [variant: string]: /*(typeof MoveEffectStrategy)*/ any;
} = {
  Normal: NormalMoveEffectStrategy,
  Coin: CoinMoveEffectStrategy,
  Hasami: HasamiMoveEffectStrategy,
  Othello: OthelloMoveEffectStrategy,
  Donden: DondenMoveEffectStrategy,
  Underwater: UnderwaterMoveEffectStrategy,
  Nuclear: NuclearMoveEffectStrategy,
  Igo: IgoMoveEffectStrategy,
  Gravity: GravityMoveEffectStrategy,
  Checker: CheckerMoveEffectStrategy,
  FlipPut: FlipPutMoveEffectStrategy,
  HasamiTenbinHashiotoshi: HasamiTenbinHashiotoshiMoveEffectStrategy,
  Epoxy: EpoxyMoveEffectStrategy,
  Antikiruke: AntikirukeMoveEffectStrategy,
  Quantum: QuantumMoveEffectStrategy,
};
