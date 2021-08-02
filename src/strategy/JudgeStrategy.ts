import Strategy, {StrategyContainer} from "./Strategy";
import Ban, {Direction, Species} from "../Ban";
import XY, {RelativeType, RelXY} from "../XY";
import {Koma} from "../Koma";
import {shogitterDB} from "../ShogitterDB";
import {ShogitterCoreException} from "../utils/phpCompat";
import {BanScanIterator} from "../Iterator";
import {num2kan_decimal} from "../MyLib";
import TebanRotationStrategy from "./TebanRotationStrategy";

export class JudgeStrategyContainer<S> extends StrategyContainer<JudgeStrategy<S>>{
	static abstract="勝利判定";
	static defaultSetting={
		'WinKoma': {},
		'Oute': {},
		'Tsumi': {},
	};
	getAbstract() {
		return this.abstract;
	}
	getStrategyGenre(){
		return this.abstract;
	}
}
export default abstract class JudgeStrategy<S> extends Strategy{
	static abstract="勝利判定";
	protected ban: Ban;
	protected setting: S;
	constructor(ban: Ban, setting: S){
		super();
		this.ban=ban;
		this.setting=setting;
	}
	abstract execute(to: XY): void;
	gameEnd(loseDirection: Direction, markDirection: Direction, kifu:string, description: string){
		this.ban.parent.gameEnd(loseDirection, markDirection, kifu, description);
	}

	static create(name: string, ban: Ban, setting: any): TebanRotationStrategy {
		const klass: any = nameToStrategy[name];
		return new klass(ban, setting);
	}
}
class WinKomaJudgeStrategy extends JudgeStrategy<{}>{
	static abstract="玉がない";
	execute(to: XY){
		//winkomaが存在しないことによる終局判定
		if(!this.ban.parent.rule['winkoma']) return;
		
		const countSpecies=this.ban.countSpecies();
		let winkoma = "";
		for(let species of this.ban.parent.rule['winkoma']){
			winkoma+=" "+Koma.getStatelessData(species, 'name');
		}
		outer: for(let player of this.ban.parent.teban.getIterator()){
			
			for(let species of this.ban.parent.rule['winkoma']){
				if(countSpecies[player][species]>0){
					continue outer;
				}
			}
			this.gameEnd(player, player, "負け", `${this.ban.parent.teban.getName(player)}の${winkoma} が取られました。`);
		}
	}
	toHTML(){
		if(!this.ban.parent.rule['winkoma']) return null;
		let ret="王将駒 =";
		for(let value2 of this.ban.parent.rule['winkoma']) {
			ret+= ` <a href='/koma/${value2}'>${shogitterDB.getKoma(value2, 'name')}</a>`;
		}
		ret+= "";
		return ret;
	}
}
type OuteJudgeConfig = {
	ignore: boolean;
	fatal: boolean;
}
/**
 * 王手なら中断する
 *  ignore: 王手放置を無視
 *  fatal: 王手放置で負け，王手で勝ち
 */
class OuteJudgeStrategy extends JudgeStrategy<OuteJudgeConfig>{
	static abstract="王手";
	execute(to: XY){
		if(this.setting.ignore) return;
		if(this.setting.fatal){
			let cnt = 0;
			this.ban.checkOute().forEach((value, direction) => {
				const win=direction===0?1:0;
				this.ban.parent.gameEnd(direction, win, "勝ち", `${this.ban.parent.teban.getName(direction)}玉に王手がかかりました。${this.ban.parent.teban.getName(win)}の勝ちです。`);
				cnt++;
			})
			if(cnt>1) throw new ShogitterCoreException("複数の玉に王手がかかっています。");
		}else{
			if(this.ban.checkOuteByDirection(this.ban.get(to).direction)){
				throw new ShogitterCoreException("王手を放置しています。");
			}
		}
	}
	toHTML() {
		if(this.setting.ignore) return "王手判定なし";
		if(this.setting.fatal) return "王手をすれば勝ち";
		//return "王手をチェック";
		return null;
	}
}
type TsumiJudgeConfig = {
	ignore: boolean; // 詰みを調べない
	uchifu: boolean; // 打ち歩詰めok
}
/**
 * 詰みなら負けとする
 */
