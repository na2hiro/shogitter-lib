import Shogi from "./Shogi";
import { Direction } from "./Direction";
import { Species } from "./Ban";
import { PlayerInfo } from "./Teban";
import { shogitterDB } from "./ShogitterDB";
import XY from "./XY";
import { KomaInfo } from "./db/koma";

export * from "./Shogi";
export default Shogi;
export { Direction, Species, KomaInfo, PlayerInfo, shogitterDB, XY };
