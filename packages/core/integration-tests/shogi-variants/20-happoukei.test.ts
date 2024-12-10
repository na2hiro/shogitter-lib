import { describe, expect, it, beforeEach } from "vitest";
import Shogi from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";

describe("Happoukei", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(20);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 8, 1, 6, 2);
    move(shogi, 7, 7, 7, 6);
    move(shogi, 6, 2, 5, 4);
    move(shogi, 8, 8, 3, 3, true);
    expect(shogi.mochigoma.arrayMochigoma[0]).toEqual({ aa: 1 });
    move(shogi, 5, 4, 3, 3);
    expect(shogi.mochigoma.arrayMochigoma[1]).toEqual({ af: 1 });
    expect(shogi).toMatchInlineSnapshot(`
      ban:
      (1) af1 
      ______1ad1ae1ah1ae1ad1be___
      ___________________________
      1aa1aa1aa1aa1aa1aa1be1aa1aa
      ___________________________
      ___________________________
      ______0aa__________________
      0aa0aa___0aa0aa0aa0aa0aa0aa
      _____________________0ag___
      0ab0ac0ad0ae0ah0ae0ad0ac0ab
      (0) aa1 
      kifu:
      ☖6二八方桂 [0,[6,2,[],[1,"be"]],[8,1,[1,"be"],[]]]
      ☗7六歩 [1,[7,6,[],[0,"aa"]],[7,7,[0,"aa"],[]]]
      ☖5四八方桂 [0,[5,4,[],[1,"be"]],[6,2,[1,"be"],[]]]
      ☗3三角成 [1,[3,3,[1,"aa"],[0,"am"]],[8,8,[0,"af"],[]],[1,0,"aa"]]
      ☖同八方桂引 [0,[3,3,[0,"am"],[1,"be"]],[5,4,[1,"be"],[]],[1,1,"af"]]
      {
        "version": "0.0",
        "status": {
          "num": 1
        },
        "ruleid": 20,
        "teban": 1,
        "turn": 0,
        "date": {},
        "moving": null
      }
    `);
  });
});
