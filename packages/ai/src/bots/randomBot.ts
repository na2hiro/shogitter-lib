import { Shogi, ShogiSerialization } from "@shogitter/core";

import Bot from "../Bot";

const go: Bot["go"] = async function ({
  shogi: obj,
}: {
  shogi: ShogiSerialization;
}) {
  const shogi = Shogi.ofJkf(obj);

  const moves = shogi.generateMoves();
  let retries = 1000;
  while (retries-- > 0) {
    const move = moves[Math.floor(Math.random() * moves.length)];
    try {
      // Test if no exception happens
      Shogi.ofJkf(obj).runCommand(move);

      await sleep(500); // pretend it's thinking :)

      return move;
    } catch (e) {
      // continue
    }
  }
  await sleep(500);
  console.log("Giving up!!");

  return { type: "resign" };
};

export default {
  go,
} satisfies Bot;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
