/**
 * 成
 */
import Strategy from "./Strategy";
import Ban from "../Ban";
import XY from "../XY";
import { ShogitterCoreException } from "../utils/phpCompat";
import { Koma } from "../Koma";
import { Direction } from "../Direction";

type Setting = {
  dan: number; // 段
  reversible: boolean; // 表裏交互に成る
  must: boolean; // 成れるときは必ず成る
  illegal: boolean; // 行きどころのない駒を許す
};

export default abstract class PromotionStrategy<S = {}> extends Strategy {
  strategyGenre = "成り";
  protected ban: Ban;
  protected setting: Setting & S;
  public flag = false;
  constructor(ban: Ban, setting: Setting & S) {
    super();
    this.ban = ban;
    this.setting = setting;
  }
  execute(to: XY, from: XY, captured: boolean, nari: boolean): string {
    this.flag = false;
    const koma = this.ban.get(to);
    if (!this.canPromote(from, to, captured, koma.direction)) return "";
    if (
      !(
        this.setting["reversible"] || this.ban.parent.rule["nari"][koma.species]
      )
    )
      return ""; //既に成ってる
    if (
      nari == true ||
      (!this.setting["illegal"] && !koma.isLegal()) ||
      this.setting["must"]
    ) {
      //成る
      this.promote(to);
      return "成";
    } else {
      //成らない
      return "不成";
    }
  }
  promote(to: XY) {
    this.flag = true;
    this.ban.get(to).promote(this.setting["reversible"] ? 2 : 1);
  }
  abstract canPromote(
    to: XY,
    from: XY,
    captured: boolean,
    direction: Direction
  ): boolean;
  executeLegal(to: XY) {
    if (!this.setting["illegal"] && !this.ban.get(to).isLegal()) {
      throw new ShogitterCoreException("行きどころがありません。");
    }
  }
  toHTML() {
    const ret = [];
    if (this.setting["illegal"]) ret.push("<li>行き所のない駒を許可する");
    if (this.setting["reversible"]) ret.push("<li>表裏交互に成る");
    if (this.setting["must"]) ret.push("<li>成れる時は必ず成る");
    if (ret.length == 0) return "";
    return `<ul>${ret.join("")}</ul>`;
  }

  shouldAskPromotion(
    to: XY,
    from: XY,
    captured: boolean,
    direction: Direction
  ) {
    return (
      !this.willMustPromote(to, from) &&
      this.canPromote(to, from, captured, direction)
    );
  }

  // TODO merge with other logic
  private willMustPromote(to: XY, from: XY) {
    if (this.setting.must) return true;
    var piece = this.ban.get(from).clone();
    piece.setXY(to);
    return !piece.isLegal();
  }

  static create(name: string, ban: Ban, setting: any): PromotionStrategy {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}

type NormalPromotionConfig = {
  species?: { [species: string]: number };
};
class NormalPromotionStrategy extends PromotionStrategy<NormalPromotionConfig> {
  abstract = "n段目";
  canPromote(to: XY, from: XY, captured: boolean, direction: Direction) {
    var species = this.ban.get(from).species;
    const spedan = this.setting["species"]?.[species];
    let dan;
    if (spedan) {
      dan = spedan;
    } else {
      dan = this.getDanSetting();
    }
    return (
      (this.ban.calcDan(from, direction) <= dan ||
        this.ban.calcDan(to, direction) <= dan) &&
      !!this.ban.parent.rule.nari[species]
    );
  }
  getDanSetting() {
    return this.setting["dan"] || 3;
  }
  toHTML() {
    let extra = [];
    for (let species in this.setting.species || {}) {
      extra.push(
        `<a href="/koma/${Koma.getStatelessData(species, "species")}">${Koma.getStatelessData(species, "name")}</a>` +
          "は" +
          this.setting.species[species] +
          "段目"
      );
    }
    return `${this.getDanSetting()}段目${
      extra.length > 0 ? `（${extra.join("、")}）` : ""
    }${super.toHTML()}`;
  }
  isNormal() {
    return (
      this.getDanSetting() === 3 &&
      Object.keys(this.setting.species || {}).length == 0
    );
  }
}
class CapturePromotionStrategy extends PromotionStrategy {
  abstract = "駒をとった時";
  canPromote(to: XY, from: XY, captured: boolean, direction: Direction) {
    return !!captured;
  }
  toHTML() {
    return this.abstract + super.toHTML();
  }
}
class AllPromotionStrategy extends PromotionStrategy {
  abstract = "動くたび";
  execute(to: XY, from: XY, captured: boolean, nari: boolean) {
    this.promote(to);
    return "";
  }
  canPromote(to: XY, from: XY, captured: boolean, direction: Direction) {
    return true;
  }
  toHTML() {
    return this.abstract + super.toHTML();
  }
}

class NanamePromotionStrategy extends PromotionStrategy {
  abstract = "斜め将棋";
  canPromote(to: XY, from: XY, captured: boolean, direction: Direction) {
    let numto = to.x + to.y;
    let numfrom = from.x + from.y;
    if (direction == 0) {
    } else if (direction == 1) {
      const num = this.ban.x + this.ban.y + 2;
      numto = num - numto;
      numfrom = num - numfrom;
    } else {
      throw new ShogitterCoreException("斜め将棋で想定されていない向きです");
    }
    //	echo numto, numfrom;
    // const dan=this.setting['dan']?:this.setting['dan']=6;
    const dan = this.setting["dan"] || 6;

    return numto - 1 <= dan || numfrom - 1 <= dan;
  }
  execute(to: XY, from: XY, captured: boolean, nari: boolean) {
    this.flag = false;
    const koma = this.ban.get(to);
    if (!this.canPromote(from, to, captured, koma.direction)) return;
    this.promote(to);
    return "";
  }
  toHTML() {
    return this.abstract + super.toHTML();
  }
}
class SpeedPromotionStrategy extends NormalPromotionStrategy {
  abstract = "連続して動く場合は成れない";
  canPromote(to: XY, from: XY, captured: boolean, direction: Direction) {
    const kifu = this.ban.parent.kifu;
    const tesuu = kifu.getTesuu();
    if (tesuu > 0) {
      const kif = kifu.get(tesuu - 1);
      if (kif[0] == direction) return false;
    }
    return super.canPromote(to, from, captured, direction);
  }
  toHTML() {
    return `${super.toHTML()}, ${this.abstract}`;
  }
}

const nameToStrategy: { [variant: string]: /*typeof PromotionStrategy*/ any } =
  {
    Normal: NormalPromotionStrategy,
    Capture: CapturePromotionStrategy,
    All: AllPromotionStrategy,
    Naname: NanamePromotionStrategy,
    Speed: SpeedPromotionStrategy,
  };
