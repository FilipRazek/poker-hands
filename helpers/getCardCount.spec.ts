import getCardCount from "./getCardCount";
import { Hand } from "./types";

it("should correctly count cards in a hand", () => {
  const hand: Hand = [
    { value: 0, suit: "H" },
    { value: 0, suit: "D" },
    { value: 1, suit: "C" },
    { value: 8, suit: "S" },
    { value: 8, suit: "H" },
  ];
  const cardCounts = [2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0];
  expect(getCardCount(hand)).toEqual(cardCounts);
});
