import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ai Scholars ERP",
  description: "Next.js based lightweight, fully featured ERP starter"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
