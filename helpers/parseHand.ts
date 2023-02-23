import parseCard, { Card } from "./parseCard";

const parseHand = (hand: string): Card[] => {
  // Parse a hand of any size into a Card list
  const cards = hand.split(" ");
  return cards.map(parseCard);
};

export default parseHand;
