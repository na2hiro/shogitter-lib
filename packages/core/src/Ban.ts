import XY, { RelativeType, RelXY } from "./XY.js";
import { ShogitterCoreException } from "./utils/phpCompat.js";
import { Teban } from "./Teban.js";
import { Kiki, Koma, KomaObj } from "./Koma.js";
import Shogi from "./Shogi.js";
import { BanScanIterator, NormalBanIterator } from "./Iterator.js";
import {
  BanStrategy,
  BanStrategyName,
  BanStrategyNameWithContainer,
  generateStrategy,
  generateStrategyContainer,
  IteratorConfig,
  StrategyConfig,
} from "./strategy/StrategyFactory.js";
import { Flags } from "./Flags.js";
import { StrategySerialization } from "./strategy/Strategy.js";
import { MoveDiff } from "./Kifu.js";
import { Direction } from "./Direction.js";

export type Species = string; // really?

export type BanObj = KomaObj[][];

const strategyNames: BanStrategyName[] = [
  "KomaSuggest",
  "Nifu",
  "Capture",
  "Promotion",
  "CaptureControl",
  "TebanRotation",
  "Destination",
];
const stratgyContainerNames: BanStrategyNameWithContainer[] = [
  "Judge",
  "MoveControl",
  "MoveFilter",
  "MoveEffect",
];

// TODO it was a iteratoraggregate. Call getIterator() for the iteration usage
export default class Ban {
  arrayBan: Koma[][];
  parent: Shogi;
  x: number;
  y: number;
  strategy: BanStrategy;
  private banScanIterator: { name: string; option: any[] };

  constructor(
    x: number,
    y: number,
    parent: Shogi,
    strategy: StrategyConfig = {},
    iterator: IteratorConfig = {}
  ) {
    this.parent = parent;
    this.x = x;
    this.y = y;
    this.arrayBan = [];
    for (let i = 1; i <= x; i++) {
      this.arrayBan[i] = [];
    }

    const generatedStrategy: any = {};
    for (let name of strategyNames) {
      generatedStrategy[name] = generateStrategy(name, strategy[name], this);
    }
    for (let name of stratgyContainerNames) {
      generatedStrategy[name] = generateStrategyContainer(
        name,
        strategy[name],
        this
      );
    }

    this.strategy = generatedStrategy;

    let name = "Normal";
    let option = [];
    if (iterator.BanScan) {
      for (let n in iterator.BanScan) {
        const opt = iterator.BanScan[n];
        name = n;
        option = opt;
        break;
      }
    }
    this.banScanIterator = { name, option };
  }

  __toString() {
    let ret = "";
    for (let j = 1; j <= this.y; j++) {
      for (let i = this.x; i >= 1; i--) {
        ret += this.get(new XY(i, j));
      }
      ret += "\n";
    }
    return ret;
  }

  public deserialize(obj: StrategySerialization) {
    for (let name of strategyNames) {
      this.strategy[name].deserialize(obj);
    }
    for (let name of stratgyContainerNames) {
      this.strategy[name].deserialize(obj);
    }
  }

  public serialize(): StrategySerialization {
    let obj = {};
    for (let name of strategyNames) {
      obj = this.strategy[name].serialize(obj);
    }
    for (let name of stratgyContainerNames) {
      obj = this.strategy[name].serialize(obj);
    }
    return obj;
  }

  public komaSuggest(koma: Koma) {
    return this.strategy.KomaSuggest.execute(koma);
  }

  public moveFilter(
    arrayMovable: Kiki[],
    to: XY,
    direction: Direction,
    species: Species,
    flags: Flags
  ): Kiki[] {
    return this.strategy.MoveFilter.execute(
      arrayMovable,
      to,
      direction,
      species,
      flags
    );
  }

  public getIterator() {
    return new NormalBanIterator(this.arrayBan, [this.x, this.y]);
  }

  public getScanIterator(position: XY, vector: RelXY, flags: Flags = {}) {
    return BanScanIterator.create(
      this.banScanIterator["name"],
      this,
      position,
      vector,
      {
        ...flags,
        iterator: this.banScanIterator.option,
      }
    );
  }

  createKoma(xy: XY = null, species?: Species, direction?: Direction) {
    if (!species) {
      return this.createNullKoma(xy);
    }
    const klass = Koma.getClass(Koma.getStatelessData(species)["class"]);
    // TODO check if it works
    return new klass(species, direction, xy, this);
  }

