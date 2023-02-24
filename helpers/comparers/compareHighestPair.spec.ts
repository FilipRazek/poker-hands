import compareHighestPair from "./compareHighestPair";

const aceAndQueenPair = [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 0, 1];
const kingAndQueenPair = [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1, 0];
const kingPair = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 2, 0];
it("should correctly compare the highest pair in two hands", () => {
  expect(compareHighestPair(kingPair, aceAndQueenPair)).toEqual(1);
});

it("should correctly compare the kicker if the pairs are equal", () => {
  expect(compareHighestPair(kingAndQueenPair, aceAndQueenPair)).toEqual(-1);
});

it("should return -1 if the second hand has the highest pair", () => {
  expect(compareHighestPair(aceAndQueenPair, kingPair)).toEqual(-1);
});

it("should return 0 if the hands are equal", () => {
  expect(compareHighestPair(aceAndQueenPair, aceAndQueenPair)).toEqual(0);
});
