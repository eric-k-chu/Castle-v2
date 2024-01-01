import { PageLayout } from "@/_components";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}