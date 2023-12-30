export function getGameResultColor(
  username: string,
  pgn: string,
):
  | "border-l-green-400"
  | "border-l-red-400"
  | "border-l-gray-400"
  | "border-l-black" {
  const resultMatch = pgn.match(/\[Result "(.*?)"\]/);
  const blackMatch = pgn.match(/\[Black "(.*?)"\]/);
  const whiteMatch = pgn.match(/\[White "(.*?)"\]/);

  if (resultMatch && blackMatch && whiteMatch) {
    const result = resultMatch[1];
    const black = blackMatch[1].toLocaleLowerCase();
    const white = whiteMatch[1].toLocaleLowerCase();

    if (result === "1-0" && username.toLocaleLowerCase() === white)
      return "border-l-green-400";
    if (result === "0-1" && username.toLocaleLowerCase() === black)
      return "border-l-green-400";
    if (result === "1/2-1/2") return "border-l-gray-400";

    return "border-l-red-400";
  }

  return "border-l-black";
}
