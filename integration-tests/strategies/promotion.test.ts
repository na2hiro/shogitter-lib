import Shogi from "../../src/Shogi";
import XY from "../../src/XY";
import {Species} from "../../src/Ban";

describe("Promotion", () => {
    describe("Normal", () => {
        it("asks promotion", () => {
            const shogi = Shogi.ofRuleId(0);
            move(shogi, 7, 7, 7, 6)
            move(shogi, 3, 3, 3, 4)
            expect(shogi.shouldAskPromotion(new XY(2, 2), new XY(8, 8))).toBe(true);
            move(shogi, 8, 8, 2, 2, true)
            move(shogi, 3, 1, 4, 2)
            expect(shogi.shouldAskPromotion(new XY(2, 1), new XY(2, 2))).toBe(false);
            move(shogi, 2, 2, 2, 1)
            move(shogi, 4, 1, 5, 2)
            expect(shogi.shouldAskPromotion(new XY(1, 1), new XY(2, 1))).toBe(false);
            move(shogi, 2, 1, 1, 1)
            move(shogi, 8, 3, 8, 4)
            put(shogi, 1, 4, "ac");
            move(shogi, 8, 4, 8, 5)
            expect(shogi.shouldAskPromotion(new XY(2, 2), new XY(1, 4))).toBe(false);
            move(shogi, 1, 4, 2, 2)
        })
    })
})

function move(shogi: Shogi, fromX: number, fromY: number, toX: number, toY: number, nari = false) {
    shogi.move(new XY(fromX, fromY), new XY(toX, toY), nari);
}

function put(shogi: Shogi, toX: number, toY: number, species: Species) {
    shogi.put(new XY(toX, toY), species, shogi.teban.get());
}
