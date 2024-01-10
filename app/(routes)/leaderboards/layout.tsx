import { ChessImgBackground } from "@/_components";

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChessImgBackground>{children}</ChessImgBackground>;
}
