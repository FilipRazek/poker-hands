import parseHand from "./parseHand";

it("should parse hands correctly", () => {
  expect(parseHand("2C 3S 8S 8D TD")).toEqual([
    { value: 0, suit: "C" },
    { value: 1, suit: "S" },
    { value: 6, suit: "S" },
    { value: 6, suit: "D" },
    { value: 8, suit: "D" },
  ]);
});

it("should throw an error if the hand is invalid", () => {
  expect(() => parseHand("2H 8Y")).toThrow();
});
