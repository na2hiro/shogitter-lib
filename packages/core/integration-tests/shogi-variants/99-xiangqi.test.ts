import Shogi from "../../src/Shogi";
import XY from "../../src/XY";

describe("Xiangqi", () => {
  it("moves", () => {
    const shogi = Shogi.ofRuleId(99);
    shogi.start();

    expect(shogi.ban.get(new XY(8, 8)).getMovable()).toMatchSnapshot("pao");
    expect(shogi.ban.get(new XY(8, 10)).getMovable()).toMatchSnapshot("ma");
    expect(shogi.ban.get(new XY(7, 10)).getMovable()).toMatchSnapshot("xiang");
  });
});
