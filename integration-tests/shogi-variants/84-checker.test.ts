import Shogi from "../../src/Shogi";
import {move, rawMove, put, rawPut} from "../utils/shogiUtils";

describe("Haimen shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(84);
        shogi.start();
    })
    it("has to capture what can be captured", () => {
        move(shogi, 4, 6, 5, 5)
        move(shogi, 7, 3, 8, 4)
        move(shogi, 8, 6, 7, 5)
        move(shogi, 6, 2, 7, 3)
        move(shogi, 5, 5, 6, 4)
        expect(()=>rawMove(shogi, 3, 3, 2, 4)).toThrow()
    });
    it("can play in a row if you can capture with the same piece", () => {
        move(shogi, 4, 6, 5, 5)
        move(shogi, 7, 3, 8, 4)
        move(shogi, 8, 6, 7, 5)
        move(shogi, 6, 2, 7, 3)
        move(shogi, 5, 5, 6, 4)
        move(shogi, 7, 3, 5, 5)
        move(shogi, 6, 6, 4, 4)
        move(shogi, 4, 4, 6, 2)
        expect(shogi).toMatchSnapshot();
    });
})
