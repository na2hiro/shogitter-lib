export type PlayerType = "random" | "possibilityist";

export interface PlayerEntry {
  id: PlayerType;
  name: string;
  file: string;
  search?: {
    iterativeDeepening?: {
      maxDepth: number;
      timeLimit: number;
    };
  };
  caveats?: { rule: number; level: "error" | "warning"; text: string }[];
}

export const playerRegistry: PlayerEntry[] = [
  {
    id: "possibilityist",
    file: "possibilityistPlayer.js",
    name: "最大選択肢bot",
    search: {
      iterativeDeepening: {
        maxDepth: 3,
        timeLimit: 3000,
      },
    },
    caveats: [
      {
        rule: 66,
        level: "error",
        text: "パスができないため、停止したり一人千日手したりしてしまう",
      },
    ],
  },
  {
    id: "random",
    file: "randomPlayer.js",
    name: "ランダムbot",
    caveats: [
      {
        rule: 66,
        level: "error",
        text: "パスができないため、停止したり一人千日手したりしてしまう",
      },
    ],
  },
];

export function getPlayer(playerType: PlayerType) {
  return playerRegistry.find((p) => p.id === playerType);
}

export function getESMURL(entry: PlayerEntry) {
  return `https://esm.sh/@shogitter/ai/lib/players/${entry.file}`;
}
