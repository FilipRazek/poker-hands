// -1: First hand is worse, 0: hands are equal, 1: First hand is better
export type ComparisonResult = -1 | 0 | 1;

// A 13 element array containing the number of cards of each value
export type CardCount = number[];

export type Suit = "C" | "D" | "H" | "S";

export type Card = {
  value: number;
  suit: Suit;
};

export type Hand = Card[];

export type EnhancedHand = {
  hand?: Hand;
  count?: CardCount;
};
