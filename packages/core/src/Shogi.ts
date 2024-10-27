import "./strategy/Strategy";
import { ShogitterCoreException } from "./utils/phpCompat.js";
import { Mochigoma, MochigomaObj } from "./Mochigoma.js";
import { Result, Teban, UserInfo } from "./Teban.js";
import Ban, { BanObj, Species } from "./Ban.js";
import XY, { XYObj } from "./XY.js";
import { Koma, KomaObj, PromotionMode } from "./Koma.js";
import Kifu, { KifuLine, KifuMove } from "./Kifu.js";
import { BanScanIterator } from "./Iterator.js";
import { Rule, shogitterDB } from "./ShogitterDB.js";
import { javaHashCode } from "./utils/hash.js";
import { Direction } from "./Direction.js";
import { KifuCommand, Move } from "./Command.js";
import { deepCopy } from "./utils/compat.js";

export { ShogitterCoreException };

const DEBUG_ECHO_TIME = true;

type StatusObj = {
  num: Status;
  message?: string;
};

export enum Status {
  INITIAL,
  PLAYING,
  ENDED,
}
export type Player = {
  // Missing for live board
  // null when it's vacant
  user?: (UserInfo | null)[];
  mochigoma: { [species: string]: number };
  result?: Result;
};

export interface ShogiSerialization {
  version: string;
  status: StatusObj;
  ruleid: number;
  teban: number;
  turn: number;
  date: {
    start?: string;
    end?: string;
  };
  ban: BanObj;
  moving: Moving | null;
  players: Player[];
  system?: any; // confirmation?
  kifu: KifuLine[];
}

type Moving = {
  xy: [number, number];
  status: number;
};

/**
 * 将棋のクラス
 */
export default class Shogi {
  ruleid: number; //ルール番号
  //対局の状態
  status: StatusObj = {
    num: Status.INITIAL,
  };
  kifu: Kifu; //棋譜オブジェクト
  mochigoma: Mochigoma; //持ち駒オブジェクト
  ban: Ban; //盤オブジェクト
  teban: Teban; //手番オブジェクト
  rule: Rule;
  moving: Koma | undefined;
  date: {
    start?: Date;
    end?: Date;
  };
  private jsonsystem: any; // Used for showing confirmation
  private end: { status: string; kifu: [string, string] };
  fromDirection: Direction;
  private lastBan: KomaObj[][]; //移動前の盤面情報(変更しない)
  private lastMochigoma: MochigomaObj[];

  // statusMessage;		//対局の状態
  // kifulength;	//棋譜の長さ
  // debug;

  /**
   * 将棋オブジェクトのクローンについてはディープコピー
   * (コピーして別の局面として動かすため)
   */
  clone(tesuu?: number): Shogi {
    const shogi = Shogi.ofJkf(this.getObject());
    if (typeof tesuu !== "undefined") {
      while (shogi.kifu.getTesuu() > tesuu) {
        shogi.rollback(1, true);
      }
    }
    return shogi;
  }

  shufflePlayers() {
    this.teban.shufflePlayers();
  }

  start() {
    if (this.status.num !== Status.INITIAL)
      throw new ShogitterCoreException("初期化されておらず、開始できません。");
    this.status = { num: Status.PLAYING };
    this.ban.strategy.OnStart.execute();
    // this.date['start'] = new Date();
  }

  /**
   * If a move is already made.
   */
  isPlaying() {
    return this.status["num"] == Status.PLAYING;
  }

  getPromoted(species: Species, mode: PromotionMode) {
    for (let name in this.rule["nari"]) {
      const value = this.rule.nari[name];
      if (
        (mode == PromotionMode.FRONT || mode == PromotionMode.FLIP) &&
        species == value
      ) {
        return name;
      }
      if (
        (mode == PromotionMode.BACK || mode == PromotionMode.FLIP) &&
        species == name
      ) {
        return value === null ? name : value;
      }
    }
    return species;
  }

  public static ofJkf(jkf: ShogiSerialization): Shogi {
    const shogi = new Shogi();
    shogi.constructByJSON(deepCopy(jkf));
    return shogi;
  }

  public static ofRuleId(ruleId: number): Shogi {
    const shogi = new Shogi();
    shogi.constructById(ruleId);
    return shogi;
  }

