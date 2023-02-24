import { CardCount } from "../types";

export default (hand: CardCount): number => {
  let highestCard;
  let inStraightSince = 0;
  // Iterate over all card values in reverse order (12 = ace to 0 = 2)
  for (let cardValue = hand.length - 1; cardValue >= 0; cardValue--) {
    if (inStraightSince === 5) {
      return highestCard;
    }
    if (inStraightSince > 0) {
      if (hand[cardValue] !== 1) {
        return undefined;
      }
      inStraightSince++;
    } else if (hand[cardValue] === 1) {
      inStraightSince = 1;
      highestCard = cardValue;
    }
  }
  return highestCard;
};
