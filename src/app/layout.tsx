import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskilling, engineered like a curriculum",
  description:
    "Accredian Enterprise partners with organizations to design, deliver, and measure workforce upskilling programs in AI, data, product, and leadership — co-built with IIT and IIM faculty.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
