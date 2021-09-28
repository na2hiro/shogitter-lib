import Strategy from "./Strategy";
import Ban from "../Ban";
import {ShogitterCoreException} from "../utils/phpCompat";
import {Koma} from "../Koma";
import XY from "../XY";
export default abstract class TebanRotationStrategy extends Strategy{
	strategyGenre = "手番";
	protected ban: Ban;
	constructor(ban: Ban){
		super();
		this.ban=ban;
	}
	abstract execute(moving: Koma, nari: boolean, capture: boolean, to: XY, from: XY): void;
	abstract canPass(): boolean;

	static create(name: string, ban: Ban, setting: any): TebanRotationStrategy {
		const klass: any = nameToStrategy[name];
		return new klass(ban, setting);
	}
}
class NormalTebanRotationStrategy extends TebanRotationStrategy{
	abstract = "通常";
	execute(moving: Koma, nari: boolean, capture: boolean, to: XY, from: XY){
		if(!moving){
			this.ban.parent.teban.rotate();
		}else{
			this.ban.parent.kifu.setLastMoving();
		}
	}
	canPass() {
		return false;
	}
}
class OthelloTebanRotationStrategy extends NormalTebanRotationStrategy{
	abstract = "置けない場合はパスできる";
	canPass() {
		if(this.ban.canOthello(this.ban.parent.teban.getNowDirection())){
			throw new ShogitterCoreException("置ける場所があるためパスできません。");
		}
		return true;
	}
}
class SpeedTebanRotationStrategy extends TebanRotationStrategy{
	abstract = "1手以上動かしてからパスで移動を確定";
	execute(moving: Koma, nari: boolean, capture: boolean){
		if(!moving && (nari||capture)){
			this.ban.parent.teban.rotate();
		}else{
			this.ban.parent.kifu.setLastMoving();
		}
	}
	canPass() {
		const kifu=this.ban.parent.kifu;
		const tesuu=kifu.getTesuu();
		if(tesuu<1) return false;
		const kif=kifu.get(tesuu-1);
		if(kif[0]==this.ban.parent.teban.getNowDirection())return true;

		return false;
	}
}
class CheckerTebanRotationStrategy extends TebanRotationStrategy{
	abstract = "飛び越せる駒がある場合は連続して指す";
	execute(moving: Koma, nari: boolean, capture: boolean, to: XY, from: XY) {
		if(Math.abs(from.x-to.x)==2 || Math.abs(from.y-to.y)==2){
			for(const kiki of this.ban.get(to).getMovable()){
				if(Math.abs(kiki['XY'].x-to.x)==2 || Math.abs(kiki['XY'].y-to.y)==2){
					return;
				}
			}
		}
		this.ban.parent.teban.rotate();
	}
	canPass() {
		return false;
	}
}

const nameToStrategy: {[variant: string]: (typeof TebanRotationStrategy)} = {
	Normal: NormalTebanRotationStrategy,
	Othello: OthelloTebanRotationStrategy,
	Speed: SpeedTebanRotationStrategy,
	Checker: CheckerTebanRotationStrategy
};
