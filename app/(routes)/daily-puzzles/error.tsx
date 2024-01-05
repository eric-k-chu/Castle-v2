"use client";

import { ErrorDisplay } from "@/_components";

type Props = {
  error: Error & { digest?: string };
};

export default function ErrorPage({ error }: Props) {
  return <ErrorDisplay error={error} />;
}
