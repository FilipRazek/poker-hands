import parseHand from "./parseHand";

describe("parseHand", () => {
  it("should parse hands correctly", () => {
    expect(parseHand("2C 3S 8S 8D TD")).toEqual([
      { value: 2, suit: "C" },
      { value: 3, suit: "S" },
      { value: 8, suit: "S" },
      { value: 8, suit: "D" },
      { value: 10, suit: "D" },
    ]);
  });

  it("should throw an error if the hand is invalid", () => {
    expect(() => parseHand("2H 8Y")).toThrow();
  });
});