  createNullKoma(xy: XY = null) {
    return new Koma(null, null, xy, this);
  }

  getDifference(ban: BanObj, to: XY, from: XY = null): MoveDiff[] {
    const thisBan = this.getArray();
    const ret: MoveDiff[] = [];
    let fromkifu: MoveDiff, tokifu: MoveDiff;
    for (let x = 1; x <= this.x; x++) {
      for (let y = 1; y <= this.y; y++) {
        const last = ban[x][y];
        const now = thisBan[x][y];
        if (
          (last.length == 0 && now.length == 0) ||
          (last[0] == now[0] && last[1] == now[1])
        )
          continue;
        const kifu: MoveDiff = [x, y, last, now];
        //toとfromは前に出す
        if (x == to.x && y == to.y) {
          tokifu = kifu;
        } else if (from !== null && x == from.x && y == from.y) {
          fromkifu = kifu;
        } else {
          ret.push(kifu);
        }
      }
      //return.= "\n";
    }
    //行き先に変化がなかった場合でも強制的に追加する
    if (!tokifu) {
      const tmp = thisBan[to.x][to.y];
      tokifu = [to.x, to.y, tmp, tmp];
    }
    if (!fromkifu && from !== null) {
      const tmp = thisBan[from.x][from.y];
      fromkifu = [from.x, from.y, tmp, tmp];
    }

    if (fromkifu != null) ret.unshift(fromkifu);
    return [tokifu, ...ret];
  }

  /**
   * 左右などのpostfixを返す
   * @param <type> fromx
   * @param <type> fromy
   * @param <type> tox
   * @param <type> toy
   * @return <type>
   */
  makePostfix(from: XY, to: XY) {
    const fromSpe = this.get(from).species;
    const fromDir = this.get(from).direction;

    const arrayKikiKoma = this.arrayKikiKoma(to, fromSpe, fromDir);
    //そのマスに移動できる駒が１つだったら(今動かしたい駒のみ)
    if (arrayKikiKoma.length == 0) return ""; //postfixなし
    //if(count(arrayKikiKoma)==0) throw new Exception("postfix生成エラー");

    //複数の駒が移動できる場合はpostfixをつける
    const thisvec = new RelXY(to.x - from.x, to.y - from.y);
    thisvec.turnReverse(fromDir);
    let flagRight,
      flagLeft,
      flagSameLR,
      flagUp,
      flagDown,
      flagSameUD,
      LRPostfix = "",
      noUD,
      UDPostfix = "",
      noLR;
    for (let kiki of arrayKikiKoma) {
      if (kiki["XY"].equals(from)) {
        continue;
      }
      const vec = new RelXY(to.x - kiki["XY"].x, to.y - kiki["XY"].y);
      vec.turnReverse(fromDir);
      if (vec.x > 0) flagRight = 1; //右にある
      if (vec.x < 0) flagLeft = 1; //左にある
      if (vec.x == 0) flagSameLR = 1; //同じ筋にある
      if (vec.y > 0) flagUp = 1; //上にある
      if (vec.y < 0) flagDown = 1; //下にある
      if (vec.y == 0) flagSameUD = 1; //同じ段にある
    }
    if (thisvec.x == 0) {
      //同じ筋から
      if (flagRight || flagLeft) LRPostfix = "直";
      if (!flagSameLR) noUD = 1;
    } else if (thisvec.x < 0) {
      //左の筋から
      if (flagRight || flagSameLR) LRPostfix = "左";
      if (!flagLeft) noUD = 1;
    } else {
      //右の筋から
      if (flagLeft || flagSameLR) LRPostfix = "右";
      if (!flagRight) noUD = 1;
    }

    if (thisvec.y == 0) {
      //同じ段
      if (flagUp || flagDown) UDPostfix = "寄";
      if (!flagSameUD) noLR = 1;
    } else if (thisvec.y > 0) {
      //上から
      if (flagDown || flagSameUD) UDPostfix = "引";
      if (!flagUp) noLR = 1;
    } else {
      //下から
      if (flagUp || flagSameUD) UDPostfix = "上";
      if (!flagDown) noLR = 1;
    }

    if (noLR == 1) {
      return UDPostfix;
    } else {
      if (noUD == 1) {
        return LRPostfix;
      } else {
        return LRPostfix + UDPostfix;
      }
    }
  }

