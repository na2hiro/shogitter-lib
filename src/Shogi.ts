import "./strategy/Strategy"
import {ShogitterCoreException} from "./utils/phpCompat";
import {Mochigoma, MochigomaObj} from "./Mochigoma";
import {Result, Teban, UserInfo} from "./Teban";
import Ban, {BanObj, Direction, Species} from "./Ban";
import XY, {XYObj} from "./XY";
import {Koma, KomaObj, PromotionMode} from "./Koma";
import Kifu, {KifuLine, KifuMove} from "./Kifu";
import {BanScanIterator} from "./Iterator";
import {Rule, shogitterDB} from "./ShogitterDB";
import {javaHashCode} from "./utils/hash";

export {ShogitterCoreException};

const DEBUG_ECHO_TIME = true;

/*
enum Format {
    FORMAT_UNKNOWN = -1,
    FORMAT_RULEID = 0,
    FORMAT_JSON = 1,
    FORMAT_KIF = 2,
    FORMAT_KI2 = 3,
    FORMAT_CSA = 4,
    FORMAT_XML = 5,
    FORMAT_OBJECT = 100,
}
 */

type StatusObj = {
    num: Status;
    message?: string
}

export enum Status {
    INITIAL,
    PLAYING,
    ENDED,
}
export type Player = {
    // null when it's vacant
    user: (UserInfo | null)[],
    mochigoma: {[species: string]: number},
    result?: Result,
}

type Game = {
    players: Player[],
}

export interface ShogiSerialization extends Game {
    version: string,
    status: StatusObj,
    ruleid: number,
    teban: number,
    turn: number,
    date: {
        start?: string,
        end?: string
    },
    ban: BanObj,
    moving: Moving,
    players: Player[],
    debug: string,
    system: string,
    kifu: KifuLine[],
}

type Moving = {
    xy: [number, number],
    status: number;
}

export type KifuCommand = {direction?: Direction} & (
    MoveCommand |
    PutCommand |
    RollbackCommand |
    ResignCommand |
    ResetCommand |
    StartCommand |
    PassCommand |
    // ChangeDirectionCommand | // Not used
    DrawCommand);
export type MoveCommand = {
    type: "move",
    from: XYObj,
    to: XYObj,
    nari?: boolean,
}
export type PutCommand = {
    type: "put",
    to: XYObj,
    direction: Direction;
    put: Species,
    id?: number, // Used for quantum shogi to distinguish individual pieces of a kind
}
export type RollbackCommand = {
    type: "rollback",
    direction?: Direction;
}
export type StartCommand = {
    type: "start"
}
export type PassCommand = {
    type: "pass"
}
export type ResignCommand = {
    type: "resign",
}
export type DrawCommand = {
    type: "draw",
}
/*
export type ChangeDirectionCommand = {
    type: "changedirection",
}*/
export type ResetCommand = {
    type: "reset",
    ruleId: number;
}

/**
 * 将棋のクラス
 */
export default class Shogi {
    ruleid: number;		//ルール番号
    //対局の状態
    status: StatusObj = {
        num: Status.INITIAL
    };		
    kifu: Kifu;			//棋譜オブジェクト
    mochigoma: Mochigoma;		//持ち駒オブジェクト
    ban: Ban;			//盤オブジェクト
    teban: Teban;			//手番オブジェクト
    rule: Rule;
    moving: Koma | undefined;
    date: {
        start?: Date;
        end?: Date;
    };
    private jsonsystem: any; // Used for showing confirmation
    private end: { status: any; kifu: any[] };
    fromDirection: Direction;
    private lastBan: KomaObj[][];		//移動前の盤面情報(変更しない)
    private lastMochigoma: MochigomaObj[];

    // statusMessage;		//対局の状態
    // noCheckOthello;//オセロチェックをする
    // kifulength;	//棋譜の長さ
    // debug;

    /*
    static getFormatByFileName(filename: string) {
        const tmp = filename.split(".");
        switch (tmp[tmp.length - 1].toLowerCase()) {
            case 'json':
                return Format.FORMAT_JSON;
            case 'kif':
                return Format.FORMAT_KIF;
            case 'ki2':
                return Format.FORMAT_KI2;
            case 'csa':
                return Format.FORMAT_CSA;
            case 'xml':
                return Format.FORMAT_XML;
            default:
                return Format.FORMAT_UNKNOWN;
        }
    }
     */

    /**
     * 将棋オブジェクトのクローンについてはディープコピー
     * (コピーして別の局面として動かすため)
     */
    clone(): Shogi {
        return Shogi.ofJkf(this.getObject());
    }

    shufflePlayers() {
        this.teban.shufflePlayers();
    }

    isReady() {
        return this.status.num == Status.INITIAL;
    }

    init() {
        if (this.isPlaying()) throw new ShogitterCoreException("対局中は初期化できません");
        this.status = {num: Status.INITIAL};
        this.date = {}
    }

    start() {
        if (!this.isReady()) throw new ShogitterCoreException("初期化されておらず、開始できません。");
        this.status = {num: Status.PLAYING};
        // this.date['start'] = new Date();
    }

    /**
     * If a move is already made.
     * TODO: This should only check the status once we have a proper UI for starting games
     */
    isPlaying() {
        return this.status['num'] == Status.PLAYING;
    }

    isEnded() {
        return this.status['num'] == Status.ENDED;
    }

    getRuleName() {
        return this.rule['name'];
    }

    getPromoted(species: Species, mode: PromotionMode) {
        for (let name in this.rule['nari']) {
            const value = this.rule.nari[name];
            if ((mode == PromotionMode.FRONT || mode == PromotionMode.FLIP) && species == value) {
                return name;
            }
            if ((mode == PromotionMode.BACK || mode == PromotionMode.FLIP) && species == name) {
                return value === null ? name : value;
            }
        }
        return species;
    }

    public static ofJkf(jkf: ShogiSerialization): Shogi {
        const shogi = new Shogi();
        shogi.constructByJSON(jkf);
        return shogi;
    }

    public static ofRuleId(ruleId: number): Shogi {
        const shogi = new Shogi();
        shogi.constructById(ruleId);
        return shogi;
    }

    /**
     * 盤を生成
     */
    constructor() {
        /* case Format.FORMAT_XML:
             this.constructByXml(data);
             break;
         case Format.FORMAT_CSA:
             this.constructByCSAFormat(data);
             break;
         case Format.FORMAT_KIF:
             this.constructByKakinokiFormat(data);
             break;
         case Format.FORMAT_KI2:
             this.constructByKakinoki2Format(data);
             break;
         */
    }

