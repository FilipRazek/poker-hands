import compareHighestThree from "./compareHighestThree";

const threeAces = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 3];
const threeQueens = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0];
const acePair = [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 2];
it("should correctly compare the highest three of a kind", () => {
  expect(
    compareHighestThree({ count: threeAces }, { count: threeQueens })
  ).toEqual(1);
});

it("should return -1 if the second hand has the highest pair", () => {
  expect(
    compareHighestThree({ count: threeQueens }, { count: threeAces })
  ).toEqual(-1);
});

it("should return -1 if the first hand has only a pair", () => {
  expect(
    compareHighestThree({ count: acePair }, { count: threeQueens })
  ).toEqual(-1);
});

it("should return 0 if the hands are equal", () => {
  expect(
    compareHighestThree({ count: threeAces }, { count: threeAces })
  ).toEqual(0);
});
