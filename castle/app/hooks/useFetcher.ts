"use client";

import { Fetcher } from "@/lib/types";
import { useEffect, useState } from "react";

export function useFetcher<T>(
  func: (arg?: any) => Promise<T>,
  arg?: any,
): Fetcher<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getDataFromApi() {
      setIsLoading(true);
      try {
        const res = await func(arg);
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) getDataFromApi();
  }, [isLoading, func, arg]);

  return { data, isLoading, error };
}
