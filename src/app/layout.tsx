import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Spotify",
  description: "listen to music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    </html>
  );
}
