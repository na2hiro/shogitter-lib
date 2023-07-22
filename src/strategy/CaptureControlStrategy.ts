import Strategy from "./Strategy";
import Ban, { Species } from "../Ban";
import { Koma } from "../Koma";
import { ShogitterCoreException } from "../utils/phpCompat";
import { Teban } from "../Teban";
import { shogitterDB } from "../ShogitterDB";
import { Direction } from "../Direction";

export abstract class CaptureControlStrategy<S> extends Strategy {
  static strategyVariant: string;
  strategyGenre = "駒取り";
  protected setting: S;
  protected ban: Ban;

  constructor(ban: Ban, setting: S) {
    super();
    this.setting = setting;
    this.ban = ban;
  }

  /**
   * capturingでcapturedを取れるかどうか判定する。取れなければ例外を投げる。
   * @param captured
   * @param capturing
   */
  abstract execute(captured: Koma, capturing: Koma): void;

  static create<S>(
    name: string,
    ban: Ban,
    setting: any
  ): CaptureControlStrategy<S> {
    const klass: any = nameToStrategy[name];
    if (!klass)
      throw new ShogitterCoreException(
        `CaptureControlStrategy: ${name} is not defined.`
      );
    return new klass(ban, setting);
  }
}

class NormalCaptureControlStrategy extends CaptureControlStrategy<{}> {
  static strategyVariant = "Normal";
  execute(captured: Koma, capturing: Koma) {
    if (!captured.isNull() && captured.isFriend(capturing)) {
      throw new ShogitterCoreException("味方の駒を取る事はできません。");
    }
  }
}

class NakamawareCaptureControlStrategy extends CaptureControlStrategy<{}> {
  static strategyVariant = "Nakamaware";
  public abstract = "味方の駒も取る事ができる";

  execute(captured: Koma, capturing: Koma) {}
}

class ToruichiCaptureControlStrategy extends CaptureControlStrategy<{}> {
  static strategyVariant = "Toruichi";
  public abstract = "取れる駒は必ず取らなくてはならない";

  //駒をとった || 王手 || !取る一駒取り可能 == 合法着手
  execute(captured: Koma, capturing: Koma) {
    if (
      !captured.isNull() ||
      this.ban.checkOuteByDirection(capturing.direction) ||
      !this.isCapturable(capturing.direction)
    ) {
      //ok
    } else {
      throw new ShogitterCoreException(
        "取る一手将棋なので取れる駒を取ってください。"
      );
    }
  }

  /**
   * 取る一ルールにおける取れる駒があるかどうか
   *  == 取れる駒がある && !(王のみが取れる && 取れる全てに紐がついている)
   *
   * @param <type> direction
   * @return <type>
   */
  isCapturable(direction: Direction) {
    const arrayCapturable: { [hash: string]: boolean } = {};
    for (let koma of this.ban.getIterator()) {
      if (koma.isNull()) continue;
      if (koma.direction != direction) continue; //調べたい向き以外は無視
      const flagWinkoma = this.ban.parent.rule.winkoma && this.ban.parent.rule.winkoma.indexOf(koma.species) >= 0;
      for (let kiki of koma.getMovable()) {
        const nowkoma = this.ban.get(kiki["XY"]);
        if (!nowkoma.isNull() && nowkoma.direction != direction) {
          //行き先に敵があったら
          if (!flagWinkoma) {
            return true; //非winkomaがnowkomaを取れる
          }
          arrayCapturable[kiki["XY"].getHash()] = true; //winkomaが取れる候補の駒
        }
      }
    }
    //全ての駒がwinkomaなら，行き先に紐がついているかどうか調べる
    for (let koma of this.ban.getIterator()) {
      if (koma.isNull()) continue;
      if (koma.direction == direction) continue; //自分の効きは要らない
      for (let kiki of koma.getMovable()) {
        //				echo koma.XY, "can", kiki['XY'], ";";
        const nowkoma = this.ban.get(kiki["XY"]);
        if (nowkoma.isNull() || nowkoma.direction == direction) continue; //自分の駒への効きはいらない
        delete arrayCapturable[kiki["XY"].getHash()]; //行けない場所を潰す
      }
    }
    for (const i in arrayCapturable) {
      return true;
    }
    return false;
  }
}
type TorazuCaptureControlConfig = [Direction, Species][];
class TorazuCaptureControlStrategy extends CaptureControlStrategy<TorazuCaptureControlConfig> {
  static strategyVariant = "Torazu";
  public abstract = "取れない駒";

  execute(captured: Koma, capturing: Koma) {
    if (captured.isNull()) return;
    for (let komaset of this.setting) {
      if (
        (komaset[0] === null || captured.direction == komaset[0]) &&
        (komaset[1] === null || captured.species == komaset[1])
      ) {
        throw new ShogitterCoreException("その駒を取ることは出来ません。");
      }
    }
  }

  toHTML() {
    let ret = " ";
    for (let komaset of this.setting) {
      if (komaset[0] !== null) ret += Teban.tebanName[0][komaset[0]] + "の";
      if (komaset[1] === null) {
        ret += "駒";
      } else {
        ret += `<a href='/koma/${komaset[1]}'>${shogitterDB.getKoma(
          komaset[1],
          "name"
        )}</a> `;
      }
    }
    ret += "を取ることができない";
    return ret;
  }
}

