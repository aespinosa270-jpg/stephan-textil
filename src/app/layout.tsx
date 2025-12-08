import type { Metadata } from "next";
import { Cinzel, Geist } from "next/font/google"; 
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import SmartBot from "@/components/ui/SmartBot";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Stephan Textil",
    default: "Stephan Textil | Master Weavers",
  },
  description: "Textiles deportivos de alta gama con herencia artesanal. Tecnología Dry-Fit, Lycra y Malla con calidad de exportación. Venta por rollo y metro en CDMX.",
  keywords: ["telas deportivas", "dry-fit", "lycra", "textil mexico", "sublimacion", "stephan textil"],
  openGraph: {
    title: "Stephan Textil | Master Weavers",
    description: "Calidad y Excelencia en Telas Deportivas. Visita nuestro catálogo exclusivo.",
    url: "https://stephan-textil.vercel.app", 
    siteName: "Stephan Textil",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Stephan Textil - Heritage & Quality",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

// 3. Layout Principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cinzel.variable} ${geist.variable} antialiased bg-stephan-cream text-stephan-brown`}
      >
        <SmoothScroll />
        <div className="bg-noise"></div> 
        
        {children}

        <SmartBot />
      </body>
    </html>
  );
}