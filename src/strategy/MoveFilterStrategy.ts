import Strategy, { StrategyContainer } from "./Strategy";
import Ban, { Species } from "../Ban";
import XY, { RelXY } from "../XY";
import { shogitterDB } from "../ShogitterDB";
import { Kiki } from "../Koma";
import { Flags } from "../Flags";
import { Direction } from "../Direction";

export class MoveFilterStrategyContainer<S = {}> extends StrategyContainer<
  MoveFilterStrategy<S>
> {
  strategyGenre = "移動制限";
  // @ts-ignore
  execute(arrayMovable, to: XY, direction: Direction, species: Species, flags) {
    for (const strategy of this.arrayStrategies) {
      arrayMovable = strategy.execute(
        arrayMovable,
        to,
        direction,
        species,
        flags
      );
    }
    return arrayMovable;
  }
}
export default abstract class MoveFilterStrategy<S = {}> extends Strategy {
  strategyGenre = "移動制限";
  protected ban: Ban;
  protected setting: S;
  constructor(ban: Ban, setting: S) {
    super();
    this.ban = ban;
    this.setting = setting;
  }
  abstract execute(
    arrayMovable: Kiki[],
    to: XY,
    direction: Direction,
    species: Species,
    flags: Flags
  ): Kiki[];

  static create<S>(name: string, ban: Ban, setting: S): MoveFilterStrategy<S> {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}
class NormalMoveFilterStrategy extends MoveFilterStrategy {
  abstract = "特になし";
  execute(
    arrayMovable: Kiki[],
    to: XY,
    direction: Direction,
    species: Species,
    flags: Flags
  ) {
    return arrayMovable;
  }
}
class DashMoveFilterStrategy extends MoveFilterStrategy {
  abstract = "後方に進む事が出来ない";
  execute(
    arrayMovable: Kiki[],
    to: XY,
    direction: Direction,
    species: Species,
    flags: Flags
  ) {
    //１つ後ろのベクトルが入る
    const back = new RelXY(0, 1);
    back.turn(direction);

    return arrayMovable.filter((kiki) => {
      const vec = to.to(kiki["XY"]);
      if (back.x * vec.x > 0) return false;
      if (back.y * vec.y > 0) return false;
      return true;
    });
  }
}
type RestrictedMoveFilterConfig = {
  place: {
    species: Species[]; //[種類]
    min: { x: number; y: number };
    max: { x: number; y: number };
  }[];
};

/**
 * 移動領域を制限する
 *  place: []
 *   species: [種類]
 *   min: {x: , y: }
 *   max: {x: , y: }
 */
class RestrictedMoveFilterStrategy extends MoveFilterStrategy<RestrictedMoveFilterConfig> {
  abstract = "決まった領域にしか動く事ができない";
  execute(
    arrayMovable: Kiki[],
    to: XY,
    direction: Direction,
    species: Species,
    flags: Flags
  ) {
    if (!this.setting["place"]) return arrayMovable;
    const dir =
      typeof flags["directionCalcingAllowed"] !== "undefined"
        ? flags["directionCalcingAllowed"]
        : direction;

    for (const place of this.setting["place"]) {
      if (place["species"].indexOf(species) === -1) continue;

      let min: { x: number; y: number }, max: { x: number; y: number };
      if (dir == 0) {
        min = place["min"];
        max = place["max"];
      } else {
        min = {
          x: this.ban.x - place["max"]["x"] + 1,
          y: this.ban.y - place["max"]["y"] + 1,
        };
        max = {
          x: this.ban.x - place["min"]["x"] + 1,
          y: this.ban.y - place["min"]["y"] + 1,
        };
      }
      arrayMovable = arrayMovable.filter(
        (kiki) =>
          min["x"] <= kiki["XY"].x &&
          kiki["XY"].x <= max["x"] &&
          min["y"] <= kiki["XY"].y &&
          kiki["XY"].y <= max["y"]
      );
    }

    return arrayMovable;
  }
  toHTML() {
    let ret = "";
    for (const place of this.setting["place"]) {
      ret += ` ${place["species"].map(
        (sp) => `<a href='/koma/${sp}'>${shogitterDB.getKoma(sp, "name")}</a>`
      )}は${place["min"]["x"]}〜${place["max"]["x"]}列${place["min"]["y"]}〜${
        place["max"]["y"]
      }段`;
    }
    ret += "のみ移動可能";
    return ret;
  }
}
const nameToStrategy: {
  [variant: string]: /*(typeof MoveFilterStrategy)*/ any;
} = {
  Normal: NormalMoveFilterStrategy,
  Dash: DashMoveFilterStrategy,
  Restricted: RestrictedMoveFilterStrategy,
};
