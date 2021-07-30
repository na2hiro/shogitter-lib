import Shogi from "../../src/Shogi";
import {assertCell, assertCellIsNull, move} from "../utils/shogiUtils";

describe("Anti kiruke shogi", () => {
    it("can go back", () => {
        const shogi = Shogi.ofRuleId(69);
        shogi.start();
        move(shogi, 7, 7, 7, 6)
        move(shogi, 3, 3, 3, 4)
        move(shogi, 8, 8, 2, 2, true)
        assertCell(shogi, 8, 8, 0, "am");
        assertCellIsNull(shogi, 2, 2);
    });
})