  /*
    getEncodedFormat(){
        const arr=[
            [[[1,1], [4,3]]],
            [[[1,4], [3,7]]],
            [[[4,7], [5,7]], [[1,8], [5,9]]],
            [[[6,7], [9,9]]],
            [[[7,3], [9,6]]],
            [[[5,1], [9,2]], [[5,3], [6,3]]],
            [[[4,4], [6,6]]],
        ];
        let ret=[];
        foreach(arr as secnum => section){
            foreach(section as pairs){
                for(y=pairs[0][1];y<=pairs[1][1];y++){
                    for(x=pairs[0][0]; x<=pairs[1][0]; x++){
                        if(this.arrayBan[x][y].direction!==null&&this.arrayBan[x][y].direction!==""){
                            ret[secnum][]=(this.arrayBan[x][y].direction<<4)|Koma.getEncoded(this.arrayBan[x][y].species);
                        }else{
                            ret[secnum][]=0;
                        }
                    }
                }
            }
        }
        return ret;
    }
     */
  reset() {
    this.arrayBan = [];
  }

  update(array: BanObj) {
    for (let x = 1; x <= this.x; x++) {
      for (let y = 1; y <= this.y; y++) {
        const komaarr = array[x - 1][y - 1];
        if (komaarr.length == 0) {
          this.add(new XY(x, y), null, null);
        } else {
          this.add(new XY(x, y), komaarr[1], komaarr[0]);
        }
      }
    }
  }

  updateByJSON(ban: BanObj) {
    for (let i = 1; i <= this.x; i++) {
      for (let j = 1; j <= this.y; j++) {
        const xy = new XY(i, j);
        if (ban[i - 1][j - 1].length == 0) {
          this.add(xy, null, null);
        } else {
          this.add(xy, ban[i - 1][j - 1][1], ban[i - 1][j - 1][0]);
        }
      }
    }
  }

  /**
   * 敵陣何段目か調べる
   * @param <type> fromx
   * @param <type> fromy
   * @param <type> tox
   * @param <type> toy
   * @param <type> direction
   * @return <type>
   */
  calcDan(xy: XY, direction: Direction) {
    //成り段計算して成り処理
    switch (direction) {
      case Direction.BLACK:
        return xy.y;
      case Direction.WHITE:
        return this.y - xy.y + 1;
      case Direction.LEFT:
        return xy.x;
      case Direction.RIGHT:
        return this.x - xy.x + 1;
    }
    throw new ShogitterCoreException("illegal direction at calcDan");
  }

  /**
   * 駒を置く
   * @param unknown_type x
   * @param unknown_type y
   * @param unknown_type species
   * @param unknown_type direction
   */
  add(xy: XY, species?: Species, direction?: Direction) {
    this.arrayBan[xy.x][xy.y] = this.createKoma(xy, species, direction);
  }

  /**
   * 駒を取り除く
   * @param unknown_type x
   * @param unknown_type y
   */
  remove(xy: XY) {
    this.arrayBan[xy.x][xy.y] = this.createNullKoma(xy);
  }

  /**
   * 種類を得る
   * @param unknown_type x
   * @param unknown_type y
   */
  getSpecies(xy: XY) {
    return this.get(xy).species;
  }

  /**
   * 向きを得る
   * @param unknown_type x
   * @param unknown_type y
   */
  getDirection(xy: XY) {
    return this.get(xy).direction;
  }

  /**
   * 駒をコピーする
   * @param unknown_type tox
   * @param unknown_type toy
   * @param unknown_type fromx
   * @param unknown_type fromy
   */
  copy(to: XY, from: XY) {
    if (this.exists(from)) {
      const fromkoma = this.get(from);
      this.arrayBan[to.x][to.y] = this.createKoma(
        to,
        fromkoma.species,
        fromkoma.direction
      );
    } else {
      this.remove(to);
    }
  }

  move(to: XY, from: XY) {
    this.set(to, this.cut(from));
  }

  /**
   * 駒の種類を変更する
   * @param unknown_type x
   * @param unknown_type y
   * @param unknown_type species
   */
  setSpecies(xy: XY, species: Species) {
    this.ensureExists(xy);
    this.get(xy).species = species;
  }

  /**
   * 駒の向きを変更する
   * @param unknown_type x
   * @param unknown_type y
   * @param unknown_type direction
   */
  setDirection(xy: XY, direction: Direction) {
    this.ensureExists(xy);
    this.get(xy).direction = direction;
  }

