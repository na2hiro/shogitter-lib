import Shogi from "../../src/Shogi";
import {move, rawMove, put, rawPut} from "../utils/shogiUtils";

describe("Haimen shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(74);
        shogi.start();
    })
    it("can move", () => {
        move(shogi, 7, 7, 7, 6)
        move(shogi, 3, 3, 3, 4)
        move(shogi, 8, 8, 2, 2, true)
        move(shogi, 2, 3, 2, 2)
        expect(shogi).toMatchSnapshot();
    });
})
