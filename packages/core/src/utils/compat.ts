export function deepCopy<T>(obj: T): T {
  return typeof structuredClone !== "undefined"
    ? structuredClone(obj)
    : JSON.parse(JSON.stringify(obj));
}
