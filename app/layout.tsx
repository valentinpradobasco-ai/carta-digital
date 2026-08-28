import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { restaurantConfig } from "@/config/restaurant.config";
import { themeToCssVars } from "@/lib/theme";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${restaurantConfig.name} | Carta Digital`,
  description: restaurantConfig.description,
  openGraph: {
    title: restaurantConfig.name,
    description: restaurantConfig.description,
    images: [restaurantConfig.heroImage],
  },
};

export const viewport: Viewport = {
  themeColor: restaurantConfig.theme.background,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = themeToCssVars(restaurantConfig.theme);

  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable}`}
      style={cssVars as React.CSSProperties}
    >
      <body className="bg-background text-text font-body antialiased">{children}</body>
    </html>
  );
}