  /**
   * ルールidを用いてコンストラクト
   * @param ruleid
   */
  constructById(ruleid: number) {
    if (this.isPlaying())
      throw new ShogitterCoreException("対局中は初期化できません");
    this.rule = shogitterDB.getRule(ruleid);
    this.ruleid = ruleid;
    this.kifu = new Kifu(this);
    this.mochigoma = new Mochigoma(this);
    this.status = { num: Status.INITIAL };
    this.date = {};
    this.moving = undefined;
    this.teban = new Teban(0, this.rule["players"], this, this.teban);
    this.teban.setFlags({ komaochi: this.rule["komaochi"] });

    this.ban = new Ban(
      this.rule["size"][0],
      this.rule["size"][1],
      this,
      this.rule.strategy || {},
      this.rule.iterator || {}
    );
    this.ban.deserialize({});
    this.mochigoma.setStrategy(this.rule["strategy"] || {});
    //this.kifulength = strlen(max(this.rule['size'][1], this.rule['size'][0])); // TODO what does it mean?

    //盤面、持ち駒、棋譜を読み込み
    this.ban.update(this.rule.init.ban);
    this.mochigoma.update(this.rule.init.mochigoma);
    this.kifu.clear();
  }

  constructByJSON(arr: ShogiSerialization) {
    this.constructById(arr["ruleid"]);
    this.status = arr.status;
    this.date = {
      start: new Date(arr.date?.start),
      end: new Date(arr.date?.end),
    };
    this.teban.setMaxTurn(arr.players[0].user?.length || 0);
    this.teban.set(arr.teban);
    this.teban.setTurn(arr.turn);
    this.jsonsystem = arr.system;
    this.ban.deserialize(arr.kifu?.[arr.kifu.length - 1]?.data || {});

    this.ban.updateByJSON(arr.ban);
    this.mochigoma.updateByJSON(arr.players);
    this.setMoving(arr.moving);

    this.teban.setArrayPlayerInfo(arr.players);

    this.kifu.updateByJSON(arr.kifu);
  }

  private setMoving(moving: Moving): void {
    if (!moving) return null;
    const xy = new XY(moving["xy"][0], moving["xy"][1]);
    this.ban.ensureExists(xy);
    const koma = this.ban.get(xy);
    koma.status = moving["status"];
    this.moving = koma;
  }

  /**
   * 投了する
   * @param direction
   */
  resign(direction?: Direction) {
    if (!this.isPlaying())
      throw new ShogitterCoreException("対局中ではありません。");
    let dirResign;
    if (typeof direction !== "undefined") {
      //手番があったらその人が投了
      dirResign = direction;
    } else {
      //なかったら手番の人が投了
      dirResign = this.teban.getNowDirection();
    }
    this.gameEnd(
      dirResign,
      dirResign,
      "投了",
      `${this.teban.getName(dirResign)}が投了しました。`
    );
    this.gameEndFinalize();
    this.teban.rotate();
  }

  /**
   *
   */
  draw() {
    this.gameEnd(9, 9, "引き分け", "合意により引き分け");
    this.gameEndFinalize();
  }

  /**
   * n手戻す
   */
  rollback(number: number, force = false) {
    if (force && this.status.num === Status.ENDED) {
      this.end = null;
      this.status = { num: Status.PLAYING };
    }
    if (!this.isPlaying())
      throw new ShogitterCoreException("対局中でないので操作できません。");
    const max = this.kifu.getTesuu();
    if (max <= 0)
      throw new ShogitterCoreException("初期局面なので待った出来ません。");
    let te = 1;
    let teban;
    while (te <= number) {
      const thiskifu = this.kifu.get(max - te);

      const now = 1;
      teban = thiskifu[0];
      if (teban === "_") {
        //投了の場合は１回余分に減らす
        number++;
      } else {
        for (let value of this.kifu.getDataByKifu(thiskifu)) {
          if ("value" in value) {
            //持ち駒
            this.mochigoma.add(
              value.species,
              value.direction,
              value.value * -1
            );
          } else {
            //駒の移動
            if (value.before.direction === null /* === "_"*/) {
              this.ban.remove(value["XY"]);
            } else {
              this.ban.add(
                value["XY"],
                value["before"].species,
                value["before"].direction
              );
            }
          }
        }
      }
      this.kifu.remove();
      te++;
      if (this.kifu.getLastMoving()) number++; //移動中ならもう一手戻す
      this.moving = null;
    }
    this.teban.set(teban as number);
  }

