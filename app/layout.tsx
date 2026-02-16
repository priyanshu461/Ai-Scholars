import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ai Scholars ERP",
  description:
    "Scalable multi-page ERP built with Next.js including multi-role panels, auth, and role-aware AI assistant."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
