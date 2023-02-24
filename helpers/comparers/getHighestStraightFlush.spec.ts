import { Hand } from "../types";
import getHighestStraightFlush from "./getHighestStraightFlush";

describe("getHighestStraightFlush", () => {
  const straightFlushWithAce: Hand = [
    { suit: "H", value: 14 },
    { suit: "H", value: 13 },
    { suit: "H", value: 12 },
    { suit: "H", value: 11 },
    { suit: "H", value: 10 },
  ];
  const straightFlushWithKing: Hand = [
    { suit: "H", value: 13 },
    { suit: "H", value: 12 },
    { suit: "H", value: 11 },
    { suit: "H", value: 10 },
    { suit: "H", value: 9 },
  ];
  const noStraightFlush: Hand = [
    { suit: "H", value: 14 },
    { suit: "H", value: 13 },
    { suit: "H", value: 12 },
    { suit: "H", value: 11 },
    { suit: "H", value: 9 },
  ];
  it("should return 12 for an ace straight flush", () => {
    expect(getHighestStraightFlush(straightFlushWithAce)).toEqual(12);
  });

  it("should return 11 for a king straight flush", () => {
    expect(getHighestStraightFlush(straightFlushWithKing)).toEqual(11);
  });

  it("should return undefined when there is no straight", () => {
    expect(getHighestStraightFlush(noStraightFlush)).toBeUndefined();
  });
});
