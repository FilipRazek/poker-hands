import getHighestStraight from "./getHighestStraight";

const straightWithAce = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
const straightWithKing = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0];
const noStraight = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1];
it("should return 12 for an ace straight", () => {
  expect(getHighestStraight(straightWithAce)).toEqual(12);
});

it("should return 11 for a king straight", () => {
  expect(getHighestStraight(straightWithKing)).toEqual(11);
});

it("should return undefined when there is no straight", () => {
  expect(getHighestStraight(noStraight)).toBeUndefined();
});
