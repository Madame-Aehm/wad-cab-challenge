import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAB WAD Challenge",
  description: "Solve the challenge first to win!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", textAlign: "center", width: "90vw", justifyContent: "center", paddingBottom: "1rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
