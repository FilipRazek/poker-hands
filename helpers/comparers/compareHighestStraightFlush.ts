import { ComparisonResult, Hand } from "../types";
import getHighestStraightFlush from "./getHighestStraightFlush";

export default (hand1: Hand, hand2: Hand): ComparisonResult => {
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
