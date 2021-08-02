import {ShogitterCoreException} from "./utils/phpCompat";
import Ban, {Direction} from "./Ban";
import {num2kan_decimal} from "./MyLib";

export enum RelativeType {
    TATEYOKO = 1,
    ALLROUND = 2,
    HALFROUND = 3,
}

export const XYMatcher = (x: number, y: number) => (xy: XY) => xy.x == x && xy.y == y;

export type XYObj = [number, number];

export class RelXY {
    x: number;
    y: number;
    static constants = {
        [RelativeType.TATEYOKO]: [//縦横１マスの位置（計４マス）
            new RelXY(1, 0),
            new RelXY(-1, 0),
            new RelXY(0, 1),
            new RelXY(0, -1),
        ],
        [RelativeType.ALLROUND]: [//周囲１マスの位置（計８マス）
            new RelXY(1, 0),
            new RelXY(-1, 0),
            new RelXY(0, 1),
            new RelXY(0, -1),
            new RelXY(1, 1),
            new RelXY(1, -1),
            new RelXY(-1, 1),
            new RelXY(-1, -1),
        ],
        [RelativeType.HALFROUND]: [//周囲１マスの位置を半周（計４マス）
            new RelXY(1, 0),
            new RelXY(1, 1),
            new RelXY(0, 1),
            new RelXY(-1, 1),
        ]
    };
    static getVector(type: RelativeType): RelXY[] {
        return RelXY.constants[type];
    }

    static fromArray([x, y]: XYObj) {
        return new RelXY(x, y);
    }

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y}) `;
    }

    getHash() {
        return `${this.x},${this.y}`;
    }

    add(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    addRel(relXY: RelXY, tani = 1) {
        this.x += relXY.x * tani;
        this.y += relXY.y * tani;
    }

    set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    equals(xy: XY) {
        return (this.x == xy.x && this.y == xy.y);
    }

    getClone(x = 0, y = 0) {
        const tmp = new RelXY(this.x, this.y);
        tmp.add(x, y);
        return tmp;
    }

    getCloneRel(relXY: RelXY, tani = 1) {
        const tmp = new RelXY(this.x, this.y);
        tmp.addRel(relXY, tani);
        return tmp;
    }

    getArray(): XYObj {
        return [this.x, this.y];
    }

    turn(direction: Direction) {
        let x, y;
        switch (direction) {
            case Direction.BLACK://先手0度回転
                x = this.x;
                y = this.y;
                break;
            case Direction.WHITE://後手180度回転
                x = -this.x;
                y = -this.y;
                break;
            case Direction.LEFT://左手90度回転
                x = this.y;
                y = -this.x;
                break;
            case Direction.RIGHT://右手270度回転
                x = -this.y;
                y = this.x;
                break;
            default:
                throw new ShogitterCoreException(`駒の向き${direction}が定義されていません。`);
        }
        this.x = x;
        this.y = y;
    }

    turnReverse(direction: Direction) {
        let x, y;
        switch (direction) {
            case Direction.BLACK://先手0度回転
                x = this.x;
                y = this.y;
                break;
            case Direction.WHITE://後手180度回転
                x = -this.x;
                y = -this.y;
                break;
            case Direction.LEFT://左手270度回転
                x = -this.y;
                y = this.x;
                break;
            case Direction.RIGHT://右手90度回転
                x = this.y;
                y = -this.x;
                break;
            default:
                throw new ShogitterCoreException(`駒の向き${direction}が定義されていません。`, 1);
        }
        this.x = x;
        this.y = y;
    }

//単位ベクトル化(最小公倍数で割る)
    unify() {
        let abs;
        if (this.x == 0) {
            if (this.y == 0) {
                return 1;
            } else {
                abs = Math.abs(this.y);
                this.y /= abs;
                return abs;
            }
        } else {
            if (this.y == 0) {
                abs = Math.abs(this.x);
                this.x /= abs;
                return abs;
            } else {
                const gcd = RelXY.gcd(Math.abs(this.x), Math.abs(this.y));
                this.x /= gcd;
                this.y /= gcd;
                return gcd;
            }
        }
    }

//最大公倍数を求める（ユークリッドの互除法）
    static gcd(m: number, n: number) {
        while (m % n != 0) {
            const temp = n;
            n = m % n;
            m = temp;
        }
        return n;
    }

    getCloneFlipped() {
        const ret = this.getClone();
        ret.x *= -1;
        ret.y *= -1;
        return ret;
    }
}

export default class XY extends RelXY {
    /**
     * 座標を生成
     * @param x
     * @param y
     */
    constructor(x: number, y: number) {
        super(x, y);
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }

    getFormat() {
        return this.x+num2kan_decimal(`${this.y}`);
    }

    turn() {
        throw new ShogitterCoreException("座標が回転できません。");
    }

    turnReverse() {
        throw new ShogitterCoreException("座標が回転できません。");
    }

    getDistance(xy: XY) {
        return Math.pow(this.x - xy.x, 2) + Math.pow(this.y - xy.y, 2);
    }

    to(xy: XY) {
        return new RelXY(xy.x - this.x, xy.y - this.y);
    }

    from(xy: XY) {
        return new RelXY(this.x - xy.x, this.y - xy.y);
    }

    clone() {
        return new XY(this.x, this.y);
    }

    getClone(x = 0, y = 0): XY {
        const tmp = new XY(this.x, this.y);
        tmp.add(x, y);
        return tmp;
    }

    getCloneRel(relXY: RelXY, tani = 1) {
        const tmp = new XY(this.x, this.y);
        tmp.addRel(relXY, tani);
        return tmp;
    }
}
