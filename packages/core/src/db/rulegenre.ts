type ArrayRuleGenre = { [genreName: string]: number[] };

const coll: ArrayRuleGenre = {
  本将棋: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  古将棋: [12, 13, 14, 15, 16, 43, 48, 49, 50, 59, 60, 61, 63, 64],
  持ち駒手番系変則: [24, 35, 53, 54, 57, 25, 66, 75, 93],
  初形変則: [
    17, 39, 19, 27, 32, 44, 45, 46, 47, 51, 52, 65, 79, 90, 91, 92, 96, 97, 98,
    103, 109, 110,
  ],
  新駒系変則: [20, 21, 22, 30, 31, 58, 104, 108],
  副作用系変則: [18, 23, 42, 36, 69, 73, 77, 78, 106, 111],
  動き系変則: [
    26, 55, 95, 94, 56, 28, 29, 40, 34, 37, 33, 41, 38, 62, 67, 68, 70, 71, 86,
    87, 72, 74, 88, 107, 112, 113,
  ],
  世界の将棋: [76, 99, 100, 101, 102],
  将棋以外: [39, 80, 81, 82, 83, 84, 85, 89, 105],
};

Object.values(coll).map((arr) => arr.sort((a, b) => a - b));

export default coll;
