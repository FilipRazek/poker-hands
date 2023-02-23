import { Card } from "./types";

export default (cards: Card[]): number[] => {
  const cardCounts = Array.from({ length: 13 }, () => 0);
  cards.forEach(({ value }) => {
    cardCounts[value - 2] += 1;
  });
  return cardCounts;
};
