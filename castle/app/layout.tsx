import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Castle",
  description: "A player search engine powered by Chess.com's API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