    /*
    constructByKakinoki2Format(data, nocheckoute=false){
        const lines =explode("\n", data);
        let ruleid=0;
        let constructed=false;
        for(let line of lines){
    //			print linecnt++.line;
            line=rtrim(line);
            if(line=="") continue;
            if(mb_substr(line,0,1)=="*"){
                //コメント行
                tesuu=constructed?this.kifu.getTesuu():0;
                comment=mb_substr(line,1);
                comments[tesuu]=comments[tesuu]!=null?"{comments[tesuu]}\n{comment}":comment;
                continue;
            }
            if(mb_substr(line,0,1)=="#") continue;
            if(preg_match("/^(.*)：(.*)/u", line, matches)){
                switch(matches[1]){
                    case "開始日時":
                        info['date']=matches[2];
                        break;
                    case "棋戦":
                        info['kisen']=matches[2];
                        break;
                    case "手合":
                        info['teai']=matches[2];
                        ruleid=teai2ruleid(matches[2]);
                        break;
                    case "戦型":
                        info['senkei']=matches[2];
                        break;
                    case "備考":
                        info['bikou']=matches[2];
                        break;
                    case "先手":
                    case "下手":
                        info['players'][0]=matches[2];
                        break;
                    case "後手":
                    case "上手":
                        info['players'][1]=matches[2];
                        break;
                    case "場所":
                        info['place']=matches[2];
                        break;
                    case "持ち時間":
                        info['jikan']=matches[2];
                        break;
                    default:
                        unknown[matches[1]]=matches[2];
                }
                continue;
            }else if(preg_match_all("/([▲△])(([１-９])([一二三四五六七八九])|同　?)(成?.)([左右]?)([直上寄引]?)(不成|[成打]?)/u", line, matches)){
                if(!constructed){
                    constructed=true;
                    if(DEBUG_ECHO_TIME) time=getmicrotime();
                    this.constructById(ruleid);
                    this.start();
                    if(nocheckoute){
                        this.rule['strategy']['Judge']['Oute']['ignore']=true;
                    }
                    if(DEBUG_ECHO_TIME) echo "construct: ".(getmicrotime()-time)."<br>";
                }
                foreach(matches[0] as key => value){
                    if(DEBUG_ECHO_TIME) time=getmicrotime();
                    try{
                        echo "(", matches[1][key], matches[3][key], matches[4][key], matches[5][key], matches[6][key], matches[7][key], matches[8][key], ")";
                        this.moveByKifu(matches[1][key], matches[3][key], matches[4][key], matches[5][key], matches[6][key], matches[7][key], matches[8][key]);

                    }catch(Exception e){
                        die("<pre>失敗".e.getMessage().e.getTraceAsString().this.getFormat());
                    }
                    kifu[this.kifu.getTesuu()]=this.getEncodedFormat();

                    if(DEBUG_ECHO_TIME) echo "move({matches[0][key]}): ".(getmicrotime()-time)."<br>";
                    count++;
                }
            }else if(preg_match("/まで(\d+)手で([先後上下]手)の勝ち/u", line, matches)){
                info['tesuu']=matches[1];
                info['result']=matches[2];
            }else{
                throw new Exception("棋譜を解釈できません");
            }
        }
        if(nocheckoute){
            echo "<pre>".this.getFormat();
            echo "<textarea>".this.getJSONFormat()."</textarea>";
            print_r(info);
            print_r(comments);
            print_r(kifu);
            print_r(unknown);
        }
    }*/
    /**
     * 柿木形式テキストによりコンストラクト
     * @param <type> data
     */
    /*
    constructByKakinokiFormat(data){

        preg_match_all("/手合割：(.*?)\n/u", data, matches);
        if(count(matches[1])>0){
            ruleid=this.teai2ruleid(str_replace("　","", matches[1][0]));
        }else{
            ruleid=0;
        }
        preg_match_all("/([１-９][一二三四五六七八九]|同　)(成?.)(成?)(\(\d{2}\)|打)/u", data, matches);
    //		print_r(matches);

        this.constructById(ruleid);
        this.start();

        foreach(matches[0] as tesuu => tmp){
            kifu=array();
            if(matches[4][tesuu][0]=="("){
                kifu['from']=array((int)substr(matches[4][tesuu], 1, 1), (int)substr(matches[4][tesuu], 2, 1));
                if(matches[3][tesuu]==""){
                    kifu['nari']=false;
                }else{
                    kifu['nari']=true;
                }
            }else{
                foreach(this.mochigoma.arrayMochigoma as mochigoma){
    //					echo mochigoma.species;
                    if(Koma.getData(mochigoma.species, 'shortname')==matches[2][tesuu]){
                        kifu['put']=mochigoma.species;
                        ok=true;
                        break;
                    }
                }
                if(!ok) die("持ち駒に駒が見つかりません");
            }
            if((tox=mb_substr(matches[1][tesuu],0,1))=="同"){

            }else{
                toy=mb_substr(matches[1][tesuu],1,1);
                lastto=Shogi.numerize(tox).Shogi.numerize(toy);
            }
            kifu['to']=lastto.getArray();

            this.move_d(kifu);
        }
    }*/
    /**
     * CSA形式テキストによりコンストラクト
     * @param <type> data
     */

