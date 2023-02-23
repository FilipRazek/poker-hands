import parseCard from "./parseCard";
import { Card } from "./types";

const parseHand = (hand: string): Card[] => {
  // Parse a hand of any size into a Card list
  const cards = hand.split(" ");
  return cards.map(parseCard);
};

export default parseHand;
