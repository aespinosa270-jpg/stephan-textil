import type { Metadata } from "next";
// Importamos las fuentes de Google Fonts
import { Cinzel, Geist } from "next/font/google"; 
import "./globals.css";

// Configuración de la fuente elegante (Títulos)
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

// Configuración de la fuente moderna (Textos largos)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stephan Textil | Master Weavers",
  description: "Textiles de alta gama y herencia artesanal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Aquí inyectamos las variables de las fuentes y el color de fondo base */}
      <body
        className={`${cinzel.variable} ${geist.variable} antialiased bg-stephan-cream text-stephan-brown`}
      >
        {children}
      </body>
    </html>
  );
}