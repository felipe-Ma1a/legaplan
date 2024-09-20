import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.scss";

import Header from "@/components/Header";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Dev Júnior - Legaplan",
  description: "Teste técnico para a vaga de dev júnior da Legaplan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={interTight.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
