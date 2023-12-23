"use client";

import { getPlayerData } from "@/_chess_api/_player_data";
import { useChessApi } from "@/_hooks/useChessApi";
import { useSearchParams } from "next/navigation";

export function PlayerInfo() {
  const search = useSearchParams().get("q");

  const { data, isLoading, error } = useChessApi(
    getPlayerData,
    `player/${search}`,
  );

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
