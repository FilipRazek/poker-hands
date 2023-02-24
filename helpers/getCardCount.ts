import { CardCount, Hand } from "./types";

export default (cards: Hand): CardCount => {
  const cardCounts = Array.from({ length: 13 }, () => 0);
  cards.forEach(({ value }) => {
    cardCounts[value] += 1;
  });
  return cardCounts;
};
