/*
 */
// What is this:   define("a", 100);

import { ShogitterCoreException } from "./utils/phpCompat";
import Ban, { Species } from "./Ban";
import XY, { RelXY } from "./XY";
import { shogitterDB } from "./ShogitterDB";
import { Flags } from "./Flags";
import { Direction } from "./Direction";

export type Kiki = {
  XY: XY;
  type: MoveType;
};

export enum MoveType {
  NORMAL = 1, // その枡にいける。
  UNTIL_END = 2, //ぶつかるまでそっちへいける。
  NORMAL_NOCAPTURE = 3, // そのマスにいける、ただし駒をとれない(駒があるマスへはいけない)
  UNTIL_END_NOCAPTURE = 4, // ぶつかるまでそっちへいける。ただし駒をとれない(駒があるマスへはいけない)
  NORMAL_ONLY_CAPTURE = 5, // そのマスに行ける、ただし駒を取る場合に限る(駒がないマスへはいけない)
  FLY = 6, // 駒を飛び越えてそっちにいける
  FLY_CAPTURE = 100, // 飛び越えた駒を取る
  FLY_NOCAPTURE = 101, // 駒を飛び越えてそっちにいける。駒は取れない。 TODO: fix
  XIANGQI_PAO_CAPTURE = 7, // シャンチーの砲が取る場合　飛車の動きで一度飛び越え、駒を取らなくてはならない
}

export type KomaObj = [] | [Direction, Species];

export enum PromotionMode {
  FRONT, // 表にする
  BACK, // 裏にする
  FLIP, // 表裏反転
}

export class Koma {
  species: string;
  direction: Direction;
  ban: Ban;
  XY: XY;
  status: number | null;

  public static getClass(className: VariantName): typeof Koma {
    return nameToClass[className] || Koma;
  }

  /**
   * 駒を生成
   * @param species
   * @param direction
   * @param xy
   * @param ban
   */
  // TODO Is direction correct?
  constructor(
    species: Species = null,
    direction: Direction | "_" = null,
    xy: XY = null,
    ban: Ban = null
  ) {
    this.species = species === "_" ? null : species;
    this.direction = direction === "_" || direction === null ? null : direction;
    this.XY = xy?.clone();
    this.ban = ban;
  }

  clone(): Koma {
    return new Koma(this.species, this.direction, this.XY, this.ban);
  }

  toString() {
    return this.direction === null ? "___" : this.direction + this.species;
  }

  toArray(): KomaObj {
    return [this.direction, this.species];
  }

  equals(koma: Koma) {
    return this.direction == koma.direction && this.species == koma.species;
  }

  get(memberName: string) {
    return this.getData(this.species, memberName);
  }

  setXY(xy: XY) {
    this.XY = xy;
  }

  setSpecies(species: Species) {
    this.species = species;
  }

  setDirection(direction: Direction) {
    this.direction = direction;
  }

  static getStatelessData(komaName: string, memberName: string) {
    if (komaName == "") return null;
    return shogitterDB.getKoma(komaName, memberName);
  }

  getData(komaName: string, memberName: string) {
    if (komaName == "") return null;
    const initial = shogitterDB.getKoma(komaName, "initial"); // special case when the piece has never moved
    if (
      initial &&
      initial[memberName] &&
      this.ban.parent.kifu.isInitial(this.XY)
    ) {
      return initial[memberName];
    }
    if (typeof this.status === "number") {
      switch (memberName) {
        case "move":
        case "mustNotBeEmpty":
        case "mustBeEmpty":
        case "limit":
        case "change":
        case "jumpException":
        case "jumpLimit":
          const statuses = shogitterDB.getKoma(komaName, "status");
          return statuses[this.status][memberName];
      }
    }

    return Koma.getStatelessData(komaName, memberName);
  }

  getDataByType(komaName: string, memberName: string, type: string) {
    const data = this.getData(komaName, memberName);
    return data?.[type];
  }

