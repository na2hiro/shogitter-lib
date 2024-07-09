import Shogi from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";

describe("Shogi vs Go", () => {
  it("can move", () => {
    const shogi = Shogi.ofRuleId(104);
    shogi.start();
    move(shogi, 7, 7, 7, 6);
    put(shogi, 8, 4, "yn");
    move(shogi, 7, 6, 7, 5);
    put(shogi, 6, 4, "yn");
    move(shogi, 7, 5, 7, 4);
    put(shogi, 7, 5, "yn");
    expect(shogi).toMatchSnapshot();
    move(shogi, 8, 8, 3, 3, true);
    put(shogi, 4, 2, "aa");
    put(shogi, 6, 2, "yn");
    expect(shogi).toMatchSnapshot();
  });
  it("doesn't crash when everything is taken at once", () => {
    const shogi = Shogi.ofJkf({
      version: "0.0",
      status: {
        num: 1,
      },
      ruleid: 104,
      teban: 1,
      turn: 0,
      date: {},
      ban: [
        [
          [1, "yn"],
          [],
          [1, "yn"],
          [],
          [],
          [1, "yn"],
          [0, "aa"],
          [1, "yn"],
          [0, "ab"],
        ],
        [
          [1, "yn"],
          [1, "yn"],
          [1, "yn"],
          [],
          [],
          [1, "yn"],
          [0, "aa"],
          [0, "ag"],
          [0, "ac"],
        ],
        [
          [1, "yn"],
          [],
          [1, "yn"],
          [],
          [],
          [1, "yn"],
          [0, "aa"],
          [1, "yn"],
          [0, "ad"],
        ],
        [
          [1, "yn"],
          [],
          [1, "yn"],
          [],
          [],
          [1, "yn"],
          [0, "aa"],
          [1, "yn"],
          [0, "ae"],
        ],
        [
          [1, "ah"],
          [],
          [1, "yn"],
          [],
          [],
          [1, "yn"],
          [0, "aa"],
          [1, "yn"],
          [0, "ah"],
        ],
        [[1, "yn"], [], [1, "yn"], [], [], [1, "yn"], [0, "aa"], [], [0, "ae"]],
        [
          [1, "yn"],
          [],
          [1, "yn"],
          [],
          [],
          [1, "yn"],
          [0, "aa"],
          [1, "yn"],
          [0, "ad"],
        ],
        [
          [1, "yn"],
          [1, "yn"],
          [1, "yn"],
          [],
          [],
          [1, "yn"],
          [0, "aa"],
          [0, "af"],
          [0, "ac"],
        ],
        [
          [1, "yn"],
          [],
          [1, "yn"],
          [],
          [],
          [1, "yn"],
          [0, "aa"],
          [1, "yn"],
          [0, "ab"],
        ],
      ],
      moving: null,
      players: [
        {
          user: [
            {
              name: "あなた",
            },
          ],
          mochigoma: {},
        },
        {
          user: [
            {
              name: "あなた",
            },
          ],
          mochigoma: {
            yn: 1,
          },
        },
      ],
      kifu: [
        {
          move: [0, [6, 8, [], [0, "ad"]], [7, 9, [0, "ad"], []]],
          disp: "☗6八銀",
          data: {},
          hash: "3fab6fab",
        },
        {
          move: [1, [9, 6, [], [1, "yn"]]],
          disp: "☖9六○",
          data: {},
          hash: "-2d7b863c",
        },
        {
          move: [0, [7, 9, [], [0, "ad"]], [6, 8, [0, "ad"], []]],
          disp: "☗7九銀",
          data: {},
          hash: "5862ad9c",
        },
        {
          move: [1, [8, 6, [], [1, "yn"]]],
          disp: "☖8六○",
          data: {},
          hash: "-68b97ddd",
        },
        {
          move: [0, [6, 8, [], [0, "ad"]], [7, 9, [0, "ad"], []]],
          disp: "☗6八銀",
          data: {},
          hash: "11684e4b",
        },
        {
          move: [1, [7, 6, [], [1, "yn"]]],
          disp: "☖7六○",
          data: {},
          hash: "55f51f24",
        },
        {
          move: [0, [7, 9, [], [0, "ad"]], [6, 8, [0, "ad"], []]],
          disp: "☗7九銀",
          data: {},
          hash: "-242cad04",
        },
        {
          move: [1, [6, 6, [], [1, "yn"]]],
          disp: "☖6六○",
          data: {},
          hash: "3536d8c3",
        },
        {
          move: [0, [6, 8, [], [0, "ad"]], [7, 9, [0, "ad"], []]],
          disp: "☗6八銀",
          data: {},
          hash: "-50a75b15",
        },
        {
          move: [1, [5, 6, [], [1, "yn"]]],
          disp: "☖5六○",
          data: {},
          hash: "-315ab37c",
        },
        {
          move: [0, [7, 9, [], [0, "ad"]], [6, 8, [0, "ad"], []]],
          disp: "☗7九銀",
          data: {},
          hash: "5483805c",
        },
        {
          move: [1, [4, 6, [], [1, "yn"]]],
          disp: "☖4六○",
          data: {},
          hash: "-36ab589d",
        },
        {
          move: [0, [6, 8, [], [0, "ad"]], [7, 9, [0, "ad"], []]],
          disp: "☗6八銀",
          data: {},
          hash: "4376738b",
        },
        {
          move: [1, [3, 6, [], [1, "yn"]]],
          disp: "☖3六○",
          data: {},
          hash: "-1b24fe1c",
        },
        {
          move: [0, [7, 9, [], [0, "ad"]], [6, 8, [0, "ad"], []]],
          disp: "☗7九銀",
          data: {},
          hash: "6ab935bc",
        },
        {
          move: [1, [2, 6, [], [1, "yn"]]],
          disp: "☖2六○",
          data: {},
          hash: "119ee03",
        },
        {
          move: [0, [6, 8, [], [0, "ad"]], [7, 9, [0, "ad"], []]],
          disp: "☗6八銀",
          data: {},
          hash: "7b3bba2b",
        },
        {
          move: [1, [1, 6, [], [1, "yn"]]],
          disp: "☖1六○",
          data: {},
          hash: "6d5c3f44",
        },
        {
          move: [0, [7, 9, [], [0, "ad"]], [6, 8, [0, "ad"], []]],
          disp: "☗7九銀",
          data: {},
          hash: "-cc58ce4",
        },
        {
          move: [1, [9, 8, [], [1, "yn"]]],
          disp: "☖9八○",
          data: {},
          hash: "-65d263cb",
        },
        {
          move: [0, [6, 8, [], [0, "ad"]], [7, 9, [0, "ad"], []]],
          disp: "☗6八銀",
          data: {},
          hash: "144f685d",
        },
        {
          move: [1, [5, 8, [], [1, "yn"]]],
          disp: "☖5八○",
          data: {},
          hash: "-153510a",
        },
        {
          move: [0, [7, 9, [], [0, "ad"]], [6, 8, [0, "ad"], []]],
          disp: "☗7九銀",
          data: {},
          hash: "-7b751d32",
        },
        {
          move: [1, [4, 8, [], [1, "yn"]]],
          disp: "☖4八○",
          data: {},
          hash: "4e27cad5",
        },
        {
          move: [0, [6, 8, [], [0, "ad"]], [7, 9, [0, "ad"], []]],
          disp: "☗6八銀",
          data: {},
          hash: "-37b66903",
        },
        {
          move: [1, [3, 8, [], [1, "yn"]]],
          disp: "☖3八○",
          data: {},
          hash: "79620456",
        },
        {
          move: [0, [7, 9, [], [0, "ad"]], [6, 8, [0, "ad"], []]],
          disp: "☗7九銀",
          data: {},
          hash: "-bfc7d2",
        },
        {
          move: [1, [1, 8, [], [1, "yn"]]],
          disp: "☖1八○",
          data: {},
          hash: "5127dc47",
        },
        {
          move: [0, [6, 8, [], [0, "ad"]], [7, 9, [0, "ad"], []]],
          disp: "☗6八銀",
          data: {},
          hash: "-34b65791",
        },
        {
          move: [1, [7, 8, [], [1, "yn"]]],
          disp: "☖7八○",
          data: {},
          hash: "4db3d848",
        },
        {
          move: [0, [7, 9, [], [0, "ad"]], [6, 8, [0, "ad"], []]],
          disp: "☗7九銀",
          data: {},
          hash: "-2c6df3e0",
        },
      ],
    });
    put(shogi, 6, 8, "yn");
  });
});
