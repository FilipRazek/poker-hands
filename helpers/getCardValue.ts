export default (card: string): number => {
  const cardMap: Record<string, number> = {
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  if (cardMap[card]) {
    return cardMap[card];
  }
  const cardValue = card.match(/^[2-9]$/)[0];
  if (!cardValue) {
    throw new Error(`Invalid card value: ${card}`);
  }
  return parseInt(cardValue, 10);
};
