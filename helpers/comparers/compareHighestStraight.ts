import { ComparisonResult, EnhancedHand } from "../types";
import getHighestStraight from "./getHighestStraight";

export default (
  { count: hand1 }: EnhancedHand,
  { count: hand2 }: EnhancedHand
): ComparisonResult => {
  const hand1HighestStraight = getHighestStraight(hand1);
  const hand2HighestStraight = getHighestStraight(hand2);

  if (!hand1HighestStraight) {
    if (!hand2HighestStraight) {
      return 0;
    }
    return -1;
  }
  if (!hand2HighestStraight) {
    return 1;
  }
  if (hand1HighestStraight > hand2HighestStraight) {
    return 1;
  } else if (hand2HighestStraight > hand1HighestStraight) {
    return -1;
  }
  return 0;
};
