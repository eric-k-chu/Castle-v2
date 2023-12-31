import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Sidebar } from "@/_components";

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
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
