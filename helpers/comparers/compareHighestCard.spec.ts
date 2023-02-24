import compareHighestCard from "./compareHighestCard";

const aceHandHigher = [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
const kingHand = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0];
const aceHandLower = [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1];
it("should correctly compare the highest card in two hands", () => {
  expect(compareHighestCard(aceHandHigher, kingHand)).toEqual(1);
});

it("should return -1 if the second hand has the highest card", () => {
  expect(compareHighestCard(kingHand, aceHandHigher)).toEqual(-1);
});

it("should correctly compare similar hands", () => {
  expect(compareHighestCard(aceHandHigher, aceHandLower)).toEqual(1);
});

it("should return 0 if the hands are equal", () => {
  expect(compareHighestCard(aceHandHigher, aceHandHigher)).toEqual(0);
});