  /**
   * その座標の駒オブジェクトを得る
   * @param unknown_type x
   * @param unknown_type y
   */
  get(xy: XY): Koma {
    this.ensureLegal(xy);
    return this.arrayBan[xy.x][xy.y];
  }

  cut(xy: XY): Koma {
    const get = this.get(xy);
    this.remove(xy);
    return get;
  }

  public take(xy: XY) {
    const get = this.get(xy);
    if (get.isNull()) {
      throw new ShogitterCoreException(`${xy}: 駒がありません。`, 1);
    }
    this.remove(xy);
    return get;
  }

  public set(xy: XY, koma: Koma) {
    this.ensureLegal(xy);
    koma.setXY(xy);
    this.arrayBan[xy.x][xy.y] = koma;
  }

  setAdd(xy: XY, species: Species, direction: Direction) {
    this.ensureLegal(xy);
    this.arrayBan[xy.x][xy.y] = this.createKoma(xy, species, direction);
  }

  /**
   * 向きまたは種類がその座標の駒と一致するかどうか
   * @param unknown_type x
   * @param unknown_type y
   * @param unknown_type species
   * @param unknown_type direction
   */
  equals(xy: XY, species?: Species, direction?: Direction) {
    if (!this.exists(xy)) return false;
    const koma = this.get(xy);
    if (species && koma.species != species) return false;
    return !(direction && koma.direction != direction);
  }

  /**
   * その座標に駒が存在するか否か
   * @param unknown_type x
   * @param unknown_type y
   */
  exists(xy: XY) {
    this.ensureLegal(xy);
    return !this.get(xy).isNull();
  }

  /**
   * その座標に駒が存在しなかったらエラーを投げる
   * @param unknown_type x
   * @param unknown_type y
   */
  ensureExists(xy: XY) {
    if (!this.exists(xy))
      throw new ShogitterCoreException(`${xy}に駒が存在しません。`);
  }

  ensureNotExists(xy: XY) {
    if (this.exists(xy))
      throw new ShogitterCoreException(`${xy}には駒が存在します。`);
  }

  /**
   * 駒の３文字を盤配列として返す(シグネチャ)
   */
  getArray(): BanObj {
    const ret = [];

    for (let i = 1; i <= this.x; i++) {
      ret[i] = [];
      for (let j = 1; j <= this.y; j++) {
        const koma = this.arrayBan[i][j];
        ret[i][j] = !koma.isNull() ? [koma.direction, koma.species] : [];
      }
    }
    return ret;
  }

  /**
   * 向きごとの駒の数を集計
   * array[向き]=数
   */
  count() {
    const point: number[] = [];
    this.parent.rule.players.forEach((direction) => {
      point[direction] = 0;
    });
    for (let koma of this.getIterator()) {
      if (koma.isNull()) continue;
      if (!point[koma.direction]) point[koma.direction] = 0;
      point[koma.direction]++;
    }
    return point;
  }

  countSpecies() {
    const point: { [species: string]: number }[] = [];
    this.parent.rule.players.forEach((direction) => {
      point[direction] = {};
    });
    for (let koma of this.getIterator()) {
      if (koma.isNull()) continue;
      if (!point[koma.direction]) point[koma.direction] = {};
      if (!point[koma.direction][koma.species])
        point[koma.direction][koma.species] = 0;
      point[koma.direction][koma.species]++;
    }
    return point;
  }

  /*
    sprintf(func, kugiri) {
        let ret = "";
        for (let j = 1; j <= this.y; j++) {
            for (let i = this.x; i > 0; i--) {
                const koma = this.get(new XY(i, j, this));
                ret += func(koma.species, koma.direction);
            }
            ret += kugiri;
        }
        return ret;
    }
     */

  /**
   * そのマスに利いているある種類・向きの駒の居場所を配列で返す
   * @global <type> this
   * @param <type> x
   * @param <type> y
   * @param <type> species
   * @param <type> direction
   * @return <type>
   */
  arrayKikiKoma(xy: XY, species: Species, direction: Direction) {
    //そこに逆向きの駒があったとして、その動きを調べる。その位置に順向きの駒がないか調べる
    const ret = [];
    for (let kiki of this.get(xy).getMovableVirtual(
      species,
      Teban.reverse(direction),
      { directionCalcingAllowed: direction }
    )) {
      if (
        this.getSpecies(kiki["XY"]) == species &&
        this.getDirection(kiki["XY"]) == direction
      ) {
        ret.push(kiki);
      }
    }
    return ret;
  }

