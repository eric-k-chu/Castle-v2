"use client";

import { getPages } from "@/_utils";
import { useMemo, useState } from "react";

export function usePagination<T>(
  arr: T[],
  pageSize = 10,
): [T[][], number, (n: number) => void, (t: "next" | "prev") => void] {
  const [page, setPage] = useState(0);
  const paginatedArr = useMemo(() => getPages(arr, pageSize), [arr, pageSize]);

  function nextOrPrevPage(type: "next" | "prev") {
    if (type === "next") setPage((page + 1) % paginatedArr.length);
    else setPage((page - 1 + paginatedArr.length) % paginatedArr.length);
  }

  return [paginatedArr, page, setPage, nextOrPrevPage];
}
