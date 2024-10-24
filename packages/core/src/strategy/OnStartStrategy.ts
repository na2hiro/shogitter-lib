import Strategy from "./Strategy.js";
import Ban from "../Ban.js";
import XY from "../XY.js";

export default abstract class OnStartStrategy extends Strategy {
  strategyGenre = "開始時処理";
  protected ban: Ban;
  constructor(ban: Ban) {
    super();
    this.ban = ban;
  }
  abstract execute(): void;

  static create(name: string, ban: Ban, setting: any): OnStartStrategy {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}

class NormalOnStartStrategy extends OnStartStrategy {
  abstract = "特になし";
  execute() {}
}

abstract class ShogiXOnStartStrategy extends OnStartStrategy {
  shuffle(places: XY[], swapper: (a: XY, b: XY) => void) {
    for (let i = places.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      swapper(places[i], places[j]);
    }
  }

  /**
   * ２つの要素を入れ替える。自陣において左右対称を保つ。また敵陣とは点対称を保つ。
   * 9x9のルール専用
   *
   * @param a
   * @param b
   */
  swapVerticallyLineSymmetricAndPointSymmetric(a: XY, b: XY) {
    this.swapPointSymmetric(a, b);
    this.swapPointSymmetric(new XY(10 - a.x, a.y), new XY(10 - b.x, b.y));
  }
  swapPointSymmetric(a: XY, b: XY) {
    this.swap(a, b);
    this.swap(new XY(10 - a.x, 10 - a.y), new XY(10 - b.x, 10 - b.y));
  }
  swap(a: XY, b: XY) {
    const tmp = this.ban.get(a);
    this.ban.set(a, this.ban.get(b));
    this.ban.set(b, tmp);
  }
}

/*
class Shogi24OnStartStrategy extends ShogiXOnStartStrategy {
  abstract = "将棋24の方法で初期局面をシャッフルする";

  execute() {
    this.shuffle(
      [new XY(9, 9), new XY(8, 9), new XY(7, 9), new XY(6, 9)],
      (a, b) => this.swapVerticallyLineSymmetricAndPointSymmetric(a, b)
    );
  }
}
 */

class Shogi120OnStartStrategy extends ShogiXOnStartStrategy {
  abstract = "金銀桂香と飛角ペアが左右対称を保ち、先後同型でシャッフルされる";

  execute() {
    this.shuffle(
      [new XY(8, 8), new XY(9, 9), new XY(8, 9), new XY(7, 9), new XY(6, 9)],
      (a, b) => this.swapVerticallyLineSymmetricAndPointSymmetric(a, b)
    );
  }
}

class Shogi2494800OnStartStrategy extends ShogiXOnStartStrategy {
  abstract = "歩より下の駒が先後同型でシャッフルされる";

  execute() {
    this.shuffle(
      [
        new XY(8, 8),
        new XY(9, 9),
        new XY(8, 9),
        new XY(7, 9),
        new XY(6, 9),
        new XY(5, 9),
        new XY(4, 9),
        new XY(3, 9),
        new XY(2, 9),
        new XY(1, 9),
        new XY(2, 8),
      ],
      (a, b) => this.swapPointSymmetric(a, b)
    );
  }
}

class Shogi79394515200OnStartStrategy extends ShogiXOnStartStrategy {
  abstract = "歩より下の駒が配置も含めて先後同型でシャッフルされる";

  execute() {
    this.shuffle(
      [
        new XY(9, 9),
        new XY(8, 9),
        new XY(7, 9),
        new XY(6, 9),
        new XY(5, 9),
        new XY(4, 9),
        new XY(3, 9),
        new XY(2, 9),
        new XY(1, 9),
        new XY(9, 8),
        new XY(8, 8),
        new XY(7, 8),
        new XY(6, 8),
        new XY(5, 8),
        new XY(4, 8),
        new XY(3, 8),
        new XY(2, 8),
        new XY(1, 8),
      ],
      (a, b) => this.swapPointSymmetric(a, b)
    );
  }
}

/*
class Shogi1562722242681600OnStartStrategy extends ShogiXOnStartStrategy {
  abstract = "将棋79394515200の方法で初期局面をシャッフルする";

  execute() {
    this.shuffle([
      new XY(9, 9),
      new XY(8, 9),
      new XY(7, 9),
      new XY(6, 9),
      new XY(5, 9),
      new XY(4, 9),
      new XY(3, 9),
      new XY(2, 9),
      new XY(1, 9),
      new XY(9, 8),
      new XY(8, 8),
      new XY(7, 8),
      new XY(6, 8),
      new XY(5, 8),
      new XY(4, 8),
      new XY(3, 8),
      new XY(2, 8),
      new XY(1, 8),
    ], (a, b) => this.swapPointSymmetric(a, b));

    for (let x = 1; x <= 9; x++) {
      this.shuffle([new XY(x, 7), new XY(x, 8), new XY(x, 9)], (a, b) => this.swapPointSymmetric(a, b));
    }
  }
}
*/

const nameToStrategy: { [variant: string]: typeof OnStartStrategy } = {
  Normal: NormalOnStartStrategy,
  Shogi120: Shogi120OnStartStrategy,
  Shogi2494800: Shogi2494800OnStartStrategy,
  Shogi79394515200: Shogi79394515200OnStartStrategy,
};
