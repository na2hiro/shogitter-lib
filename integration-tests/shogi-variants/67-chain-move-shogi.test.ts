import Shogi from "../../src/Shogi";
import {move, rawMove, put, rawPut} from "../utils/shogiUtils";
import XY from "../../src/XY";

describe("Chain move shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(67);
        shogi.start();
    })
    it("can chain", () => {
        expect(shogi.ban.get(new XY(5, 9)).getMovable()).toMatchSnapshot();
        move(shogi, 5, 9, 7, 6);
    });
    it("has to chain at least once", () => {
        expect(() => rawMove(shogi, 7, 7, 7, 6)).toThrow();
    });
    it("has to chain to put piece", () => {
        move(shogi, 1, 9, 1, 6)
        move(shogi, 2, 2, 3, 4)
        move(shogi, 1, 7, 1, 3)
        move(shogi, 2, 1, 2, 4)
        expect(shogi).toMatchSnapshot()
        expect(() => rawPut(shogi, 1, 9, "aa")).toThrow();
    });
    it("can put with chain", () => {
        move(shogi, 1, 9, 1, 6)
        move(shogi, 2, 2, 3, 4)
        move(shogi, 1, 7, 1, 3, true)
        move(shogi, 2, 1, 2, 4)
        put(shogi, 1, 8, "aa")
        expect(shogi).toMatchSnapshot()
    });
})
