"use client";

import { useState, useEffect } from "react";

export function usePlayers() {
  const [players, setPlayers] = useState<string[]>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getPlayers() {
      const urlPattern = "https://api.chess.com/pub/titled/";
      const titles = [
        "GM",
        "WGM",
        "IM",
        "WIM",
        "FM",
        "WFM",
        "NM",
        "WNM",
        "CM",
        "WCM",
      ];
      setIsLoading(true);
      try {
        const lolopl: string[] = [];
        for (const title of titles) {
          const res = await fetch(`${urlPattern}${title}`);
          const playerList = await res.json();
          console.log(playerList);
          lolopl.push(...playerList);
        }
        console.log(lolopl);
        setPlayers(lolopl);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) getPlayers();
  }, [isLoading]);

  return { players, isLoading, error };
}
