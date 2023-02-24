import getCardValue from "./getCardValue";

it("should return the corresponding number for non-face cards", () => {
  // Choose a random card between 2 and 9
  const cardValue = Math.floor(Math.random() * 8);
  expect(getCardValue((cardValue + 2).toString())).toBe(cardValue);
});

it("should return 8 for T", () => {
  expect(getCardValue("T")).toBe(8);
});

it("should return 9 for J", () => {
  expect(getCardValue("J")).toBe(9);
});

it("should return 10 for Q", () => {
  expect(getCardValue("Q")).toBe(10);
});

it("should return 11 for K", () => {
  expect(getCardValue("K")).toBe(11);
});

it("should return 12 for A", () => {
  expect(getCardValue("A")).toBe(12);
});

it("should throw an error for invalid cards", () => {
  expect(() => getCardValue("1")).toThrow();
  expect(() => getCardValue("9H")).toThrow();
  expect(() => getCardValue("D")).toThrow();
});