  /*
    moveByKifu(mark, x, y, species, relative, movement, nari) {
        const direction = Teban.mark2direction(mark);
        try {
            x = Shogi.numerize(x);
            y = Shogi.numerize(y);
        } catch (e) {
            x = y = 0;
        }
        species = Koma.name2species(species);

        let to;
        if (x == 0) {
            const tmp = this.kifu.getXYByTesuu(this.kifu.getTesuu() - 1);
            to = tmp['to'];
        } else {
            const toy = y;
            to = new XY(x, y, this.ban);
        }

        let movable = this.ban.arrayKikiKoma(to, species, direction);
        const count = movable.length;
        let from;
        if (count > 0 && nari != "打") {
            if (count == 1) {
                from = movable[0];
            } else {
                if (movement == "直") {
                    movable = movable
                        .filter(kiki => kiki['XY'].x == to.x)
                        .filter(kiki => direction == 0 ? kiki['XY'].y > to.y : kiki['XY'].y < to.y);
                }
                if ((species == "am" || species == "an")) {
                    if (movable.length < 2) {

                    } else if ((direction == 0 && relative == "右") || (direction == 1 && relative == "左")) {
                        movable = movable[0]['XY'].x < movable[1]['XY'].x ? [movable[0]] : [movable[1]];
                    } else if ((direction == 0 && relative == "左") || (direction == 1 && relative == "右")) {
                        movable = movable[0]['XY'].x < movable[1]['XY'].x ? [movable[1]] : [movable[0]];
                    }
                } else {
                    if ((direction == 0 && relative == "右") || (direction == 1 && relative == "左")) {
                        movable = movable.filter(kiki => to.x > kiki['XY'].x);
                    } else if ((direction == 0 && relative == "左") || (direction == 1 && relative == "右")) {
                        movable = movable.filter(kiki => kiki['XY'].x > to.x);
                    }
                }

                if ((direction == 0 && (movement == "上" || movement == "行")) || (direction == 1 && movement == "引")) {
                    movable = movable.filter(kiki => to.y < kiki['XY'].y);
                } else if ((direction == 0 && movement == "引") || (direction == 1 && (movement == "上" || movement == "行"))) {
                    movable = movable.filter(kiki => to.y > kiki['XY'].y);
                } else if (movement == "寄") {
                    movable = movable.filter(kiki => kiki['XY'].y == to.y);
                }
                if (movable.length == 1) {
                    from = movable.pop();
                } else {
                    throw new Exception(`棋譜解析エラー：mark, x, y, (to: debug) species, relative, movement, nari で着手が${movable.length}通りです`);
                }
            }
            return this.move_d({
                'from': from['XY'].getArray(),
                'to': to.getArray(),
                'nari': (nari == "成")
            });
        }

        if (this.mochigoma.exists(species, direction)) {
            return this.move_d({'put': species, 'to': to.getArray()});
        } else {
            throw new Exception(`読み込みエラー ${this.kifu.getTesuu()}手目: {kifu} 持ち駒が足りません`);
        }
    }
     */

  gameEnd(
    loseDirection: Direction,
    markDirection: Direction,
    kifu: string,
    description: string
  ) {
    if (this.end) {
      throw new ShogitterCoreException(
        `複数の終了条件にひっかかりました: ${this.end.status}, ${description}`
      );
    }
    this.end = {
      status: description,
      kifu: [`_${loseDirection}`, (Teban.getMark(markDirection) ?? "") + kifu],
    };
  }

  isEnded() {
    return this.end;
  }

  gameEndFinalize() {
    if (!this.end) return;

    this.status = { num: 2, message: this.end["status"] };
    this.kifu.add(this.end["kifu"][0], this.end["kifu"][1]);
    // this.date['end'] = new Date();
    const loseDirection = this.end["kifu"][0][1];
    for (let direction of this.teban.getIterator()) {
      this.teban.setResultToPlayer(
        direction,
        direction.toString() == loseDirection ? Result.LOSE : Result.WIN
      );
    }
    this.end = null;
  }

