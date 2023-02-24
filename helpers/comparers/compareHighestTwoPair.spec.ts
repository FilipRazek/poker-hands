import compareHighestTwoPair from "./compareHighestTwoPair";

const aceAndQueenPairsHigher = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2];
const kingAndQueenPairs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0];
const acePair = [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 2];
const aceAndQueenPairsLower = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2];
it("should correctly compare the highest two pairs in two hands", () => {
  expect(
    compareHighestTwoPair(aceAndQueenPairsHigher, kingAndQueenPairs)
  ).toEqual(1);
});

it("should return -1 if the second hand has the highest pair", () => {
  expect(
    compareHighestTwoPair(kingAndQueenPairs, aceAndQueenPairsHigher)
  ).toEqual(-1);
});

it("should return -1 if the first hand has only one pair", () => {
  expect(compareHighestTwoPair(acePair, kingAndQueenPairs)).toEqual(-1);
});

it("should correctly compare two pair hands based on the fifth card", () => {
  expect(
    compareHighestTwoPair(aceAndQueenPairsHigher, aceAndQueenPairsLower)
  ).toEqual(1);
});

it("should return 0 if the hands are equal", () => {
  expect(
    compareHighestTwoPair(aceAndQueenPairsHigher, aceAndQueenPairsHigher)
  ).toEqual(0);
});
