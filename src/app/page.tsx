import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections"; 
import Contact from "@/components/home/Contact";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#1A3C34]">
      <Navbar />
      <FloatingWhatsapp />
      
      <Hero />
      <Collections /> 
      <Contact />
    </main>
  );
}