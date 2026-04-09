import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge | AI Transformation for Manufacturing",
  description: "Forge delivers AI transformation for industrial manufacturers. We turn operational data into measurable competitive advantage — predictive maintenance, yield optimization, and workforce AI built for the plant floor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