    /*
    constructByCSAFormat(data){
        preg_match_all("/N[+-].*?\n/", data, matches);
        if(count(matches[0])>0){
            foreach(matches[0] as name){
                name=rtrim(name);
                if(name[1]=="+"){
                    this.teban.setPlayerName(0, 0, substr(name,2));
                }else if(name[1]=="-"){
                    this.teban.setPlayerName(1, 0, substr(name,2));
                }
            }
        }

        preg_match_all("/[+-]\d{4}[A-Z]{2}/", data, matches);
        this.constructById(0);
        i=1;
        this.start();
        foreach(matches[0] as kifu){
            csaname=substr(kifu, 5, 2);
            if(kifu[1]==0 && kifu[2]==0){
                //持ち駒を打つ
                foreach(this.mochigoma.arrayMochigoma as mochigoma){
                    if(!this.teban.isDirection(mochigoma.direction)) continue;
                    if(Koma.getData(mochigoma.species, 'csaname')!=csaname) continue;
                    this.move_d(array('put'=>mochigoma.species, 'to'=>array(kifu[3], kifu[4])));
                    break;
                }
            }else{
                XY=new XY(kifu[1], kifu[2], this.ban);
                if(!this.ban.exists(XY)){
    //					print_r(matches);
                    die("{i}手目において({kifu[1]},{kifu[2]})に駒が存在しません");
                }
                if(Koma.getData(this.ban.get(XY).species, 'csaname')!=csaname){
                    //駒の種類が違う
                    this.move_d(array('from'=>array(kifu[1], kifu[2]), 'to'=>array(kifu[3], kifu[4]), true));
                }else{
                    //駒の種類が同じ
                    this.move_d(array('from'=>array(kifu[1], kifu[2]), 'to'=>array(kifu[3], kifu[4]), false));
                }
            }
            i++;
        }
    }
     */
    /**
     * ルールidを用いてコンストラクト
     * @param <type> ruleid
     */
    constructById(ruleid: number) {
        this.rule = shogitterDB.getRule(ruleid);
        this.ruleid = ruleid;
        this.kifu = new Kifu(this);
        this.mochigoma = new Mochigoma(this);
        this.init();
        this.teban = new Teban(0, this.rule['players'], this, this.teban);
        this.teban.setFlags({'komaochi': this.rule['komaochi']});

        this.ban = new Ban(this.rule['size'][0], this.rule['size'][1], this, this.rule.strategy || {}, this.rule.iterator || {});
        this.ban.deserialize({});
        this.mochigoma.setStrategy(this.rule['strategy'] || {});
        //this.kifulength = strlen(max(this.rule['size'][1], this.rule['size'][0])); // TODO what does it mean?

        //盤面，持ち駒，棋譜を読み込み
        this.ban.update(this.rule.init.ban);
        this.mochigoma.update(this.rule.init.mochigoma);
        this.kifu.clear();
    }

    constructByJSON(arr: ShogiSerialization) {
        this.constructById(arr['ruleid']);
        this.status = arr.status;
        this.date = {
            start: new Date(arr.date?.start),
            end: new Date(arr.date?.end)
        };
        this.teban.setMaxTurn(arr.players[0].user?.length || 0);
        this.teban.set(arr.teban);
        this.teban.setTurn(arr.turn);
        this.jsonsystem = arr.system;
        this.ban.deserialize(arr.kifu?.[arr.kifu.length - 1]?.data || {});

        this.ban.updateByJSON(arr.ban);
        this.mochigoma.updateByJSON(arr.players);
        this.setMoving(arr.moving);

        this.teban.setArrayPlayerInfo(arr.players);

        this.kifu.updateByJSON(arr.kifu);
    }

    /**
     * XMLを用いてコンストラクト
     * @param <type> rawdata
     */

    /*
    constructByXml(rawdata){

        xml=new SimpleXMLElement(rawdata);
        ruleid=(int)xml.status["ruleid"];

        this.constructById(ruleid);

        this.teban.set(xml.status["teban"]);
        this.status=array(
            'num'=>(int)xml.status["id"],
            'message'=>(string)xml.status
    );

        //盤上の駒データ読み込み
        this.ban.updateByXML(xml.ban);

        //プレイヤー情報と持ち駒
        foreach(xml.players.player as player){
            this.teban.setPlayerName((int)player['dir'], 0, (string)player['name']);
            foreach(player.mochigoma as mochigoma){
                max=(int)mochigoma['value'];
                for(i=0;i<max;i++){
                    this.mochigoma.add((string)mochigoma['spe'], (int)player['dir']);
                }
            }
        }

        //棋譜読み込み
        foreach(xml.kifus.kifu as kifu){
            if(isset(kifu['dir'])){
                tmp=(int)kifu['dir'];
                foreach(kifu.masu as masu){
                    tmp.=sprintf("%0{this.kifulength}d%0{this.kifulength}d", masu['x'], masu['y']);
                    if(isset(masu['fromspe'])){
                        tmp.=(string)masu['fromdir'].(string)masu['fromspe'];
                    }else{
                        tmp.="___";
                    }
                    if(isset(masu['tospe'])){
                        tmp.=(string)masu['todir'].(string)masu['tospe'];
                    }else{
                        tmp.="___";
                    }
                }
                foreach(kifu.mochigoma as mochigoma){
                    value=(int)mochigoma['value'];
                    spe=(string)mochigoma['spe'];
                    dir=(int)mochigoma['dir'];
                    if(value>0){
                        tmp.="_+".sprintf("%02d", value).dir.spe;
                    }else{
                        value=-value;
                        tmp.="_-".sprintf("%02d", value).dir.spe;
                    }
                }

            }else{
                tmp="";
                foreach(kifu.player as player){
                    if((string)player['result']=='lose'){
                        tmp.="_".(int)player['dir'];
                        break;
                    }
                }
            }
            this.kifu.add(tmp, (string)kifu['value'], array('hash'=>true));
        }
    }

     */
    setMoving(moving: Moving): void {
        if (!moving) return null;
        const xy = new XY(moving['xy'][0], moving['xy'][1]);
        this.ban.ensureExists(xy);
        const koma = this.ban.get(xy);
        koma.status = moving['status'];
        this.moving = koma;
    }

    /**
     * 投了する
     * @param <type> direction
     */
    resign(direction?: Direction) {
        console.log("RESIGN", direction);
        if (!this.isPlaying()) throw new ShogitterCoreException("対局中ではありません．");
        let dirResign;
        if (typeof direction !== "undefined") {
            //手番があったらその人が投了
            dirResign = direction;
        } else {
            //なかったら手番の人が投了
            dirResign = this.teban.getNowDirection();
        }
        this.gameEnd(dirResign, dirResign, "投了", `${this.teban.getName(dirResign)}が投了しました。`);
        this.gameEndFinalize();
        this.teban.rotate();
    }

    /**
     *
     */
    draw() {
        if(!this.isPlaying()) throw new ShogitterCoreException("対局中でないので操作できません。");
        this.gameEnd(9, 9, "引き分け", "合意により引き分け");
        this.gameEndFinalize();
    }

