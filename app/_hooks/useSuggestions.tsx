"use client";

import { ChessApi } from "@/_chessapi";
import { TitledPlayer } from "@/_lib";
import { getPlayerSuggestions } from "@/_utils";
import { useEffect, useState } from "react";

export function useSuggestions(isOpen: boolean) {
  const [suggestions, setSuggestions] = useState<TitledPlayer[]>();

  useEffect(() => {
    async function getSuggestions() {
      if (suggestions) return;

      const [data, err] = await ChessApi.getData(() => getPlayerSuggestions());
      if (err !== null || !data) return;
      setSuggestions(data);
    }
    if (isOpen === true) getSuggestions();
  }, [isOpen]);

  return suggestions;
}
