"use client";

import { ChessApiData } from "@/_lib/types";
import { useEffect, useState } from "react";

export function useChessApi<T>(
  func: (...args: any[]) => Promise<T>,
  ...args: any[]
): ChessApiData<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getDataFromApi() {
      setIsLoading(true);
      try {
        const res = await func(...args);
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) getDataFromApi();
  }, [isLoading]);

  return { data, isLoading, error };
}