    /**
     * n手戻す
     * @param <type> number
     */
    rollback(number: number) {
        if(!this.isPlaying()) throw new ShogitterCoreException("対局中でないので操作できません。");
        const max = this.kifu.getTesuu();
        if (max <= 0) throw new ShogitterCoreException("初期局面なので待った出来ません。");
        let te = 1;
        let teban;
        while (te <= number) {
            const thiskifu = this.kifu.get(max - te);

            const now = 1;
            teban = thiskifu[0];
            if (teban === "_") {
                //投了の場合は１回余分に減らす
                number++;
            } else {
                for (let value of this.kifu.getDataByKifu(thiskifu)) {

                    if (value['value']) {
                        //持ち駒
                        this.mochigoma.add(value.species, value.direction, value.value * -1);
                    } else {
                        //駒の移動
                        if (value.before.direction === null/* === "_"*/) {
                            this.ban.remove(value['XY']);
                        } else {
                            this.ban.add(value['XY'], value['before'].species, value['before'].direction);
                        }
                    }
                }
            }
            this.kifu.remove();
            te++;
            if (this.kifu.getLastMoving()) number++; //移動中ならもう一手戻す
            this.moving = null;
        }
        this.teban.set(teban as number);
    }

    /*
    moveByKifu(mark, x, y, species, relative, movement, nari) {
        const direction = Teban.mark2direction(mark);
        try {
            x = Shogi.numerize(x);
            y = Shogi.numerize(y);
        } catch (e) {
            x = y = 0;
        }
        species = Koma.name2species(species);

        let to;
        if (x == 0) {
            const tmp = this.kifu.getXYByTesuu(this.kifu.getTesuu() - 1);
            to = tmp['to'];
        } else {
            const toy = y;
            to = new XY(x, y, this.ban);
        }

        let movable = this.ban.arrayKikiKoma(to, species, direction);
        const count = movable.length;
        let from;
        if (count > 0 && nari != "打") {
            if (count == 1) {
                from = movable[0];
            } else {
                if (movement == "直") {
                    movable = movable
                        .filter(kiki => kiki['XY'].x == to.x)
                        .filter(kiki => direction == 0 ? kiki['XY'].y > to.y : kiki['XY'].y < to.y);
                }
                if ((species == "am" || species == "an")) {
                    if (movable.length < 2) {

                    } else if ((direction == 0 && relative == "右") || (direction == 1 && relative == "左")) {
                        movable = movable[0]['XY'].x < movable[1]['XY'].x ? [movable[0]] : [movable[1]];
                    } else if ((direction == 0 && relative == "左") || (direction == 1 && relative == "右")) {
                        movable = movable[0]['XY'].x < movable[1]['XY'].x ? [movable[1]] : [movable[0]];
                    }
                } else {
                    if ((direction == 0 && relative == "右") || (direction == 1 && relative == "左")) {
                        movable = movable.filter(kiki => to.x > kiki['XY'].x);
                    } else if ((direction == 0 && relative == "左") || (direction == 1 && relative == "右")) {
                        movable = movable.filter(kiki => kiki['XY'].x > to.x);
                    }
                }

                if ((direction == 0 && (movement == "上" || movement == "行")) || (direction == 1 && movement == "引")) {
                    movable = movable.filter(kiki => to.y < kiki['XY'].y);
                } else if ((direction == 0 && movement == "引") || (direction == 1 && (movement == "上" || movement == "行"))) {
                    movable = movable.filter(kiki => to.y > kiki['XY'].y);
                } else if (movement == "寄") {
                    movable = movable.filter(kiki => kiki['XY'].y == to.y);
                }
                if (movable.length == 1) {
                    from = movable.pop();
                } else {
                    throw new Exception(`棋譜解析エラー：mark, x, y, (to: debug) species, relative, movement, nari で着手が${movable.length}通りです`);
                }
            }
            return this.move_d({
                'from': from['XY'].getArray(),
                'to': to.getArray(),
                'nari': (nari == "成")
            });
        }

        if (this.mochigoma.exists(species, direction)) {
            return this.move_d({'put': species, 'to': to.getArray()});
        } else {
            throw new Exception(`読み込みエラー ${this.kifu.getTesuu()}手目: {kifu} 持ち駒が足りません`);
        }
    }
     */

    gameEnd(loseDirection: Direction, markDirection: Direction, kifu: string, description: string) {
        if (this.end) {
            throw new ShogitterCoreException(`複数の終了条件にひっかかりました: ${this.end.status}, ${description}`);
        }
        this.end = {'status': description, 'kifu': [`_${loseDirection}`, Teban.getMark(markDirection) + kifu]};
    }

    gameEndFinalize() {
        if (!this.end) return;

        this.status = {'num': 2, 'message': this.end['status']};
        this.kifu.add(this.end['kifu'][0], this.end['kifu'][1]);
        // this.date['end'] = new Date();
        const loseDirection = this.end['kifu'][0][1];
        for (let direction of this.teban.getIterator()) {
            this.teban.setResultToPlayer(direction, direction == loseDirection ? Result.LOSE : Result.WIN);
        }
        this.end = null;
    }

    ensureNoMoving(from: XY = null) {
        //移動中の駒があるがそれを動かそうとしていなかったらエラー
        if (this.moving && (from === null || !this.moving.XY.equals(from))) {
            throw new ShogitterCoreException('移動中の駒をもう一度動かしてください。');
        }
    }

    move(from: XY, to: XY, nari = false, direction?: Direction) {
        let fromDirection;
        this.fromDirection = fromDirection = this.ban.get(from).direction;
        if (typeof direction !== "undefined" && fromDirection !== direction) {
            throw new ShogitterCoreException("It's not your turn");
        }
        this.teban.ensureDirection(fromDirection);

        //駒ダンプ生成
        this.lastBan = this.ban.getArray();
        this.lastMochigoma = this.mochigoma.getArray();

        //駒の動きの範疇かどうか
        const movingTypes = this.ban.get(from).ensureMovable(to);

        //移動中の駒
        this.ensureNoMoving(from);

        this.ban.strategy['Destination'].executeBefore(from, to);

        //指し手postfix表記を生成
        const record = {
            mark: this.teban.getNowMark(),
            name: this.ban.get(from).getShortName(),
            postfix: this.ban.makePostfix(from, to),
            naripostfix: ""
        };

        this.ban.strategy['MoveControl'].executeBefore(from);
        this.ban.strategy['MoveEffect'].executeBefore(from);
        this.ban.strategy['CaptureControl'].execute(this.ban.get(to), this.ban.get(from));

        //移動元を拾う
        const fromPick = this.ban.take(from);

        //行き先に駒があれば拾って持ち駒に
        const captured = this.ban.strategy['Capture'].execute(to, fromDirection);

        //飛び越えた駒を取る
        if (movingTypes.indexOf(100) >= 0) {
            for (let xy of BanScanIterator.getBetween(this.ban, from, to)) {
                if (this.ban.get(xy).isNull()) continue;
                this.ban.strategy['Capture'].execute(xy, fromDirection);
            }
        }

        //移動先に置く
        this.ban.set(to, fromPick);

        //状態の変更があれば行う
        fromPick.changeStatus(movingTypes, captured);

        record.naripostfix = this.ban.strategy.Promotion.execute(to, from, captured, nari) || "";
        this.ban.strategy['MoveEffect'].executeAfter(to, captured);

        //this.ban.strategy['Destination'].executeAfter(to);

        this.ban.strategy['MoveControl'].executeAfter(to);
        this.ban.strategy.Nifu.execute(to);
        this.ban.strategy.Judge.execute(to);

        const lastXY = this.kifu.getXYByTesuu(this.kifu.getTesuu() - 1);
        this.kifu.add(
            this.makeKifu(to, from),
            `${record.mark}${lastXY && to.equals(lastXY.to) ? "同" : to.getFormat()}${record.name}${record.postfix}${record.naripostfix}`,
            {'hash': true}
        );
        this.ban.strategy['TebanRotation'].execute(this.moving, this.ban.strategy['Promotion'].flag, captured, to, from);

        this.gameEndFinalize();
    }

