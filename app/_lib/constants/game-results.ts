import { GameResultCode } from "../types";

export const GAME_RESULT_CODES: Record<GameResultCode, string> = {
  win: "Win",
  checkmated: "Checkmated",
  agreed: "Draw agreed",
  repetition: "Draw by repetition",
  timeout: "Timeout",
  resigned: "Resigned",
  stalemate: "Stalemate",
  lose: "Lose",
  insufficient: "Insufficient material",
  "50move": "Draw by 50-move rule",
  abandoned: "Abandoned",
  kingofthehill: "Opponent king reached the hill",
  threecheck: "Checked for the 3rd time",
  timevsinsufficient: "Draw by timeout vs insufficient material",
  bughousepartnerlose: "Bughouse partner lost",
};
