import getCardValue from "./getCardValue";
import { Card, Suit } from "./types";

export default (card: string): Card => {
  // Check the format of the card string
  const cardRegex = /^([2-9TJQKA])([CDHS])$/;
  const cardMatch = card.match(cardRegex);
  if (!cardMatch) {
    throw new Error(`Invalid card: ${card}`);
  }

  const value = getCardValue(cardMatch[1]);
  const suit = cardMatch[2] as Suit;
  return { value, suit };
};
