import { ShogitterAiException } from "../ShogitterAiException.js";

export function randomSelect<T>(arr: T[]) {
  if (arr.length === 0)
    throw new ShogitterAiException("randomSelect: empty array");
  return arr[Math.floor(Math.random() * arr.length)];
}
