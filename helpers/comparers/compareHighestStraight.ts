import { CardCount, ComparisonResult } from "../types";
import getHighestStraight from "./getHighestStraight";

export default (hand1: CardCount, hand2: CardCount): ComparisonResult => {
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
