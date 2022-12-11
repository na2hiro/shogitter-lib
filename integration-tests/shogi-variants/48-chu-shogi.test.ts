import Shogi from "../../src/Shogi";
import { move, rawMove } from "../utils/shogiUtils";

describe("Chu shogi", () => {
  let shogi: Shogi;
  beforeEach(() => {
    shogi = Shogi.ofRuleId(48);
    shogi.start();
  });
  it("shishi can move", () => {
    move(shogi, 7, 10, 7, 8);
    move(shogi, 6, 3, 6, 5);
    expect(shogi).toMatchSnapshot();
  });
  it("cannot take shishi right after capturing shishi (Senjishi)", () => {
    move(shogi, 8, 9, 8, 8);
    move(shogi, 5, 4, 5, 5);
    move(shogi, 9, 8, 9, 7);
    move(shogi, 4, 5, 4, 6);
    move(shogi, 7, 10, 9, 8);
    move(shogi, 6, 3, 4, 5);
    move(shogi, 9, 10, 4, 5);
    expect(shogi).toMatchSnapshot();
    expect(() => rawMove(shogi, 4, 3, 9, 8)).toThrow();
  });
  it("can take shishi next to shishi", () => {
    move(shogi, 7, 10, 7, 8);
    move(shogi, 6, 3, 8, 5);
    move(shogi, 7, 8, 9, 7);
    move(shogi, 8, 5, 8, 6);
    move(shogi, 8, 6, 9, 6);
    move(shogi, 9, 7, 9, 6);
    expect(shogi).toMatchSnapshot();
  });
  it("can take shishi 2 pieces away which doesn't have kiki", () => {
    move(shogi, 7, 10, 7, 8);
    move(shogi, 6, 3, 7, 5);
    move(shogi, 7, 8, 5, 7);
    move(shogi, 7, 5, 5, 7);
    expect(shogi).toMatchSnapshot();
  });
  it("cannot take shishi 2 pieces away which has kiki", () => {
    move(shogi, 7, 10, 8, 8);
    move(shogi, 6, 3, 8, 5);
    move(shogi, 8, 8, 8, 7);
    move(shogi, 8, 7, 9, 7);
    expect(shogi).toMatchSnapshot();
    expect(() => rawMove(shogi, 8, 5, 9, 7)).toThrow();
  });
  it("cannot take shishi 2 pieces away which has kiki through the shishi to move", () => {
    move(shogi, 7, 10, 8, 8);
    move(shogi, 9, 5, 9, 6);
    move(shogi, 8, 8, 9, 6);
    move(shogi, 9, 4, 9, 5);
    move(shogi, 9, 6, 10, 6);
    move(shogi, 10, 6, 9, 5);
    move(shogi, 6, 3, 6, 5);
    move(shogi, 2, 9, 2, 8);
    move(shogi, 6, 5, 7, 7);
    move(shogi, 5, 9, 5, 8);
    expect(shogi).toMatchSnapshot();
    expect(() => rawMove(shogi, 7, 7, 9, 5)).toThrow();
  });
  it("cannot tsukegui with chunin", () => {
    move(shogi, 7, 10, 8, 8);
    move(shogi, 6, 3, 8, 5);
    move(shogi, 8, 8, 8, 7);
    move(shogi, 8, 7, 9, 7);
    move(shogi, 9, 5, 9, 6);
    move(shogi, 9, 7, 9, 6);
    expect(shogi).toMatchSnapshot();
    expect(() => rawMove(shogi, 9, 6, 8, 5)).toThrow();
  });
  it("can tsukegui", () => {
    move(shogi, 7, 10, 8, 8);
    move(shogi, 6, 3, 8, 5);
    move(shogi, 5, 9, 5, 8);
    move(shogi, 8, 5, 7, 5);
    move(shogi, 7, 5, 7, 6);
    move(shogi, 4, 10, 7, 7);
    move(shogi, 7, 6, 7, 7);
    move(shogi, 7, 7, 8, 8);
    move(shogi, 8, 9, 8, 8);
    expect(shogi).toMatchSnapshot();
  });
});
