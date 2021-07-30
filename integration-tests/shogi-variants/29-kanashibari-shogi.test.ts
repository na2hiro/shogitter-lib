import Shogi from "../../src/Shogi";
import {move, rawMove, put} from "../utils/shogiUtils";

describe("Kanashibari shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(29);
        shogi.start();
    })
    it("cannot move if it can be taken", () => {
        move(shogi, 7, 7, 7, 6)
        expect(() => {
            rawMove(shogi, 3, 3, 3, 4)
        }).toThrow();
    });
    it("cannot move if it can be taken 2", () => {
        move(shogi, 7, 7, 7, 6)
        move(shogi, 4, 3, 4, 4)
        move(shogi, 8, 8, 4, 4)
        move(shogi, 8, 2, 4, 2)
        expect(() => {
            rawMove(shogi, 4, 4, 5, 3, true)
        }).toThrow();
    });
})
