import { Hand } from "../types";
import compareHighestFlush from "./compareHighestFlush";

describe("compareHighestFlush", () => {
  const flushWithAce: Hand = [
    { suit: "H", value: 12 },
    { suit: "H", value: 11 },
    { suit: "H", value: 10 },
    { suit: "H", value: 9 },
    { suit: "H", value: 2 },
  ];
  const flushWithKing: Hand = [
    { suit: "H", value: 11 },
    { suit: "H", value: 10 },
    { suit: "H", value: 9 },
    { suit: "H", value: 8 },
    { suit: "H", value: 2 },
  ];
  const noFlush: Hand = [
    { suit: "H", value: 12 },
    { suit: "S", value: 11 },
    { suit: "H", value: 10 },
    { suit: "H", value: 9 },
    { suit: "H", value: 2 },
  ];
  it("should correctly compare the highest flush", () => {
    expect(compareHighestFlush(flushWithAce, flushWithKing)).toEqual(1);
  });

  it("should return -1 if the second hand has the highest flush", () => {
    expect(compareHighestFlush(flushWithKing, flushWithAce)).toEqual(-1);
  });

  it("should correctly compare when there is no flush", () => {
    expect(compareHighestFlush(flushWithAce, noFlush)).toEqual(1);
  });

  it("should return 0 if the hands are equal", () => {
    expect(compareHighestFlush(flushWithAce, flushWithAce)).toEqual(0);
  });
});