  getShortName() {
    return this.get("shortname") || this.get("name");
  }

  isNull() {
    return this.species === null && this.direction === null;
  }

  /**
   * x,yにいる駒の利きを配列で返す
   * @param <type> x
   * @param <type> y
   * @param <type> flagIgnoreOu 王をいないものとして考える場合は1
   * @param <type> flagRensa 普通は0。連鎖中の場合は内部的に1を使う。また-1の場合は強制的に通常の利きを返す。
   * @return <type>
   */
  public getMovable(flags: Flags = {}): Kiki[] {
    if (this.ban.parent.rule.rensa) {
      //連鎖移動将棋
      const originalKoma = this.ban.get(this.XY);
      const arrayChecked: XY[] = [];
      const returnMovable: Kiki[] = [];

      const search = (xy: XY) => {
        arrayChecked.push(xy.clone());
        const currentKoma = this.ban.get(xy);
        //動ける場所それぞれにある駒の動ける場所をチェック。
        for (const kiki of currentKoma.getMovableVirtual(
          currentKoma.species,
          currentKoma.direction,
          { ignoreOu: flags.ignoreOu }
        )) {
          const kikiXY = kiki.XY;
          if (
            arrayChecked.some(
              (checked) => checked.x == kikiXY.x && checked.y == kikiXY.y
            )
          ) {
            //チェック済みリストに入っていたらそこは調べない。
            continue;
          }
          if (
            !returnMovable.some(
              (movable) => movable.XY.x == kikiXY.x && movable.XY.y == kikiXY.y
            )
          ) {
            returnMovable.push(kiki);
          }
          if (
            this.ban.exists(kikiXY) &&
            this.ban.getDirection(kikiXY) == originalKoma.direction
          ) {
            search(kikiXY);
          }
        }
      };

      for (const kiki of originalKoma.getMovableVirtual(
        originalKoma.species,
        originalKoma.direction,
        { ignoreOu: flags.ignoreOu }
      )) {
        const kikiXY = kiki.XY;
        if (
          arrayChecked.some(
            (checked) => checked.x == kikiXY.x && checked.y == kikiXY.y
          )
        ) {
          //チェック済みリストに入っていたらそこは調べない。
          continue;
        }
        if (
          this.ban.exists(kikiXY) &&
          this.ban.getDirection(kikiXY) == originalKoma.direction
        ) {
          search(kikiXY);
        }
      }

      return returnMovable;
    }

    //普通
    let arrayMovable: Kiki[] = [];
    const { ignoreOu, reverse } = flags;
    for (let species of this.ban.komaSuggest(this)) {
      arrayMovable = arrayMovable.concat(
        this.getMovableVirtual(species, this.direction, { ignoreOu, reverse })
      );
    }
    return arrayMovable;
  }

