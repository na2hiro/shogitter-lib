import Strategy from "./Strategy.js";
import Ban from "../Ban.js";
import { Koma } from "../Koma.js";
import XY, { RelXY } from "../XY.js";
import { ShogitterCoreException } from "../utils/phpCompat.js";
import { Direction } from "../Direction.js";
import { num2kan_decimal } from "../MyLib.js";

export default abstract class NifuStrategy extends Strategy {
  strategyGenre = "二歩";
  protected ban: Ban;
  protected checker: ScanNifuStrategy;
  constructor(ban: Ban) {
    super();
    this.ban = ban;
  }
  execute(to: XY) {
    this.checker.execute(to);
  }

  static create(name: string, ban: Ban, setting: any): NifuStrategy {
    const klass: any = nameToStrategy[name];
    return new klass(ban, setting);
  }

  listNifuDisplayNames(): string {
    return this.ban.parent.rule.koma
      .map((species) => Koma.getStatelessData(species))
      .filter((koma) => koma.nifu)
      .map(
        (koma) => `${num2kan_decimal(koma.nifu)}${koma.shortname || koma.name}`
      )
      .join("、");
  }
  isNormal(): boolean {
    const displayNames = this.listNifuDisplayNames();
    return (displayNames == "" || displayNames == "二歩") && super.isNormal();
  }
}
//通常
class NormalNifuStrategy extends NifuStrategy {
  abstract = "禁止";
  constructor(ban: Ban) {
    super(ban);
    this.checker = new NormalScanNifuStrategy(
      this.ban,
      new NormalOnFoundNifuStrategy(this.ban)
    );
  }

  toHTML(): string {
    return `${this.listNifuDisplayNames()}は禁止`;
  }
}
//二歩ok
class NoNifuStrategy extends NifuStrategy {
  abstract = "許可";
  execute(to: XY) {}
}
//斜め将棋
class NanameNifuStrategy extends NifuStrategy {
  constructor(ban: Ban) {
    super(ban);
    this.checker = new NanameScanNifuStrategy(
      this.ban,
      new NormalOnFoundNifuStrategy(this.ban)
    );
  }

  toHTML(): string {
    return `斜め方向の${this.listNifuDisplayNames()}が禁止`;
  }
}
//盤面全体
class WholeNifuStrategy extends NifuStrategy {
  constructor(ban: Ban) {
    super(ban);
    this.checker = new WholeScanNifuStrategy(
      this.ban,
      new NormalOnFoundNifuStrategy(this.ban)
    );
  }
  toHTML(): string {
    return `着手した駒だけでなく全ての${this.listNifuDisplayNames()}を調べる`;
  }
}
//盤面全体かつ二歩負け
class PenaltyNifuStrategy extends NifuStrategy {
  constructor(ban: Ban) {
    super(ban);
    this.checker = new WholeScanNifuStrategy(
      this.ban,
      new FatalOnFoundNifuStrategy(this.ban)
    );
  }
  toHTML(): string {
    return `即負け。着手した駒だけでなく全て${this.listNifuDisplayNames()}のを調べる。`;
  }
}

abstract class ScanNifuStrategy {
  protected ban: Ban;
  protected onFound: OnFoundNifuStrategy;
  constructor(ban: Ban, onFound: OnFoundNifuStrategy) {
    this.onFound = onFound;
    this.ban = ban;
  }
  scan(koma: Koma, start: XY, vec: RelXY, flags = { limitJump: -1 }) {
    let cnt = 0;
    for (const now of this.ban.getScanIterator(start, vec, flags)) {
      if (koma.equals(this.ban.get(now))) cnt++;
    }
    return cnt;
  }
  scanBoth(koma: Koma, start: XY, vec: RelXY) {
    let cnt = this.scan(koma, start, vec);
    vec.turn(1); //180?度回転
    cnt += this.scan(koma, start, vec);
    return cnt;
  }
  abstract execute(to: XY): void;
}
class NormalScanNifuStrategy extends ScanNifuStrategy {
  execute(to: XY) {
    const koma = this.ban.get(to);
    if (koma.isNull()) return;
    const limit = koma.get("nifu");
    if (limit) {
      const vec = new RelXY(0, -1);
      vec.turn(koma.direction);
      const cnt = 1 + this.scanBoth(koma, to, vec);

      if (cnt >= limit) {
        //二歩
        const displayName = num2kan_decimal(limit) + koma.getShortName();
        this.onFound.execute(koma.direction, displayName);
      }
    }
  }
}
class NanameScanNifuStrategy extends ScanNifuStrategy {
  execute(to: XY) {
    const koma = this.ban.get(to);
    const limit = koma.get("nifu");
    if (limit) {
      const vec = new RelXY(-1, -1);
      vec.turn(koma.direction);
      const cnt = 1 + this.scanBoth(koma, to, vec);

      if (cnt >= limit) {
        //二歩
        const displayName = num2kan_decimal(limit) + koma.getShortName();
        this.onFound.execute(koma.direction, displayName);
      }
    }
  }
}
class WholeScanNifuStrategy extends ScanNifuStrategy {
  execute(to: XY) {
    const koma = this.ban.get(to);
    if (koma.isNull()) return;
    const mydirection = koma.direction;
    //vec=new RelXY(0, -1);
    //vec.turn(koma.direction);

    const cnts: { [species: string]: number[] }[] = [];
    //if(vec.x==0){
    //縦
    for (const nowkoma of this.ban.getIterator()) {
      if (nowkoma.isNull()) continue;
      if (nowkoma.get("nifu")) {
        if (!cnts[nowkoma.XY.x]) cnts[nowkoma.XY.x] = {};
        if (!cnts[nowkoma.XY.x][nowkoma.species])
          cnts[nowkoma.XY.x][nowkoma.species] = [];
        if (!cnts[nowkoma.XY.x][nowkoma.species][nowkoma.direction])
          cnts[nowkoma.XY.x][nowkoma.species][nowkoma.direction] = 0;
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
    for (const linenum in cnts) {
      for (const species in cnts[linenum]) {
        const directions = cnts[linenum][species];

        const cnt = directions[mydirection];
        const { nifu, shortname, name } = Koma.getStatelessData(species);
        const displayName = num2kan_decimal(nifu) + (shortname || name);

        if (nifu <= cnt) {
          //二歩
          this.onFound.execute(mydirection, displayName);
          return;
        }

        for (let direction = 0; direction < directions.length; direction++) {
          const cnt = directions[direction];
          if (direction == mydirection) continue;
          if (nifu <= cnt) {
            //二歩
            this.onFound.execute(direction, displayName);
            return;
          }
        }
      }
    }
  }
}

abstract class OnFoundNifuStrategy {
  protected ban: Ban;
  constructor(ban: Ban) {
    this.ban = ban;
  }
  abstract execute(direction: Direction, displayName: string): void;
}
class NormalOnFoundNifuStrategy extends OnFoundNifuStrategy {
  execute(direction: Direction, displayName: string) {
    throw new ShogitterCoreException(`${displayName}です`);
  }
}
class FatalOnFoundNifuStrategy extends OnFoundNifuStrategy {
  execute(direction: Direction, displayName: string) {
    this.ban.parent.gameEnd(
      direction,
      direction,
      "反則負け",
      `${displayName}です。${this.ban.parent.teban.getName(
        direction
      )}の負けです。`
    );
  }
}
const nameToStrategy: { [variant: string]: typeof NifuStrategy } = {
  Normal: NormalNifuStrategy,
  No: NoNifuStrategy,
  Naname: NanameNifuStrategy,
  Whole: WholeNifuStrategy,
  Penalty: PenaltyNifuStrategy,
};
