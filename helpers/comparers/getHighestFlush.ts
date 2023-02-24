import { Hand } from "../types";

export default (hand: Hand): number => {
  const flushSuit = hand[0].suit;
  let highestCard = hand[0].value;
  for (const card of hand) {
    if (card.suit !== flushSuit) {
      return undefined;
    }
    if (card.value > highestCard) {
      highestCard = card.value;
    }
  }
  return highestCard;
};
