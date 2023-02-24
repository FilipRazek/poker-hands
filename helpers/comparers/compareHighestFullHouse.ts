import { CardCount, ComparisonResult } from "../types";
import getHighestCardsFromMask from "./getHighestCardsFromMask";

export default (hand1: CardCount, hand2: CardCount): ComparisonResult => {
  const mask = [3, 2];
  const hand1HighestCards = getHighestCardsFromMask(hand1, mask);
  const hand2HighestCards = getHighestCardsFromMask(hand2, mask);

  if (!hand1HighestCards) {
    if (!hand2HighestCards) {
      return 0;
    }
    return -1;
  }
  if (!hand2HighestCards) {
    return 1;
  }
  for (let i = 0; i < mask.length; i++) {
    if (hand1HighestCards[i] > hand2HighestCards[i]) {
      return 1;
    } else if (hand2HighestCards[i] > hand1HighestCards[i]) {
      return -1;
    }
  }
  return 0;
};
