export default (card: string): number => {
  const cardMap: Record<string, number> = {
    T: 8,
    J: 9,
    Q: 10,
    K: 11,
    A: 12,
  };
  if (cardMap[card]) {
    return cardMap[card];
  }
  const cardValue = card.match(/^[2-9]$/)[0];
  if (!cardValue) {
    throw new Error(`Invalid card value: ${card}`);
  }
  return parseInt(cardValue, 10) - 2;
};
