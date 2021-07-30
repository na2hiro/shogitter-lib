import Shogi from "../../src/Shogi";
import {move, rawMove, put} from "../utils/shogiUtils";

describe("Coin shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(23);
        shogi.start();
    })
    it("can move", () => {
        move(shogi, 7, 7, 7, 6)
        move(shogi, 3, 3, 3, 4)
        expect(() => {
            rawMove(shogi, 8, 8, 2, 2)
        }).toThrow();
    });
})
