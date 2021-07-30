import Shogi from "../../src/Shogi";
import {move, put} from "../utils/shogiUtils";

describe("Shogi vs Go", () => {
    it("can move", () => {
        const shogi = Shogi.ofRuleId(104);
        shogi.start();
        move(shogi, 7, 7, 7, 6)
        put(shogi, 8, 4, "yn");
        move(shogi, 7, 6, 7, 5)
        put(shogi, 6, 4, "yn");
        move(shogi, 7, 5, 7, 4)
        put(shogi, 7, 5, "yn");
        expect(shogi).toMatchSnapshot()
        move(shogi, 8, 8, 3, 3, true);
        put(shogi, 4, 2, "aa");
        put(shogi, 6, 2, "yn");
        expect(shogi).toMatchSnapshot()
    });
})