    put(to: XY, species: Species, direction: Direction, id?: number) {
        //駒ダンプ生成
        this.fromDirection = direction;
        this.teban.ensureDirection(direction);
        this.lastBan = this.ban.getArray();
        this.lastMochigoma = this.mochigoma.getArray();

        //移動中の駒
        this.ensureNoMoving();

        this.ban.strategy['Destination'].executeDrop(to, species, direction);

        const kifu2 = this.makePutKifuString(to, species);

        this.mochigoma.strategy['MochigomaIO'].executeOut(species, direction);
        this.ban.ensureNotExists(to);
        this.ban.setAdd(to, species, direction);

        this.ban.strategy.Promotion.executeLegal(to);

        this.ban.strategy.MoveEffect.executeDrop(to, id);
        this.ban.strategy.MoveControl.executeDrop(to);
        this.ban.strategy.Nifu.execute(to);

        this.ban.strategy.Judge.execute(to, true);

        this.kifu.add(
            this.makeKifu(to, null),
            kifu2,
            {'hash': true}
        );

        this.teban.rotate();
        this.gameEndFinalize();
    }

    shouldAskPromotion(to: XY, from: XY) {
        const captured = this.ban.exists(to);
        const direction = this.ban.get(from).direction;
        return this.ban.strategy.Promotion.shouldAskPromotion(to, from, captured, direction);
    }

    /**
     * データを読み込んでmove
     * @param command
     */
    runCommand(command: KifuCommand) {
        switch(command.type) {
            case "reset":
                this.constructById(command.ruleId);
                return;
            case "start":
                this.start();
                return;
            case "draw":
                this.draw();
                return;
            case "pass":
                if (typeof command.direction === "number") {
                    this.teban.ensureDirection(command.direction);
                }
                this.pass();
                return;
                /*
            case "changedirection":
                if(this.isPlaying()) throw new ShogitterCoreException("対局中は先後交代できません。");
                this.teban.changeDirection();
                return;
                 */
        }

        if (this.isEnded()) {
            throw new ShogitterCoreException("対局中ではありません．");
        }
        if (command.type === "resign") {
            return this.resign(command.direction);
        }
        if (command.type === "rollback") {
            const amount = typeof command.direction !== "undefined" && this.teban.getNowDirection() === command.direction ? 2 : 1;
            return this.rollback(Math.min(amount, this.kifu.getTesuu()))
        }
        if (typeof command.direction === "number") {
            this.teban.ensureDirection(command.direction);
        }
        switch (command.type) {
            case "move":
                return this.move(
                    new XY(command.from[0], command.from[1]),
                    new XY(command.to[0], command.to[1]),
                    command.nari
                );
            case "put":
                return this.put(
                    new XY(command.to[0], command.to[1]),
                    command.put,
                    command.direction,
                    command.id
                );
            default:
                throw new ShogitterCoreException("Unknown command type: "+(command as any).type, 1);
        }
        return true;
    }

    /**
     * lastBanとbanの差分を取り棋譜を作る
     * @return <type>
     * @param to
     * @param from 打つ場合はnull
     */
    makeKifu(to: XY, from?: XY): KifuMove {
        const diffs = [...this.ban.getDifference(this.lastBan, to, from),
            ...this.mochigoma.getDifference(this.lastMochigoma)]
        return [this.teban.get(), ...diffs];
    }

    /**
     * 持ち駒を使うときの棋譜表記
     * @param <type> sashite
     */
    makePutKifuString(to: XY, species: Species) {
        const direction = this.teban.getNowDirection();

        //「打」　そのマスにその種類・向きの駒がある場合、打をつける
        let utu = "";
        for (let kiki of this.ban.arrayKikiInSpeDir(species, false, direction, false, false)) {
            if (kiki['XY'].equals(to)) {
                utu = "打";
                break;
            }
        }
        const name = Koma.getStatelessData(species, 'shortname') || Koma.getStatelessData(species, 'name');//略名があればそれを表示
        return Teban.getMark(direction) + to.getFormat() + name + utu;
    }

/////////////////////////////////変則将棋
    /**
     * パスする（移動中の駒を移動済みにして手番を渡す）
     * @return <type>
     */
    pass() {
        if (this.moving == null) {
            if (this.ban.strategy['TebanRotation'].canPass()) {
                this.kifu.unsetLastMoving();
                this.teban.rotate();
            } else {
                throw new ShogitterCoreException("移動中の駒がありません。このボタンは多段階移動をする駒の移動を終了して手番を渡す時に使います。");
            }
        } else {
            if (this.ban.get(this.moving.XY).get("nopass")) {
                throw new ShogitterCoreException("この駒で手番を渡すことはできません");
            } else {
                this.kifu.unsetLastMoving();
                this.moving = null;
                this.teban.rotate();
            }
        }
    }

    /**
     * 内部形式の棋譜ファイルを返す
     */
    /*
    getFormat() {
        return this.ruleid + "\n"
            + this.status.join("|") + "\n"
            + this.teban.get() + "\n"
            + this.ban
            + this.mochigoma
            + this.kifu;
    }
     */

    getKyokumen() {
        return this.ban.__toString() + this.mochigoma.__toString();
    }

    getHash() {
        return javaHashCode(this.getKyokumen()).toString(16);
    }

