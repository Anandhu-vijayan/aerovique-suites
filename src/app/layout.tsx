import type { Metadata } from "next";
import "./globals.css";
import "../styles/site.css";

export const metadata: Metadata = {
  title: "Aerovique Suites",
  description:
    "A boutique stay near Cochin International Airport with inspiring runway views.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
