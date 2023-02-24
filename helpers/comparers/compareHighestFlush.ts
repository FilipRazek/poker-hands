import { ComparisonResult, Hand } from "../types";
import getHighestFlush from "./getHighestFlush";

export default (hand1: Hand, hand2: Hand): ComparisonResult => {
  const hand1HighestFlush = getHighestFlush(hand1);
  const hand2HighestFlush = getHighestFlush(hand2);

  if (!hand1HighestFlush) {
    if (!hand2HighestFlush) {
      return 0;
    }
    return -1;
  }
  if (!hand2HighestFlush) {
    return 1;
  }
  if (hand1HighestFlush > hand2HighestFlush) {
    return 1;
  } else if (hand2HighestFlush > hand1HighestFlush) {
    return -1;
  }
  return 0;
};
