import getCardCount from "./getCardCount";
import { Card } from "./types";

describe("getCardCount", () => {
  it("should correctly count cards in a hand", () => {
    const hand: Card[] = [
      { value: 2, suit: "H" },
      { value: 2, suit: "D" },
      { value: 3, suit: "C" },
      { value: 10, suit: "S" },
      { value: 10, suit: "H" },
    ];
    const cardCounts = [2, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0];
    expect(getCardCount(hand)).toEqual(cardCounts);
  });
});
