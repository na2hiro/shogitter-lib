import Shogi from "../../src/Shogi";
import {move, put} from "../utils/shogiUtils";

describe("Nuclear shogi", () => {
    it("can move", () => {
        const shogi = Shogi.ofRuleId(78);
        shogi.start();
        move(shogi, 7, 7, 7, 6)
        move(shogi, 3, 3, 3, 4)
        move(shogi, 8, 8, 2, 2, true);
        expect(shogi).toMatchSnapshot()
        move(shogi, 2, 3, 2, 2)
        put(shogi, 8, 8, "af")
        expect(shogi).toMatchSnapshot()
        move(shogi, 8, 3, 8, 4)
        move(shogi, 8, 8, 2, 2, false);
        expect(shogi).toMatchSnapshot()
    });
})
