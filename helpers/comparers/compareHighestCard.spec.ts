import compareHighestCard from "./compareHighestCard";
import { CardCount } from "../types";

describe("compareHighestCard", () => {
  const handWithAce: CardCount = [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
  const handWithKing: CardCount = [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0];
  it("should correctly compare the highest card in two hands", () => {
    expect(compareHighestCard(handWithAce, handWithKing)).toEqual(1);
  });

  it("should return -1 if the second hand has the highest card", () => {
    expect(compareHighestCard(handWithKing, handWithAce)).toEqual(-1);
  });

  it("should return 0 if the hands are equal", () => {
    expect(compareHighestCard(handWithAce, handWithAce)).toEqual(0);
  });
});
