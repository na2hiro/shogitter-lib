import { Direction } from "./Direction.js";
import { XYObj } from "./XY.js";
import { Species } from "./Ban.js";

const TURN_AGNOSTIC_COMMANDS = [
  "rollback",
  "start",
  "resign",
  "draw",
  "changedirection",
  "reset",
];
export const isTurnAgnosticCommand = (command: KifuCommand) => {
  return TURN_AGNOSTIC_COMMANDS.includes(command.type);
};

export type KifuCommand = { direction?: Direction } & (
  | MoveCommand
  | PutCommand
  | RollbackCommand
  | ResignCommand
  | ResetCommand
  | StartCommand
  | PassCommand
  | ChangeDirectionCommand
  | DrawCommand
);
export type MoveCommand = {
  type: "move";
  from: XYObj;
  to: XYObj;
  nari?: boolean;
};
export type PutCommand = {
  type: "put";
  to: XYObj;
  direction: Direction;
  put: Species;
  id?: number; // Used for quantum shogi to distinguish individual pieces of a kind
};
export type RollbackCommand = {
  type: "rollback";
  direction?: Direction;
};
export type StartCommand = {
  type: "start";
};
export type PassCommand = {
  type: "pass";
};
export type ResignCommand = {
  type: "resign";
};
export type DrawCommand = {
  type: "draw";
};
export type ChangeDirectionCommand = {
  type: "changedirection";
};
export type ResetCommand = {
  type: "reset";
  ruleId: number;
};

export type Move = MoveCommand | PutCommand;
