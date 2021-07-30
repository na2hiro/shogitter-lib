import Shogi from "../../src/Shogi";
import {move, put} from "../utils/shogiUtils";

describe("Annan shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(26);
        shogi.start();
    })
    it("can move twice except first move", () => {
        move(shogi, 8, 8, 7, 6)
        move(shogi, 7, 3, 7, 4)
        move(shogi, 7, 6, 7, 5)
        move(shogi, 8, 1, 7, 3)
        move(shogi, 7, 5, 5, 3, true)
        expect(shogi).toMatchSnapshot();
    });
})