    /*
    getHTMLFormat(tesuu){
        ret="<html><head><title>将棋ったー 観戦</title></head><body>";

        mochigoma=this.mochigoma.getArray();
        ret="<font color='red'>後手：";
        if(count(mochigoma[1])>0){
            foreach(mochigoma[1] as species => value){
                ret.= Koma.getData(species, 'shortname').(value>1?num2kan_decimal(value):"");
            }
        }else{
            ret.= "なし";
        }
        ret.= "</font><br>";

        ret.=this.ban.sprintf(function(species, direction){
            if(species==null){
                name="＿";
            }else{
                name=Koma.getData(species, 'shortname');
            }

            if(direction==1){
                return "<font color='red'>".name."</font>";
            }else{
                return name;
            }
        }, "<br>\n");

        ret.= "先手：";
        if(count(mochigoma[1])>0){
            foreach(mochigoma[0] as species => value){
                ret.= Koma.getData(species, 'shortname').(value>1?num2kan_decimal(value):"");
            }
        }else{
            ret.= "なし";
        }
        ret.="<br><a href='?tesuu=".this.kifu.getTesuu()."'>更新</a>(20秒程度間隔を)<br>";
        ret.="<a href='?'>全棋譜を表示</a><br>".(tesuu==0?"初手からの指し手":"{tesuu}手目以降の着手：");
        ret.=this.kifu.getString(tesuu?tesuu:0);
        return ret."</body></html>";
    }
     */
    getObject(): ShogiSerialization {
        let moving: Moving;
        if (this.moving) {
            moving = {xy: this.moving.XY.getArray(), 'status': this.moving.status};
        } else {
            moving = null;
        }
        const ban: BanObj = [];
        for (let i = 1; i <= this.rule['size'][0]; i++) {
            ban.push([]);
            for (let j = 1; j <= this.rule['size'][1]; j++) {
                const koma = this.ban.get(new XY(i, j));
                if (koma.isNull()) {
                    ban[i - 1][j - 1] = [];
                } else {
                    ban[i - 1][j - 1] = [koma.direction, koma.species];
                }
            }
        }
        const players = this.teban.getArrayPlayerInfo();
        const mochigoma = this.mochigoma.getArray();
        const playersWithMochigoma: Player[] = [];
        for (let direction of this.teban.getIterator()) {
            playersWithMochigoma[direction] = {...players[direction], mochigoma: {}} || {
                user: [{name: "", id: ""}],
                mochigoma: {}
            }
            playersWithMochigoma[direction].mochigoma = {};
            for (let species in mochigoma[direction]) {
                playersWithMochigoma[direction].mochigoma[species] = mochigoma[direction][species];
            }
        }

        // const max = this.kifu.getTesuu();
        const kifu = this.kifu.getArray();

        const debug = ""/*this.debug.serialize(this)*/;
        const system = this.jsonsystem;
        return {
            version: "0.0",
            status: this.status,
            ruleid: this.ruleid,
            teban: this.teban.get(),
            turn: this.teban.getTurn(),
            date: {
               /* start: this.date.start?.toISOString(),
                end: this.date.end?.toISOString()*/
            },
            ban,
            moving,
            players: playersWithMochigoma,
            debug,
            system,
            kifu
        };
    }

    getJSONFormat(): string {
        return JSON.stringify(this.getObject());
    }

    getLoser() {
        const kifu = this.kifu.get(this.kifu.getTesuu() - 1);
        if (kifu[0] !== "_") throw new ShogitterCoreException("まだゲームは終了していません。");
        return kifu[1];
    }

    getEncodedXY(x: number, y: number) {
        return (x - 1) * 9 + y - 1;
    }

