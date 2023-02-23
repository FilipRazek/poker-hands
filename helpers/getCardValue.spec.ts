import getCardValue from "./getCardValue";

describe("getCardValue", () => {
  it("should return the corresponding number for non-face cards", () => {
    // Choose a random card between 2 and 9
    const card = Math.floor(Math.random() * 8 + 2);
    expect(getCardValue(card.toString())).toBe(card);
  });

  it("should return 10 for T", () => {
    expect(getCardValue("T")).toBe(10);
  });

  it("should return 11 for J", () => {
    expect(getCardValue("J")).toBe(11);
  });

  it("should return 12 for Q", () => {
    expect(getCardValue("Q")).toBe(12);
  });

  it("should return 13 for K", () => {
    expect(getCardValue("K")).toBe(13);
  });

  it("should return 14 for A", () => {
    expect(getCardValue("A")).toBe(14);
  });

  it("should throw an error for invalid cards", () => {
    expect(() => getCardValue("1")).toThrow();
    expect(() => getCardValue("9H")).toThrow();
    expect(() => getCardValue("D")).toThrow();
  });
});