  public getMovableVirtual(
    species: Species,
    direction: Direction,
    flags: Flags = {}
  ): Kiki[] {
    let arrayKiki: Kiki[] = [];
    const arrayDenyHash: string[] = [];
    for (let move of this.getData(species, "move")) {
      //現在の移動ベクトル
      const vec = RelXY.fromArray(move["move"]);
      vec.turn(direction);
      //現在の移動の種類を配列にする
      typeLoop: for (let type of [].concat(move["type"])) {
        type = type as MoveType;
        switch (type) {
          case MoveType.UNTIL_END:
            flags = {};
            break;
          case MoveType.NORMAL_NOCAPTURE:
            flags = { noPick: true, limit: 1 }; //駒はとれない
            break;
          case MoveType.UNTIL_END_NOCAPTURE:
            flags = { noPick: true }; //駒はとれない
            break;
          case MoveType.NORMAL_ONLY_CAPTURE:
            flags = { mustPick: true, limit: 1 }; //駒を取らなければならない
            break;
          case MoveType.FLY_NOCAPTURE:
          //flags = {'limitJump': 1000, noPick: true};//いくつでも飛べる
          //break;
          case MoveType.FLY:
          case MoveType.FLY_CAPTURE:
            flags = { limitJump: 1000 }; //いくつでも飛べる
            break;
          case MoveType.XIANGQI_PAO_CAPTURE:
            flags = { mustPick: true, skipJump: 1 }; //遠距離駒取り
            break;
          case MoveType.NORMAL:
          default: // Other types are used as 1
            flags = { limit: 1 };
        }

        let limit;
        if ((limit = this.getDataByType(species, "limit", type))) {
          flags.limit = limit;
        }
        if ((limit = this.getDataByType(species, "jumpLimit", type))) {
          flags.limitJump = limit;
        }
        flags.skip = this.getDataByType(species, "skip", type) || null;
        flags.jumpException = this.getData(species, "jumpException");

        let empties;
        if ((empties = this.getDataByType(species, "mustBeEmpty", type))) {
          if (empties["move"]) {
            empties = [empties];
          }
          for (let empty of empties) {
            const emptyXY = this.XY.getCloneRel(
              vec.getClone(
                (vec.x > 0 ? 1 : -1) * empty["move"][0],
                (vec.y > 0 ? 1 : -1) * empty["move"][1]
              )
            );
            if (!this.ban.isLegal(emptyXY)) {
              continue;
            }
            if (!this.ban.get(emptyXY).isNull()) {
              arrayDenyHash.push(this.XY.getCloneRel(vec).getHash());
              continue typeLoop;
            }
          }
        }

        if ((empties = this.getDataByType(species, "mustNotBeEmpty", type))) {
          //echo species, direction, this.XY;
          //1:味方 2:敵
          if (empties["move"]) {
            empties = [empties];
          }
          for (let empty of empties) {
            const v = vec.getClone(
              (vec.x > 0 ? 1 : -1) * empty["move"][0],
              (vec.y > 0 ? 1 : -1) * empty["move"][1]
            );
            const emptyXY = this.XY.getCloneRel(v);

            if (!this.ban.isLegal(emptyXY)) {
              continue;
            }
            const koma = this.ban.get(emptyXY);
            if (
              koma.isNull() ||
              (empty["type"] == 1 && koma.direction != this.direction) ||
              (empty["type"] == 2 && koma.direction == this.direction)
            ) {
              arrayDenyHash.push(this.XY.getCloneRel(vec).getHash());
              continue typeLoop;
            }
          }
        }

        for (let xy of this.ban.getScanIterator(this.XY, vec, flags)) {
          if (flags["mustPick"] && this.ban.get(xy).isNull()) continue;
          arrayKiki.push({ XY: xy, type });
        }
      }
    }
    arrayKiki = arrayKiki.filter(
      (kiki) => arrayDenyHash.indexOf(kiki["XY"].getHash()) === -1
    );
    return this.ban.moveFilter(arrayKiki, this.XY, direction, species, flags);
  }

  /**
   * ある座標からある座標へ、その駒に動く能力があるかどうか
   * @param <type> fromx     どこからx
   * @param <type> fromy     どこからy
   * @param <type> tox       どこまでx
   * @param <type> toy       どこまでy
   * @return boolean
   */
  getMovableTypes(to: XY): MoveType[] {
    // TODO dedup?
    const ret = [];
    for (let kiki of this.getMovable()) {
      if (kiki["XY"].equals(to)) {
        ret.push(kiki.type);
      }
    }
    return ret;
  }

  ensureMovable(to: XY) {
    const movable = this.getMovableTypes(to);
    if (movable.length == 0)
      throw new ShogitterCoreException(
        `${this.XY}から${to}へは移動できません。`
      );
    return movable;
  }

  isFriend(koma: Koma) {
    return this.direction == koma.direction;
  }

  ensureFriend(koma: Koma) {
    if (!this.isFriend(koma))
      throw new ShogitterCoreException(
        `${this.XY}と${koma.XY}は味方同士でなくてはなりません。`
      );
  }

  isEnemy(koma: Koma) {
    return this.direction != koma.direction;
  }

