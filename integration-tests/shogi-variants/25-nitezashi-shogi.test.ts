import Shogi from "../../src/Shogi";
import {move, put} from "../utils/shogiUtils";

describe("Nitezashi shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(25);
        shogi.start();
    })
    it("can move twice except first move", () => {
        move(shogi, 7, 7, 7, 6)
        move(shogi, 3, 3, 3, 4)
        move(shogi, 2, 2, 8, 8, true)
        move(shogi, 7, 9, 8, 8)
        put(shogi, 4, 5, "af")
        put(shogi, 6, 8, "af")
        move(shogi, 6, 8, 5, 9)
        expect(shogi).toMatchSnapshot();
    });
})
