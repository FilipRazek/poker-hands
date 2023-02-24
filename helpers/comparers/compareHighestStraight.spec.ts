import compareHighestStraight from "./compareHighestStraight";

const straightWithAce = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
const straightWithKing = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0];
const noStraight = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1];
it("should correctly compare the highest straight", () => {
  expect(
    compareHighestStraight(
      { count: straightWithAce },
      { count: straightWithKing }
    )
  ).toEqual(1);
});

it("should return -1 if the second hand has the highest straight", () => {
  expect(
    compareHighestStraight(
      { count: straightWithKing },
      { count: straightWithAce }
    )
  ).toEqual(-1);
});

it("should correctly compare based on the kicker", () => {
  expect(
    compareHighestStraight({ count: straightWithAce }, { count: noStraight })
  ).toEqual(1);
});

it("should return 0 if the hands are equal", () => {
  expect(
    compareHighestStraight(
      { count: straightWithAce },
      { count: straightWithAce }
    )
  ).toEqual(0);
});
