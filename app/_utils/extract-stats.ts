import { Stats } from "@/_lib/types";

function getPct(wins: number, losses: number, draws: number): string {
  const pct = ((2 * wins + draws) / (2 * (wins + losses + draws))) * 100;
  return pct.toFixed(2);
}

export function extractStats(stats: Stats): {
  type: string;
  wins: number;
  losses: number;
  draws: number;
  pct: string;
}[] {
  const data = [];

  const {
    chess960_daily,
    chess_daily,
    chess_rapid,
    chess_blitz,
    chess_bullet,
  } = stats;

  if (chess960_daily) {
    const { win, loss, draw } = chess960_daily.record;
    data.push({
      type: "Daily 960",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }
  if (chess_daily) {
    const { win, loss, draw } = chess_daily.record;
    data.push({
      type: "Daily Chess",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }
  if (chess_rapid) {
    const { win, loss, draw } = chess_rapid.record;
    data.push({
      type: "Rapid",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }

  if (chess_blitz) {
    const { win, loss, draw } = chess_blitz.record;
    data.push({
      type: "Blitz",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }

  if (chess_bullet) {
    const { win, loss, draw } = chess_bullet.record;
    data.push({
      type: "Bullet",
      wins: win,
      losses: loss,
      draws: draw,
      pct: getPct(win, loss, draw),
    });
  }

  data.sort((a, b) => {
    const aTotal = a.wins + a.losses + a.draws;
    const bTotal = b.wins + b.losses + b.draws;
    return bTotal - aTotal;
  });

  return data;
}
