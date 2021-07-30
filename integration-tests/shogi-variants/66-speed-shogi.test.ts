import Shogi from "../../src/Shogi";
import {move} from "../utils/shogiUtils";

describe.skip("Speed shogi", () => {
    it("can pass", () => {
        const shogi = Shogi.ofRuleId(66);
        shogi.start();
        move(shogi, 7, 7, 7, 6);
        move(shogi, 7, 6, 7, 5);
        move(shogi, 7, 5, 7, 4);
        // How to move turn?
        move(shogi, 5, 1, 4, 2);
    });
})
