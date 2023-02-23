import compareHighestPair from "./compareHighestPair";
import { CardCount } from "../types";

describe("compareHighestPair", () => {
  const handWithAceAndQueenPair: CardCount = [
    0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 0, 1,
  ];
  const handWithKingPair: CardCount = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 2, 0];
  it("should correctly compare the highest pair in two hands", () => {
    expect(
      compareHighestPair(handWithKingPair, handWithAceAndQueenPair)
    ).toEqual(1);
  });

  it("should return -1 if the second hand has the highest pair", () => {
    expect(
      compareHighestPair(handWithAceAndQueenPair, handWithKingPair)
    ).toEqual(-1);
  });

  it("should return 0 if the hands are equal", () => {
    expect(
      compareHighestPair(handWithAceAndQueenPair, handWithAceAndQueenPair)
    ).toEqual(0);
  });
});
