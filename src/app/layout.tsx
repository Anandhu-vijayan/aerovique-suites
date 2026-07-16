import type { Metadata } from "next";
import "./globals.css";
import "../styles/site.css";

export const metadata: Metadata = {
  title: "Aerovique Suites",
  description:
    "A boutique stay near Cochin International Airport with inspiring runway views.",
  icons: {
    icon: [{ url: "/images/aerovique-logo.webp", type: "image/webp" }],
    shortcut: "/images/aerovique-logo.webp",
    apple: "/images/aerovique-logo.webp",
  },
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
