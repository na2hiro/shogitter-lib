import Shogi from "../../src/Shogi";
import {move, put} from "../utils/shogiUtils";

describe("4-player shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(27);
        shogi.start();
    })
    it("can move twice except first move", () => {
        move(shogi, 6, 8, 6, 7)
        move(shogi, 7, 5, 6, 5)
        move(shogi, 3, 1, 2, 2)
        move(shogi, 1, 3, 2, 2)
        expect(shogi).toMatchSnapshot();
    });
})
