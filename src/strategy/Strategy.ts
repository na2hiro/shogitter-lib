/**
 * 処理の切替を担う
 */
import XY from "../XY";
import Ban, {Direction} from "../Ban";

export type StrategySerialization = any; // TODO

export type CommonConfig = {
    common: {
        directions: Direction[]
    },
}

export default abstract class Strategy {
    public abstract = "説明";
    protected commonSetting: {
        directions?: Direction[];
    };

    setCommonSetting(setting = {}) {
        this.commonSetting = setting;
    }

    checkDirection(direction: Direction) {
        const dirs = this.commonSetting.directions;
        return !dirs || dirs.indexOf(direction) >= 0;
    }

    toHTML(): string {
        //return "<del>".get_class(this).this.abstract."</del>";
        return "strategy";
    }

    serialize(obj: StrategySerialization): StrategySerialization {
        return obj;
    }

    deserialize(obj: StrategySerialization) {
        return;
    }

    abstract execute(a: any, b: any, c: any, d: any, e: any): void;

    // TODO create factory class
    // static abstract create();
}

export abstract class BeforeAfterDropStrategy extends Strategy {
    execute(a: any, b: any) {
        throw "shouldn't be called";
    }

    abstract executeBefore(from: XY, to: XY): void;

    abstract executeAfter(to: XY, captured?: boolean): void;

    abstract executeDrop(to: XY, additional1?: any, additional2?: any): void;
}

/**
 * Strategyを複数保つ
 */
export abstract class StrategyContainer<T extends Strategy> {
    public abstract: string;
    static defaultSetting = {};
    protected arrayStrategies: T[] = [];
    public ban: Ban;

    constructor() {

    }

    execute(): any {
        for (let strategy of this.arrayStrategies) {
            if (strategy.checkDirection(this.ban.parent.fromDirection)) strategy.execute.apply(strategy, arguments);
        }
    }

    add(strategy: T) {
        this.arrayStrategies.push(strategy);
    }

    /*
    has(name) {
        const className = name+get_class(this);
        for (let strategy of this.arrayStrategies) {
            throw "variantName?";
            if (className == strategy.variantName) return true; // TODO variantName?
        }
        return false;
    }*/

    toHTML() {
        const ret = [];
        for (let strategy of this.arrayStrategies) {
            const val = strategy.toHTML();
            if (val !== null) ret.push(strategy.toHTML());
        }
        if (ret.length >= 2) {
            return "<ul>" + ret.filter((ret) => ret !== null).map(str => "<li>" + str).join("") + "</ul>";
        }
        return ret[0];
    }

    getAbstract() {
        return this.abstract;
    }

    deserialize(obj: StrategySerialization) {
        for (let strategy of this.arrayStrategies) {
            obj = strategy.deserialize(obj);
        }
    }

    serialize(obj: StrategySerialization): StrategySerialization {
        for (let strategy of this.arrayStrategies) {
            obj = strategy.serialize(obj);
        }
        return obj;
    }
}

export abstract class BeforeAfterDropStrategyContainer<T extends BeforeAfterDropStrategy> extends StrategyContainer<T> {
    executeBefore(from: XY = null, to: XY = null) {
        for (let strategy of this.arrayStrategies) {
            if (strategy.checkDirection(this.ban.parent.fromDirection)) strategy.executeBefore(from, to);
        }
    }

    executeAfter(to: XY = null, captured = false) {
        for (let strategy of this.arrayStrategies) {
            if (strategy.checkDirection(this.ban.parent.fromDirection)) strategy.executeAfter(to, captured);
        }
    }

    executeDrop(to: XY = null, additional1?: any, additional2?: any) {
        for (let strategy of this.arrayStrategies) {
            if (strategy.checkDirection(this.ban.parent.fromDirection)) strategy.executeDrop(to, additional1, additional2);
        }
    }
}