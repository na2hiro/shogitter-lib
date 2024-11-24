import { Shogi, XY } from "../../src";
import { move, put } from "../utils/shogiUtils";
import { describe, it, expect } from "vitest";

describe("Nifu", () => {
  describe("Normal", () => {
    it("throws error with proper description in 本将棋", () => {
      const shogi = Shogi.ofRuleId(0);
      shogi.start();
      move(shogi, 7, 7, 7, 6);
      move(shogi, 8, 3, 8, 4);
      move(shogi, 8, 8, 3, 3);
      move(shogi, 2, 2, 3, 3);
      expect(() => shogi.put(new XY(5, 2), "aa", 0)).toThrow("二歩です");
    });
    it("throws error with proper description in 禽将棋", () => {
      const shogi = Shogi.ofRuleId(16);
      shogi.start();
      move(shogi, 3, 4, 3, 3);
      move(shogi, 4, 2, 5, 2);
      expect(() => put(shogi, 3, 2, "bb")).toThrow("三燕です");
    });
  });
  describe("No", () => {
    it("allows nifu in 重力将棋", () => {
      const shogi = Shogi.ofRuleId(18);
      shogi.start();
      move(shogi, 7, 7, 7, 6);
      move(shogi, 5, 1, 5, 2);
      move(shogi, 9, 9, 9, 3, false);
      move(shogi, 5, 1, 5, 2);
      put(shogi, 5, 5, "aa");
    });
  });
  describe("Naname", () => {
    it("checks in 斜め将棋", () => {
      const shogi = Shogi.ofRuleId(32);
      shogi.start();
      move(shogi, 8, 4, 7, 3);
      move(shogi, 6, 2, 7, 3);
      move(shogi, 9, 5, 7, 3);
      expect(() => put(shogi, 5, 5, "bp")).toThrow("二歩です");
    });
  });
  describe("Penalty", () => {
    it("loses when nifu is found in オセロ将棋", () => {
      const shogi = Shogi.ofRuleId(42);
      shogi.start();
      move(shogi, 7, 7, 7, 6);
      move(shogi, 3, 3, 3, 4);
      move(shogi, 8, 8, 2, 2, true);
      move(shogi, 3, 1, 4, 2);
      put(shogi, 2, 4, "af");
      expect(shogi.status.message).toBe("二歩です。先手の負けです。");
    });
  });
  describe("WholeScan", () => {
    it.skip("is checked in 106-epoxy-shogi.test.ts", () => {});
  });
});
