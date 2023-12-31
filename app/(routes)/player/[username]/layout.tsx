import { PageLayout } from "@/_components";

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout radial>{children}</PageLayout>;
}
