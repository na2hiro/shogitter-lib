/**
 * 持ち駒入出力に関するStrategy
 */
import Ban, { Species } from "../Ban";
import { Koma, PromotionMode } from "../Koma";
import Strategy, { CommonConfig, StrategyContainer } from "./Strategy";
import { Mochigoma } from "../Mochigoma";
import { Teban } from "../Teban";
import { shogitterDB } from "../ShogitterDB";
import { Direction } from "../Direction";

export class MochigomaIOStrategyContainer<S> extends StrategyContainer<
  MochigomaIOStrategy<S>
> {
  strategyGenre = "持ち駒";

  executeIn(toPick: Koma, tebanDirection: Direction) {
    for (let strategy of this.arrayStrategies) {
      if (strategy.checkDirection(this.ban.parent.fromDirection)) {
        strategy.executeIn(toPick, tebanDirection);
      }
    }
  }

  executeOut(species: Species, direction: Direction) {
    for (let strategy of this.arrayStrategies) {
      if (strategy.checkDirection(this.ban.parent.fromDirection)) {
        strategy.executeOut(species, direction);
      }
    }
  }
}

export abstract class MochigomaIOStrategy<S> extends Strategy {
  strategyGenre = "持ち駒";
  protected mochigoma: Mochigoma;
  protected setting: S & CommonConfig;

  constructor(ban: Ban, setting: S & CommonConfig) {
    super();
    this.mochigoma = ban.parent.mochigoma;
    this.setting = setting;
  }

  execute() {
    throw "This strategy doesn't expect calling execute()";
  }

  abstract executeIn(toPick: Koma, tebanDirection: Direction): void;

  executeOut(species: Species, direction: Direction): void {
    this.mochigoma.remove(species, direction);
  }

  static create<S>(name: string, ban: Ban, setting: S): MochigomaIOStrategy<S> {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}

/**
 * 通常 駒を1枚取り，駒を1枚打つ
 */
class NormalMochigomaIOStrategy extends MochigomaIOStrategy<{}> {
  public abstract = "通常";

  executeIn(toPick: Koma, tebanDirection: Direction) {
    toPick.promote(PromotionMode.FRONT);
    this.mochigoma.add(toPick.species, tebanDirection, 1); //clone
  }
}

/**
 * 持ち駒不使用
 */
class NoUseMochigomaIOStrategy extends MochigomaIOStrategy<{}> {
  public abstract = "不使用";

  executeIn(toPick: Koma, tebanDirection: Direction) {}
}

/**
 * 持ち駒共有
 */
class ShareMochigomaIOStrategy extends MochigomaIOStrategy<{}> {
  public abstract =
    "持ち駒共有(取った駒は両方の駒台に乗り、片方が使うと両方の駒が消える)";

  executeIn(toPick: Koma, tebanDirection: Direction) {
    toPick.promote(0);
    for (let direction of this.mochigoma.parent.teban.getIterator()) {
      this.mochigoma.add(toPick.species, direction, 1); //clone
    }
  }

  executeOut(species: Species, direction: Direction) {
    for (let direction of this.mochigoma.parent.teban.getIterator()) {
      this.mochigoma.remove(species, direction, 1); //clone
    }
  }
}

/**
 * 持ち駒に2枚入る
 */
class DoubleMochigomaIOStrategy extends MochigomaIOStrategy<{}> {
  public abstract = "取った駒が2枚に増えて駒台に乗る。";

  executeIn(toPick: Koma, tebanDirection: Direction) {
    toPick.promote(0);
    this.mochigoma.add(toPick.species, tebanDirection, 2); //clone
  }
}

/**
 * 両面打てる
 */
class BothFaceMochigomaIOStrategy extends MochigomaIOStrategy<{}> {
  public abstract =
    "駒をとると表裏の駒が駒台に乗り、どちらの面でも打つことが出来る。";

  executeIn(toPick: Koma, tebanDirection: Direction) {
    for (let species of this.getBothFace(toPick.species)) {
      this.mochigoma.add(species, tebanDirection, 1); //clone
    }
  }

  executeOut(spe: Species, direction: Direction) {
    for (let species of this.getBothFace(spe)) {
      this.mochigoma.remove(species, direction, 1); //clone
    }
  }

  getBothFace(species: Species) {
    const ret = [species];
    const backSpecies = this.mochigoma.parent.getPromoted(species, 2);
    if (backSpecies != species) {
      ret.push(backSpecies);
    }
    return ret;
  }
}

type InfinityMochigomaIOConfig = {
  species: Species;
  directions: Direction[];
};
class InfinityMochigomaIOStrategy extends MochigomaIOStrategy<InfinityMochigomaIOConfig> {
  public abstract = "無限に打てる。";

