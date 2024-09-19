import type { Metadata } from "next";
import "./globals.scss";

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
      <body>{children}</body>
    </html>
  );
}