    /*
    getEncodedFormat(){
        //あたらしく
        const encoded=this.ban.getEncodedFormat();
        const ret="";
        const koma=[
            [4, "ag"],
            [4, "af"],
            [4, "ae"],
            [4, "ad"],
            [4, "ac"],
            [4, "ab"],
            [18, "aa"]
        );
        mochigoma=this.mochigoma.getArray();
        foreach(encoded as i => section){
            section=array_map(function(value){
                return array(5, value);
            }, section);
            section[]=array(koma[i][0], mochigoma[0][koma[i][1]]?mochigoma[0][koma[i][1]]:0);
            if(i==6) section[]=array(1, this.teban.get());
            ret.=binhex(binstringify(mergeBits(section), 64))." ";
        }
        return ret;
    }

     */
    /**
     * 当初予定のエンコード，可変長ハフマン符号
     * @return type
     */
    /*
    getEncodedFormat2(){
        komaarr=array(
            '__'=>"0",
            'ab'=>"100",//香
            'ae'=>"101",//金
            'ac'=>"1100",//桂
            'ad'=>"1101",//銀
            'ag'=>"1110",//飛
            'af'=>"11110",//角
            'am'=>"1111100",//馬
            'an'=>"1111101",//龍
            'ai'=>"1111110",//と
            'ak'=>"11111110",//成桂
            'al'=>"111111110",//成銀
            'aj'=>"111111111",//成香
    );

        fudan=array(
            3=>"0",
            4=>"10",
            5=>"110",
            0=>"1110",//なし
            6=>"11110",
            2=>"111110",
            7=>"1111110",
            8=>"11111110",
            1=>"11111111",
    );

        for(i=1; i<=this.rule['size'][0]; i++){
            fu=array(0, 0);
            for(j=1; j<=this.rule['size'][1]; j++){
                XY=new XY(i, j, this.ban);
                koma=this.ban.get(XY);
                switch(koma.species){
                    case 'aa':
                        fu[koma.direction]=this.ban.calcDan(XY, 1-koma.direction);
    //						banmen.=" ".komaarr['__'];
                        break;
                    case 'ah':
                        ou[koma.direction]=this.getEncodedXY(i, j);
                        //					encoded.addOu(this.getEncodedXY(i, j), koma.direction);
    //						banmen.=" ".komaarr['__'];
                        break;
                    case null:
                        //					encoded.addBanmenSpace();
                        banmen.=komaarr['__'];
                        break;
                    default:
                        //					encoded.addBanmen(koma);
                        banmen.=komaarr[koma.species].koma.direction;
                }
            }
            foreach(array(0,1) as direction){
                //			encoded.addFu(fu[direction], direction);
                //echo "{i}列 direction, {fu[direction]};";
                fus[direction].=fudan[fu[direction]];
            }
        }
        //	echo "<br>".encoded.dump();
        bin=(this.teban.get()).fus[0].fus[1].sprintf("%07s", decbin(ou[0])).sprintf("%07s", decbin(ou[1])).banmen.this.mochigoma.getEncodedFormat();
        //echo "fu0:".fus[0]." fu1:".fus[1].";";
        return binhex(bin);
        //"<br>".bin64(bin)
    }

     */
    /**
     * 柿木形式の棋譜ファイルを返す
     * @param <type> format
     * @return <type>
     */
    /*
    getKakinokiFormat(format){
        if(this.teban.getMaxTeban()!=2){
            throw new Exception("プレイヤーが２人の場合以外は柿木形式で出力する事はできません。");
        }
        if(format==1){
            //柿木１
            foreach(array(1,0) as player){
                mochigoma[player]=2;
            }
            return="# ----  将棋ったー http://shogitter.com 柿木形式棋譜ファイル  ----\n"
                ."開始日時：2010/01/01(日) 00:00:00\n"
                ."終了日時：2010/01/01(日) 00:00:00\n"
                ."手合割：平手\n"
                ."先手：".this.teban.getJoinedPlayerName(0)."\n"
                ."後手：".this.teban.getJoinedPlayerName(1)."\n"
                ."手数----指手---------消費時間--\n";
            max=this.kifu.getTesuu();
            for(i=0;i<max;i++){
                tmp=sprintf("%4s", i+1)." ";
                kifu=mb_convert_kana(this.kifu.getKifu(i),"N");
                kifu=str_replace("同", "同　", kifu);
                kifu=preg_replace("/^(▲|△)/", "", kifu);
                kifu=preg_replace("/(右|左|上|寄|引|打)*BOGUSBOGUSBOGUSBOGUSBOGUSBOGUSBOGUSBOGUS/", "", kifu);
                jmax=9-mb_strlen(kifu)*2;
                kifudata=this.kifu.getDataByTesuu(i);
                if(kifudata['teban']==="_"){
                    jmax+=4;
                }else if(kifudata['koma']){
                    kifu.="打";
                    jmax+=2;
                }else{
                    kifu.="(".kifudata['from']['XY'].x.kifudata['from']['XY'].y.")";
                }

                for(j=0;j<jmax;j++){
                    kifu.=" ";
                }
                return.=tmp.kifu."( 0:00/00:00:00)\n";
            }
        }else{
            //柿木２
            return="開始日時：2010/01/01(日) 00:00:00\n"
                ."終了日時：2010/01/01(日) 00:00:00\n";
            max=this.kifu.getTesuu();
            for(i=0;i<max;i++){
                kifu=mb_convert_kana(this.kifu.getKifu(i),"N");
                kifu=str_replace("同", "同　", kifu);
                jmax=12-mb_strlen(kifu)*2;
                for(j=0;j<jmax;j++){
                    kifu.=" ";
                }
                if(i%6==0) return.="\n";
                return.=sprintf("%-12s", kifu);
            }
        }
        return return;
    }
    */
    /**
     * CSA形式の棋譜ファイルを返す
     * @return <type>
     */
    /*
    getCSAFormat(){
        return="' ------------ CSA形式棋譜ファイル\n"
            ."' -- 将棋ったー http://shogitter.com\n"
            ."N+".this.teban.getJoinedPlayerName(0)."\n"
            ."N-".this.teban.getJoinedPlayerName(1)."\n"
            .(this.teban.isDirection(0)?"+":"-")."\n";
        max=this.kifu.getTesuu();
        if(is_array(this.kifu.get(0))){
            for(i=0;i<max;i++){
                kifu=this.kifu.get(i);
                if(kifu[0]==="_"){
                    tmp="%TORYO";
                }else{
                    if(kifu[0]=="0"){
                        tmp="+";
                    }else{
                        tmp="-";
                    }
                    if(count(kifu[2])==3){
                        tmp.="00";
                    }else{
                        tmp.=kifu[2][0].kifu[2][1];
                    }
                    toxy=kifu[1][0].kifu[1][1];
                    tospe=kifu[1][3][1];
                    tmp.=toxy.Koma.getData(tospe, 'csaname');
                }
                return.=tmp.",T0\n";
            }
        }else{
            //旧テキスト形式
            for(i=0;i<max;i++){
                kifu=this.kifu.get(i);
                if(kifu[0]==="_"){
                    tmp="%TORYO";
                }else{
                    if(kifu[0]=="0"){
                        tmp="+";
                    }else{
                        tmp="-";
                    }
                    fromxy=substr(kifu,9,2);
                    toxy=substr(kifu,1,2);
                    tospe=substr(kifu,7,2);
                    tmp.=(fromxy[0]==="_"?"00":fromxy).toxy.Koma.getData(tospe, 'csaname');
                }
                return.=tmp.",T0\n";
            }
        }
        return return;
    }

     */
    /**
     * 文字列からruleidに変換
     * @param <type> teai
     * @return <type>
     */

    /*
    static teai2ruleid(teai){
        if(preg_match("/平手/", teai)) return 0;
        if(preg_match("/飛車香落/", teai) ||preg_match("/飛香落/", teai)) return 4;
        if(preg_match("/香落/", teai)) return 1;
        if(preg_match("/角落/", teai)) return 2;
        if(preg_match("/飛落/", teai) || preg_match("/飛車落/", teai)) return 3;
        if(preg_match("/二枚落/", teai)) return 5;
        if(preg_match("/四枚落/", teai)) return 6;
        if(preg_match("/六枚落/", teai)) return 7;
        if(preg_match("/八枚落/", teai)) return 8;
        if(preg_match("/十枚落/", teai)) return 9;
        if(preg_match("/歩三兵/", teai)) return 10;
        if(preg_match("/裸王/", teai) || preg_match("/裸玉/", teai)) return 10;
        return 0;
    }

     */
    static numerize(string: string) {
        switch (string) {
            case "１":
            case "一":
                return 1;
            case "２":
            case "二":
                return 2;
            case "３":
            case "三":
                return 3;
            case "４":
            case "四":
                return 4;
            case "５":
            case "五":
                return 5;
            case "６":
            case "六":
                return 6;
            case "７":
            case "七":
                return 7;
            case "８":
            case "八":
                return 8;
            case "９":
            case "九":
                return 9;
        }
        throw new ShogitterCoreException("Not a Number: string");
    }

    /*
    getRuleHTML(){
        ret="";
        foreach(array_merge(this.ban.strategy, this.mochigoma.strategy) as strategy){
            val=strategy.toHTML();
            if(val!==null)ret.="<li>".strategy.getStrategyGenre().": ".val;
        }
        return ret;
    }

     */
}

