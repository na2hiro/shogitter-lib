import ShogitterCore from "https://esm.sh/@shogitter/core@0.3.1";

async function go({ shogi: obj }) {
  const shogi = ShogitterCore.ofJkf(obj);

  const moves = shogi.generateMoves();
  let retries = 1000;
  while (retries-- > 0) {
    const move = moves[Math.floor(Math.random() * moves.length)];
    try {
      // Test if no exception happens
      ShogitterCore.ofJkf(obj).runCommand(move);

      await sleep(500); // pretend it's thinking :)

      return move;
    } catch (e) {
      // continue
    }
  }
  await sleep(500);
  console.log("Giving up!!");

  return { type: "resign" };
}

export default {
  go,
}; // TODO: satisfies Bot

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
