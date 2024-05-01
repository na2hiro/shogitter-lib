import Strategy from "./Strategy.js";
import { Mochigoma } from "../Mochigoma.js";
import Ban from "../Ban.js";
import XY from "../XY.js";
import { Direction } from "../Direction.js";

export default class CaptureStrategy extends Strategy {
  strategyGenre = "駒取り";
  protected ban: Ban;
  protected mochigoma: Mochigoma;
  constructor(ban: Ban) {
    super();
    this.ban = ban;
    this.mochigoma = ban.parent.mochigoma;
  }
  execute(to: XY, direction: Direction) {
    if (!this.ban.exists(to)) return;
    this.capture(to, direction);
    return true;
  }
  capture(to: XY, direction: Direction) {
    //持ち駒input
    this.mochigoma.strategy["MochigomaIO"].executeIn(
      this.ban.take(to),
      direction
    );
    //持ち駒禁則
    this.mochigoma.strategy["MochigomaControl"].execute(direction);
  }
  static create(name: string, ban: Ban, setting: any): CaptureStrategy {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }
}
class NormalCaptureStrategy extends CaptureStrategy {
  abstract = "通常";
}
class KirukeCaptureStrategy extends CaptureStrategy {
  abstract = "取られた駒の初期位置マスが空いていればそこに戻す";
  execute(to: XY, direction: Direction) {
    const koma = this.ban.get(to);
    if (koma.isNull()) return;
    const species = koma.getPromoted(0);
    for (let now of this.ban.getNearestInitPlace(koma.direction, species, to)) {
      if (this.ban.get(now).isNull()) {
        koma.species = species;
        this.ban.move(now, to);
        return false;
      }
    }
    this.capture(to, direction);
    return true;
  }
  toHTML() {
    return `キルケ(${this.abstract})`;
  }
}
/*
class EnPassantCaptureStrategy extends CaptureStrategy{
	abstract = "アンパッサン。";
	execute(to: XY, direction: Direction){

		//アンパッサン
		if(fromKoma.species=='kj' && from.x!=to.x){
			const del=new XY(to.x, from.y, this.ban);
			const past=this.ban.parent.kifu.getXYByTesuu(this.ban.parent.kifu.getTesuu()-1);
			if(past['from'].x==del.x && past['to'].x==del.x && past['from'].y==to.y*2-from.y && past['to'].y==from.y){
				this.ban.remove(del);
			}else{
				throw new Exception("直前に動いたポーンに対してしかアンパッサンできません。");
			}
		}
	}
}

 */

const nameToStrategy: { [variant: string]: typeof CaptureStrategy } = {
  Normal: NormalCaptureStrategy,
  Kiruke: KirukeCaptureStrategy,
};
