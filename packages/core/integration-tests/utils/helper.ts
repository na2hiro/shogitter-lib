import { Shogi, XY } from "../../src";

export function getShogiHelper(ruleId: number) {
  const shogi = Shogi.ofRuleId(ruleId);
  shogi.start();
  return {
    shogi,
    move: (
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      nari = false
    ) => {
      shogi.move(new XY(fromX, fromY), new XY(toX, toY), nari);
    },
    put: (toX: number, toY: number, species: string) => {
      shogi.put(new XY(toX, toY), species, shogi.teban.get());
    },
  };
}
