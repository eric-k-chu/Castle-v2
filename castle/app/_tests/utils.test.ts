import { getDateFromUtc, getGameResultColor, getPages } from "@/_utils";

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

describe("getDateFromUtc", () => {
  it("January", () => {
    expect(getDateFromUtc(1673854677)).toEqual("Jan 15, 2023");
  });
  it("February", () => {
    expect(getDateFromUtc(1676533077)).toEqual("Feb 15, 2023");
  });
  it("March", () => {
    expect(getDateFromUtc(1678948677)).toEqual("Mar 15, 2023");
  });
  it("April", () => {
    expect(getDateFromUtc(1681627077)).toEqual("Apr 15, 2023");
  });
  it("May", () => {
    expect(getDateFromUtc(1684219077)).toEqual("May 15, 2023");
  });
  it("June", () => {
    expect(getDateFromUtc(1686897477)).toEqual("Jun 15, 2023");
  });
  it("July", () => {
    expect(getDateFromUtc(1689489477)).toEqual("Jul 15, 2023");
  });
  it("August", () => {
    expect(getDateFromUtc(1692167877)).toEqual("Aug 15, 2023");
  });
  it("September", () => {
    expect(getDateFromUtc(1694846277)).toEqual("Sep 15, 2023");
  });
  it("Ocotober", () => {
    expect(getDateFromUtc(1697438277)).toEqual("Oct 15, 2023");
  });
  it("November", () => {
    expect(getDateFromUtc(1700120277)).toEqual("Nov 15, 2023");
  });
  it("December", () => {
    expect(getDateFromUtc(1702712277)).toEqual("Dec 15, 2023");
  });
});

describe("getPages", () => {
  it("default chunks", () => {
    expect(
      getPages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
    ).toEqual([
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16],
    ]);
  });

  it("array size is less than chunk size", () => {
    expect(getPages([1, 2, 3, 4, 5])).toEqual([[1, 2, 3, 4, 5]]);
  });

  it("empty array", () => {
    expect(getPages([])).toEqual([]);
  });
});
