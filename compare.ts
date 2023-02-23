import { ComparisonResult } from "./helpers/types";

const compareHands = (_hand1: string, _hand2: string): ComparisonResult => {
  return 0;
};

const [hand1, hand2] = process.argv.slice(2);
// eslint-disable-next-line no-console
console.log(compareHands(hand1, hand2));
