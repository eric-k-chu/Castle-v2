import { PageLayout, Loading } from "@/_components";
import { Suspense } from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout backgroundType="hero">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </PageLayout>
  );
}
