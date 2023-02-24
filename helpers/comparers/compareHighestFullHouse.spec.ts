import compareHighestFullHouse from "./compareHighestFullHouse";

const aceTwoFullHouse = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3];
const kingQueenFullHouse = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0];
const noFullHouse = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1];
it("should correctly compare the highest full house", () => {
  expect(
    compareHighestFullHouse(
      { count: aceTwoFullHouse },
      { count: kingQueenFullHouse }
    )
  ).toEqual(1);
});

it("should return -1 if the second hand has the highest pair", () => {
  expect(
    compareHighestFullHouse(
      { count: kingQueenFullHouse },
      { count: aceTwoFullHouse }
    )
  ).toEqual(-1);
});

it("should correctly compare a full house to a non full house", () => {
  expect(
    compareHighestFullHouse(
      { count: noFullHouse },
      { count: kingQueenFullHouse }
    )
  ).toEqual(-1);
});

it("should return 0 if the hands are equal", () => {
  expect(
    compareHighestFullHouse(
      { count: aceTwoFullHouse },
      { count: aceTwoFullHouse }
    )
  ).toEqual(0);
});
