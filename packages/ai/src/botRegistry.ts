export interface BotEntry {
  id: string;
  name: string;
  file: string;
  caveats?: { rule: number; level: "error" | "warning"; text: string }[];
}

const botRegistry: BotEntry[] = [
  {
    id: "random",
    file: "randomBot.js",
    name: "ランダムbot",
  },
];

export default botRegistry;

export function getESMURL(bot: BotEntry) {
  return `https://esm.sh/@shogitter/ai/lib/bot/${bot.file}`;
}
