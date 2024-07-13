import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import Providers from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { WebVitals } from "./_components/web-vitals";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"], adjustFontFallback: false });

// const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "x-home",
  description: "xxx home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <WebVitals></WebVitals>
        <SpeedInsights></SpeedInsights>
        <Analytics></Analytics>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
