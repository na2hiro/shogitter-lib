import {Direction} from "./Ban";

export type Flags = {
    igai?: boolean;
    ignoreOu?: boolean;
    iterator?: any; // TODO
    reverse?: boolean;
    noPick?: boolean;
    mustPick?: boolean;
    limit?: number;
    limitJump?: number;
    skipJump?: number;
    directionCalcingAllowed?: Direction;
    skip?: number;
    jumpException?: string[];
}
