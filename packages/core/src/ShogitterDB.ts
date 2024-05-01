import { ShogitterCoreException } from "./utils/phpCompat.js";
import komaConst, { KomaInfo } from "./db/koma.js";
import ruleConst from "./db/rule.js";
import ruleGenreConst from "./db/rulegenre.js";
import { Species } from "./Ban.js";
import { MochigomaObjDB } from "./Mochigoma.js";

const MAX_RULE_ID = 113;

type KomaObj = [] | [number, Species];
export type Rule = {
  _id: number;
  abstract: string;
  init: {
    ban: KomaObj[][];
    mochigoma: MochigomaObjDB[];
  };
  koma: Species[];
  name: string;
  nari: { [species: string]: Species };
  players: number[];
  size: number[];
  strategy: any; // TODO
  winkoma?: Species[];
  komaochi?: boolean;
  iterator?: any;
  rensa?: boolean;
  incomplete?: boolean;
  js?: "quantum";
  img?: {
    width: number;
    height: number;
  };
  noRoom?: boolean; // under construction TODO: difference from incomplete?
  eatfriend?: boolean;
  noreverse?: "ban" | "koma";
  css?: string;
  yonin?: boolean;
};

export type MoveAndPieceType = {
  move: [number, number];
  type: PieceType;
};

enum PieceType {
  FRIEND = 1,
  ENEMY = 2,
}

type KomaConfig = any;

class ShogitterDB {
  // db;
  arrayRule: { [ruleid: string]: Rule } = {};

  nameRuleMap: { [ruleName: string]: Rule } = null;

  getAllRules(): Rule[] {
    const rules: Rule[] = [];
    for (let i = 0; i <= MAX_RULE_ID; i++) {
      try {
        rules.push(this.getRule(i));
      } catch (e) {
        break;
      }
    }
    return rules;
  }

  getRuleByName(name: string): Rule {
    if (!this.nameRuleMap) {
      this.nameRuleMap = {};
      for (let i = 0; i <= MAX_RULE_ID; i++) {
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
    const rule = ruleConst[ruleid.toString()];
    if (!rule)
      throw new ShogitterCoreException(
        `指定されたルールID「${ruleid}」が不正です。`
      );
    if ("extend" in rule) {
      //継承する
      const extRule = { ...this.getRule(rule.extend.$id) };
      //親ルール上にルールを上書き
      for (let name in rule) {
        const value = rule[name as keyof Rule];
        if (name == "init") {
          extRule.init = {
            ban: value.ban || extRule.init.ban,
            mochigoma: value.mochigoma || extRule.init.mochigoma,
          };
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

  getKoma(species: Species): KomaInfo;
  getKoma(species: Species, member: string): any;
  getKoma(species: Species, member?: keyof KomaInfo) {
    const koma = komaConst[species];
    if (!koma) {
      throw new ShogitterCoreException(`駒 ${species} が不明です。` + 1);
    }
    if (member == null) {
      return koma;
    } else {
      return koma[member];
    }
  }

  getKomaDirect(species: Species): KomaInfo {
    return komaConst[species];
  }

  getRuleGenre() {
    return ruleGenreConst;
  }
}

export const shogitterDB: ShogitterDB = new ShogitterDB();