class TsumiJudgeStrategy extends JudgeStrategy<TsumiJudgeConfig>{
	static abstract="詰み";
	execute(to: XY, put=false){
		if(this.setting['ignore']) return;
		const koma=this.ban.get(to);
		//詰んだらゲーム終了
		for(let player of this.ban.parent.teban.getIterator()){
			if(koma.direction==player) continue;//手番の人の詰みは調べない
			if(!this.isTsumi(player)) continue;//詰みでなかったら飛ばす
			//詰んでいる場合
			if(!this.setting.uchifu && put && koma.species=='aa'){
				this.ban.parent.gameEnd(koma.direction, player, "反則勝ち", `打ち歩詰めです。${this.ban.parent.teban.getName(player)}の勝ちです。`);
			}else{
				this.ban.parent.gameEnd(player, player, "詰み", `${this.ban.parent.teban.getName(player)}玉が詰みました。${this.ban.parent.teban.getName(koma.direction)}の勝ちです。`);
			}
		}
	}
	isTsumi(direction: Direction){
		const debug=false;
		//王手になっていなかったら詰みではない/*!isset(mapKiki['enemy'][placeOu[0]][placeOu[1]])*/
		if(!this.ban.checkOuteByDirection(direction)){
				if(debug) console.log(`王手でない${this.ban.get(new XY(5, 3))}${this.ban.get(new XY(5, 2))}`);
			return false;
		}
		
		//王の場所を特定
		const arrayPlaceOu=[];//ここに王の場所を全て入れる
		for(let koma of this.ban.getIterator()){
			if(koma.isNull() || koma.direction!=direction) continue;
			if(this.ban.parent.rule['winkoma'].indexOf(koma.species)>=0){
				arrayPlaceOu.push(koma.XY);
			}
		}
		//それぞれの王について調べる
		for(let placeOu of arrayPlaceOu){
			//仮盤を用意し、自分を消した上で移動可能域を調べる
			const tmpBan=this.ban.parent.clone();
			tmpBan.ban.remove(placeOu);
			const mapKiki=tmpBan.ban.mapKiki(direction);

			//王の全ての移動可能域を調べる
			for(let kiki of this.ban.get(placeOu).getMovable()){
				//「利いている、または味方の駒がある」出ない場合、詰みではない
				if(!((mapKiki['enemy'][kiki['XY'].x]?.[kiki['XY'].y])
					 || (this.ban.exists(kiki['XY']) && this.ban.getDirection(kiki['XY'])==direction))){
						if(debug) console.log(`${kiki}に逃げられる`);
						return false;
					}
			}
			
			//王手をしている駒全てについて
			if(mapKiki['enemy'][placeOu.x]?.[placeOu.y]?.length>0){
				for(let placeFrom of mapKiki['enemy'][placeOu.x][placeOu.y]){
					//					print "{placeFrom};";
					//王手をしている駒を取れる駒全てについて
					if(mapKiki['friend'][placeFrom.x]?.[placeFrom.y]?.length>0){
						for(let placeFromFrom of mapKiki['friend'][placeFrom.x][placeFrom.y]){
							//placeFromFrom[0], placeFromFrom[1]からplaceFrom[0], placeFrom[1]に移動すると取り除けるかも
							const tmpBan=this.ban.parent.clone();
							if(debug) console.log(`${placeFromFrom}から${placeFrom}に?`);
							try{
								tmpBan.teban.rotate();
								tmpBan.move(placeFromFrom, placeFrom, false);
								if(debug) console.log(`${placeFromFrom}から${placeFrom}へ移動すれば良い`);
								return false;
							}catch(e){
							}
						}
					}
					//王手をしている駒と王の全ての間について
					for(let placeBetween of BanScanIterator.getBetween(this.ban, placeFrom, placeOu)){
						//全ての持ち駒を打って確かめる
						if(this.ban.parent.mochigoma.arrayMochigoma[direction].length>0){
							for(let mochigoma in this.ban.parent.mochigoma.arrayMochigoma[direction]){
								const tmpBan=this.ban.parent.clone();
								try{
									tmpBan.put(placeBetween, mochigoma, direction, null);
									if(debug) console.log(`${mochigoma}を${placeBetween}へ打てば良い`);
									return false;
								}catch(e){
								}
							}
						}
						
						//間に行ける駒駒全てについて
						if(mapKiki['friend'][placeBetween.x] && mapKiki['friend'][placeBetween.x][placeBetween.y]){
							for(let placeBetweenFrom of mapKiki['friend'][placeBetween.x][placeBetween.y]){
								//								print placeBetween;
								if(debug) `${placeBetweenFrom}から${placeFrom}に移動すると取り除けるかも`;
								const tmpBan=this.ban.parent.clone();
								try{
									tmpBan.teban.rotate();
									tmpBan.move(placeBetweenFrom, placeBetween, false);
									if(debug) console.log(`${placeBetweenFrom}から${placeBetween}へ移動すれば良い`);
									return false;
								}catch(e){
								}
							}
						}
					}
				}
			}
		}
		if(debug) console.log("つんだ");
		return true;
	}
	toHTML(){
		if(this.setting["ignore"]) return "詰み判定なし";
		if(this.setting["uchifu"]) return "打ち歩詰め判定なし";
		//return "詰み判定";
		return null;
	}
}
//置ける場所がなくなったら終了
class OthelloJudgeStrategy extends JudgeStrategy<{}>{
	static abstract="オセロ";
	execute(to: XY){
		
		//終了判定
		if(!this.ban.canOthello()){
			//空白がなかったか，打てなければ終局
			const point=this.ban.count();
			let mes, meskifu, mark, lose;
			if(point[0]==point[1]){
				mes="引き分け";
				meskifu="引き分け";
				lose = 9;
				mark = 9;
			}else if(point[0]>point[1]){
				mes="黒の勝ち";
				meskifu="勝ち";
				lose = 1;
				mark = 0;
			}else{
				mes="白の勝ち";
				meskifu="勝ち";
				lose = 0;
				mark = 1;
			}
			this.ban.parent.gameEnd(lose, mark, meskifu, `${(point[0] || 0)}対${(point[1] || 0)}で${mes}です`);
		}
	}
	toHTML(){
		return "駒が打てなくなった時点で駒が多いほうが勝ち";
	}
}
type GomokuJudgeConfig = {
	moku: number; // n目並んだら勝ち
	sansan: boolean; // 三三なら禁じ手
	choren: number; // 長連(nより多い並び)はカウントしない
}
/**
 * 五目並べ系
 * setting
 */
