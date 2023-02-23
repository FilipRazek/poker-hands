import { Hand } from "../types";
import compareHighestStraightFlush from "./compareHighestStraightFlush";

describe("compareHighestStraightFlush", () => {
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
  it("should correctly compare the highest straightFlush", () => {
    expect(
      compareHighestStraightFlush(straightFlushWithAce, straightFlushWithKing)
    ).toEqual(1);
  });

  it("should return -1 if the second hand has the highest straightFlush", () => {
    expect(
      compareHighestStraightFlush(straightFlushWithKing, straightFlushWithAce)
    ).toEqual(-1);
  });

  it("should correctly compare based on the kicker", () => {
    expect(
      compareHighestStraightFlush(straightFlushWithAce, noStraightFlush)
    ).toEqual(1);
  });

  it("should return 0 if the hands are equal", () => {
    expect(
      compareHighestStraightFlush(straightFlushWithAce, straightFlushWithAce)
    ).toEqual(0);
  });
});
