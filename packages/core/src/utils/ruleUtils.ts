import { Rule } from "../ShogitterDB.js";
import { array_unique } from "./phpCompat.js";

export const numPlayers = (rule: Rule) => array_unique(rule.players).length;
