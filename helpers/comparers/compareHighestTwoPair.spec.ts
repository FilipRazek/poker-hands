import compareHighestTwoPair from "./compareHighestTwoPair";

const aceAndQueenPairsHigher = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 2];
const kingAndQueenPairs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0];
const acePair = [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 2];
const aceAndQueenPairsLower = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2];
it("should correctly compare the highest two pairs in two hands", () => {
  expect(
    compareHighestTwoPair(
      { count: aceAndQueenPairsHigher },
      { count: kingAndQueenPairs }
    )
  ).toEqual(1);
});

it("should return -1 if the second hand has the highest pair", () => {
  expect(
    compareHighestTwoPair(
      { count: kingAndQueenPairs },
      { count: aceAndQueenPairsHigher }
    )
  ).toEqual(-1);
});

it("should return -1 if the first hand has only one pair", () => {
  expect(
    compareHighestTwoPair({ count: acePair }, { count: kingAndQueenPairs })
  ).toEqual(-1);
});

it("should correctly compare two pair hands based on the fifth card", () => {
  expect(
    compareHighestTwoPair(
      { count: aceAndQueenPairsHigher },
      { count: aceAndQueenPairsLower }
    )
  ).toEqual(1);
});

it("should return 0 if the hands are equal", () => {
  expect(
    compareHighestTwoPair(
      { count: aceAndQueenPairsHigher },
      { count: aceAndQueenPairsHigher }
    )
  ).toEqual(0);
});
