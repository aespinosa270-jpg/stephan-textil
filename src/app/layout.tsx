import type { Metadata } from "next";
import { Cinzel, Geist } from "next/font/google"; 
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll"; 

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
      <body
        className={`${cinzel.variable} ${geist.variable} antialiased bg-stephan-cream text-stephan-brown`}
      >
        <SmoothScroll />              
        <div className="bg-noise"></div> 
        
        {children}
      </body>
    </html>
  );
}