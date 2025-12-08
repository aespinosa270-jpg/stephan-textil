import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Collections from "@/components/home/Collections"; 
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#1A3C34]">
      <Navbar />
            
      <Hero />
      <Collections /> 
      <Contact />
    </main>
  );
}