  private ensureNoMoving(from: XY = null) {
    //移動中の駒があるがそれを動かそうとしていなかったらエラー
    if (this.moving && (from === null || !this.moving.XY.equals(from))) {
      throw new ShogitterCoreException(
        "移動中の駒をもう一度動かしてください。"
      );
    }
  }

  move(from: XY, to: XY, nari = false, direction?: Direction) {
    let fromDirection;
    this.fromDirection = fromDirection = this.ban.get(from).direction;
    if (typeof direction !== "undefined" && fromDirection !== direction) {
      throw new ShogitterCoreException("It's not your turn");
    }
    if (fromDirection === null) {
      throw new ShogitterCoreException(
        `移動元に駒がありません。(${from.getFormat()})`
      );
    }
    this.teban.ensureDirection(fromDirection);

    //駒ダンプ生成
    this.lastBan = this.ban.getArray();
    this.lastMochigoma = this.mochigoma.getArray();

    //駒の動きの範疇かどうか
    const movingTypes = this.ban.get(from).ensureMovable(to);

    //移動中の駒
    this.ensureNoMoving(from);

    this.ban.strategy["Destination"].executeBefore(from, to);

    //指し手postfix表記を生成
    const record = {
      mark: this.teban.getNowMark(),
      name: this.ban.get(from).getShortName(),
      postfix: this.ban.makePostfix(from, to),
      naripostfix: "",
    };

    this.ban.strategy["MoveControl"].executeBefore(from);
    this.ban.strategy["MoveEffect"].executeBefore(from);
    this.ban.strategy["CaptureControl"].execute(
      this.ban.get(to),
      this.ban.get(from)
    );

    //移動元を拾う
    const fromPick = this.ban.take(from);

    //行き先に駒があれば拾って持ち駒に
    const captured = this.ban.strategy["Capture"].execute(to, fromDirection);

    //飛び越えた駒を取る
    if (movingTypes.indexOf(100) >= 0) {
      for (let xy of BanScanIterator.getBetween(this.ban, from, to)) {
        if (this.ban.get(xy).isNull()) continue;
        this.ban.strategy["Capture"].execute(xy, fromDirection);
      }
    }

    //移動先に置く
    this.ban.set(to, fromPick);

    //状態の変更があれば行う
    fromPick.changeStatus(movingTypes, captured);

    record.naripostfix =
      this.ban.strategy.Promotion.execute(to, from, captured, nari) || "";
    this.ban.strategy["MoveEffect"].executeAfter(to, captured);

    //this.ban.strategy['Destination'].executeAfter(to);

    this.ban.strategy["MoveControl"].executeAfter(to);
    this.ban.strategy.Nifu.execute(to);
    this.ban.strategy.Judge.execute(to);

    const lastXY = this.kifu.getXYByTesuu(this.kifu.getTesuu() - 1);
    this.kifu.add(
      this.makeKifu(to, from),
      `${record.mark}${lastXY && to.equals(lastXY.to) ? "同" : to.getFormat()}${
        record.name
      }${record.postfix}${record.naripostfix}`,
      { hash: true }
    );
    this.ban.strategy["TebanRotation"].execute(
      this.moving,
      this.ban.strategy["Promotion"].flag,
      captured,
      to,
      from
    );

    this.gameEndFinalize();
  }

  put(to: XY, species: Species, direction: Direction, id?: number) {
    //駒ダンプ生成
    this.fromDirection = direction;
    this.teban.ensureDirection(direction);
    this.lastBan = this.ban.getArray();
    this.lastMochigoma = this.mochigoma.getArray();

    //移動中の駒
    this.ensureNoMoving();

    this.ban.strategy["Destination"].executeDrop(to, species, direction);

    const kifu2 = this.makePutKifuString(to, species);

    this.mochigoma.strategy["MochigomaIO"].executeOut(species, direction);
    this.ban.ensureNotExists(to);
    this.ban.setAdd(to, species, direction);

    this.ban.strategy.Promotion.executeLegal(to);

    this.ban.strategy.MoveEffect.executeDrop(to, id);
    this.ban.strategy.MoveControl.executeDrop(to);
    this.ban.strategy.Nifu.execute(to);

    this.ban.strategy.Judge.execute(to, true);

    this.kifu.add(this.makeKifu(to, null), kifu2, { hash: true });

    this.teban.rotate();
    this.gameEndFinalize();
  }