class GomokuJudgeStrategy extends JudgeStrategy<GomokuJudgeConfig>{
	static abstract="n目並べ";
	execute(to: XY){
		let win, lose;
		if(this.setting['sansan'] && this.sansan(to)){
			lose=this.ban.getDirection(to);
			win=(lose==1?0:1);
			
			this.gameEnd(lose, win, "反則負け", `三三です。${this.ban.parent.teban.getName(lose)}の負けです。`);
		}else if(this.gomoku(to, this.setting['moku'])){
			win=this.ban.getDirection(to);
			lose=(win==1?0:1);
			
			this.gameEnd(lose, win, "勝ち", `${num2kan_decimal(this.setting['moku'])}目並びました。${this.ban.parent.teban.getName(win)}の勝ちです。`);
		}else{
			for(let koma of this.ban.getIterator()){
				if(koma.isNull()) return;
			}
			this.ban.parent.gameEnd(9, 9, "引き分け", "全て埋まりました。引き分けです。");
		}
	}
	/**
	 * 該当着手によってn目並んだかどうか
	 * @param <type> tox
	 * @param <type> toy
	 * @param <type> number
	 * @return <type>
	 */
	gomoku(to: XY, number: number){
		const direction=this.ban.get(to).direction;
		for(let relXY of RelXY.getVector(RelativeType.HALFROUND)){
			let cnt=1;
			for(const tani of [1,-1]){
				const now=to.clone();
				while(1){
					now.addRel(relXY, tani);
					if(!this.ban.isLegal(now)) break;
					if(!this.ban.exists(now)) break;
					if(this.ban.get(now).direction!=direction) break;
					cnt++;
				}
			}
			if(cnt>=number) return true;
		}
		return false;
	}
	/**
	 * 今打った手が３３かどうか調べる
	 * @param <type> tox
	 * @param <type> toy
	 * @return <type>
	 */
	sansan(to: XY){
		const toKoma=this.ban.get(to);
		const values: number[] = [];
		outer: for(let relXY of RelXY.getVector(RelativeType.HALFROUND)){
			//半周４方向
			let center=1;
			const hanare=[];
			let centerikidomari=0;
			for(const tani of [1,-1]){
				//前と後ろ
				const now=to.clone();
				let cnt=0;
				let centerflag=0;
				while(1){
					//一歩ずつ調べる
					now.addRel(relXY, tani);
					
					const banjo=this.ban.isLegal(now);
					if(banjo && !this.ban.exists(now)){
						//駒が無い
						if(centerflag==0){
							//toxにつながっているcenterならば外側にする
							centerflag=1;
						}else{
							//centerでないなら終わり
							break;
						}
					}else if(!banjo || this.ban.get(now).isEnemy(toKoma)){
						//盤外または敵駒
						if(centerflag==0){
							//センター
							centerikidomari=1;
							break;
						}else{
							//端っこだったらこっち側はカウントさせない
							continue outer;
						}
					}else{
						if(centerflag==0){
							center++;
						}else{
							cnt++;
						}
					}
				}
				hanare.push(cnt);
			}
			values.push(Math.max(hanare[0], hanare[1])+(centerikidomari==1?0:center));
		}

		const ret: number[] = []
		for(const value of values){
			if(!ret[value]) ret[value] = 0;
			ret[value]++;
		}
		if(ret[3]>=2){
			return true;
		}
		return false;
		//return ret;
	}
	toHTML(){
		return this.setting['moku']+"目並べると勝ち";
	}
}
class IgoJudgeStrategy extends JudgeStrategy<{}>{
	static abstract="囲碁";
	execute(to: XY){
		const tesuu=this.ban.parent.kifu.getTesuu();
		if(tesuu>1){
			if(this.ban.parent.getHash() == this.ban.parent.kifu.getHash(tesuu-2)){
				throw new ShogitterCoreException("コウは禁止です。");
			}
		}
	}
	toHTML(){
		return "コウ禁止";
	}
}
type TryJudgeConfig = {
	species: Species[];
}

