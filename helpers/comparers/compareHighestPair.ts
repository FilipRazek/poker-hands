import { CardCount, ComparisonResult } from "../types";

export default (hand1: CardCount, hand2: CardCount): ComparisonResult => {
  // Iterate over all card values in reverse order (12 = ace to 0 = 2)
  for (let cardValue = hand1.length - 1; cardValue >= 0; cardValue--) {
    if (hand1[cardValue] === 2 && hand2[cardValue] < 2) {
      return 1;
    } else if (hand2[cardValue] === 2 && hand1[cardValue] < 2) {
      return -1;
    }
  }
  return 0;
};
