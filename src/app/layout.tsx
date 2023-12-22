import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Veronezi & Garcia",
  description: "V&G - Assessoria Jurídica",
  keywords: "vga",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
