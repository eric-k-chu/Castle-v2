"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const search = useSearchParams();
  return (
    <div className="flex min-h-screen flex-col items-center bg-hero bg-cover bg-top bg-no-repeat">
      <h1>{search.get("q")}</h1>
    </div>
  );
}
