import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Jost } from "next/font/google";
import { restaurantConfig } from "@/config/restaurant.config";
import { themeToCssVars } from "@/lib/theme";
import "./globals.css";

// Tipografía de marca de Serrano Lomitería, auto-hospedada (sin llamadas
// externas). Para reutilizar esta plantilla con otro cliente que no tenga
// esta fuente, reemplazar el archivo en app/fonts/ o volver a next/font/google.
const otterco = localFont({
  src: "./fonts/Otterco-ExtraBold.otf",
  variable: "--font-display",
  weight: "800",
  display: "swap",
});

// Reemplazo libre de Westmount Extra Light (fuente de pago): Jost es una
// geométrica de espíritu similar, con el mismo peso extra-light disponible
// gratis en Google Fonts.
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
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
      className={`${otterco.variable} ${jost.variable}`}
      style={cssVars as React.CSSProperties}
    >
      <body className="bg-background text-text font-body font-light tracking-[0.01em] antialiased">
        {children}
      </body>
    </html>
  );
}