class ShishiCaptureControlStrategy extends CaptureControlStrategy<{}> {
  static strategyVariant = "Shishi";
  public abstract = "獅子取りの特例";

  execute(captured: Koma, capturing: Koma) {
    ////獅子特例 獅子をとる場合
    if (!this.isShishi(captured.species)) return;
    if (this.isShishi(capturing.species)) {
      //獅子でとる場合
      if (!this.ban.parent.moving) {
        //移動中でない
        if (
          Math.abs(capturing.XY.x - captured.XY.x) == 2 ||
          Math.abs(capturing.XY.y - captured.XY.y) == 2
        ) {
          const xy = capturing.XY;
          const picked = this.ban.cut(xy);
          if (
            this.ban.existsMovable(captured.XY, picked.direction, {
              igai: true,
            })
          ) {
            throw new ShogitterCoreException(
              "２マス離れていて、足がついた獅子をとる事は出来ません。"
            );
          } else {
            // 獅子特例ok
          }
          this.ban.set(xy, picked);
        }
      } else {
        //移動中
        const tmp = this.ban.parent.clone();
        const last = tmp.ban.parent.kifu.getXYByTesuu(tmp.kifu.getTesuu() - 1);
        tmp.rollback(1);
        if (
          !(
            tmp.ban.exists(last["to"]) &&
            this.canTsukegui(tmp.ban.getSpecies(last["to"]))
          )
        ) {
          const xy = capturing.XY;
          const picked = this.ban.cut(xy);
          if (
            this.ban.existsMovable(captured.XY, capturing.direction, {
              igai: true,
            })
          ) {
            throw new ShogitterCoreException(
              "２マス離れていて足がついた獅子を、獅子でとる事は出来ません。また、付け喰いに歩と仲人は使えません。"
            );
          } else {
            throw new ShogitterCoreException("ok2");
          }
          this.ban.set(xy, picked);
        }
      }
    } else if (this.ban.parent.kifu.getTesuu() > 0) {
      //それ以外の駒でとる場合
      const tmp = this.ban.parent.kifu.getDataByTesuu(
        this.ban.parent.kifu.getTesuu() - 1
      );

      const toSpe = tmp.to.before.species;
      const fromSpe = tmp.from.before.species;

      //獅子でない駒が獅子をとった場合
      if (!this.isShishi(fromSpe) && this.isShishi(toSpe)) {
        throw new ShogitterCoreException(
          "先獅子のため獅子を取る事はできません。"
        );
      }
    }
  }

  isShishi(species: Species) {
    return ["bl", "dh"].indexOf(species) >= 0;
  }

  canTsukegui(species: Species) {
    return ["aa", "cq"].indexOf(species) < 0;
  }
}

class SpeedCaptureControlStrategy extends CaptureControlStrategy<{}> {
  static strategyVariant = "Speed";
  public abstract = "連続して動かす場合は駒をとれない";

  execute(captured: Koma, capturing: Koma) {
    if (captured.isNull()) return;
    const kifu = this.ban.parent.kifu;
    const tesuu = kifu.getTesuu();
    if (tesuu > 0) {
      const kif = kifu.get(tesuu - 1);
      if (kif[0] == capturing.direction)
        throw new ShogitterCoreException(
          "連続して動かす場合は駒をとれません．"
        );
    }
  }
}

class PatrolCaptureControlStrategy extends CaptureControlStrategy<{}> {
  static strategyVariant = "Patrol";
  public abstract =
    "味方の駒の利きで紐が付いていない駒は、相手の駒を取ることができない。";

  execute(captured: Koma, capturing: Koma) {
    if (captured.isNull()) return;
    const direction = capturing.direction;

    if (!this.ban.existsMovable(capturing.XY, capturing.direction)) {
      throw new ShogitterCoreException(
        "この駒は味方の利きがないため、駒を取れません。"
      );
    }
  }
}

class LortapCaptureControlStrategy extends CaptureControlStrategy<{}> {
  static strategyVariant = "Lortap";
  public abstract =
    "味方の駒の利きで紐が付いている駒は、相手の駒を取ることができない。Portalの逆。";

  execute(captured: Koma, capturing: Koma) {
    if (captured.isNull()) return;
    const direction = capturing.direction;

    if (this.ban.existsMovable(capturing.XY, capturing.direction)) {
      throw new ShogitterCoreException(
        "この駒は味方の利きがあるため、駒を取れません。"
      );
    }
  }
}

const nameToStrategy: {
  [variant: string]: /*typeof CaptureControlStrategy)*/ any;
} = {
  Normal: NormalCaptureControlStrategy,
  Nakamaware: NakamawareCaptureControlStrategy,
  Toruichi: ToruichiCaptureControlStrategy,
  Torazu: TorazuCaptureControlStrategy,
  Shishi: ShishiCaptureControlStrategy,
  Speed: SpeedCaptureControlStrategy,
  Patrol: PatrolCaptureControlStrategy,
  Lortap: LortapCaptureControlStrategy,
};
