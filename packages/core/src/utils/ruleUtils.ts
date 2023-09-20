import { Rule } from "../ShogitterDB";
import { array_unique } from "./phpCompat";

export const numPlayers = (rule: Rule) => array_unique(rule.players).length;
