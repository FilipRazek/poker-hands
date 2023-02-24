import { ComparisonResult, EnhancedHand } from "../types";
import getHighestStraightFlush from "./getHighestStraightFlush";

export default (
  { hand: hand1 }: EnhancedHand,
  { hand: hand2 }: EnhancedHand
): ComparisonResult => {
  const hand1HighestStraightFlush = getHighestStraightFlush(hand1);
  const hand2HighestStraightFlush = getHighestStraightFlush(hand2);

  if (!hand1HighestStraightFlush) {
    if (!hand2HighestStraightFlush) {
      return 0;
    }
    return -1;
  }
  if (!hand2HighestStraightFlush) {
    return 1;
  }
  if (hand1HighestStraightFlush > hand2HighestStraightFlush) {
    return 1;
  } else if (hand2HighestStraightFlush > hand1HighestStraightFlush) {
    return -1;
  }
  return 0;
};