  shouldAskPromotion(to: XY, from: XY) {
    const captured = this.ban.exists(to);
    const direction = this.ban.get(from).direction;
    return this.ban.strategy.Promotion.shouldAskPromotion(
      to,
      from,
      captured,
      direction
    );
  }

  /**
   * データを読み込んでmove
   * TODO: Support transaction for speed; either accept command or reject without mutation
   * @param command
   */
  runCommand(command: KifuCommand) {
    switch (command.type) {
      case "reset":
        if (this.isPlaying())
          throw new ShogitterCoreException("対局中はルール変更できません。");
        this.constructById(command.ruleId);
        return;
      case "start":
        this.start();
        return;
      case "changedirection":
        if (this.isPlaying())
          throw new ShogitterCoreException("対局中は先後交代できません。");
        this.teban.changeDirection();
        return;
    }

    if (!this.isPlaying()) {
      throw new ShogitterCoreException("対局中ではありません。");
    }
    switch (command.type) {
      case "draw":
        return this.draw();
      case "resign":
        return this.resign(command.direction);
      case "rollback":
        const amount =
          typeof command.direction !== "undefined" &&
          this.teban.getNowDirection() === command.direction
            ? 2
            : 1;
        return this.rollback(Math.min(amount, this.kifu.getTesuu()));
    }
    if (typeof command.direction === "number") {
      this.teban.ensureDirection(command.direction);
    }
    switch (command.type) {
      case "pass":
        return this.pass();
      case "move":
        return this.move(
          new XY(command.from[0], command.from[1]),
          new XY(command.to[0], command.to[1]),
          command.nari
        );
      case "put":
        return this.put(
          new XY(command.to[0], command.to[1]),
          command.put,
          command.direction,
          command.id
        );
      default:
        throw new ShogitterCoreException(
          "Unknown command type: " + (command as any).type,
          1
        );
    }
  }

  /**
   * lastBanとbanの差分を取り棋譜を作る
   * @return <type>
   * @param to
   * @param from 打つ場合はnull
   */
  private makeKifu(to: XY, from?: XY): KifuMove {
    const diffs = [
      ...this.ban.getDifference(this.lastBan, to, from),
      ...this.mochigoma.getDifference(this.lastMochigoma),
    ];
    return [this.teban.get(), ...diffs];
  }

  /**
   * 持ち駒を使うときの棋譜表記
   * @param to
   * @param species
   */
  private makePutKifuString(to: XY, species: Species) {
    const direction = this.teban.getNowDirection();

    //「打」　そのマスにその種類・向きの駒がある場合、打をつける
    let utu = "";
    for (let kiki of this.ban.arrayKikiInSpeDir(
      species,
      false,
      direction,
      false,
      false
    )) {
      if (kiki["XY"].equals(to)) {
        utu = "打";
        break;
      }
    }
    const koma = Koma.getStatelessData(species);
    const name = koma["shortname"] || koma["name"]; //略名があればそれを表示
    return Teban.getMark(direction) + to.getFormat() + name + utu;
  }

  /**
   * パスする（移動中の駒を移動済みにして手番を渡す）
   * @return <type>
   */
  pass() {
    if (this.moving != null) {
      // 移動中の駒がある
      if (this.ban.get(this.moving.XY).get("nopass")) {
        throw new ShogitterCoreException("この駒で手番を渡すことはできません");
      } else {
        this.kifu.unsetLastMoving();
        this.moving = null;
        this.teban.rotate();
      }
    } else {
      const { TebanRotation } = this.ban.strategy;
      if (TebanRotation.canPass()) {
        // パスできるルール
        this.kifu.unsetLastMoving();
        if (TebanRotation.passType() === "pass") {
          // 手番渡しではなくパス
          this.kifu.add(
            [this.teban.get()],
            Teban.getMark(this.teban.getNowDirection()) + "パス",
            {
              hash: true,
            }
          );
        }
        this.teban.rotate();
      } else {
        // パスできるルールではなく、移動中の駒がない
        throw new ShogitterCoreException(
          TebanRotation.cannotPassMessage() ??
            "移動中の駒がありません。このボタンは多段階移動をする駒の移動を終了して手番を渡す時に使います。"
        );
      }
    }
  }

