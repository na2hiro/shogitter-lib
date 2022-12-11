export class ShogitterCoreException extends Error {
  message: string;
  flag: number;
  errorInstance: Error;
  constructor(message: string, flag: number = 0) {
    super(message);

    this.errorInstance = new Error(message);
    this.message = message;
    this.flag = flag;
  }
}

export function array_diff<T>(a: T[], b: T[]) {
  var ret = [],
    merged = [];

  merged = a.concat(b);

  for (var i = 0; i < merged.length; i++) {
    // When the element is contained ONLY
    //   one time then the search from
    //   left returns the same value as
    //   the search from the right.
    if (merged.indexOf(merged[i]) == merged.lastIndexOf(merged[i])) {
      // ... in that case the element
      // is pushed to the result array.
      ret.push(merged[i]);
    }
  }

  return ret;
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export function shuffle<T>(a: T[]): T[] {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export function array_unique<T>(arr: T[]) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
