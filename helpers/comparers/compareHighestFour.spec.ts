import compareHighestFour from "./compareHighestFour";

describe("compareHighestFour", () => {
  const fourAcesLower = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4];
  const fourKings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0];
  const fourAcesHigher = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4];
  it("should correctly compare the highest four of a kind", () => {
    expect(compareHighestFour(fourAcesHigher, fourKings)).toEqual(1);
  });

  it("should return -1 if the second hand has the highest fours", () => {
    expect(compareHighestFour(fourKings, fourAcesLower)).toEqual(-1);
  });

  it("should correctly compare based on the kicker", () => {
    expect(compareHighestFour(fourAcesHigher, fourAcesLower)).toEqual(1);
  });

  it("should return 0 if the hands are equal", () => {
    expect(compareHighestFour(fourKings, fourKings)).toEqual(0);
  });
});
