import { ShogiGame } from "./ShogiGame";
import { Shogi, XY } from "@shogitter/core";
import { describe, it, expect } from "vitest";

describe(ShogiGame, () => {
  it("can filter out illegal passes", () => {
    // @ts-ignore
    const othello = Shogi.ofJkf({
      version: "0.0",
      status: { num: 1 },
      ruleid: 80,
      teban: 0,
      turn: 0,
      date: {},
      ban: [
        [
          [],
          [],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
        ],
        [
          [],
          [1, "yo"],
          [1, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
          [1, "yo"],
        ],
        [
          [],
          [],
          [1, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
        ],
        [
          [],
          [],
          [1, "yo"],
          [0, "yo"],
          [0, "yo"],
          [1, "yo"],
          [0, "yo"],
          [0, "yo"],
        ],
        [
          [],
          [1, "yo"],
          [],
          [1, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
          [0, "yo"],
        ],
        [[], [], [], [1, "yo"], [1, "yo"], [0, "yo"], [0, "yo"], [0, "yo"]],
        [[], [], [], [1, "yo"], [], [1, "yo"], [0, "yo"], [0, "yo"]],
        [[], [], [], [1, "yo"], [], [0, "yo"], [1, "yo"], [0, "yo"]],
      ],
      moving: null,
      players: [
        { user: [{ name: "あなた" }], mochigoma: {} },
        { user: [{ name: "最大選択肢bot" }], mochigoma: {} },
      ],
      kifu: [
        {
          move: [0, [4, 6, [], [0, "yo"]], [4, 5, [1, "yo"], [0, "yo"]]],
          disp: "☗4六 ",
          data: {},
          hash: "-e45ee9a",
        },
        {
          move: [1, [5, 6, [], [1, "yo"]], [5, 5, [0, "yo"], [1, "yo"]]],
          disp: "☖5六 ",
          data: {},
          hash: "-4fbed7a1",
        },
        {
          move: [
            0,
            [6, 6, [], [0, "yo"]],
            [5, 5, [1, "yo"], [0, "yo"]],
            [5, 6, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗6六 ",
          data: {},
          hash: "5504aec6",
        },
        {
          move: [
            1,
            [5, 7, [], [1, "yo"]],
            [5, 5, [0, "yo"], [1, "yo"]],
            [5, 6, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖5七 ",
          data: {},
          hash: "2fa6362e",
        },
        {
          move: [0, [6, 8, [], [0, "yo"]], [5, 7, [1, "yo"], [0, "yo"]]],
          disp: "☗6八 ",
          data: {},
          hash: "5b659674",
        },
        {
          move: [1, [3, 7, [], [1, "yo"]], [4, 6, [0, "yo"], [1, "yo"]]],
          disp: "☖3七 ",
          data: {},
          hash: "5cf4c2fd",
        },
        {
          move: [0, [3, 5, [], [0, "yo"]], [4, 6, [1, "yo"], [0, "yo"]]],
          disp: "☗3五 ",
          data: {},
          hash: "5590bc43",
        },
        {
          move: [
            1,
            [2, 5, [], [1, "yo"]],
            [3, 5, [0, "yo"], [1, "yo"]],
            [4, 5, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖2五 ",
          data: {},
          hash: "-62f8ce5",
        },
        {
          move: [0, [2, 4, [], [0, "yo"]], [3, 5, [1, "yo"], [0, "yo"]]],
          disp: "☗2四 ",
          data: {},
          hash: "43cb93e1",
        },
        {
          move: [1, [3, 6, [], [1, "yo"]], [4, 6, [0, "yo"], [1, "yo"]]],
          disp: "☖3六 ",
          data: {},
          hash: "3e82005a",
        },
        {
          move: [
            0,
            [3, 8, [], [0, "yo"]],
            [3, 6, [1, "yo"], [0, "yo"]],
            [3, 7, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗3八 ",
          data: {},
          hash: "-6f3065ad",
        },
        {
          move: [1, [2, 3, [], [1, "yo"]], [2, 4, [0, "yo"], [1, "yo"]]],
          disp: "☖2三 ",
          data: {},
          hash: "-416ceeb4",
        },
        {
          move: [0, [1, 5, [], [0, "yo"]], [2, 5, [1, "yo"], [0, "yo"]]],
          disp: "☗1五 ",
          data: {},
          hash: "3d936574",
        },
        {
          move: [1, [3, 3, [], [1, "yo"]], [4, 4, [0, "yo"], [1, "yo"]]],
          disp: "☖3三 ",
          data: {},
          hash: "7675cbbd",
        },
        {
          move: [0, [1, 3, [], [0, "yo"]], [2, 4, [1, "yo"], [0, "yo"]]],
          disp: "☗1三 ",
          data: {},
          hash: "-284a8bfd",
        },
        {
          move: [1, [2, 7, [], [1, "yo"]], [3, 6, [0, "yo"], [1, "yo"]]],
          disp: "☖2七 ",
          data: {},
          hash: "-44d443e6",
        },
        {
          move: [
            0,
            [6, 5, [], [0, "yo"]],
            [4, 5, [1, "yo"], [0, "yo"]],
            [5, 5, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗6五 ",
          data: {},
          hash: "78e19313",
        },
        {
          move: [
            1,
            [7, 6, [], [1, "yo"]],
            [6, 5, [0, "yo"], [1, "yo"]],
            [6, 6, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖7六 ",
          data: {},
          hash: "-27dcf155",
        },
        {
          move: [
            0,
            [1, 8, [], [0, "yo"]],
            [2, 7, [1, "yo"], [0, "yo"]],
            [3, 6, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗1八 ",
          data: {},
          hash: "-47f9413a",
        },
        {
          move: [1, [6, 4, [], [1, "yo"]], [5, 5, [0, "yo"], [1, "yo"]]],
          disp: "☖6四 ",
          data: {},
          hash: "4e99fbcf",
        },
        {
          move: [
            0,
            [8, 6, [], [0, "yo"]],
            [4, 6, [1, "yo"], [0, "yo"]],
            [5, 6, [1, "yo"], [0, "yo"]],
            [6, 6, [1, "yo"], [0, "yo"]],
            [7, 6, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗8六 ",
          data: {},
          hash: "3223e916",
        },
        {
          move: [1, [6, 7, [], [1, "yo"]], [6, 6, [0, "yo"], [1, "yo"]]],
          disp: "☖6七 ",
          data: {},
          hash: "-5b117f31",
        },
        {
          move: [0, [7, 8, [], [0, "yo"]], [6, 7, [1, "yo"], [0, "yo"]]],
          disp: "☗7八 ",
          data: {},
          hash: "-676d0d37",
        },
        {
          move: [1, [4, 8, [], [1, "yo"]], [5, 7, [0, "yo"], [1, "yo"]]],
          disp: "☖4八 ",
          data: {},
          hash: "311e2c12",
        },
        {
          move: [
            0,
            [5, 8, [], [0, "yo"]],
            [4, 8, [1, "yo"], [0, "yo"]],
            [5, 7, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗5八 ",
          data: {},
          hash: "25973969",
        },
        {
          move: [
            1,
            [2, 6, [], [1, "yo"]],
            [2, 4, [0, "yo"], [1, "yo"]],
            [2, 5, [0, "yo"], [1, "yo"]],
            [3, 5, [0, "yo"], [1, "yo"]],
            [3, 6, [0, "yo"], [1, "yo"]],
            [4, 6, [0, "yo"], [1, "yo"]],
            [5, 6, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖2六 ",
          data: {},
          hash: "-1bc019ef",
        },
        {
          move: [
            0,
            [1, 6, [], [0, "yo"]],
            [2, 6, [1, "yo"], [0, "yo"]],
            [3, 6, [1, "yo"], [0, "yo"]],
            [4, 6, [1, "yo"], [0, "yo"]],
            [5, 6, [1, "yo"], [0, "yo"]],
            [6, 6, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗1六 ",
          data: {},
          hash: "d41dda9",
        },
        {
          move: [
            1,
            [4, 7, [], [1, "yo"]],
            [3, 6, [0, "yo"], [1, "yo"]],
            [4, 5, [0, "yo"], [1, "yo"]],
            [4, 6, [0, "yo"], [1, "yo"]],
            [5, 6, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖4七 ",
          data: {},
          hash: "-647fc4c1",
        },
        {
          move: [
            0,
            [7, 4, [], [0, "yo"]],
            [4, 7, [1, "yo"], [0, "yo"]],
            [5, 6, [1, "yo"], [0, "yo"]],
            [6, 5, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗7四 ",
          data: {},
          hash: "6303253b",
        },
        {
          move: [1, [7, 7, [], [1, "yo"]], [6, 6, [0, "yo"], [1, "yo"]]],
          disp: "☖7七 ",
          data: {},
          hash: "-6e53fefc",
        },
        {
          move: [
            0,
            [4, 3, [], [0, "yo"]],
            [2, 3, [1, "yo"], [0, "yo"]],
            [3, 3, [1, "yo"], [0, "yo"]],
            [4, 4, [1, "yo"], [0, "yo"]],
            [4, 5, [1, "yo"], [0, "yo"]],
            [4, 6, [1, "yo"], [0, "yo"]],
            [5, 4, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗4三 ",
          data: {},
          hash: "-6b6de903",
        },
        {
          move: [
            1,
            [2, 2, [], [1, "yo"]],
            [2, 3, [0, "yo"], [1, "yo"]],
            [3, 3, [0, "yo"], [1, "yo"]],
            [4, 4, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖2二 ",
          data: {},
          hash: "c712ee6",
        },
        {
          move: [
            0,
            [3, 4, [], [0, "yo"]],
            [2, 5, [1, "yo"], [0, "yo"]],
            [3, 5, [1, "yo"], [0, "yo"]],
            [3, 6, [1, "yo"], [0, "yo"]],
            [4, 4, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗3四 ",
          data: {},
          hash: "7f2b767f",
        },
        {
          move: [
            1,
            [2, 8, [], [1, "yo"]],
            [2, 5, [0, "yo"], [1, "yo"]],
            [2, 6, [0, "yo"], [1, "yo"]],
            [2, 7, [0, "yo"], [1, "yo"]],
            [3, 7, [0, "yo"], [1, "yo"]],
            [4, 6, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖2八 ",
          data: {},
          hash: "-52a1fe38",
        },
        {
          move: [
            0,
            [8, 8, [], [0, "yo"]],
            [5, 5, [1, "yo"], [0, "yo"]],
            [6, 6, [1, "yo"], [0, "yo"]],
            [7, 7, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗8八 ",
          data: {},
          hash: "-2dcd7a34",
        },
        {
          move: [
            1,
            [5, 2, [], [1, "yo"]],
            [3, 4, [0, "yo"], [1, "yo"]],
            [4, 3, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖5二 ",
          data: {},
          hash: "-32027c7e",
        },
        {
          move: [
            0,
            [1, 7, [], [0, "yo"]],
            [2, 6, [1, "yo"], [0, "yo"]],
            [2, 7, [1, "yo"], [0, "yo"]],
            [3, 7, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗1七 ",
          data: {},
          hash: "3c4b1168",
        },
        {
          move: [1, [8, 4, [], [1, "yo"]], [7, 4, [0, "yo"], [1, "yo"]]],
          disp: "☖8四 ",
          data: {},
          hash: "e53bf4f",
        },
        {
          move: [
            0,
            [1, 4, [], [0, "yo"]],
            [2, 4, [1, "yo"], [0, "yo"]],
            [2, 5, [1, "yo"], [0, "yo"]],
            [3, 4, [1, "yo"], [0, "yo"]],
          ],
          disp: "☗1四 ",
          data: {},
          hash: "-4d7ca017",
        },
        {
          move: [
            1,
            [8, 7, [], [1, "yo"]],
            [5, 4, [0, "yo"], [1, "yo"]],
            [6, 5, [0, "yo"], [1, "yo"]],
            [7, 6, [0, "yo"], [1, "yo"]],
          ],
          disp: "☖8七 ",
          data: {},
          hash: "-4fa32e02",
        },
      ],
    });
    othello.put(new XY(8, 5), "yo", 0);

    const game = new ShogiGame(othello);
    const moves = game.getMoves();
    expect(moves).toStrictEqual([{ type: "pass" }]);
    game.doMove(moves[0]);
    const moves2 = game.getMoves();
    expect(moves2.filter((m) => m.type === "pass")).toHaveLength(0);
  });
});
