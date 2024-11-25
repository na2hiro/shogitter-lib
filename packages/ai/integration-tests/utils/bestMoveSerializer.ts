import { SnapshotSerializer } from "vitest";
import { BestMove } from "../../src/search/minimax";
import { Move } from "@shogitter/core/src";

export default {
  serialize(val: BestMove<Move>, config, indentation, depth, refs, printer) {
    // `printer` is a function that serializes a value using existing plugins.
    return `${printer(printBestMove(val), config, indentation, depth, refs)}`;
  },
  test(val) {
    return (
      val &&
      Object.prototype.hasOwnProperty.call(val, "moves") &&
      Object.prototype.hasOwnProperty.call(val, "score")
    );
  },
} satisfies SnapshotSerializer;

function printMove(move: Move) {
  if (move.type === "move") {
    return `${move.from[0]}${move.from[1]}${move.to[0]}${move.to[1]}${
      move.nari ? "+" : ""
    }`;
  } else if (move.type == "put") {
    return `${move.to[0]}${move.to[1]}${move.put}`;
  } else {
    return move.type;
  }
}

function printBestMove(val: BestMove<Move>) {
  return (
    val.moves.map(printMove).join(" ") +
    ` ${val.score}` +
    (val.trace?.length > 0
      ? "\n" + val.trace?.map(printBestMove).join("\n")
      : "")
  );
}
