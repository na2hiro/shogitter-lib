import { Koma, KomaObj } from "./Koma.js";
import XY from "./XY.js";
import { Species } from "./Ban.js";
import Shogi from "./Shogi.js";
import { ShogitterCoreException } from "./utils/phpCompat.js";
import { Direction } from "./Direction.js";

export type KifuLine = {
  move: KifuMove;
  disp: string;
  hash?: string;
  data?: any; // Serialization of strategies
  moving?: boolean; // TODO
};

// direction, ...diff
export type KifuMove = Diffs | End;
type End = string; // _(loser number)
// Direction, to, from, ...other changes
type Diffs = [Direction, ...Diff[]];
export type Diff = MoveDiff | PutDiff;
// x, y, beforeKoma, afterKoma
export type MoveDiff = [number, number, KomaObj, KomaObj];

// amount diff, player, species
export type PutDiff = [number, Direction, Species];

export type PreviousMove =
  | { to: XY; from: XY }
  | { to: XY; koma: string }
  | null;

export default class Kifu {
  //array('move': "棋譜", 'disp': "通常棋譜", 'hash': "ハッシュ")
  //arrayKifu[手][0~3]
  arrayKifu: KifuLine[] = [];
  parent: Shogi;

  constructor(parent: Shogi) {
    this.parent = parent;
  }

  toString() {
    let tag = "";
    const max = this.arrayKifu.length;
    for (let i = 0; i < max; i++) {
      const encoded = ""; // Should this be real?
      //encoded=binhex(binstringify(this.getEncodedFormat(i), 24));
      tag +=
        /*json_encode(this.arrayKifu[i][0]).", ".array_reduce(this.getEncodedNums(i), function(ret, value){
                        return ret." ".value[1];
                    }).", ".*/ encoded /*.", ".implode(" ", extractBits(encoded, array(7,7,4,4,1), 23))*/ +
        "|" +
        this.getKifu(i) +
        "|" +
        this.getHash(i) +
        "\n";
    }
    return tag;
  }

  /*
      getEncodedNums(tesuu){
          const kifu=this.get(tesuu);
          if(count(kifu[2])==4){
              return []
                  [7, kifu[2][0]*9+kifu[2][1]-10],
                  [7, kifu[1][0]*9+kifu[1][1]-10],
                  [4, Koma.getEncoded(kifu[2][2][1])],
              [4, Koma.getEncoded(kifu[1][2][1])],
              [1, kifu[1][3][1]==kifu[2][2][1]?0:1]
          );
              return (kifu[2][0]*9+kifu[2][1]-10)." ".(kifu[1][0]*9+kifu[1][1]-10)." ".Koma.getEncoded(kifu[2][2][1])." ".Koma.getEncoded(kifu[1][2][1])." ".(kifu[1][3][1]==kifu[2][2][1]?0:1);
          }else{
              return array(
                  array(7, 81),
                  array(7, kifu[1][0]*9+kifu[1][1]-10),
                  array(4, Koma.getEncoded(kifu[2][2])),
              array(4, 0),
                  array(1, 0)
          );
              return "81 ".(kifu[1][0]*9+kifu[1][1]-10)." ".Koma.getEncoded(kifu[2][2])." 0 0";
          }

      }

      getEncodedFormat(tesuu){
          return mergeBits(this.getEncodedNums(tesuu));
      }
      getString(from = 0, to = null) {
          let ret = "";
          if (to == null) to = this.getTesuu();
          for (let i = from; i < to; i++) {
              ret += this.getKifu(i);
          }
          return ret;
      }
       */

  getTeban(i: number) {
    const kifu = this.get(i);
    return kifu[0];
  }

  update(array: KifuMove[]) {
    let arr = array.slice();
    let thiskifu;
    while ((thiskifu = arr.shift())) {
      this.add(thiskifu);
    }
  }

  updateByJSON(arr: KifuLine[] = []) {
    for (let kifu of arr) {
      this.addArray(kifu);
    }
  }

  getArray(): KifuLine[] {
    return this.arrayKifu;
  }

  /**
   * 現在の手数を得る
   */
  getTesuu() {
    return this.arrayKifu.length;
  }

