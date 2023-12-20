"use client";

import { useEffect, useState } from "react";

export default function useLoadData<T>(func: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        setData(await func());
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) loadData();
  }, [isLoading]);

  return { data, isLoading, error };
}