  public getKyokumen() {
    return this.ban.__toString() + this.mochigoma.__toString();
  }

  /**
   * TODO: it must contain teban, but it's kept like this for backward compatibility
   */
  getHash() {
    return javaHashCode(this.getKyokumen()).toString(16);
  }

  getObject(): ShogiSerialization {
    let moving: Moving;
    if (this.moving) {
      moving = { xy: this.moving.XY.getArray(), status: this.moving.status };
    } else {
      moving = null;
    }
    const ban: BanObj = [];
    for (let i = 1; i <= this.rule["size"][0]; i++) {
      ban.push([]);
      for (let j = 1; j <= this.rule["size"][1]; j++) {
        const koma = this.ban.get(new XY(i, j));
        if (koma.isNull()) {
          ban[i - 1][j - 1] = [];
        } else {
          ban[i - 1][j - 1] = [koma.direction, koma.species];
        }
      }
    }
    const players = this.teban.getArrayPlayerInfo();
    const mochigoma = this.mochigoma.getArray();
    const playersWithMochigoma: Player[] = [];
    for (let direction of this.teban.getIterator()) {
      playersWithMochigoma[direction] = {
        ...players[direction],
        mochigoma: {},
      } || {
        user: [{ name: "", id: 0 }],
        mochigoma: {},
      };
      playersWithMochigoma[direction].mochigoma = {};
      for (let species in mochigoma[direction]) {
        playersWithMochigoma[direction].mochigoma[species] =
          mochigoma[direction][species];
      }
    }

    // const max = this.kifu.getTesuu();
    const kifu = this.kifu.getArray();

    const debug = ""; /*this.debug.serialize(this)*/
    const system = this.jsonsystem;

    return deepCopy({
      version: "0.0",
      status: this.status,
      ruleid: this.ruleid,
      teban: this.teban.get(),
      turn: this.teban.getTurn(),
      date: {
        /* start: this.date.start?.toISOString(),
                end: this.date.end?.toISOString()*/
      },
      ban,
      moving,
      players: playersWithMochigoma,
      system,
      kifu,
    });
  }

  public generateMoves(): Move[];
  public generateMoves(forBoth: true): [Move[], Move[]];
  public generateMoves(forBoth?: true) {
    if (this.end) {
      return forBoth ? [[], []] : [];
    }

    const turn = this.teban.getNowDirection();
    const moves: Move[] = [];
    const movesOpponent: Move[] = [];
    const promotionStrategy = this.ban.strategy.Promotion;
    // move
    for (let koma of this.ban.getIterator()) {
      if (koma.isNull() || (!forBoth && koma.direction != turn)) continue;
      let movesToPush;
      if (koma.direction != turn) {
        if (forBoth) {
          movesToPush = movesOpponent;
        } else {
          continue;
        }
      } else {
        movesToPush = moves;
      }
      const from = koma.XY.getArray();
      koma.getMovable().forEach((kiki) => {
        const move = {
          type: "move" as const,
          from,
          to: kiki.XY.toArray(),
          nari: false,
        };
        if (
          promotionStrategy.shouldAskPromotion(
            kiki.XY,
            koma.XY,
            false,
            koma.direction
          )
        ) {
          movesToPush.push({ ...move, nari: true });
        }
        movesToPush.push(move);
      });
    }
    // put
    for (const [direction, movesToPush] of forBoth
      ? ([
          [turn, moves],
          [1 - turn, movesOpponent],
        ] as const)
      : ([[turn, moves]] as const)) {
      const kinds = this.mochigoma
        .unique(direction)
        .concat(
          this.mochigoma.strategy.MochigomaIO.augmentedSpecies(direction)
        );
      if (kinds.length > 0) {
        for (let cell of this.ban.getIterator()) {
          if (!cell.isNull()) continue;
          const to = cell.XY.toArray();
          movesToPush.push(
            ...kinds.map((kind) => ({
              type: "put" as const,
              to,
              put: kind,
              direction,
            }))
          );
        }
      }
    }

    // Ignore pass for opponent for now. canPass is defined only for current turn
    if (this.ban.strategy.TebanRotation.canPass()) {
      moves.push({ type: "pass" });
    }

    if (forBoth) {
      return [moves, movesOpponent];
    }
    return moves;
  }
}
