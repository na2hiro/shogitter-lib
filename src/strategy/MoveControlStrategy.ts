import {
  BeforeAfterDropStrategy,
  BeforeAfterDropStrategyContainer,
  CommonConfig,
} from "./Strategy";
import XY, { RelXY } from "../XY";
import Ban, { Species } from "../Ban";
import { ShogitterCoreException } from "../utils/phpCompat";
import { shogitterDB } from "../ShogitterDB";
import { Teban } from "../Teban";

export class MoveControlStrategyContainer<
  S
> extends BeforeAfterDropStrategyContainer<MoveControlStrategy<S>> {
  strategyGenre = "移動禁止";
}
export default abstract class MoveControlStrategy<
  S
> extends BeforeAfterDropStrategy {
  strategyGenre = "移動禁止";
  protected ban: Ban;
  protected setting: S & CommonConfig;
  constructor(ban: Ban, setting: S & CommonConfig) {
    super();
    this.ban = ban;
    this.setting = setting;
  }
  executeBefore(from: XY) {}
  executeAfter(to: XY) {}
  executeDrop(to: XY) {
    this.executeAfter(to);
  }

  static create<S>(
    name: string,
    ban: Ban,
    setting: any
  ): MoveControlStrategy<S> {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}
class NormalMoveControlStrategy extends MoveControlStrategy<{}> {
  abstract = "通常";
  executeBefore(from: XY) {}
}
class FreezeMoveControlStrategy extends MoveControlStrategy<{}> {
  abstract = "金縛り(相手の駒の利きがある駒は動けない)";
  executeBefore(from: XY) {
    if (this.isKanashibari(from)) {
      throw new ShogitterCoreException("その駒は金縛りにあっています。");
    }
  }
  /**
   * 金縛りになっているかどうか調べる
   * @param <type> fromx
   * @param <type> fromy
   * @param <type> direction
   * @return <type>
   */
  isKanashibari(from: XY) {
    if (
      this.ban.existsMovable(from, this.ban.get(from).direction, { igai: true })
    ) {
      return true;
    }
    return false;
  }
}
class MadrasMoveControlStrategy extends MoveControlStrategy<{}> {
  abstract =
    "マドラシ(敵同士で同じ種類の駒が互いに利いている場合、お互い動けない)";
  executeBefore(from: XY) {
    if (this.isMadorasi(from)) {
      throw new ShogitterCoreException(
        "その駒はマドラシ金縛りにあっています。"
      );
    }
  }
  /**
   * マドラシ金縛りになっているかどうか調べる
   * @param <type> fromx
   * @param <type> fromy
   * @param <type> species
   * @param <type> direction
   * @return <type>
   */
  isMadorasi(from: XY) {
    const koma = this.ban.get(from);
    for (const kiki of this.ban.arrayKikiInSpeDir(
      koma.species,
      false,
      koma.direction,
      true,
      false
    )) {
      if (kiki["XY"].equals(from)) {
        return true;
      }
    }
    return false;
  }
}
class VolleyballMoveControlStrategy extends MoveControlStrategy<{}> {
  abstract =
    "バレーボール(3手ずつ指す。ただし、3つとも別の駒でなくてはならない)";
  executeBefore(from: XY) {
    if (!this.isVolleyball(from)) {
      throw new ShogitterCoreException(
        "バレーボールの３回のうち同じ駒を２回動かしてはいけません。"
      );
    }
  }
  /**
   * バレーボール将棋の場合、１ターンで同じ駒を複数回動かしてはならない
   * @param <type> from
   */
  isVolleyball(from: XY) {
    const tesuu = this.ban.parent.kifu.getTesuu();
    let bad;
    switch (tesuu % 6) {
      case 5:
      case 2:
        //２手前を探す
        bad = this.ban.parent.kifu.getXYByTesuu(
          this.ban.parent.kifu.getTesuu() - 2
        );
        if (from.equals(bad["to"])) {
          return false;
        }
      case 4:
      case 1:
        //１手前を探す
        bad = this.ban.parent.kifu.getXYByTesuu(
          this.ban.parent.kifu.getTesuu() - 1
        );
        if (from.equals(bad["to"])) {
          return false;
        }
      case 3:
      case 0:
        //探さない
        break;
    }
    return true;
  }
}

type NoTaimenMoveControlConfig = {
  species: Species[]; // [種類]
};
/**
 * 同じ種類の駒の対面を禁止する
 */
class NoTaimenMoveControlStrategy extends MoveControlStrategy<NoTaimenMoveControlConfig> {
  abstract = "同じ種類の駒が対面してはならない";
  executeBefore(from: XY) {}
  executeAfter(to: XY) {
    const tebanDirection = this.ban.get(to).direction;
    //１つ前のベクトルが入る
    const vec = new RelXY(0, -1);
    vec.turn(tebanDirection);

    for (const koma of this.ban.getIterator()) {
      if (
        koma.isNull() ||
        koma.direction != tebanDirection ||
        this.setting["species"].indexOf(koma.species) === -1
      )
        continue;
      const now = koma.XY.clone();
      while (1) {
        now.addRel(vec);
        if (!this.ban.isLegal(now)) break;
        const nowKoma = this.ban.get(now);

        if (nowKoma.isNull()) continue;
        if (nowKoma.direction == tebanDirection) break;
        if (nowKoma.species == koma.species) {
          throw new ShogitterCoreException(
            `${koma.get("name")}が対面してはいけません。`
          );
        } else {
          break;
        }
      }
    }
  }
  toHTML() {
    return `${this.setting["species"]
      .map(
        (sp) => `<a href='/koma/{sp}'>${shogitterDB.getKoma(sp, "name")}</a>`
      )
      .join(" ")}どうしが対面してはいけない`;
  }
}
class SameMoveControlStrategy extends MoveControlStrategy<{}> {
  abstract = "連続して動く場合は同じ駒でなければならない";
  executeBefore(from: XY) {
    const kifu = this.ban.parent.kifu;
    const tesuu = kifu.getTesuu();
    if (tesuu > 0) {
      const kif = kifu.getXYByTesuu(tesuu - 1);
      const kif2 = kifu.get(tesuu - 1);
      if (kif2[0] == this.ban.get(from).direction && !kif["to"].equals(from))
        throw new ShogitterCoreException(`${kif["to"]}の駒を動かしてください`);
    }
  }
}

class IgoMoveControlStrategy extends MoveControlStrategy<{}> {
  abstract = "相手の駒が縦横で囲んでいるマスには打つこと(自殺手)ができない。";
  executeBefore(from: XY) {}
  executeAfter(to: XY) {
    if (this.ban.getSurroundedByEnemy(to).length > 0) {
      throw new ShogitterCoreException("自殺手は禁じ手です。");
    }
  }
  toHTML() {
    return (
      (this.setting.common?.directions
        ? this.setting.common.directions
            .map((dir) => Teban.tebanName[0][dir])
            .join(" ") + "は"
        : "") + this.abstract
    );
  }
}
const nameToStrategy: {
  [variant: string]: /*typeof MoveControlStrategy*/ any;
} = {
  Normal: NormalMoveControlStrategy,
  Freeze: FreezeMoveControlStrategy,
  Madras: MadrasMoveControlStrategy,
  Volleyball: VolleyballMoveControlStrategy,
  NoTaimen: NoTaimenMoveControlStrategy,
  Same: SameMoveControlStrategy,
  Igo: IgoMoveControlStrategy,
};
