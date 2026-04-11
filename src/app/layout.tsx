import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge | AI Transformation for Manufacturing",
  description: "Forge helps manufacturers reduce downtime, scrap, and energy waste through premium AI transformation programs built for real plants and multi-site operations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
