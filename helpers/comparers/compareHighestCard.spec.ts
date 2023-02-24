import compareHighestCard from "./compareHighestCard";

const aceHand = [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
const kingHand = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0];
it("should correctly compare the highest card in two hands", () => {
  expect(compareHighestCard(aceHand, kingHand)).toEqual(1);
});

it("should return -1 if the second hand has the highest card", () => {
  expect(compareHighestCard(kingHand, aceHand)).toEqual(-1);
});

it("should return 0 if the hands are equal", () => {
  expect(compareHighestCard(aceHand, aceHand)).toEqual(0);
});
