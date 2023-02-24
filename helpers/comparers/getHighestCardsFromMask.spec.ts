import getHighestCardsFromMask from "./getHighestCardsFromMask";

const aceAndQueenPairs = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2];
it("should correctly get the highest pairs", () => {
  expect(getHighestCardsFromMask(aceAndQueenPairs, [2, 2, 1])).toEqual([
    12, 10, 6,
  ]);
});

it("should correctly get a triplet and a pair", () => {
  const threeKingsAndQueenPair = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0];
  expect(getHighestCardsFromMask(threeKingsAndQueenPair, [3, 2])).toEqual([
    11, 10,
  ]);
});

it("should return undefined if no card matches the mask", () => {
  expect(getHighestCardsFromMask(aceAndQueenPairs, [3, 2])).toBeUndefined();
});
