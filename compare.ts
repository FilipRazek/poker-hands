// -1: First hand is worse, 0: hands are equal, 1: First hand is better
type ComparisonResult = -1 | 0 | 1;

const compareHands = (_hand1: string, _hand2: string): ComparisonResult => {
  return 0;
};

const [hand1, hand2] = process.argv.slice(2);
// eslint-disable-next-line no-console
console.log(compareHands(hand1, hand2));
