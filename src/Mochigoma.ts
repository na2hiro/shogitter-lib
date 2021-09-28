import {ShogitterCoreException} from "./utils/phpCompat";
import Shogi, {Player} from "./Shogi";
import {Koma} from "./Koma";
import {
    Config,
    generateStrategyContainer,
    MochigomaStrategy, MochigomaStrategyNameWithContainer
} from "./strategy/StrategyFactory";
import {PutDiff} from "./Kifu";
import {Direction, Species} from "./Ban";

function pad0(value: number) {
    return value>=10 ? `${value}` : `0${value}`;
}

export type MochigomaObj = {[species: string]: number};
export type MochigomaObjDB = MochigomaObj | [];

type StrategyContainerName = 'MochigomaIO' | 'MochigomaControl';
const strategyContainerNames: StrategyContainerName[] = ['MochigomaIO', 'MochigomaControl'];

export class Mochigoma {
    arrayMochigoma: MochigomaObj[];
    parent: Shogi;
    strategy: MochigomaStrategy;

    constructor(parent: Shogi) {
        this.parent = parent;
        this.arrayMochigoma = [];
        for(let i=0; i<this.parent.rule.players.length; i++) {
            this.arrayMochigoma[i] = {};
        }
    }

    __toString() {
        let ret = "";
        const mochigoma = this.getArray();

        const max = this.parent.rule.players.length;
        let maxpnum = 0;
        for (let i = 0; i < max; i++) {
            maxpnum = Math.max(maxpnum, this.parent.rule.players[i]);
        }
        for (let i = 0; i <= maxpnum; i++) {
            if (mochigoma[i]) {
                for (let thisSpecies in mochigoma[i]) {
                    ret += thisSpecies + pad0(mochigoma[i][thisSpecies]);
                }
            }
            ret += /*"|" + this.parent.arrayplayers[i] +*/ "\n";
        }
        return ret;
    }

    setStrategy(strategies: {[name in MochigomaStrategyNameWithContainer]: Config}) {
        const generatedStrategy: any = {};
        for (let name of strategyContainerNames) {
            generatedStrategy[name] = generateStrategyContainer(name, strategies[name], this.parent.ban);
        }

        this.strategy = generatedStrategy;
    }

    getDifference(lastmochigoma: MochigomaObj[]): PutDiff[] {
        const ret: PutDiff[] = [];
        const nowmochigoma = this.getArray();

        for (let player of this.parent.teban.getIterator()) {
            for (let koma in nowmochigoma[player]) {
                const value = nowmochigoma[player][koma];
                if (!lastmochigoma[player][koma]) {
                    //元々なかったら
                    ret.push([value, player, koma]);
                } else if (lastmochigoma[player][koma] != value) {
                    ret.push([value - lastmochigoma[player][koma], player, koma]);
                } else {
                    //種類があって同じ数だったらなにもしない
                }
            }

            for (let koma in lastmochigoma[player]) {
                if (nowmochigoma[player][koma]) continue;
                ret.push([-lastmochigoma[player][koma], player, koma]);
            }
        }
        return ret;
    }

// Commented out
    /*getEncodedFormat(){
        const mochi=this.arrayMochigoma[0];
        return binstringify(mochi['aa'], 5).
        binstringify(mochi['ab'], 3).
        binstringify(mochi['ac'], 3).
        binstringify(mochi['ad'], 3).
        binstringify(mochi['ae'], 3).
        binstringify(mochi['af'], 2).
        binstringify(mochi['ag'], 2);
    }*/

// TODO cannot sort map
    getArray(): MochigomaObj[] {
        return this.arrayMochigoma
            .map(map => ({
                ...map
            }));
    }

    /**
     * 内部フォーマットテキストで持ち駒を上書きする
     * @param unknown_type text
     */
    update(array: MochigomaObjDB[]) {
        for (let direction =0; direction< array.length; direction++) {
            if(typeof array[direction] === "object") {
                const map = array[direction] as MochigomaObj;
                for (let species in map) {
                    this.add(species, direction, map[species]);
                }
            }
        }
    }

    updateByJSON(players: Player[]) {
        this.arrayMochigoma = [];
        if (players.length == 0) return;
        for (let direction=0; direction< players.length; direction++) {
            this.arrayMochigoma.push({});
            const player = players[direction];
            for (let species in player['mochigoma']) {
                this.add(species, direction, player.mochigoma[species]);
            }
        }
    }

    /**
     * 持ち駒を追加する
     * @param unknown_type species
     * @param unknown_type direction
     */
    add(species: Species, direction: Direction, value = 1) {
        if (value >= 0) {
            if(!this.arrayMochigoma[direction][species]) this.arrayMochigoma[direction][species] = 0;
            this.arrayMochigoma[direction][species] += value;
        } else {//負だったらremove
            this.remove(species, direction, value * -1);
        }
    }

    addKoma(koma: Koma, value = 1) {
        this.add(koma.species, koma.direction, value);
    }

    /**
     * 持ち駒を取り去る
     * @param unknown_type species
     * @param unknown_type direction
     */
    remove(species: Species, direction: Direction, value = 1) {
        if (!this.arrayMochigoma[direction][species] || this.arrayMochigoma[direction][species] - value < 0) {
            throw new ShogitterCoreException(`持ち駒 ${species} が足りません: ${this.arrayMochigoma[direction][species]} < ${value}`);
        } else if (this.arrayMochigoma[direction][species] - value === 0) {
            delete this.arrayMochigoma[direction][species];
        } else {
            this.arrayMochigoma[direction][species] -= value;
        }
    }

// TODO not used?
    /*
    cut(species, direction){
        this.remove();
    }
    */

    /**
     * その人の持っている駒の数を数える
     * @param unknown_type direction
     */
    count(direction: Direction) {
        let ret = 0;
        for (let species in this.arrayMochigoma[direction]) {
            ret += this.arrayMochigoma[direction][species];
        }
        return ret;
    }

    /**
     * 駒台にその駒があるかどうか
     * @param unknown_type species
     * @param unknown_type direction
     */
    exists(species: Species, direction: Direction) {
        if (this.arrayMochigoma[direction][species] > 0) return true;
        return false;
    }
}
