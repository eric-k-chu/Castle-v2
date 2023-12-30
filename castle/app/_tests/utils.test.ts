import { getGameResultColor } from "@/_utils";

describe("getGameResultColor", () => {
  it("win", () => {
    const pgn = `[Event "Live Chess"]\n[Site "Chess.com"]\n[Date "2023.12.02"]\n[Round "-"]\n[White "erik"]\n[Black "Lubbipapi"]\n[Result "1-0"]\n`;
    const result = getGameResultColor("erik", pgn);
    expect(result).toBe("border-l-green-400");
  });

  it("username is capitalized", () => {
    const pgn = `[Event "Live Chess"]\n[Site "Chess.com"]\n[Date "2023.12.02"]\n[Round "-"]\n[White "erik"]\n[Black "Lubbipapi"]\n[Result "1-0"]\n`;
    const result = getGameResultColor("Erik", pgn);
    expect(result).toBe("border-l-green-400");
  });

  it("lose", () => {
    const pgn = `[Event "Live Chess"]\n[Site "Chess.com"]\n[Date "2023.12.02"]\n[Round "-"]\n[White "erik"]\n[Black "Lubbipapi"]\n[Result "0-1"]\n`;
    const result = getGameResultColor("erik", pgn);
    expect(result).toBe("border-l-red-400");
  });

  it("draw", () => {
    const pgn = `[Event "Live Chess"]\n[Site "Chess.com"]\n[Date "2023.12.02"]\n[Round "-"]\n[White "erik"]\n[Black "Lubbipapi"]\n[Result "1/2-1/2"]\n`;
    const result = getGameResultColor("erik", pgn);
    expect(result).toBe("border-l-gray-400");
  });

  it("unknown", () => {
    const pgn = `[Event "Live Chess"]\n[Site "Chess.com"]\n[Date "2023.12.02"]\n[Round "-"]\n[White "erik"]\n[Black "Lubbipapi"]\n[Resul "1-0"]\n`;
    const result = getGameResultColor("erik", pgn);
    expect(result).toBe("border-l-black");
  });
});
