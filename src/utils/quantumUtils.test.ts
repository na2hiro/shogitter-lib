import {MoveType, runQuantum} from "./quantumUtils";
import {RelXY} from "../XY";

describe("Quantum utils", () => {
    it("doesn't determine without move", () => {
        expect(runQuantum(0, null, MoveType.Normal, [])).toMatchSnapshot()
    })
    it("determines to KE after doing KE jump", () => {
        expect(runQuantum(0, {vec: new RelXY(-1, -2), promote: false}, MoveType.Normal, [])).toMatchSnapshot()
    })
    it("determines to 2 KEs and exhausts it", () => {
        var keMove = {vec: new RelXY(-1, -2), promote: false};
        let {kinds, fulls} = runQuantum(0, keMove, MoveType.Normal, []);
        const result = runQuantum(1, keMove, MoveType.Normal, kinds);
        expect(result).toMatchSnapshot()
        let others = runQuantum(2, null, MoveType.Normal, result.kinds);
        expect(others).toMatchSnapshot()
    })
    it("determines to HI after doing HI move and exhausts it", () => {
        expect(runQuantum(0, {vec: new RelXY(0, 2), promote: false}, MoveType.Normal, [])).toMatchSnapshot()
    })
    it("throws error to use 2 HIs", () => {
        var hiMove = {vec: new RelXY(0, 2), promote: false};
        const {kinds, fulls} = runQuantum(0, hiMove, MoveType.Normal, []);
        expect(() => {
            runQuantum(1, hiMove, MoveType.Normal, kinds);
        }).toThrow()
    })
    it("determines to KI,HI,OU after going backward", () => {
        expect(runQuantum(0, {vec: new RelXY(0, 1), promote: false}, MoveType.Normal, [])).toMatchSnapshot()
    })
    it("determines OU after other pieces (known piece was captured, known piece to be OU)", () => {
        const {kinds} = runQuantum(0, null, MoveType.Captured, [
            ["aa", "ab", "ac", "ad", "ae", "af", "ag", "ah"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag", "ah"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
        ])
        expect(kinds[1]).toEqual(["ah"])
    })
    it("determines OU after other pieces (known piece was captured, new piece to be OU)", () => {
        const {fulls} = runQuantum(0, null, MoveType.Captured, [
            ["aa", "ab", "ac", "ad", "ae", "af", "ag", "ah"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
            ["aa", "ab", "ac", "ad", "ae", "af", "ag"],
        ])
        // New piece will be nothing but "ah"
        expect(fulls).toHaveLength(7)
        expect(fulls).not.toContain("ah");
    })
    it("determines OU after other pieces (new piece was captured)", () => {
        expect(runQuantum(19, null, MoveType.Captured, [
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "ae", "ag", "ah" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "ae", "ag", "ah" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ],
            [ "aa", "ab", "ac", "ad", "ae", "af", "ag" ]
        ])).toMatchSnapshot()
    })
})
