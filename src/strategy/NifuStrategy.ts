import Strategy from "./Strategy";
import Ban, {Direction} from "../Ban";
import {Koma} from "../Koma";
import XY, {RelXY} from "../XY";
import {ShogitterCoreException} from "../utils/phpCompat";

export default abstract class NifuStrategy extends Strategy{
    static abstract = "二歩";
    protected ban: Ban;
    protected checker: ScanNifuStrategy;
    constructor(ban: Ban){
        super();
        this.ban=ban;
    }
    execute(to: XY){
        this.checker.execute(to);
    }
    getStrategyGenre(){
        return this.abstract;
    }

    static create(name: string, ban: Ban, setting: any): NifuStrategy {
        const klass: any = nameToStrategy[name];
        return new klass(ban, setting);
    }
}
//通常
class NormalNifuStrategy extends NifuStrategy{
    static abstract = "禁止";
    constructor(ban: Ban){
        super(ban);
        this.checker=new NormalScanNifuStrategy(this.ban, new NormalOnFoundNifuStrategy(this.ban));
    }
}
//二歩ok
class NoNifuStrategy extends NifuStrategy{
    static abstract = "許可";
    execute(to: XY){}
    toHTML() {
        return this.abstract;
    }
}
//斜め将棋
class NanameNifuStrategy extends NifuStrategy{
    static abstract = "斜め方向の二歩が禁止";
    constructor(ban: Ban){
        super(ban);
        this.checker=new NanameScanNifuStrategy(this.ban, new NormalOnFoundNifuStrategy(this.ban));
    }
    toHTML() {
        return this.abstract;
    }
}
//盤面全体
class WholeNifuStrategy extends NifuStrategy{
    static abstract = "着手した駒だけでなく全ての駒を調べる";
    constructor(ban: Ban){
        super(ban);
        this.checker=new WholeScanNifuStrategy(this.ban, new NormalOnFoundNifuStrategy(this.ban));
    }
    toHTML() {
        return this.abstract;
    }
}
//盤面全体かつ二歩負け
class PenaltyNifuStrategy extends NifuStrategy{
    static abstract = "二歩は即負け。着手した駒だけでなく全ての駒を調べる。";
    constructor(ban: Ban){
        super(ban);
        this.checker=new WholeScanNifuStrategy(this.ban, new FatalOnFoundNifuStrategy(this.ban));
    }
    toHTML() {
        return this.abstract;
    }
}

abstract class ScanNifuStrategy{
    protected ban: Ban;
    protected onFound: OnFoundNifuStrategy;
    constructor(ban: Ban, onFound: OnFoundNifuStrategy){
        this.onFound=onFound;
        this.ban=ban;
    }
    scan(koma: Koma, start: XY, vec: RelXY, flags={'limitJump': -1}){
        let cnt=0;
        for(const now of this.ban.getScanIterator(start, vec, flags)){
            if(koma.equals(this.ban.get(now))) cnt++;
        }
        return cnt;
    }
    scanBoth(koma: Koma, start: XY, vec: RelXY){
        let cnt=this.scan(koma, start, vec);
        vec.turn(1);//180?度回転
        cnt+=this.scan(koma, start, vec);
        return cnt;
    }
    abstract execute(to: XY): void;
}
class NormalScanNifuStrategy extends ScanNifuStrategy{
    execute(to: XY){
        const koma=this.ban.get(to);
        if (koma.isNull()) return;
        const limit=koma.get('nifu');
        if(limit){
            const vec=new RelXY(0, -1);
            vec.turn(koma.direction);
            const cnt=1+this.scanBoth(koma, to, vec);

            if(cnt>=limit){
                //二歩
                this.onFound.execute(koma.direction);
            }
        }
    }
}
class NanameScanNifuStrategy extends ScanNifuStrategy{
    execute(to: XY){
        const koma=this.ban.get(to);
        const limit=koma.get('nifu');
        if(limit){
            const vec=new RelXY(-1, -1);
            vec.turn(koma.direction);
            const cnt=1+this.scanBoth(koma, to, vec);

            if(cnt>=limit){
                //二歩
                this.onFound.execute(koma.direction);
            }
        }
    }
}
class WholeScanNifuStrategy extends ScanNifuStrategy{
    execute(to: XY){
        const koma = this.ban.get(to);
        if(koma.isNull()) return;
        const mydirection=koma.direction;
        //vec=new RelXY(0, -1);
        //vec.turn(koma.direction);

        const cnts: {[species: string]: number[]}[]=[];
        //if(vec.x==0){
            //縦
            for(const nowkoma of this.ban.getIterator()){
                if(nowkoma.isNull()) continue;
                if(nowkoma.get("nifu")){
                    if(!cnts[nowkoma.XY.x]) cnts[nowkoma.XY.x] = {};
                    if(!cnts[nowkoma.XY.x][nowkoma.species]) cnts[nowkoma.XY.x][nowkoma.species] = [];
                    if(!cnts[nowkoma.XY.x][nowkoma.species][nowkoma.direction]) cnts[nowkoma.XY.x][nowkoma.species][nowkoma.direction] = 0;
                    cnts[nowkoma.XY.x][nowkoma.species][nowkoma.direction]++;
                }
            }
        //}else{
            //横
        //    foreach(this.ban as nowkoma){
        //        if(!nowkoma) continue;
        //        if(koma.equals(nowkoma))cnts[nowkoma.XY.y]++;
        //    }
        //}
        for(const linenum in cnts){
            for(const species in cnts[linenum]){
                const directions = cnts[linenum][species];

                const cnt=directions[mydirection];
                if(Koma.getStatelessData(species, "nifu")<=cnt){
                    //二歩
                    this.onFound.execute(mydirection);
                    return;
                }

                for(let direction=0; direction < directions.length; direction++){
                    const cnt = directions[direction];
                    if(direction==mydirection) continue;
                    if(Koma.getStatelessData(species, "nifu")<=cnt){
                        //二歩
                        this.onFound.execute(direction);
                        return;
                    }
                }
            }
        }
    }
}

abstract class OnFoundNifuStrategy{
    protected ban: Ban;
    constructor(ban: Ban){
        this.ban=ban;
    }
    abstract execute(direction: Direction): void;
}
class NormalOnFoundNifuStrategy extends OnFoundNifuStrategy{
    execute(direction: Direction){
        throw new ShogitterCoreException("二歩です。");
    }
}
class FatalOnFoundNifuStrategy extends OnFoundNifuStrategy{
    execute(direction: Direction){
        this.ban.parent.gameEnd(direction, direction, "反則負け", `二歩です。${this.ban.parent.teban.getName(direction)}の負けです。`);
    }
}
const nameToStrategy: {[variant: string]: (typeof NifuStrategy)} = {
    Normal: NormalNifuStrategy,
    No: NoNifuStrategy,
    Naname: NanameNifuStrategy,
    Whole: WholeNifuStrategy,
    Penalty: PenaltyNifuStrategy
};
