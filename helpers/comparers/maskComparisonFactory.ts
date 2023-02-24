import { ComparisonResult, EnhancedHand } from "../types";
import getHighestCardsFromMask from "./getHighestCardsFromMask";

export default (mask: number[]) =>
  (
    { count: hand1 }: EnhancedHand,
    { count: hand2 }: EnhancedHand
  ): ComparisonResult => {
    const hand1HighestCards = getHighestCardsFromMask(hand1, mask);
    const hand2HighestCards = getHighestCardsFromMask(hand2, mask);

    if (!hand1HighestCards) return hand2HighestCards ? -1 : 0;
    if (!hand2HighestCards) return 1;

    for (let i = 0; i < mask.length; i++) {
      if (hand1HighestCards[i] > hand2HighestCards[i]) return 1;
      if (hand2HighestCards[i] > hand1HighestCards[i]) return -1;
    }
    return 0;
  };