  /**
   * その向きの利きのマップを返す(利いていればreturn[x][y]に1が入る)　向きがない場合[向き]以下にmapをおいて返す
   */
  mapKiki(direction: Direction) {
    const ret: { [directionType: string]: XY[][][] } = {};
    //if (typeof direction === "undefined") {
    for (let koma of this.getIterator()) {
      if (koma.isNull()) continue;
      for (let kiki of koma.getMovable()) {
        // TODO needs initialization. Negative index?
        if (!ret[koma.direction == direction ? "friend" : "enemy"])
          ret[koma.direction == direction ? "friend" : "enemy"] = [];
        if (
          !ret[koma.direction == direction ? "friend" : "enemy"][kiki["XY"].x]
        )
          ret[koma.direction == direction ? "friend" : "enemy"][kiki["XY"].x] =
            [];
        if (
          !ret[koma.direction == direction ? "friend" : "enemy"][kiki["XY"].x][
            kiki["XY"].y
          ]
        )
          ret[koma.direction == direction ? "friend" : "enemy"][kiki["XY"].x][
            kiki["XY"].y
          ] = [];
        ret[koma.direction == direction ? "friend" : "enemy"][kiki["XY"].x][
          kiki["XY"].y
        ].push(koma.XY);
      }
    }
    /*
            // direction missing case
        } else {
            for (let koma of this.getIterator()) {
                if (koma.isNull()) continue;
                for (let kiki of koma.getMovable()) {
                    if(!ret[koma.direction])ret[koma.direction] = [];
                    if(!ret[koma.direction][kiki['XY'].x])ret[koma.direction][kiki['XY'].x] = [];
                    if(!ret[koma.direction][kiki['XY'].x][kiki['XY'].y])ret[koma.direction][kiki['XY'].x][kiki['XY'].y] = [];
                    ret[koma.direction][kiki['XY'].x][kiki['XY'].y].push(koma.XY);
                }
            }
        }
             */
    return ret;
  }

