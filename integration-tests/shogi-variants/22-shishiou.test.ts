import Shogi from "../../src/Shogi";
import { move, put } from "../utils/shogiUtils";

describe("Shishiou", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(22);
    shogi.start();
  });
  it("can move", () => {
    move(shogi, 5, 1, 5, 3);
    move(shogi, 7, 7, 7, 6);
    move(shogi, 5, 3, 6, 4);
    move(shogi, 6, 4, 6, 5);
    expect(shogi).toMatchSnapshot();
  });
  it("can reset without issues when resigned while shishiou is moving", () => {
    move(shogi, 5, 1, 5, 2);
    shogi.resign(1)
    Shogi.ofJkf(shogi.getObject());
    shogi.constructById(22);
    Shogi.ofJkf(shogi.getObject());
    shogi.start();
    Shogi.ofJkf(shogi.getObject());
    move(shogi, 5, 1, 4, 2);
    move(shogi, 4, 2, 3, 3);
    Shogi.ofJkf(shogi.getObject());
  });
});