  ensureEnemy(koma: Koma) {
    if (!this.isEnemy(koma))
      throw new ShogitterCoreException(
        `${this.XY}と${koma.XY}は敵同士でなくてはなりません。`
      );
  }

  /**
   * 成る。駒の表裏の関係。種類をreturn
   * @param <type> species 種類
   * @param <type> mode    0=表にする 1=裏にする 2=表裏反転
   */
  getPromoted(mode: PromotionMode) {
    return this.ban.parent.getPromoted(this.species, mode);
  }

  promote(mode: PromotionMode) {
    this.species = this.getPromoted(mode);
  }

  ensureLegal() {
    if (!this.isLegal())
      throw new ShogitterCoreException(`${this.XY}: この駒は動けません。`);
  }

  isLegal() {
    const species = this.species;
    const direction = this.direction;
    const xy = this.XY;
    let zero = true; // 移動できる場所がそもそもなかったら合法
    for (let move of this.getData(species, "move")) {
      zero = false;
      const sa = RelXY.fromArray(move.move);
      sa.turn(direction);
      const IJ = xy.getCloneRel(sa);
      for (let type of [].concat(move.type)) {
        //自分の場所でない、かつ0でない(動ける)、かつ盤上ならLegalとして返す
        if (type != 0 && this.ban.isLegal(IJ)) {
          return true;
        }
      }
    }
    return zero;
  }

  changeStatus(movingTypes: MoveType[] = [], capture: boolean) {
    //駒取りで止まる
    if (capture && this.getData(this.species, "stopWhenCapture")) {
      this.status = null;
      this.ban.parent.moving = null;
      return;
    }

    const arrayChange = this.get("change");
    if (!arrayChange) return;
    for (let type of movingTypes) {
      //それぞれchangeで指定されているか調べる
      if (typeof arrayChange[type] !== "undefined") {
        if (arrayChange[type] === -1) {
          this.status = null;
          this.ban.parent.moving = null;
        } else {
          this.status = arrayChange[type];
          this.ban.parent.moving = this;
        }
      }
    }
  }

  flip() {
    this.direction = 1 - this.direction; //HACK
  }

  /*
    static getEncoded(species){
        arr=array(
            ""=>0,
            "aa"=>1,
            "ab"=>2,
            "ac"=>3,
            "ad"=>4,
            "ae"=>5,
            "af"=>6,
            "ag"=>7,
            "ah"=>8,
            "ai"=>9,
            "aj"=>10,
            "ak"=>11,
            "al"=>12,
            "am"=>13,
            "an"=>14,
    );
        return arr[species];
    }

     */
}

class UnmovableKoma extends Koma {
  isLegal() {
    return true;
  }
}

class JizaitennoKoma extends Koma {
  isLegal() {
    return true;
  }

  getMovable(): Kiki[] {
    const enemyKikiMap: boolean[][] = [];
    for (let koma of this.ban.getIterator()) {
      if (
        koma.isNull() ||
        koma instanceof JizaitennoKoma ||
        this.isFriend(koma)
      )
        continue;

      for (let kiki of koma.getMovable()) {
        if (!enemyKikiMap[kiki.XY.x]) enemyKikiMap[kiki.XY.x] = [];
        enemyKikiMap[kiki.XY.x][kiki.XY.y] = true;
      }
    }
    const kikiArray: Kiki[] = [];
    for (let koma of this.ban.getIterator()) {
      if (!koma.isNull() && enemyKikiMap[koma.XY.x][koma.XY.y]) continue;
      //その場所に何もないか，効きがなかったら追加
      kikiArray.push({ XY: koma.XY, type: 1 });
    }
    return kikiArray;
  }
}

type VariantName = "" | "Unmovable" | "Jizaitenno";

const nameToClass: { [variantName in VariantName]: typeof Koma } = {
  "": Koma,
  Unmovable: UnmovableKoma,
  Jizaitenno: JizaitennoKoma,
};
