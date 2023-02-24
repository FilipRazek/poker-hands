import compareHands from "./compareHands";

const [hand1, hand2] = process.argv.slice(2);
// eslint-disable-next-line no-console
console.log(compareHands(hand1, hand2));
