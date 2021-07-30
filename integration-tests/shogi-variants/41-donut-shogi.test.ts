import Shogi from "../../src/Shogi";
import {move} from "../utils/shogiUtils";

describe("Donut shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(41);
        shogi.start();
    })
    it("can cross border", () => {
        move(shogi, 7, 10, 8, 11)
        move(shogi, 3, 4, 3, 5)
        move(shogi, 8, 9, 4, 2, true)
        move(shogi, 5, 2, 4, 2)
        move(shogi, 8, 11, 9, 1, false)
        expect(shogi).toMatchSnapshot()
    });
})
