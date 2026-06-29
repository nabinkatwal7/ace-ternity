import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inclusive Enterprise — Empowering Underrepresented Businesses",
  description:
    "A platform connecting, funding, and amplifying disabled-owned, minority-owned, and women-owned businesses across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
