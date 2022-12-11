abstract class Collection {
  protected map: { [name: string]: any };
  constructor() {
    this.map = {};
  }
  insert(obj: any) {
    this.map[this.getKey(obj)] = obj;
  }
  get(key: string) {
    return this.map[key];
  }
  abstract getKey(obj: any): string;
}

class KomaCollection extends Collection {
  getKey(obj: any): string {
    return obj.species;
  }
}
class RuleCollection extends Collection {
  getKey(obj: any): string {
    return obj._id;
  }
}

export class RuleGenreCollection extends Collection {
  getKey(obj: any): string {
    return obj._id;
  }

  getAll(): { name: string; rules: number[] }[] {
    return Object.values(this.map)
      .sort((a, b) => a.id - b.id)
      .map((v) => ({ name: v.name, rules: v.rules }));
  }
}

const komaColl = new KomaCollection();
const ruleColl = new RuleCollection();
const ruleGenreColl = new RuleGenreCollection();

export const db = {
  getCollection(coll: string) {
    switch (coll) {
      case "koma":
        return komaColl;
      case "rule":
        return ruleColl;
      case "rulegenre":
        return ruleGenreColl;
    }
    throw "unknown coll";
  },
};
