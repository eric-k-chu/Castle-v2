import { Stats } from "@/_lib/types";

export function extractStats(
  stats: Stats,
): { type: string; wins: number; losses: number; draws: number }[] {
  const data = [];

  const {
    chess960_daily,
    chess_blitz,
    chess_bullet,
    chess_daily,
    chess_rapid,
  } = stats;

  if (chess960_daily) {
    data.push({
      type: "Daily 960",
      wins: chess960_daily.record.win,
      losses: chess960_daily.record.loss,
      draws: chess960_daily.record.draw,
    });
  }
  if (chess_blitz) {
    data.push({
      type: "Blitz",
      wins: chess_blitz.record.win,
      losses: chess_blitz.record.loss,
      draws: chess_blitz.record.draw,
    });
  }
  if (chess_bullet) {
    data.push({
      type: "Bullet",
      wins: chess_bullet.record.win,
      losses: chess_bullet.record.loss,
      draws: chess_bullet.record.draw,
    });
  }
  if (chess_daily) {
    data.push({
      type: "Daily Chess",
      wins: chess_daily.record.win,
      losses: chess_daily.record.loss,
      draws: chess_daily.record.draw,
    });
  }
  if (chess_rapid) {
    data.push({
      type: "Rapid",
      wins: chess_rapid.record.win,
      losses: chess_rapid.record.loss,
      draws: chess_rapid.record.draw,
    });
  }

  data.sort((a, b) => {
    const aTotal = a.wins + a.losses + a.draws;
    const bTotal = b.wins + b.losses + b.draws;
    return bTotal - aTotal;
  });

  return data;
}