/*
class BulkShogi extends Shogi{
    move(from: XY, to: XY, nari){
    fromDirection=this.ban.get(from).direction;
    this.teban.ensureDirection(fromDirection);

    //駒ダンプ生成
    this.lastBan=this.ban.getArray();
    this.lastMochigoma=this.mochigoma.getArray();

    //指し手postfix表記を生成
    record=array(
        'mark'=>this.teban.getNowMark(),
    'name'=>this.ban.get(from).getShortName(),
    'postfix'=>this.ban.makePostfix(from, to),
);

    //移動元を拾う
    fromPick=this.ban.take(from);

    //行き先に駒があれば拾って持ち駒に
    captured=this.ban.strategy['Capture'].execute(to, fromDirection);

    //移動先に置く
    this.ban.set(to, fromPick);

    record['naripostfix']=this.ban.strategy['Promotion'].execute(to, from, captured, nari);

    lastXY=this.kifu.getXYByTesuu(this.kifu.getTesuu()-1);
    this.kifu.add(
        this.makeKifu(to, from),
    record['mark'].(lastXY['to'].equals(to)?"同":to.getFormat()).record['name'].record['postfix'].record['naripostfix'],
    array('hash'=>true, 'moving'=>this.moving?true:false)
);
    if(!this.moving){
    this.teban.rotate();
}
this.gameEndFinalize();
}
move2(to: XY, species, direction){
    //駒ダンプ生成
    this.lastBan=this.ban.getArray();
    this.lastMochigoma=this.mochigoma.getArray();

    kifu2=this.makePutKifuString(to, species);

    this.mochigoma.strategy['MochigomaIO'].executeOut(species, direction);
    this.ban.ensureNotExists(to);
    this.ban.setAdd(to, species, direction);

    this.ban.strategy['Promotion'].executeLegal(to);

    this.kifu.add(
        this.makeKifu(to, null),
        kifu2,
        array('hash'=>true)
);

    this.teban.rotate();
    this.gameEndFinalize();
}
constructByKakinoki2Format(data, nocheckoute=false){
    array=explode("\n", data);
    ruleid=0;
    constructed=false;
    foreach(array as line){
        //			print linecnt++.line;
        line=rtrim(line);
        if(line=="") continue;
        if(mb_substr(line,0,1)=="*"){
            //コメント行
            tesuu=constructed?this.kifu.getTesuu():0;
            comment=mb_substr(line,1);
            comments[tesuu]=comments[tesuu]!=null?"{comments[tesuu]}\n{comment}":comment;
            continue;
        }
        if(mb_substr(line,0,1)=="#") continue;
        if(preg_match("/^(.*)：(.*)/u", line, matches)){
            switch(matches[1]){
                case "開始日時":
                case "終了日時":
                    matches[2]=new MongoDate(strtotime(matches[2]));
                    break;
            }
            info[matches[1]]=matches[2];
            continue;
        }else if(preg_match_all("/([▲△])(([１-９])([一二三四五六七八九])|同　?)(成?.)([左右]?)([直上寄引行]?)(不成|[成打]?)/u", line, matches)){
            if(!constructed){
                constructed=true;
                if(DEBUG_ECHO_TIME) time=getmicrotime();
                this.constructById(ruleid);
                this.start();
                if(nocheckoute){
                    this.rule['strategy']['Judge']['Oute']['ignore']=true;
                }
                if(DEBUG_ECHO_TIME) echo "construct: ".(getmicrotime()-time)."<br>";
            }
            foreach(matches[0] as key => value){
                if(DEBUG_ECHO_TIME) time=getmicrotime();
                //				try{
                //			echo "(", matches[1][key], matches[3][key], matches[4][key], matches[5][key], matches[6][key], matches[7][key], matches[8][key], ")";
                this.moveByKifu(matches[1][key], matches[3][key], matches[4][key], matches[5][key], matches[6][key], matches[7][key], matches[8][key]);

                //				}catch(Exception e){
                //					die("<pre>失敗".e.getMessage().e.getTraceAsString().this.getFormat());
                //				}
                //kifu[this.kifu.getTesuu()]=this.getEncodedFormat();
                //	kifu2[this.kifu.getTesuu()]=this.getEncodedFormat2();

                if(DEBUG_ECHO_TIME) echo "move({matches[0][key]}): ".(getmicrotime()-time)."<br>";
                count++;
            }
        }else if(preg_match("/まで(\d+)手で(([先後上下]手)(の)(反則)?勝ち|千日手|持将棋|中断)/u", line, matches)){
            info['手数']=matches[1];
            info['結果']=matches[4]?matches[2]:matches[3];
            if(matches[5]) info['反則']=true;
        }else{
            throw new Exception("棋譜を解釈できません: ".line);
        }
    }
//		echo "<pre>".this.getFormat();
//		echo "<textarea>".this.getJSONFormat()."</textarea>";
    obj[0]=array('comment'=>comments[0]);
    foreach(this.kifu.arrayKifu as tesuu => kifu){
        newkifu = array('direction'=>kifu['move'][0],
            'to'=>array(kifu['move'][1][0], kifu['move'][1][1]),
            'koma'=>this.getKomaSpecies(kifu['move'][1][3][1]));
        if(kifu['move'][1][2][1])newkifu['pick']=this.getKomaSpecies(kifu['move'][1][2][1]);
        if(kifu['move'][1][3][1]!=kifu['move'][2][2][1])newkifu['nari']=true;
        if(count(kifu['move'][2])==4){
            newkifu['from']=array(kifu['move'][2][0], kifu['move'][2][1]);
        }else{

        }
        //		print_r(newkifu);
        obj[tesuu+1]=array('move'=>newkifu);
        if(comments[tesuu+1])obj[tesuu+1]['comment']=comments[tesuu+1];
        //		echo "<br>";
    }
    //	print_r(info);
    //print_r(comments);
    return array('header'=>info, 'kifu'=>obj, 'rule'=>"hirate.rule.json");
    /*print_r(kifu);
    print_r(kifu2);
    print_r(kifu3);*BOGUSBOGUS/
}
getHash(){
    return null;
}
static getKomaSpecies(str){
    if(!str) return null;
    hoge = array("aa"=>0,
        "ab"=>1,
        "ac"=>2,
        "ad"=>3,
        "ae"=>4,
        "af"=>5,
        "ag"=>6,
        "ah"=>7,
        "ai"=>8,
        "aj"=>9,
        "ak"=>10,
        "al"=>11,
        "am"=>12,
        "an"=>13,);
    return hoge[str];
}
}

 */
