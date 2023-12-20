"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const search = useSearchParams();
  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
}
