import { getHighestCardsFromMask } from "./getHighestCardsFromMask";

describe("getHighestCardsFromMask", () => {
  const handWithAceAndQueenPairs = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2];
  it("should correctly get the highest pairs", () => {
    expect(
      getHighestCardsFromMask(handWithAceAndQueenPairs, [2, 2, 1])
    ).toEqual([12, 10, 6]);
  });

  it("should correctly get a triplet and a pair", () => {
    const handWithThreeKingsAndQueenPair = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0,
    ];
    expect(
      getHighestCardsFromMask(handWithThreeKingsAndQueenPair, [3, 2])
    ).toEqual([11, 10]);
  });

  it("should return undefined if no card matches the mask", () => {
    expect(
      getHighestCardsFromMask(handWithAceAndQueenPairs, [3, 2])
    ).toBeUndefined();
  });
});
