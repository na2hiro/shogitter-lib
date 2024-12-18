import XY from "../XY.js";
import Ban, { Species } from "../Ban.js";
import { BeforeAfterDropStrategy } from "./Strategy.js";
import { ShogitterCoreException, shuffle } from "../utils/phpCompat.js";
import { Direction } from "../Direction.js";
import { Koma } from "../Koma.js";

export default abstract class DestinationStrategy extends BeforeAfterDropStrategy {
  strategyGenre = "行き先";
  protected ban: Ban;
  constructor(ban: Ban) {
    super();
    this.ban = ban;
  }
  static create(name: string, ban: Ban, setting: any): DestinationStrategy {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}
class NormalDestinationStrategy extends DestinationStrategy {
  executeBefore(from: XY, to: XY = null) {}
  executeAfter(to: XY) {}
  executeDrop(to: XY) {}
}
class GravityDestinationStrategy extends DestinationStrategy {
  abstract = "下段へ落ちる";
  executeBefore(from: XY, to: XY = null) {}
  executeAfter(to: XY) {}
  executeDrop(to: XY) {
    to.y = this.ban.y;
    //echo j;exit;
    while (1) {
      if (to.y == 0) throw new ShogitterCoreException("そこには置けません。");
      if (!this.ban.exists(to)) {
        break;
      }
      to.add(0, -1);
    }
  }
}
class RandomDestinationStrategy extends DestinationStrategy {
  abstract = "動かした駒の行き先がランダムに決定する";
  public executeBefore(from: XY, to: XY = null) {
    const koma = this.ban.get(from);
    const moves = koma.getMovable();
    shuffle(moves);
    for (let { XY } of moves) {
      if (this.ban.exists(XY) && this.ban.get(XY).direction === koma.direction)
        continue;
      to.set(XY.x, XY.y);
      return;
    }
    throw new ShogitterCoreException("動けません");
  }
  public executeAfter(to: XY) {}
  public executeDrop(
    to: XY,
    species: Species = null,
    direction: Direction = null
  ) {
    let moves = [];
    // TODO: Respect NifuStrategy and support other types of nifu
    const nifus: number[] = [];
    for (let x = 1; x <= this.ban.x; x++) {
      for (let y = 1; y <= this.ban.y; y++) {
        const xy = new XY(x, y);
        if (this.ban.exists(xy)) {
          const koma = this.ban.get(xy);
          if (
            species === "aa" &&
            koma.direction === direction &&
            koma.species === "aa"
          )
            nifus.push(x); //二歩
          continue;
        }
        if (new Koma(species, direction, xy, this.ban).isLegal()) {
          moves.push(xy);
        }
      }
    }
    moves = moves.filter((move) => nifus.indexOf(move.x) === -1);
    if (moves.length === 0)
      throw new ShogitterCoreException("その駒は打てません。");
    const rand = Math.floor(Math.random() * moves.length);
    const newto = moves[rand];
    to.set(newto.x, newto.y);
  }
}

class ChainDestinationStrategy extends DestinationStrategy {
  abstract = "持ち駒は味方の効いている地点にしか打てない（連鎖打ち）";
  executeAfter(to: XY, captured?: boolean): void {}

  executeBefore(from: XY, to: XY): void {}

  executeDrop(to: XY, species: Species, direction: Direction): void {
    if (!this.ban.mapKiki(direction).friend[to.x][to.y]) {
      throw new ShogitterCoreException("味方の効きに連鎖させないと打てません");
    }
  }
}
const nameToStrategy: { [variant: string]: typeof DestinationStrategy } = {
  Normal: NormalDestinationStrategy,
  Gravity: GravityDestinationStrategy,
  Random: RandomDestinationStrategy,
  Chain: ChainDestinationStrategy,
};
