import Shogi from "../../src/Shogi";
import {move, put} from "../utils/shogiUtils";

describe("Nakamaware shogi", () => {
    let shogi: Shogi;
    beforeEach(() => {
        shogi = Shogi.ofRuleId(24);
        shogi.start();
    })
    it("can take friend piece", () => {
        move(shogi, 7, 9, 8, 8)
        expect(shogi).toMatchSnapshot();
    });
    it("can take friend king and lose", () => {
        move(shogi, 6, 9, 5, 9)
        expect(shogi).toMatchSnapshot();
    });
})
