import Strategy, { StrategySerialization } from "./Strategy.js";
import XY, { RelXY } from "../XY.js";
import { Koma } from "../Koma.js";
import { array_diff } from "../utils/phpCompat.js";
import Ban, { Species } from "../Ban.js";
import { QuantumData } from "./MoveEffectStrategy.js";
import { Direction } from "../Direction.js";
import { QuantumPiece } from "../utils/quantumUtils.js";

/**
 * 駒の種類を教える
 */
export default abstract class KomaSuggestStrategy extends Strategy {
  ban: Ban;
  static strategyVariant: string;
  strategyGenre = "駒の性能";
  constructor(ban: Ban) {
    super();
    this.ban = ban;
  }
  abstract execute(koma: Koma): Species[];
  static create(name: string, ban: Ban, setting: any): KomaSuggestStrategy {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}
/**
 * 普通
 */
class NormalKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Normal";
  abstract = "通常";
  execute(koma: Koma) {
    return [koma.species];
  }
}
/**
 * 後ろに駒があったらそれを名乗る
 */
class AnnanKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Annan";
  abstract = "後ろに味方の駒があればその動きをする。";
  execute(koma: Koma) {
    //１つ後ろのベクトルが入る
    const vec = new RelXY(0, 1);
    vec.turn(koma.direction);
    const back = koma.XY.getCloneRel(vec);
    if (
      this.ban.isLegal(back) &&
      koma.ban.exists(back) &&
      koma.ban.getDirection(back) == koma.direction
    ) {
      //安南将棋の場合
      return [koma.ban.getSpecies(back)];
    } else {
      return [koma.species];
    }
  }
}
/**
 * 前に駒があったらそれを名乗る
 */
class AnhokuKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Anhoku";
  abstract = "前に味方の駒があればその動きをする。";
  execute(koma: Koma) {
    //１つ前のベクトルが入る
    const vec = new RelXY(0, -1);
    vec.turn(koma.direction);
    const forward = koma.XY.getCloneRel(vec);
    if (
      this.ban.isLegal(forward) &&
      koma.ban.exists(forward) &&
      koma.ban.getDirection(forward) == koma.direction
    ) {
      //安南将棋の場合
      return [koma.ban.getSpecies(forward)];
    } else {
      return [koma.species];
    }
  }
}
/**
 * 元の種類に加え，後ろに駒があったらそれも名乗る
 */
class TenjikuKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Tenjiku";
  abstract = "元の動きに加え、後ろに味方の駒があればその動きをする。";
  execute(koma: Koma) {
    const species = [koma.species];
    const vec = new RelXY(0, 1);
    vec.turn(koma.direction);
    const back = koma.XY.getCloneRel(vec);
    if (
      this.ban.isLegal(back) &&
      koma.ban.exists(back) &&
      koma.ban.getDirection(back) == koma.direction
    ) {
      species.push(koma.ban.getSpecies(back));
    }
    return species;
  }
}
/**
 * ネコ鮮
 */
class NekosenKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Nekosen";
  abstract =
    "味方の駒が縦に複数並んだとき、上からn番目の駒の性能と下からn番目の駒の性能が入れ替わる。";
  execute(koma: Koma) {
    let tan = koma.XY.getClone(0, -1);
    //盤上かつ駒があるかつ同じ向き
    while (
      this.ban.isLegal(tan) &&
      koma.ban.exists(tan) &&
      koma.ban.getDirection(tan) == koma.direction
    ) {
      tan.add(0, -1);
    }
    const nowyup = tan.y;

    tan = koma.XY.getClone(0, 1);
    let nowydown = koma.XY.y + 1;
    //盤上かつ駒があるかつ同じ向き
    while (
      this.ban.isLegal(tan) &&
      koma.ban.exists(tan) &&
      koma.ban.getDirection(tan) == koma.direction
    ) {
      tan.add(0, 1);
    }
    nowydown = tan.y;
    return [
      koma.ban.getSpecies(
        new XY(
          koma.XY.x,
          koma.XY.y + (nowydown - koma.XY.y) + (nowyup - koma.XY.y)
        )
      ),
    ];
  }
}
/**
 * ネコネコ鮮
 */
class NekonekosenKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Nekonekosen";
  abstract =
    "敵味方に関わらず、駒が横に複数並んだとき、上からn番目の駒の性能と下からn番目の駒の性能が入れ替わる。";
  execute(koma: Koma) {
    let tan = koma.XY.getClone(0, -1);
    //盤上かつ駒がある
    while (this.ban.isLegal(tan) && koma.ban.exists(tan)) {
      tan.add(0, -1);
    }
    const nowyup = tan.y;

    tan = koma.XY.getClone(0, 1);
    let nowydown = koma.XY.y + 1;
    //盤上かつ駒がある
    while (this.ban.isLegal(tan) && koma.ban.exists(tan)) {
      tan.add(0, 1);
    }
    nowydown = tan.y;
    return [
      koma.ban.getSpecies(
        new XY(
          koma.XY.x,
          koma.XY.y + (nowydown - koma.XY.y) + (nowyup - koma.XY.y)
        )
      ),
    ];
  }
}
/**
 * 横ネコ鮮
 */
class YokonekosenKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Yokonekosen";
  abstract =
    "味方の駒が横に複数並んだとき、左からn番目の駒の性能と右からn番目の駒の性能が入れ替わる。";
  execute(koma: Koma) {
    let tan = koma.XY.getClone(-1, 0);
    //盤上かつ駒があるかつ（ねこねこまたは同じ向き）
    while (
      this.ban.isLegal(tan) &&
      koma.ban.exists(tan) &&
      koma.ban.getDirection(tan) == koma.direction
    ) {
      tan.add(-1, 0);
    }
    const nowxleft = tan.x;

    tan = koma.XY.getClone(1, 0);
    //盤上かつ駒があるかつ（ねこねこまたは同じ向き）
    while (
      this.ban.isLegal(tan) &&
      koma.ban.exists(tan) &&
      koma.ban.getDirection(tan) == koma.direction
    ) {
      tan.add(1, 0);
    }
    const nowxright = tan.x;

    return [
      koma.ban.getSpecies(
        new XY(
          koma.XY.x + (nowxright - koma.XY.x) + (nowxleft - koma.XY.x),
          koma.XY.y
        )
      ),
    ];
  }
}
/**
 * 横ネコネコ鮮
 */
class YokonekonekosenKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Yokonekonekosen";
  abstract =
    "敵味方に関わらず、駒が横に複数並んだとき、左からn番目の駒の性能と右からn番目の駒の性能が入れ替わる。";
  execute(koma: Koma) {
    let tan = koma.XY.getClone(-1, 0);
    //盤上かつ駒があるかつ（ねこねこまたは同じ向き）
    while (this.ban.isLegal(tan) && koma.ban.exists(tan)) {
      tan.add(-1, 0);
    }
    const nowxleft = tan.x;

    tan = koma.XY.getClone(1, 0);
    //盤上かつ駒があるかつ（ねこねこまたは同じ向き）
    while (this.ban.isLegal(tan) && koma.ban.exists(tan)) {
      tan.add(1, 0);
    }
    const nowxright = tan.x;

    return [
      koma.ban.getSpecies(
        new XY(
          koma.XY.x + (nowxright - koma.XY.x) + (nowxleft - koma.XY.x),
          koma.XY.y
        )
      ),
    ];
  }
}
/**
 * 相手の駒が前にあったらそいつを名乗る
 */
class TaimenKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Taimen";
  abstract = "前のマスに相手の駒があったら、その動きをする。";
  execute(koma: Koma) {
    const vec = new RelXY(0, -1);
    vec.turn(koma.direction);
    const forward = koma.XY.getCloneRel(vec);
    if (
      this.ban.isLegal(forward) &&
      koma.ban.exists(forward) &&
      koma.ban.getDirection(forward) != koma.direction
    ) {
      //対面
      return [koma.ban.getSpecies(forward)];
    } else {
      return [koma.species];
    }
  }
}
/**
 * 相手の駒が後ろにあったらそいつを名乗る
 */
class HaimenKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Haimen";
  abstract = "後ろのマスに相手の駒があったら、その動きをする。";
  execute(koma: Koma) {
    const vec = new RelXY(0, 1);
    vec.turn(koma.direction);
    const back = koma.XY.getCloneRel(vec);
    if (
      this.ban.isLegal(back) &&
      koma.ban.exists(back) &&
      koma.ban.getDirection(back) != koma.direction
    ) {
      //対面
      return [koma.ban.getSpecies(back)];
    } else {
      return [koma.species];
    }
  }
}
/**
 * 八方桂の位置に駒があったらそいつを名乗る
 */
class AnkiKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Anki";
  abstract = "八方桂の位置に相手の駒があったら、その動きをする。";
  execute(koma: Koma) {
    const tansakuKnight = [
      new RelXY(2, 1),
      new RelXY(2, -1),
      new RelXY(-2, 1),
      new RelXY(-2, -1),
      new RelXY(1, 2),
      new RelXY(1, -2),
      new RelXY(-1, 2),
      new RelXY(-1, -2),
    ];
    const arraySpecies = [];
    for (let relXY of tansakuKnight) {
      const tan = koma.XY.getCloneRel(relXY);
      if (!this.ban.isLegal(tan)) continue;
      const tanKoma = koma.ban.get(tan);
      if (tanKoma.isNull()) continue; //駒がなかったら
      if (tanKoma.direction != koma.direction) continue; //向きが違ったら
      arraySpecies.push(tanKoma.species);
    }
    if (arraySpecies.length > 0) {
      return arraySpecies;
    } else {
      return [koma.species];
    }
  }
}
/**
 * 左右に駒があったらそいつを名乗る
 */
class AntouzaiKomaSuggestStrategy extends KomaSuggestStrategy {
  static strategyVariant: "Antouzai";
  abstract = "左右のマスに相手の駒があったら、その動きをする。";
  execute(koma: Koma) {
    const tansakuSayuu = [new RelXY(1, 0), new RelXY(-1, 0)];
    const arraySpecies = [];
    for (let relXY of tansakuSayuu) {
      const tan = koma.XY.getCloneRel(relXY);
      if (!this.ban.isLegal(tan)) continue;
      const tanKoma = koma.ban.get(tan);
      if (tanKoma.isNull()) continue;
      if (tanKoma.direction != koma.direction) continue;
      arraySpecies.push(tanKoma.species);
    }
    if (arraySpecies.length > 0) {
      return arraySpecies;
    } else {
      return [koma.species];
    }
  }
}

class QuantumKomaSuggestStrategy extends KomaSuggestStrategy {
  abstract = "過去の移動と他の駒の動きにより決定される(量子将棋的駒の性能)";
  static strategyVariant: "Quantum";
  koma = ["aa", "ab", "ac", "ad", "ae", "af", "ag", "ah"];
  komaProm = ["ai", "aj", "ak", "al", "am", "an"];

  public execute(koma: Koma) {
    const promoted = koma.species == "fg";
    const data: QuantumData[] | null =
      this.ban.parent.kifu.getLatestData("quantum");
    if (!data) {
      return promoted ? this.komaProm : this.koma;
    }
    const pos = this.findPos(koma.XY, data);
    if (pos !== null) {
      return this.mapConvertName(
        data[pos.direction].d.kinds[pos.position],
        promoted
      );
    }
    return array_diff(
      promoted ? this.komaProm : this.koma,
      this.mapConvertName(data[koma.direction].d.fulls, promoted)
    );
  }

  findPos(
    xy: XY,
    data: QuantumData[]
  ): { direction: Direction; position: number } | null {
    const xystr = xy.toString();
    for (let direction of [0, 1]) {
      if (!data[direction]) continue;
      for (let i in data[direction].xys) {
        if (xystr == data[direction].xys[i]) {
          return { direction: direction, position: parseInt(i) };
        }
      }
    }
    return null;
  }
  mapConvertName(names: QuantumPiece[], promoted: boolean) {
    return names.map((name) => this.convertName(name, promoted));
  }
  convertName(name: QuantumPiece, promoted: boolean) {
    switch (name) {
      case "Fu":
        return promoted ? "ai" : "aa";
      case "Ky":
        return promoted ? "aj" : "ab";
      case "Ke":
        return promoted ? "ak" : "ac";
      case "Gi":
        return promoted ? "al" : "ad";
      case "Ki":
        return promoted ? null : "ae";
      case "Ka":
        return promoted ? "am" : "af";
      case "Hi":
        return promoted ? "an" : "ag";
      case "Ou":
        return promoted ? null : "ah";
      default:
        throw new Error(`Unknown kind: ${name}`);
    }
  }
}

const nameToStrategy: { [variant: string]: typeof KomaSuggestStrategy } = {
  Normal: NormalKomaSuggestStrategy,
  Annan: AnnanKomaSuggestStrategy,
  Anhoku: AnhokuKomaSuggestStrategy,
  Tenjiku: TenjikuKomaSuggestStrategy,
  Nekosen: NekosenKomaSuggestStrategy,
  Nekonekosen: NekonekosenKomaSuggestStrategy,
  Yokonekosen: YokonekosenKomaSuggestStrategy,
  Yokonekonekosen: YokonekonekosenKomaSuggestStrategy,
  Taimen: TaimenKomaSuggestStrategy,
  Haimen: HaimenKomaSuggestStrategy,
  Anki: AnkiKomaSuggestStrategy,
  Antouzai: AntouzaiKomaSuggestStrategy,
  Quantum: QuantumKomaSuggestStrategy,
};