  addArray(array: KifuLine, flagCheckSennichite = false) {
    // 旧データ?
    if (Array.isArray(array)) {
      array = {
        move: array[0],
        disp: array[1],
        hash: array[2],
      };
    }
    const num = this.getTesuu() - 1;
    if (num >= 0 && this.isEndKifu(num)) {
      //既に終局サインが入っている場合は最後から二番目に入れる
      this.arrayKifu.splice(num, 0, array);
    } else {
      //入っていない場合は普通
      this.arrayKifu.push(array);
    }

    if (flagCheckSennichite && this.checkSennichite()) {
      this.parent.status = {
        num: 2,
        message: "千日手です。同一局面が四回現れました。",
      };
      this.add("_9", "千日手");
    }
  }

  /**
   * tesuu手目が投了サインかどうか
   * @param type tesuu
   * @return type
   */
  isEndKifu(tesuu: number) {
    if (tesuu < 0) throw `isResign shouldn't be called for tesuu ${tesuu}`;
    const kifu = this.get(tesuu);
    return kifu[0] === "_";
  }

  add(kifu: KifuMove, disp?: string, flag: { hash?: boolean } = {}) {
    const array: KifuLine = {
      move: kifu,
      disp,
      data: this.parent.ban.serialize(),
    };
    if (flag.hash) {
      array.hash = this.parent.getHash();
    }
    this.addArray(array, flag["hash"]);
  }

  checkSennichite() {
    let cnt = 0;
    const last = this.getTesuu() - 1;
    const lastTeban = this.getTeban(last);
    const lastHash = this.getHash(last);
    if (lastHash == "") return false;
    for (let i = last; i >= 0; i--) {
      if (this.getTeban(i) != lastTeban) continue;
      if (this.getHash(i) != lastHash) continue;
      cnt++;
    }
    return cnt >= 4;
  }

  /**
   * n手目の棋譜を得る
   * @param num
   */
  get(num: number): KifuMove {
    if (num < 0)
      throw new Error(`Args of Kifu#get() must be non-negative: ${num} `);
    return this.arrayKifu[num].move;
  }

  /**
   * 棋譜符号を得る
   * @return type
   * @param num
   */
  getKifu(num: number) {
    if (num < 0)
      throw new Error(`Args of Kifu#getKifu() must be non-negative: ${num} `);
    return this.arrayKifu[num].disp;
  }

  /**
   * n手目のハッシュを得る
   * @param num
   */
  getHash(num: number) {
    return this.arrayKifu[num].hash;
  }

  getMoving(num: number) {
    return !!this.arrayKifu[num]?.moving;
  }

  getLastMoving() {
    return this.getMoving(this.getTesuu() - 1);
  }

  unsetLastMoving() {
    delete this.arrayKifu[this.getTesuu() - 1].moving;
  }

  setLastMoving() {
    this.arrayKifu[this.getTesuu() - 1].moving = true;
  }

  /**
   * 棋譜の最終手を削除する
   */
  remove() {
    return this.arrayKifu.pop();
  }

  /**
   * 全て削除する
   */
  clear() {
    // Is it true?
    this.arrayKifu = [];
  }

  /**
   * 棋譜１行から座標を得る
   * @param kifu
   */
  getXYByKifu(kifu: KifuMove): PreviousMove {
    if (typeof kifu === "string" || kifu.length <= 1) {
      return null;
    } else {
      const to = new XY(kifu[1][0], kifu[1][1]);
      // for igo, from can be missing
      if (kifu[2] && kifu[2].length == 4) {
        // MoveDiff
        return {
          // TODO this assumes implicit order of kifu
          to,
          from: new XY(kifu[2][0], kifu[2][1]),
        };
      } else {
        // PutDiff
        return {
          to,
          koma: kifu[1][3][1],
        };
      }
    }
    /*          }else{
                          //旧テキスト形式
                          kifulength=this.parent.kifulength;
                          tox = substr(kifu, 1, kifulength);
                          toy = substr(kifu, 1+kifulength, kifulength);
                          fromx = substr(kifu, 1+kifulength*2+6, kifulength);
                          fromy = substr(kifu, 1+kifulength*3+6, kifulength);
                          return array(
                              'to': new XY(tox, toy, this.parent.ban),
                              'from': new XY(fromx, fromy, this.parent.ban),
                      );
                      }*/
  }

  /**
   * 手数から座標を得る
   * @param tesuu
   */
  getXYByTesuu(tesuu: number): PreviousMove {
    if (tesuu < 0) return null;
    return this.getXYByKifu(this.get(tesuu));
  }

