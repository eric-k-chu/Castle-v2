import { ChessImgBackground } from "@/_components";

export default function DailyPuzzleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChessImgBackground>{children}</ChessImgBackground>;
}
