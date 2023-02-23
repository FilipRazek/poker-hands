import parseCard from "./parseCard";

describe("parseCard", () => {
  it("should parse cards correctly", () => {
    expect(parseCard("2H")).toEqual({ value: 2, suit: "H" });
    expect(parseCard("3D")).toEqual({ value: 3, suit: "D" });
    expect(parseCard("TC")).toEqual({ value: 10, suit: "C" });
  });

  it("should throw an error for invalid cards", () => {
    expect(() => parseCard("1H")).toThrow();
    expect(() => parseCard("AG")).toThrow();
    expect(() => parseCard("10D")).toThrow();
  });
});