  /**
   * その座標に効きがあるかどうか
   * @param <type> XY     座標
   * @param <type> direction 向き
   * @param <type> flagIgai  0:その向き　1:それ以外の向き
   * @param <type> flagToruichi  とるいちなら王様がいないとして考える
   * @param <type> flagRensa    連鎖移動将棋で通常の利きを調べたい場合は-1にする。
   * @return <type>
   */
  existsMovable(xy: XY, direction: Direction, flag: Flags = {}) {
    for (let koma of this.getIterator()) {
      if (koma.isNull()) continue;
      if (
        !(!flag.igai && koma.direction == direction) &&
        !(flag.igai && koma.direction != direction)
      )
        continue; //目的の向きではなかったら飛ばす

      //利きを調べる。もしとるいちならば王様がいないとして考える。
      for (let kiki of koma.getMovable({ ignoreOu: false })) {
        if (kiki["XY"].equals(xy)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * その向き(、種類)の駒の利きを配列で返す
   * @param <type> species   種類
   * @param <type> flagSpeExcept
   * @param <type> direction 向き
   * @param <type> flagDirExcept  0:その向き　1:それ以外の向き
   * @param <type> flagToruichi  取る１手の場合
   * @return <type>
   */
  arrayKikiInSpeDir(
    species: Species,
    flagSpeExcept: boolean,
    direction: Direction,
    flagDirExcept: boolean,
    flagToruichi: boolean
  ) {
    let kikiArray: Kiki[] = [];
    for (let koma of this.getIterator()) {
      if (koma.isNull()) continue;
      //flag0:向きが調べたい駒と違ったら flag1:向きが調べたくない駒と一致したら また、駒指定ある場合その駒と違ったら、continue
      if (
        (!flagDirExcept && koma.direction != direction) ||
        (flagDirExcept && koma.direction == direction) ||
        (species != "" &&
          ((!flagSpeExcept && koma.species != species) ||
            (flagSpeExcept && koma.species == species)))
      )
        continue;

      kikiArray = kikiArray.concat(koma.getMovable());
    }
    return kikiArray;
  }

  /**
   * 盤上から駒を探す
   * @param <type> species
   * @param <type> direction
   * @return <type>
   */
  /*
    search(species, direction) {
        for (let koma of this.getIterator()) {
            if (koma.isNull()) continue;
            if (koma.species == values['species'] && koma.direction == values['direction']) {
                return koma.XY;
            }
        }
        return false;
    }
     */

  /**
   * 王手であるかどうか
   * @param int direction　向き (空の場合、array[向き]に王手であるかどうかのbooleanを代入)
   * @return <bool>
   *     TODO: Use checkOuteByDirection if direction is passed
   */
  checkOute(): boolean[] {
    const ret: boolean[] = [];
    for (let koma of this.getIterator()) {
      if (koma.isNull()) continue;
      for (let kiki of koma.getMovable()) {
        const toKoma = this.get(kiki["XY"]);
        if (toKoma.isNull() || toKoma.isFriend(koma)) continue;
        if (
          this.parent.rule.winkoma &&
          this.parent.rule.winkoma.indexOf(toKoma.species) >= 0
        ) {
          ret[toKoma.direction] = true;
        }
      }
    }
    return ret;
  }

  /**
   * direction玉に王手がかかっているかどうか
   */
  checkOuteByDirection(direction: Direction) {
    if (!this.parent.rule.winkoma) return false;
    for (let capturing of this.getIterator()) {
      if (capturing.isNull() || capturing.direction == direction) continue; //敵のみ
      for (let kiki of capturing.getMovable()) {
        const captured = this.get(kiki["XY"]);
        if (captured.isNull() || captured.direction != direction) continue; //味方のみ
        if (this.parent.rule["winkoma"].indexOf(captured.species) >= 0) {
          try {
            // 駒取り禁の確認
            this.strategy.CaptureControl.execute(captured, capturing);
            return true;
          } catch (e) {
            // It is not possible
          }
        }
      }
    }
    return false;
  }

  getNipped(to: XY, vector: RelXY, direction?: Direction): XY[] {
    if (!this.isLegal(to)) return [];
    if (typeof direction === "undefined") {
      const toKoma = this.get(to);
      if (toKoma.isNull()) return [];
      direction = toKoma.direction;
    }

    const now = to.clone();
    const arrayNipped = [];
    while (1) {
      now.addRel(vector);

      if (!this.isLegal(now) || !this.exists(now)) return []; //空っぽだったらbreak
      if (this.get(now).direction == direction) return arrayNipped; //同じ向き

      arrayNipped.push(now.clone());
    }
  }

  // not checked
  getNipped4(to: XY): XY[] {
    let ret: XY[] = [];
    for (let relXY of RelXY.getVector(RelativeType.TATEYOKO)) {
      ret = ret.concat(this.getNipped(to, relXY));
    }
    return ret;
  }

  getNipped8(to: XY): XY[] {
    let ret: XY[] = [];
    for (let relXY of RelXY.getVector(RelativeType.ALLROUND)) {
      ret = ret.concat(this.getNipped(to, relXY));
    }
    return ret;
  }

  ///変則将棋
  getInitPlace(direction: Direction, species: Species) {
    const ban = this.parent.rule["init"]["ban"];
    const ret = [];
    for (let x = 1; x <= this.x; x++) {
      for (let y = 1; y <= this.y; y++) {
        const now = ban[x - 1][y - 1];
        if (now.length == 0) continue;
        if (now[0] != direction || now[1] != species) continue;
        ret.push(new XY(x, y));
      }
    }
    return ret;
  }

  getNearestInitPlace(direction: Direction, species: Species, xy: XY): XY[] {
    let min = null;
    let minDistance = null;
    for (let now of this.getInitPlace(direction, species)) {
      const nowDistance = xy.getDistance(now);
      if (min === null || nowDistance < minDistance) {
        min = [now];
        minDistance = nowDistance;
      } else if (nowDistance === minDistance) {
        min.push(now);
        minDistance = nowDistance;
      }
    }
    return min;
  }

  getSurroundedBySpace(xy: XY, arrayXY: XY[] = []): XY[] {
    for (let tan of arrayXY) {
      if (tan.equals(xy)) return arrayXY; //既に調べていたらtrue
    }
    arrayXY.push(xy); // TODO: Can we destruct?
    for (let relXY of RelXY.getVector(RelativeType.TATEYOKO)) {
      const tan = xy.getCloneRel(relXY);

      if (!this.isLegal(tan)) return []; //tanが盤外だったら囲まれていない
      if (!this.exists(tan)) continue; //tanが空白だったら無視
      //tanに駒があった場合
      arrayXY = this.getSurroundedBySpace(tan, arrayXY); //その味方が囲まれているかどうか
      if (arrayXY.length == 0) {
        return []; //そこが囲まれていなかったら自分も囲まれていない
      }
    }
    return arrayXY;
  }

  getSurroundedByEnemy(xy: XY, arrayXY: XY[] = []): XY[] {
    for (let tan of arrayXY) {
      if (tan.equals(xy)) return arrayXY; //既に調べていたらtrue
    }
    arrayXY.push(xy);
    for (let relXY of RelXY.getVector(RelativeType.TATEYOKO)) {
      const tan = xy.getCloneRel(relXY);

      if (!this.isLegal(tan)) continue; //tanが盤外だったら無視
      if (!this.exists(tan)) return []; //tanが空白だったら囲まれていない
      //空白でない時
      if (this.getDirection(tan) == this.getDirection(xy)) {
        //隣が味方の場合
        arrayXY = this.getSurroundedByEnemy(tan, arrayXY); //その味方が囲まれているかどうか
        if (arrayXY.length == 0) {
          return []; //そこが囲まれていなかったら自分も囲まれていない
        }
      }
    }
    return arrayXY;
  }

  /**
   * オセロできるかどうか
   * @param <type> direction
   * @return <type>
   */
  canOthello(direction?: Direction) {
    let arrPlayers = [];
    //配列にする
    if (typeof direction === "undefined") {
      arrPlayers = this.parent.teban.getIterator();
    } else {
      arrPlayers = [direction];
    }

    //走査
    for (let koma of this.getIterator()) {
      if (!koma.isNull()) continue; //駒があったら無視　なかったら打ってみる
      for (let relXY of RelXY.getVector(RelativeType.ALLROUND)) {
        //周囲8マスに駒があるかどうか
        for (let player of arrPlayers) {
          if (this.getNipped(koma.XY, relXY, player).length > 0) {
            return true;
          }
        }
      }
    }
    //うまくいかなかったら動かせないと返す
    return false;
  }

  //天秤しているものを返す
  getTenbined(to: XY): XY[] {
    let ret: XY[] = [];
    const toKoma = this.get(to);
    outer: for (let relXY of RelXY.getVector(RelativeType.HALFROUND)) {
      const retok: XY[] = [];
      for (let rel of [relXY, relXY.getCloneFlipped()]) {
        const pointer = to.getCloneRel(rel);
        while (true) {
          if (!this.isLegal(pointer) || !this.exists(pointer)) continue outer;
          if (this.get(pointer).isEnemy(toKoma)) {
            retok.push(pointer.getClone());
            break;
          }
          pointer.addRel(rel);
        }
      }
      ret = ret.concat(retok);
    }
    return ret;
  }

  getHashiotoshied(to: XY): XY[] {
    let ret: XY[] = [];
    const toKoma = this.get(to);
    for (let relXY of RelXY.getVector(RelativeType.TATEYOKO)) {
      const tmp: XY[] = [];
      const now = to.getClone();
      while (true) {
        now.addRel(relXY);
        if (!this.isLegal(now)) {
          ret = ret.concat(tmp);
          break;
        }
        tmp.push(now.getClone());
        if (!(this.exists(now) && this.get(now).isEnemy(toKoma))) {
          break;
        }
      }
    }
    return ret;
  }

  //エポキシ接着(縦横に相手の駒がいる状態)しているものを取得
  getEpoxied(xy: XY, arrayXY: XY[] = []): XY[] {
    for (let tan of arrayXY) {
      if (tan.equals(xy)) return arrayXY; //既に調べていたらtrue
    }
    arrayXY.push(xy);
    for (let relXY of RelXY.getVector(RelativeType.TATEYOKO)) {
      const tan = xy.getCloneRel(relXY);
      if (!this.isLegal(tan) || !this.exists(tan)) continue; //盤外や空白だったら無視
      if (this.getDirection(tan) !== this.getDirection(xy)) {
        //敵の場合
        arrayXY = this.getEpoxied(tan, arrayXY); //隣のエポキシも取得
      }
    }
    return arrayXY;
  }

  /**
   * その座標が盤上かどうか
   */
  isLegal(xy: XY) {
    return xy.x > 0 && xy.x <= this.x && xy.y > 0 && xy.y <= this.y;
  }

  ensureLegal(xy: XY) {
    if (!this.isLegal(xy))
      throw new ShogitterCoreException(`${xy.toString()}: 盤外です。`, 1);
  }
}
