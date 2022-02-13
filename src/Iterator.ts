import {ShogitterCoreException} from "./utils/phpCompat";
import XY, {RelXY} from "./XY";
import Ban, {Direction, Species} from "./Ban";
import {Koma} from "./Koma";

type Size = [number, number];
export class BanIterator implements Iterator<Koma>, Iterable<Koma> {
    private position = [1, 1];
    private arrayBan: Koma[][] = null;
    private size: Size = [0, 0];

    public constructor(arrayBan: Koma[][], size: Size) {
        this.arrayBan = arrayBan;
        this.size = size;
    }

    key() {
        return this.position.join(",");
    }

    next() {
        if(!this.valid()) {
            return {
                done: true,
                value: undefined
            };
        }
        const value = this.arrayBan[this.position[0]][this.position[1]];
        this.nextPlace();
        return {
            done: false,
            value
        };
    }

    nextPlace() {
        if (++this.position[1] > this.size[1]) {
            this.position[0]++;
            this.position[1] = 1;
        }
    }

    valid() {
        return this.position[0]<=this.size[0] && this.position[1]<=this.size[1];
    }

    [Symbol.iterator](): Iterator<Koma> {
        return this;
    }
}

export class NormalBanIterator extends BanIterator {

}

type IteratorFlags = {
    limit?: number, //探索距離(標準は無制限)
    limitJump?: number, //飛び越え距離(標準は1つも飛ばさない)
    jumpException?: string[], //飛び越えられない駒(標準は何でも)
    noPick?: boolean, //駒をとることが出来ない
    justStart?: boolean, //その座標から探索開始
    skip?: number, //最初のnマスは飛ばす(標準はすぐに)
    skipJump?: number, //最初のn駒は飛ばす(標準はすぐに)
    mustPick?: boolean, //駒取り必須
    iterator?: {

    }
}
type IteratorOption = {
    only?: Species[]
}

export class BanScanIterator implements Iterator<XY>, Iterable<XY> {
    protected position: XY;
    protected initPosition: XY;
    protected ban: Ban;
    protected size = [0, 0];
    protected vector: RelXY;
    protected cnt: number;
    protected cntJump: number;
    protected limit: number;
    protected limitJump: number;
    protected justStart: boolean;
    private noPick: boolean;
    private skip: number;
    private skipJump: number;
    private mustPick: boolean;
    protected iteratorOption: IteratorOption;
    private jumpExceptions: any[];

    static getBetween(ban: Ban, from: XY, to: XY): Iterable<XY> {
        const vec = to.getCloneRel(from, -1);
        const limit = vec.unify() - 1;
        if (limit == 0) return [];
        return new BanScanIterator(ban, from, vec, {limit, limitJump: 1000});
    }

    public constructor(ban: Ban, position: XY, vector: RelXY, flags: IteratorFlags = {}) {
        this.ban = ban;
        this.size = [ban.x, ban.y];
        this.initPosition = position.getClone();
        this.vector = vector;
        if (this.vector.x == 0 && this.vector.y == 0) throw new ShogitterCoreException("探索ベクトルが零ベクトルです。");
        this.limit = flags.limit || -1;
        this.limitJump = flags.limitJump || 0;
        this.jumpExceptions = flags.jumpException || [];
        this.noPick = flags.noPick;
        this.justStart = flags.justStart;
        this.skip = flags.skip || 0;
        this.skipJump = flags.skipJump || 0;
        this.mustPick = flags.mustPick || false;
        this.iteratorOption = flags.iterator;

        this.position = this.initPosition.getClone();
        if (!this.justStart) this.nextPlace();
        this.cnt = this.cntJump = 0;
        for (let i = 0; i < this.skip; i++) {
            this.nextPlace();
        }
        let jump = 0;
        while (jump < this.skipJump) {
            if (!this.ban.isLegal(this.position)) return;
            if (!this.ban.get(this.position).isNull()) {
                jump++;
            }
            this.nextPlace();
        }
    }

    next() {
        if(!this.valid()) {
            return {
                done: true,
                value: undefined
            }
        }
        const value = this.position.getClone();
        this.count();
        this.nextPlace();
        return {
            done: false,
            value
        }
    }