  isDuplicable(species: Species) {
    return species == (this.setting.species || "yo");
  }

  executeIn(toPick: Koma, tebanDirection: Direction) {
    toPick.promote(0);
    if (!this.isDuplicable(toPick.species)) {
      this.mochigoma.add(toPick.species, tebanDirection, 1); //clone
    }
  }

  executeOut(species: Species, direction: Direction) {
    const directions = this.setting.directions;
    if (!directions || directions.indexOf(direction) >= 0) {
      if (this.isDuplicable(species)) {
        return;
      }
    }
    this.mochigoma.remove(species, direction);
  }

  toHTML() {
    const sp = this.setting.species || "yo";
    return (
      (this.setting.common?.directions
        ? this.setting.common.directions
            .map((dir) => Teban.tebanName[0][dir])
            .join(" ") + "は"
        : "") +
      `<a href='/koma/${sp}'>` +
      shogitterDB.getKoma(sp, "name") +
      "</a>を無限に打てる"
    );
  }
}

type ExchangeMochigomaIOConfig = { [name: string]: Species }[];

class ExchangeMochigomaIOStrategy extends MochigomaIOStrategy<ExchangeMochigomaIOConfig> {
  public abstract = "種類変換";

  executeIn(toPick: Koma, tebanDirection: Direction) {
    toPick.promote(0);
    const species = this.setting[toPick.direction][toPick.species];
    if (species) {
      this.mochigoma.add(species, tebanDirection, 1);
    }
  }

  toHTML() {
    let ret = "持ち駒を取る時";
    for (let dir in this.setting) {
      const s = this.setting[dir];
      for (let from in s) {
        const to = s[from];
        ret +=
          " " +
          Teban.tebanName[0][dir] +
          "の<a href='/koma/{from}'>" +
          shogitterDB.getKoma(from, "name") +
          "</a>は<a href='/koma/{to}'>" +
          shogitterDB.getKoma(to, "name") +
          "</a>に";
      }
    }
    return ret + "置き換えられる";
  }
}

class MochigomaControlStrategyContainer extends StrategyContainer<
  MochigomaControlStrategy<{}>
> {
  public abstract = "持ち駒判定";
}

/**
 * 持ち駒を取った後のチェックに関するStrategy
 */
abstract class MochigomaControlStrategy<S> extends Strategy {
  strategyGenre = "持ち駒判定";
  protected mochigoma: Mochigoma;
  protected setting: S;

  abstract execute(tebanDirection: Direction): void;

  constructor(ban: Ban, setting: S) {
    super();
    this.mochigoma = ban.parent.mochigoma;
    this.setting = setting;
  }
}

/**
 * チェックしない
 */
class NormalMochigomaControlStrategy extends MochigomaControlStrategy<{}> {
  execute(tebanDirection: Direction) {}
}

/**
 * 3枚目なら勝ち
 */
class WinThirdMochigomaControlStrategy extends MochigomaControlStrategy<{}> {
  public abstract = "三枚目になると勝ち。";

  execute(tebanDirection: Direction) {
    if (this.mochigoma.count(tebanDirection) >= 3) {
      const lose = tebanDirection == 0 ? 1 : 0;
      this.mochigoma.parent.gameEnd(
        lose,
        tebanDirection,
        "勝ち",
        "３枚目です。" +
          this.mochigoma.parent.teban.getName(tebanDirection) +
          "の勝ちです。"
      );
    }
  }
}

/**
 * 5枚目なら負け
 */
class LoseFifthMochigomaControlStrategy extends MochigomaControlStrategy<{}> {
  public abstract = "五枚目になると負け。";

  execute(tebanDirection: Direction) {
    if (this.mochigoma.count(tebanDirection) >= 5) {
      this.mochigoma.parent.gameEnd(
        tebanDirection,
        tebanDirection,
        "負け",
        "持ち駒が5枚に達しました。" +
          this.mochigoma.parent.teban.getName(tebanDirection) +
          "の負けです。"
      );
    }
  }
}
const nameToStrategy: {
  [variant: string]: /*typeof MochigomaIOStrategy*/ any;
} = {
  Normal: NormalMochigomaIOStrategy,
  NoUse: NoUseMochigomaIOStrategy,
  Share: ShareMochigomaIOStrategy,
  Double: DoubleMochigomaIOStrategy,
  BothFace: BothFaceMochigomaIOStrategy,
  Infinity: InfinityMochigomaIOStrategy,
  Exchange: ExchangeMochigomaIOStrategy,
};
