import type { Metadata } from "next";
import { bebas } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcommerceDaDio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  );
}
