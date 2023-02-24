import { Hand } from "../types";
import compareHighestStraightFlush from "./compareHighestStraightFlush";

const straightFlushWithAce: Hand = [
  { suit: "H", value: 12 },
  { suit: "H", value: 11 },
  { suit: "H", value: 10 },
  { suit: "H", value: 9 },
  { suit: "H", value: 8 },
];
const straightFlushWithKing: Hand = [
  { suit: "H", value: 11 },
  { suit: "H", value: 10 },
  { suit: "H", value: 9 },
  { suit: "H", value: 8 },
  { suit: "H", value: 7 },
];
const noStraightFlush: Hand = [
  { suit: "H", value: 12 },
  { suit: "H", value: 11 },
  { suit: "H", value: 10 },
  { suit: "H", value: 9 },
  { suit: "H", value: 7 },
];
it("should correctly compare the highest straightFlush", () => {
  expect(
    compareHighestStraightFlush(
      { hand: straightFlushWithAce },
      { hand: straightFlushWithKing }
    )
  ).toEqual(1);
});

it("should return -1 if the second hand has the highest straightFlush", () => {
  expect(
    compareHighestStraightFlush(
      { hand: straightFlushWithKing },
      { hand: straightFlushWithAce }
    )
  ).toEqual(-1);
});

it("should correctly compare based on the kicker", () => {
  expect(
    compareHighestStraightFlush(
      { hand: straightFlushWithAce },
      { hand: noStraightFlush }
    )
  ).toEqual(1);
});

it("should return 0 if the hands are equal", () => {
  expect(
    compareHighestStraightFlush(
      { hand: straightFlushWithAce },
      { hand: straightFlushWithAce }
    )
  ).toEqual(0);
});
