import { Hand } from "../types";
import getHighestFlush from "./getHighestFlush";

describe("getHighestFlush", () => {
  const flushWithAce: Hand = [
    { suit: "H", value: 14 },
    { suit: "H", value: 11 },
    { suit: "H", value: 10 },
    { suit: "H", value: 9 },
    { suit: "H", value: 2 },
  ];
  const flushWithKing: Hand = [
    { suit: "H", value: 13 },
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
  it("should return 12 for an ace flush", () => {
    expect(getHighestFlush(flushWithAce)).toEqual(12);
  });

  it("should return 11 for a king flush", () => {
    expect(getHighestFlush(flushWithKing)).toEqual(11);
  });

  it("should return undefined when there is no flush", () => {
    expect(getHighestFlush(noFlush)).toBeUndefined();
  });
});
