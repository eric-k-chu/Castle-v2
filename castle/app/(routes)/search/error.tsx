"use client";

import { ErrorDisplay } from "@/_components";

type Props = {
  error: Error & { digest?: string };
};

export function ErrorPage({ error }: Props) {
  return <ErrorDisplay error={error} />;
}
