import {Exception} from "./utils/phpCompat";
import komaColl from "./db/koma";
import ruleColl from "./db/rule";
import {Species} from "./Ban";
import {MochigomaObjDB} from "./Mochigoma";
import {MoveType} from "./Koma";

type KomaObj = [] | [number, Species];
export type Rule = {
    _id: number,
    abstract: string,
    init: {
        ban: KomaObj[][],
        mochigoma: MochigomaObjDB[]
    },
    koma: Species[],
    name: string,
    nari: {[species: string]: Species},
    players: number[],
    refKoma: any[],
    size: number[],
    strategy: any, // TODO
    winkoma: Species[];
    komaochi?: boolean;
    iterator?: any,
    rensa?: boolean,
    incomplete?: boolean,
    js?: "quantum",
}

export type MoveAndType = {
    move: [number, number],
    type: MoveType
}

export type Koma = {
    species: string,
    name: string,
    shortname?: string,
    csaname?: string,
    move: {move: [number, number], type: MoveType | MoveType[]}[],
    nifu?: number;
    limit?: {[type: number]: number};
    mustNotBeEmpty?: {[type: number]: MoveAndType | MoveAndType[]},
    jumpException?: Species[],
    change?: {[type: number]: number}
}

type KomaConfig = any;

class ShogitterDB {
    // db;
    arrayRule: {[ruleid: string]: Rule} = {};
    arrayKoma: {[species: string]: KomaConfig} = {};
    // arrayRuleGenre;

    nameRuleMap: {[ruleName: string]: Rule} = null;

    constructor(db: any) {
        // this.db = db;
    }

    getAllRules(): Rule[] {
        const rules: Rule[] = [];
        for(let i=0; i<110; i++) {
            try{
               rules.push(this.getRule(i));
            } catch(e) {
                break;
            }
        }
        return rules;
    }

    getRuleByName(name: string): Rule {
        if (!this.nameRuleMap) {
            this.nameRuleMap = {};
            for (let i = 0; i < 110; i++) {
                const rule = this.getRule(i);
                this.nameRuleMap[rule.name] = rule;
            }
        }

        return this.nameRuleMap[name];
    }

    getRule(ruleid: number): Rule {
        if (!this.arrayRule[ruleid]) {
            this.loadRule(ruleid);
        }
        return this.arrayRule[ruleid];
    }

    loadRule(ruleid: number) {
        const rule = ruleColl.get(ruleid);
        if (!rule) throw new Exception(`指定されたルールID「${ruleid}」が不正です。`);
        if ('extend' in rule) {
            //継承する
            const extRule = {...this.getRule(rule.extend.$id)};
            //親ルール上にルールを上書き
            for (let name in rule) {
                const value = rule[name];
                if (name == "init") {
                    extRule.init = {
                        ban: value.ban || extRule.init.ban,
                        mochigoma: value.mochigoma || extRule.init.mochigoma,
                    }
                } else {
                    // @ts-ignore
                    extRule[name] = value;
                }
            }
            this.arrayRule[ruleid] = extRule;
        } else {
            this.arrayRule[ruleid] = rule;
        }
    }

    /*
    getRulePart(query = {}, part = {"name": 1, "_id": 1}) {
        part['_id'] = 1;
        const cursor = this.db.rule.find(query, part);
        const ret = {};
        while (cursor.hasNext()) {
            const rule = cursor.getNext();
            ret[rule['_id'].toString()] = rule;
        }
        return ret;
    }
     */

    getKoma(species: Species, member?: string) {
        if (!this.arrayKoma[species]) {
            this.loadKoma(species);
        }
        if (member == null) {
            return this.arrayKoma[species];
        } else {
            return this.arrayKoma[species][member];
        }
    }

    loadKoma(species: Species) {
        const result = komaColl.get(species);
        if (result == null) throw new Exception(`駒 ${species} が不明です．`+1);
        this.arrayKoma[species] = result;
    }

    /*
    loadKomaByRefs(refs) {
        for (let ref of refs) {
            const koma = this.db.getDBRef(ref);
            this.arrayKoma[koma['species']] = koma;
        }
    }

    loadKomaByRule(rule) {
        if (rule['refKoma'] && rule['refKoma'].length > 0) {
            this.loadKomaByRefs(rule['refKoma']);
        }
    }

    loadKomaByRuleId(ruleid) {
        const rule = this.getRule(ruleid);
        if (rule['refKoma'] && rule['refKoma'].length > 0) {
            this.loadKomaByRefs(rule['refKoma']);
        }
    }

    getRuleGenre() {
        if (!this.arrayRuleGenre) {
            this.loadRuleGenre();
        }
        return this.arrayRuleGenre;
    }

    loadRuleGenre() {
        const cursor = this.db.rulegenre.find({}, {'name': 1, 'rules': 1}).sort({'_id': 1});
        while (cursor.hasNext()) {
            const genre = cursor.getNext();
            this.arrayRuleGenre[genre.name] = [];
            for (let ruleid of genre['rules']) {
                this.arrayRuleGenre[genre.name].push(ruleid);
            }
        }
    }
     */
}

let mongo;
export let shogitterDB: ShogitterDB;
try {
    /*mongo=new Mongo("mongodb://".Setting.db_user.":".Setting.db_pass."@".Setting.db_host.":".Setting.db_port."/".Setting.db_name);
    db=mongo.selectDB(Setting.db_name);*/
    shogitterDB = new ShogitterDB(null);
} catch (e) {
    throw "データベースエラー";
}
