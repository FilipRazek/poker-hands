import compareHands from "./compareHands";

it("should correctly compare hands on pairs", () => {
  const hand1 = "5H 5C 6S 7S KD";
  const hand2 = "2C 3S 8S 8D TD";
  expect(compareHands(hand1, hand2)).toEqual(-1);
});

it("should correctly compare hands on highest cards", () => {
  const hand1 = "5D 8C 9S JS AC";
  const hand2 = "2C 5C 7D 8S QH";
  expect(compareHands(hand1, hand2)).toEqual(1);
});

it("should correctly compare hands on flush", () => {
  const hand1 = "2D 9C AS AH AC";
  const hand2 = "3D 6D 7D TD QD";
  expect(compareHands(hand1, hand2)).toEqual(-1);
});

it("should correctly compare hands on pairs and highest card", () => {
  const hand1 = "4D 6S 9H QH QC";
  const hand2 = "3D 6D 7H QD QS";
  expect(compareHands(hand1, hand2)).toEqual(1);
});

it("should correctly compare hands on full houses", () => {
  const hand1 = "2H 2D 4C 4D 4S";
  const hand2 = "3C 3D 3S 9S 9D";
  expect(compareHands(hand1, hand2)).toEqual(1);
});

it("should correctly compare two similar hands", () => {
  const hand1 = "2H 2D 4C 4D 4S";
  const hand2 = "2S 2C 4C 4D 4S";
  expect(compareHands(hand1, hand2)).toEqual(0);
});
