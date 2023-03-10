import { Hand } from "../types";
import compareHighestFlush from "./compareHighestFlush";

const flushWithAce: Hand = [
  { suit: "H", value: 10 },
  { suit: "H", value: 9 },
  { suit: "H", value: 8 },
  { suit: "H", value: 7 },
  { suit: "H", value: 0 },
];
const flushWithKing: Hand = [
  { suit: "H", value: 9 },
  { suit: "H", value: 8 },
  { suit: "H", value: 7 },
  { suit: "H", value: 6 },
  { suit: "H", value: 0 },
];
const noFlush: Hand = [
  { suit: "H", value: 10 },
  { suit: "S", value: 9 },
  { suit: "H", value: 8 },
  { suit: "H", value: 7 },
  { suit: "H", value: 0 },
];
it("should correctly compare the highest flush", () => {
  expect(
    compareHighestFlush({ hand: flushWithAce }, { hand: flushWithKing })
  ).toEqual(1);
});

it("should return -1 if the second hand has the highest flush", () => {
  expect(
    compareHighestFlush({ hand: flushWithKing }, { hand: flushWithAce })
  ).toEqual(-1);
});

it("should correctly compare when there is no flush", () => {
  expect(
    compareHighestFlush({ hand: flushWithAce }, { hand: noFlush })
  ).toEqual(1);
});

it("should return 0 if the hands are equal", () => {
  expect(
    compareHighestFlush({ hand: flushWithAce }, { hand: flushWithAce })
  ).toEqual(0);
});
