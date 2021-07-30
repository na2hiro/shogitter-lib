/**
 * 持ち駒入出力に関するStrategy
 */
import Ban, {Direction} from "../Ban";
import Strategy, {StrategyContainer} from "./Strategy";
import {Mochigoma} from "../Mochigoma";

export class MochigomaControlStrategyContainer<S> extends StrategyContainer<MochigomaControlStrategy<S>> {
    public static abstract = "持ち駒判定";

    getStrategyGenre() {
        return this.abstract;
    }
}

/**
 * 持ち駒を取った後のチェックに関するStrategy
 */
export default abstract class MochigomaControlStrategy<S> extends Strategy {
    static abstract = "持ち駒判定";
    protected mochigoma: Mochigoma;
    protected setting: S;

    abstract execute(tebanDirection: Direction): void;

    constructor(ban: Ban, setting: S) {
        super();
        this.mochigoma = ban.parent.mochigoma;
        this.setting = setting;
    }

    static create<S>(name: string, ban: Ban, setting: any): MochigomaControlStrategy<S> {
        const klass: any = nameToStrategy[name];
        return new klass(ban, setting);
    }
}

/**
 * チェックしない
 */
class NormalMochigomaControlStrategy extends MochigomaControlStrategy<{}> {
    static abstract = "通常";

    execute(tebanDirection: Direction) {
    }
}

/**
 * 3枚目なら勝ち
 */
class WinThirdMochigomaControlStrategy extends MochigomaControlStrategy<{}> {
    static abstract = "三枚目になると勝ち。";

    execute(tebanDirection: Direction) {
        if (this.mochigoma.count(tebanDirection) >= 3) {
            const lose = tebanDirection == 0 ? 1 : 0;
            this.mochigoma.parent.gameEnd(lose, tebanDirection, "勝ち", "３枚目です。" + this.mochigoma.parent.teban.getName(tebanDirection) + "の勝ちです。");
        }
    }

    toHTML() {
        return this.abstract;
    }
}

/**
 * 5枚目なら負け
 */
class LoseFifthMochigomaControlStrategy extends MochigomaControlStrategy<{}> {
    static abstract = "五枚目になると負け。";

    execute(tebanDirection: Direction) {
        if (this.mochigoma.count(tebanDirection) >= 5) {
            this.mochigoma.parent.gameEnd(tebanDirection, tebanDirection, "負け", "持ち駒が5枚に達しました。" + this.mochigoma.parent.teban.getName(tebanDirection) + "の負けです。");
        }
    }

    toHTML() {
        return this.abstract;
    }
}
const nameToStrategy: {[variant: string]: (/*typeof MochigomaControlStrategy*/any)} = {
    Normal: NormalMochigomaControlStrategy,
    WinThird: WinThirdMochigomaControlStrategy,
    LoseFifth: LoseFifthMochigomaControlStrategy
};
