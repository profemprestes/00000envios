import type { Metadata } from "next";
import { Bebas_Neue, Anton, Outfit } from "next/font/google";
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
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Envíos DosRuedas · Mensajería y Logística Mar del Plata",
  description: "Servicio líder de cadetería, e-commerce, logística express y última milla en Mar del Plata.",
  keywords: ["envíos", "mensajería", "logística", "mar del plata", "delivery", "e-commerce"],
  authors: [{ name: "Envíos DosRuedas" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${anton.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
      </head>
      <body className="bg-brand-blue text-brand-white antialiased">
        {children}
      </body>
    </html>
  );
}