class TryJudgeStrategy extends JudgeStrategy<TryJudgeConfig>{
	static abstract="トライ";
	execute(to: XY){
		const koma=this.ban.get(to);
		if(this.ban.checkOuteByDirection(koma.direction)){
			return;//王手ではトライにならない
		}
		if(this.setting['species'].indexOf(koma.species)==-1) return;
		//１つ前のベクトルが入る
		const vec=new RelXY(0, -1);
		vec.turn(koma.direction);
		if(!this.ban.isLegal(koma.XY.getCloneRel(vec))){
			const win=koma.direction;
			const lose=win==0?1:0;
			this.ban.parent.gameEnd(lose, win, "トライ", `トライしました。${this.ban.parent.teban.getName(win)}の勝ちです。`);
		}
	}
	toHTML(){
		return "トライルール(敵陣一段目に入れば勝ち)";
	}
}
type CountJudgeConfig = {
	lte?: number;
	gte?: number;
}
class CountJudgeStrategy extends JudgeStrategy<CountJudgeConfig>{
	//gte: n 枚数>=n, lte: m 枚数<=m
	static abstract = "枚数";
	execute(to: XY){
		const maisuu=this.ban.count();
		for(const player of this.ban.parent.teban.getIterator()){
			if(this.setting['lte'] && maisuu[player]<=this.setting['lte']){
				const lose=player;
				const win=lose==1?0:1;
				this.ban.parent.gameEnd(player, win, "勝ち", `${this.ban.parent.teban.getName(lose)}の駒が${this.setting['lte']}枚以下になりました。${this.ban.parent.teban.getName(win)}の勝ちです。`);
				break;
			}
			if(this.setting['gte'] && this.setting['gte']<=maisuu[player]){
				const lose=player;
				const win=lose==1?0:1;
				this.ban.parent.gameEnd(player, win, "勝ち", `${this.ban.parent.teban.getName(lose)}の駒が${this.setting['gte']}枚以上になりました。${this.ban.parent.teban.getName(win)}の勝ちです。`);
				break;
			}
		}
	}
	toHTML(){
		return `駒が${this.setting['lte'] ? this.setting['lte'] + "枚以下" : this.setting['gte'] + "枚以上"}になったら負け`;
	}
}
class NoMoveJudgeStrategy extends JudgeStrategy<{}>{
	static abstract = "動ける駒がなくなったら負け";
	execute(to: XY) {
		const direction = this.ban.get(to).direction;
		for(const koma of this.ban.getIterator()){
			if(koma.isNull() || koma.direction==direction) continue;
			if(koma.getMovable().length>0) return;
		}
		const win=direction;
		const lose=win==0?1:0;
		this.ban.parent.gameEnd(lose, win, "勝ち", `動ける駒がなくなりました。${this.ban.parent.teban.getName(win)}の勝ちです。`);
	}
	toHTML(){
		return "動ける駒がなくなったら負け";
	}
}

const nameToStrategy: {[variant: string]: (/*typeof JudgeStrategy*/any)} = {
	"": JudgeStrategy,
	Normal: JudgeStrategy,
	WinKoma: WinKomaJudgeStrategy,
	Oute: OuteJudgeStrategy,
	Tsumi: TsumiJudgeStrategy,
	Othello: OthelloJudgeStrategy,
	Gomoku: GomokuJudgeStrategy,
	Igo: IgoJudgeStrategy,
	Try: TryJudgeStrategy,
	Count: CountJudgeStrategy,
	NoMove: NoMoveJudgeStrategy,
};
