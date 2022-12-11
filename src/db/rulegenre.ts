import { RuleGenreCollection, db } from "./mongoCompat";

const coll = db.getCollection("rulegenre") as RuleGenreCollection;
export default coll;

/** rulegenre records **/
db.getCollection("rulegenre").insert({
  id: 0,
  name: "本将棋",
  rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
});
db.getCollection("rulegenre").insert({
  id: 1,
  name: "古将棋",
  rules: [12, 13, 14, 15, 16, 43, 48, 49, 50, 59, 60, 61, 63, 64],
});
db.getCollection("rulegenre").insert({
  id: 5,
  name: "持ち駒手番系変則",
  rules: [24, 35, 53, 54, 57, 25, 66, 75, 93],
});
db.getCollection("rulegenre").insert({
  id: 7,
  name: "世界の将棋",
  rules: [76, 99, 100, 101, 102],
});
db.getCollection("rulegenre").insert({
  id: 6,
  name: "初形変則",
  rules: [
    17, 39, 19, 27, 32, 44, 45, 46, 47, 51, 52, 65, 79, 90, 91, 92, 96, 97, 98,
    103, 104, 109, 110,
  ],
});
db.getCollection("rulegenre").insert({
  id: 8,
  name: "将棋以外",
  rules: [39, 80, 81, 82, 83, 84, 85, 89, 105],
});
db.getCollection("rulegenre").insert({
  id: 3,
  name: "副作用系変則",
  rules: [18, 23, 42, 36, 69, 73, 77, 78, 106, 111],
});
db.getCollection("rulegenre").insert({
  id: 2,
  name: "動き系変則",
  rules: [
    26, 55, 95, 94, 56, 28, 29, 40, 34, 37, 33, 41, 38, 62, 67, 68, 70, 71, 86,
    87, 72, 74, 88, 107,
  ],
});
db.getCollection("rulegenre").insert({
  id: 4,
  name: "新駒系変則",
  rules: [20, 21, 22, 30, 31, 58, 108],
});
