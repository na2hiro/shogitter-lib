abstract class Collection {
    protected map: {[name: string]: any};
    constructor() {
        this.map = {};
    }
    ensureIndex(a: any) {
        // Noop
    }
    insert(obj: any) {
        this.map[this.getKey(obj)] = obj;
    }
    get(key: string) {
        return this.map[key];
    }
    abstract getKey(obj: any): string;
}

class KomaCollection extends Collection{
    getKey(obj: any): string {
        return obj.species;
    }
}
class RuleCollection extends Collection{
    getKey(obj: any): string {
        return obj._id;
    }
}

const komaColl = new KomaCollection();
const ruleColl = new RuleCollection();

export const db = {
    getCollection(coll: string) {
        switch(coll) {
            case "koma":
                return komaColl;
            case "rule":
                return ruleColl;
        }
        throw "unknown coll";
    }
}

export const ObjectId = (str: string) => str;
