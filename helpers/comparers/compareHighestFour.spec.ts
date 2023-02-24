import compareHighestFour from "./compareHighestFour";

const fourAcesLower = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4];
const fourKings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0];
const fourAcesHigher = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4];
it("should correctly compare the highest four of a kind", () => {
  expect(
    compareHighestFour({ count: fourAcesHigher }, { count: fourKings })
  ).toEqual(1);
});

it("should return -1 if the second hand has the highest fours", () => {
  expect(
    compareHighestFour({ count: fourKings }, { count: fourAcesLower })
  ).toEqual(-1);
});

it("should correctly compare based on the kicker", () => {
  expect(
    compareHighestFour({ count: fourAcesHigher }, { count: fourAcesLower })
  ).toEqual(1);
});

it("should return 0 if the hands are equal", () => {
  expect(
    compareHighestFour({ count: fourKings }, { count: fourKings })
  ).toEqual(0);
});
