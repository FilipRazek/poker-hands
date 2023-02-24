import compareHighestStraight from "./compareHighestStraight";

const straightWithAce = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
const straightWithKing = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0];
const noStraight = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1];
it("should correctly compare the highest straight", () => {
  expect(compareHighestStraight(straightWithAce, straightWithKing)).toEqual(1);
});

it("should return -1 if the second hand has the highest straight", () => {
  expect(compareHighestStraight(straightWithKing, straightWithAce)).toEqual(-1);
});

it("should correctly compare based on the kicker", () => {
  expect(compareHighestStraight(straightWithAce, noStraight)).toEqual(1);
});

it("should return 0 if the hands are equal", () => {
  expect(compareHighestStraight(straightWithAce, straightWithAce)).toEqual(0);
});
