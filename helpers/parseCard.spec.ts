import parseCard from "./parseCard";

it("should parse cards correctly", () => {
  expect(parseCard("2H")).toEqual({ value: 0, suit: "H" });
  expect(parseCard("3D")).toEqual({ value: 1, suit: "D" });
  expect(parseCard("TC")).toEqual({ value: 8, suit: "C" });
});

it("should throw an error for invalid cards", () => {
  expect(() => parseCard("1H")).toThrow();
  expect(() => parseCard("AG")).toThrow();
  expect(() => parseCard("10D")).toThrow();
});