  getDataByKifu(thiskifu: KifuMove) {
    //if(is_array(thiskifu)){
    if (thiskifu[0] === "_") return null; //投了の場合は無視
    const ret: (
      | { value: number; direction: Direction; species: Species }
      | { XY: XY; before: Koma; after: Koma }
    )[] = [];
    let kifu = thiskifu as Diff[];
    for (let i = 1, l = kifu.length; i < l; i++) {
      if (kifu[i].length == 3) {
        const k = kifu[i] as PutDiff;
        //持ち駒変動
        ret.push({
          value: k[0],
          direction: k[1],
          species: k[2],
        });
      } else {
        const k = kifu[i] as MoveDiff;
        //マス目変動
        ret.push({
          XY: new XY(k[0], k[1]),
          before: new Koma(k[2][1], k[2][0]),
          after: new Koma(k[3][1], k[3][0]),
        });
      }
    }
    return ret;
    /* }else{
                 //旧テキスト形式
                 sendkifu="";
                 ret=array();
                 kifulength=this.parent.kifulength;

                 now=1;
                 if(thiskifu[0]==="_") return null;//投了の場合は無視
                 while(1){
                     nowkifu=substr(thiskifu, now, 1);
                     if(nowkifu==="_"){
                         //持ち駒
                         nowkifu=substr(thiskifu, now, 7);
                         ret[]=array(
                             'direction': substr(nowkifu, 4, 1),
                             'species': substr(nowkifu, 5, 2),
                             'value': (int)substr(nowkifu, 2, 2)*(nowkifu[1]=="+"?1:-1),
                     );

                         now+=7;
                     }else if(is_numeric(nowkifu)){
                         //移動
                         nowkifu=substr(thiskifu, now, kifulength*2+6);
                         ret[]=array(
                             'XY': new XY(substr(nowkifu, 0, kifulength), substr(nowkifu, kifulength, kifulength), this.parent.ban),
                             'before': new Koma(substr(nowkifu, kifulength*2+1, 2), substr(nowkifu, kifulength*2, 1)),
                             'after': new Koma(substr(nowkifu, kifulength*2+4, 2), substr(nowkifu, kifulength*2+3, 1)),
                     );
                         now+=kifulength*2+6;
                     }else{
                         return ret;
                     }
                 }
             }*/
  }

  /**
   * 棋譜から移動情報を得る
   * @param kifu
   */
  get2DataByKifu(kifu: KifuMove) {
    const tmp = this.getXYByKifu(kifu);
    //if(is_array(kifu)){
    if ("koma" in tmp) {
      const put = kifu[1] as PutDiff;
      return {
        teban: kifu[0],
        to: {
          XY: tmp.to,
          before: new Koma(null, null),
          after: new Koma(put[2], put[1]),
        },
        koma: tmp.koma,
      };
    } else {
      const to = kifu[1] as MoveDiff;
      const from = kifu[2] as MoveDiff;
      // MoveDiff
      return {
        teban: kifu[0],
        to: {
          XY: tmp.to,
          before: new Koma(to[2][1], to[2][0]),
          after: new Koma(to[3][1], to[3][0]),
        },
        from: {
          XY: tmp.from,
          before: new Koma(from[2][1], from[2][0] as any),
          after: new Koma(from[3][1], from[3][0]),
        },
      };
    }
    /*}else{
                //旧テキスト形式
                return array(
                    'teban': substr(kifu,0,1),
                    'to': array(
                    'XY': tmp['to'],
                    'before': new Koma(substr(kifu,1+kifulength*2+1,2), substr(kifu,1+kifulength*2,1)),
                    'after': new Koma(substr(kifu,1+kifulength*2+4,2), substr(kifu,1+kifulength*2+3,1)),
            ),
                'from': array(
                    'XY': tmp['from'],
                    'before': new Koma(substr(kifu,1+kifulength*4+7,2), substr(kifu,1+kifulength*4+6,1)),
                    'after': new Koma(substr(kifu,1+kifulength*4+10,2), substr(kifu,1+kifulength*4+9,1)),
            ),
            );
            }*/
  }

  /**
   * 手数から移動情報を得る
   * Enter description here ...
   * @param tesuu
   */
  getDataByTesuu(tesuu: number) {
    return this.get2DataByKifu(this.get(tesuu));
  }

  isInitial(xy2: XY) {
    const max = this.getTesuu();
    for (let i = 0; i < max; i++) {
      const xy = this.getXYByTesuu(i);
      if (("from" in xy && xy["from"].equals(xy2)) || xy["to"].equals(xy2)) {
        return false;
      }
    }
    return true;
  }

  getLatestData(strategyName: string) {
    const tesuu = this.getTesuu();
    if (tesuu == 0) return null;
    return this.arrayKifu[tesuu - 1].data?.[strategyName];
  }
}
