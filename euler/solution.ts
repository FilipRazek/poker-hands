import compareHands from "../compareHands";
import { readFileSync } from "fs";

const hands = readFileSync("poker_hands.txt", "utf8").split(/\r?\n/);

const parseHand = (
  hand: string
): { player1Cards: string; player2Cards: string } => {
  const cards = hand.split(" ");
  const player1Cards = cards.slice(0, 5).join(" ");
  const player2Cards = cards.slice(5).join(" ");
  return { player1Cards, player2Cards };
};

const totalPlayer1Wins = hands.reduce((total, hand) => {
  if (!hand) return total;
  const { player1Cards, player2Cards } = parseHand(hand);
  const result = compareHands(player1Cards, player2Cards);
  return total + (result === 1 ? 1 : 0);
}, 0);

// eslint-disable-next-line no-console
console.log("Player 1 wins", totalPlayer1Wins, "times.");
