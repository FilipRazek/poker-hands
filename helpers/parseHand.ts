import parseCard from "./parseCard";
import { Hand } from "./types";

const parseHand = (cards: string): Hand => {
  // Parse a hand of any size into a Card list
  const hand = cards.split(" ").map(parseCard);
  if (hand.length !== 5) {
    throw new Error("Invalid hand size");
  }
  return hand;
};

export default parseHand;
