import { CardCount } from "../types";

/**
 * Util to transform a CardCount into a list of card values,
 * based on a supplied mask. For example, if the mask is [2, 2, 1],
 * then the returned list will contain the card values of the
 * highest two pairs and the highest kicker.
 */
export const getHighestCardsFromMask = (
  hand: CardCount,
  mask: number[]
): number[] | undefined => {
  if (mask.reduce((a, b) => a + b) !== 5) {
    throw new Error(`Invalid mask: ${mask.join(";")}`);
  }
  const highestCards: number[] = [];
  for (const cardCount of mask) {
    let foundCard = false;
    for (let cardValue = hand.length - 1; cardValue >= 0; cardValue--) {
      if (hand[cardValue] === cardCount && !highestCards.includes(cardValue)) {
        highestCards.push(cardValue);
        foundCard = true;
        break;
      }
    }
    if (!foundCard) {
      return undefined;
    }
  }
  return highestCards;
};