    count() {
        if (this.ban.exists(this.position) && this.ban.get(this.position).direction != Direction.SOMETHING){
            this.cntJump++;
        }
        this.cnt++;
    }

    nextPlace() {
        this.position.addRel(this.vector);
    }

    valid() {
        return this.ban.isLegal(this.position)
            && this.underJumpLimit()
            && (this.noPick ? this.ban.get(this.position).isNull() : true)
            && this.underLimit()
            && this.jumpException()
            && !this.position.equals(this.initPosition);
    }

    underLimit() {
        return this.limit == -1 ? true : this.cnt < this.limit;
    }

    underJumpLimit() {
        return this.limitJump == -1 ? true : this.cntJump <= this.limitJump;
    }

    jumpException() {
        const nowkoma = this.ban.get(this.position);
        return nowkoma.isNull() || this.jumpExceptions.indexOf(nowkoma.species) == -1;
    }

    [Symbol.iterator](): Iterator<XY> {
        return this;
    }

    static create(name: string, ban: Ban, position: XY, vector: RelXY, flags = {}): BanScanIterator {
        const klass: any = nameToIterator[name];
        return new klass(ban, position, vector, flags);
    }
}

class NormalBanScanIterator extends BanScanIterator {

}

class LoopBanScanIterator extends BanScanIterator {
    nextPlace() {
        this.position.addRel(this.vector);
        if (this.iteratorOption['only'] && this.iteratorOption['only'].indexOf(this.ban.get(this.initPosition).species) == -1) return;
        if (this.position.x <= 0) {
            this.position.add(this.size[0], 0);
        } else if (this.size[0] < this.position.x) {
            this.position.add(-this.size[0], 0);
        }
    }
}

class DonutBanScanIterator extends LoopBanScanIterator {
    nextPlace() {
        this.position.addRel(this.vector);
        if (this.position.x <= 0) {
            this.position.add(this.size[0], 0);
        } else if (this.position.x > this.size[0]) {
            this.position.add(-this.size[0], 0);
        }
        if (this.position.y <= 0) {
            this.position.add(0, this.size[1]);
        } else if (this.position.y > this.size[1]) {
            this.position.add(0, -this.size[1]);
        }
    }
}

class ReflectBanScanIterator extends BanScanIterator {
    nextPlace() {
        this.position.addRel(this.vector);
        if (this.position.x <= 0) {
            this.vector.x *= -1;
            this.position.x = 2 - this.position.x;
        } else if (this.position.x > this.size[0]) {
            this.vector.x *= -1;
            this.position.x = 2 * this.size[0] - this.position.x;
        }
        if (this.position.y <= 0) {
            this.vector.y *= -1;
            this.position.y = 2 - this.position.y;
        } else if (this.position.y > this.size[1]) {
            this.vector.y *= -1;
            this.position.y = 2 * this.size[1] - this.position.y;
        }
    }
}

class DiamondBanScanIterator extends BanScanIterator {
    valid() {
        return this.ban.isLegal(this.position)
            && ((this.cnt == 1 && this.cntJump == 1)
                || (this.cntJump == 0 && this.underLimit()))
            && !this.position.equals(this.initPosition);
    }
}

class EpoxyBanScanIterator extends BanScanIterator {
    private myPiece: XY[];

    public constructor(ban: Ban, position: XY, vector: RelXY, flags = {}) {
        super(ban, position, vector, flags);
        this.myPiece = this.ban.getEpoxied(position);
    }

    count() {
        this.cnt++;
        if (this.ban.exists(this.position) && this.ban.get(this.position).direction != 9) {
            for (let xy of this.myPiece) {
                if (xy.equals(this.position)) return;
            }
            //自分にくっついていない
            this.cntJump++;
        }
    }
}
const nameToIterator: {[variant: string]: (typeof BanScanIterator)} = {
    Normal: NormalBanScanIterator,
    Loop: LoopBanScanIterator,
    Donut: DonutBanScanIterator,
    Reflect: ReflectBanScanIterator,
    Diamond: DiamondBanScanIterator,
    Epoxy: EpoxyBanScanIterator,
};
