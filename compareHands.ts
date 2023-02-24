import compareHighestCard from "./helpers/comparers/compareHighestCard";
import compareHighestFlush from "./helpers/comparers/compareHighestFlush";
import compareHighestFour from "./helpers/comparers/compareHighestFour";
import compareHighestFullHouse from "./helpers/comparers/compareHighestFullHouse";
import compareHighestPair from "./helpers/comparers/compareHighestPair";
import compareHighestStraight from "./helpers/comparers/compareHighestStraight";
import compareHighestStraightFlush from "./helpers/comparers/compareHighestStraightFlush";
import compareHighestThree from "./helpers/comparers/compareHighestThree";
import compareHighestTwoPair from "./helpers/comparers/compareHighestTwoPair";
import getCardCount from "./helpers/getCardCount";
import parseHand from "./helpers/parseHand";
import { ComparisonResult } from "./helpers/types";

export default (stringHand1: string, stringHand2: string): ComparisonResult => {
  const hand1 = parseHand(stringHand1);
  const hand2 = parseHand(stringHand2);

  const cardCount1 = getCardCount(hand1);
  const cardCount2 = getCardCount(hand2);

  const straightFlushResult = compareHighestStraightFlush(hand1, hand2);
  if (straightFlushResult !== 0) {
    return straightFlushResult;
  }

  const firstChecks = [compareHighestFour, compareHighestFullHouse];
  for (const check of firstChecks) {
    const result = check(cardCount1, cardCount2);
    if (result !== 0) {
      return result;
    }
  }

  const flushResult = compareHighestFlush(hand1, hand2);
  if (flushResult !== 0) {
    return flushResult;
  }
  const lastChecks = [
    compareHighestStraight,
    compareHighestThree,
    compareHighestTwoPair,
    compareHighestPair,
    compareHighestCard,
  ];

  for (const check of lastChecks) {
    const result = check(cardCount1, cardCount2);
    if (result !== 0) {
      return result;
    }
  }
  return 0;
};
