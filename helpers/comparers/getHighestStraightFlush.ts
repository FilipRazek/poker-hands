import getCardCount from "../getCardCount";
import {  Hand } from "../types";
import getHighestFlush from "./getHighestFlush";
import getHighestStraight from "./getHighestStraight";

export default (hand: Hand): number => {
  const highestFlush = getHighestFlush(hand);
  if (!highestFlush) {
    return undefined;
  }

  const highestStraight = getHighestStraight(getCardCount(hand));

  if (highestFlush === highestStraight) {
    return highestFlush;
  }
};
