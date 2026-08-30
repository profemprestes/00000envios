import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Anton, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const geistMono = Geist_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0950F6",
};

export const metadata: Metadata = {
  title: "Envíos DosRuedas · Mensajería y Logística Mar del Plata",
  description: "Servicio líder de cadetería, e-commerce, logística express y última milla en Mar del Plata.",
  keywords: ["envíos", "mensajería", "logística", "mar del plata", "delivery", "e-commerce"],
  authors: [{ name: "Envíos DosRuedas" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${anton.variable} ${outfit.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-brand-blue text-brand-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
