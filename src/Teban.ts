import { array_unique, ShogitterCoreException } from "./utils/phpCompat";
import Shogi from "./Shogi";
import { Direction } from "./Direction";

function shuffle<T>(arr: T[]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

class Increment {
  protected num: number;
  protected max: number;

  constructor(max: number) {
    //if(init>=max) throw new Exception("incrementの値が異常です");
    this.max = max;
  }

  get() {
    return this.num;
  }

  set(num: number) {
    this.num = num;
  }

  getMax() {
    return this.max;
  }

  setMax(max: number) {
    this.max = max;
  }

  inc() {
    this.num++;
    if (this.num == this.max) {
      this.num = 0;
      return true;
    }
    return false;
  }
}

export type PlayerInfo = {
  user?: UserInfo[];
  result?: Result;
};

export type UserInfo = {
  name: string; // Screen name
  id: number; // Twitter ID
};

export enum Result {
  WIN,
  LOSE,
}

type TebanFlags = {
  komaochi?: boolean;
};

export class Teban {
  protected arrayTeban: Direction[]; // teban -> direction mapping
  protected arrayUniqueDirection: number[];
  protected flags: TebanFlags = {};
  protected arrayPlayerInfo: PlayerInfo[] = [];
  protected shogi: Shogi;
  protected teban: Increment; // teban to increment
  protected turn: Increment; // Player number in pair shogi, incremented after a whole teban rotation

  public getIterator() {
    return this.arrayUniqueDirection;
  }

  public countUniqueTeban() {
    return this.arrayUniqueDirection.length;
  }

  getMaxTeban() {
    return this.teban.getMax();
  }

  getMaxTurn() {
    return this.turn.getMax();
  }

  setMaxTurn(turns: number) {
    this.turn.setMax(turns);
  }

  static tebanName = [
    ["先手", "後手", "左手", "右手"],
    ["下手", "上手"],
  ];
  static tebanMark = ["☗", "☖", "←", "→"];

  constructor(
    tebanNum: number,
    arrayDirection: Direction[],
    shogi: Shogi,
    previousTeban?: Teban,
    turnNum = 0,
    turns = 1
  ) {
    this.teban = new Increment(arrayDirection.length);
    this.teban.set(tebanNum);
    this.turn = new Increment(turns);
    this.turn.set(turnNum);

    this.arrayTeban = arrayDirection;
    this.arrayUniqueDirection = array_unique(this.arrayTeban);
    this.arrayPlayerInfo = [];
    const previousPlayerInfo = previousTeban?.getArrayPlayerInfo();
    for (const direction of this.arrayUniqueDirection) {
      this.arrayPlayerInfo[direction] = { user: [] };
      if (previousPlayerInfo?.[direction]) {
        this.arrayPlayerInfo[direction].user =
          previousPlayerInfo?.[direction].user;
      }
    }
    this.shogi = shogi;
  }

  changeDirection() {
    const tmp = this.arrayPlayerInfo[0].user;
    this.arrayPlayerInfo[0].user = this.arrayPlayerInfo[1].user;
    this.arrayPlayerInfo[1].user = tmp;
  }

  setArrayPlayerInfo(array: PlayerInfo[]) {
    this.arrayPlayerInfo = array;
  }

  shufflePlayers() {
    if (this.shogi.isPlaying())
      throw new ShogitterCoreException("対局中は振り駒できません", 1);
    shuffle(this.arrayPlayerInfo);
  }

  setResultToPlayer(direction: Direction, result: Result) {
    this.arrayPlayerInfo[direction].result = result;
  }

  getArrayPlayerInfo() {
    return this.arrayPlayerInfo;
  }

  setPlayerInfo(
    direction: Direction,
    num: number,
    name: string,
    userId: number
  ) {
    this.arrayPlayerInfo[direction].user[num] = { name, id: userId };
  }

  getPlayerName(direction: Direction, num: number) {
    return this.arrayPlayerInfo[direction].user[num].name;
  }

  getNowPlayerId() {
    return this.getPlayerName(this.getNowDirection(), this.getTurn());
  }

  getJoinedPlayerName(direction: Direction) {
    const arr = [];
    for (let user of this.arrayPlayerInfo[direction]["user"]) {
      arr.push(`@${user["name"]}`);
    }
    return arr.join(", ");
  }

  getPlayerId(direction: Direction, num: number) {
    return this.arrayPlayerInfo[direction].user[num].id;
  }

  getPlayerIds(direction: Direction) {
    const arr = [];
    for (let user of this.arrayPlayerInfo[direction]["user"]) {
      arr.push(user["id"]);
    }
    return arr;
  }

  getDirectionById(id: number) {
    for (let direction of this.getIterator()) {
      for (let userid of this.getPlayerIds(direction)) {
        if (userid === id) {
          return direction;
        }
      }
    }
    throw new ShogitterCoreException("あなたはプレイヤーではありません．");
  }

  setFlags(flags: TebanFlags) {
    this.flags = {
      ...this.flags,
      ...flags,
    };
  }

  __toString() {
    return this.teban.get();
  }

  get() {
    return this.teban.get();
  }

  getTurn() {
    return this.turn.get();
  }

  set(tebanNum: number) {
    this.teban.set(tebanNum);
  }

  setTurn(turn: number) {
    this.turn.set(turn);
  }

  getNowDirection() {
    return this.arrayTeban[this.teban.get()];
  }

  static getMark(direction: Direction) {
    if (direction == null) throw new ShogitterCoreException("getMark", 1);
    return Teban.tebanMark[direction];
  }

  getNowMark() {
    return Teban.getMark(this.getNowDirection());
  }

  getName(direction: Direction) {
    return Teban.tebanName[this.flags.komaochi ? 1 : 0][direction];
  }

  getNowName() {
    return this.getName(this.getNowDirection());
  }

  isNowId(id: number, strict = false) {
    const ids = this.getPlayerIds(this.getNowDirection());
    if (strict) {
      return ids[this.getTurn()] == id;
    } else {
      return ids.indexOf(id) >= 0;
    }
  }

  getNowId() {
    return this.getPlayerId(this.getNowDirection(), this.getTurn());
  }

  rotate() {
    if (this.teban.inc()) {
      //一周終わった
      this.turn.inc();
    }
  }

  isDirection(direction: Direction) {
    return this.getNowDirection() == direction;
  }

  ensureDirection(direction: Direction) {
    if (!this.isDirection(direction))
      throw new ShogitterCoreException(
        `手番が守られていません。${this.getName(
          this.getNowDirection()
        )}の手番です。`
      );
  }

  /**
   * 反対向きのdirectionを返す。
   * @param <type> direction
   * @return <type>
   */
  static reverse(direction: Direction): Direction {
    switch (direction) {
      case Direction.BLACK:
        return Direction.WHITE;
      case Direction.WHITE:
        return Direction.BLACK;
      case Direction.LEFT:
        return Direction.RIGHT;
      case Direction.RIGHT:
        return Direction.LEFT;
      default:
        throw new ShogitterCoreException("その向きは定義されていません。", 1);
    }
  }

  static mark2direction(str: string) {
    switch (str) {
      case "▲":
        return 0;
      case "△":
        return 1;
    }
    throw new ShogitterCoreException("unknown direction mark: " + str);
  }
}
