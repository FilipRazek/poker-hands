import compareHighestTwoPair from "./compareHighestTwoPair";
import { CardCount } from "../types";

describe("compareHighestTwoPair", () => {
  const handWithAceAndQueenPairsHigher: CardCount = [
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2,
  ];
  const handWithKingAndQueenPairs: CardCount = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0,
  ];
  const handWithAcePair: CardCount = [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 2];
  const handWithAceAndQueenPairsLower: CardCount = [
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2,
  ];
  it("should correctly compare the highest two pairs in two hands", () => {
    expect(
      compareHighestTwoPair(
        handWithAceAndQueenPairsHigher,
        handWithKingAndQueenPairs
      )
    ).toEqual(1);
  });

  it("should return -1 if the second hand has the highest pair", () => {
    expect(
      compareHighestTwoPair(
        handWithKingAndQueenPairs,
        handWithAceAndQueenPairsHigher
      )
    ).toEqual(-1);
  });

  it("should return -1 if the first hand has only one pair", () => {
    expect(
      compareHighestTwoPair(handWithAcePair, handWithKingAndQueenPairs)
    ).toEqual(-1);
  });

  it("should correctly compare two pair hands based on the fifth card", () => {
    expect(
      compareHighestTwoPair(
        handWithAceAndQueenPairsHigher,
        handWithAceAndQueenPairsLower
      )
    ).toEqual(1);
  });

  it("should return 0 if the hands are equal", () => {
    expect(
      compareHighestTwoPair(
        handWithAceAndQueenPairsHigher,
        handWithAceAndQueenPairsHigher
      )
    ).toEqual(0);
  });
});
