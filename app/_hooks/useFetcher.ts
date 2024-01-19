"use client";

import { Fetcher } from "@/_lib";
import { useEffect, useState } from "react";

export function useFetcher<T>(func: () => Promise<T>): Fetcher<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getDataFromApi() {
      setIsLoading(true);
      try {
        const res = await func();
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) getDataFromApi();
  }, [isLoading, func]);

  return [data, isLoading, error];
}
