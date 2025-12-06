'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react'; 

export default function Hero() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []); 

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-32 md:pt-24 overflow-hidden bg-[#1A3C34]">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `
                 repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(197, 160, 101, 0.05) 2px, rgba(197, 160, 101, 0.05) 4px),
                 repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(139, 58, 58, 0.05) 2px, rgba(139, 58, 58, 0.05) 4px)
               `
             }}>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_top,#C5A065_0%,transparent_70%)] opacity-20 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0F1C18_100%)] mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-[#C5A065] rounded-full opacity-40 blur-[1px]"
            style={{ left: p.x, top: p.y }}
            animate={{ y: [0, -100, 0], x: [0, 50, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>


      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[650px] aspect-square flex items-center justify-center p-6"
      >
        <div className="absolute inset-0 bg-[#C5A065] opacity-10 blur-[80px] rounded-full scale-90 animate-pulse-slow"></div>
        
        <Image
          src="/osaso.png" 
          alt="Oso artesano tejiendo"
          fill
          className="object-contain drop-shadow-[0_30px_50px_rgba(15,28,24,0.8)]"
          priority
        />
      </motion.div>


      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-30 text-center -mt-16 md:-mt-24 space-y-8 flex flex-col items-center"
      >
        <h1 className="font-serif text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E8E4D0] to-[#C5A065] tracking-wider leading-none drop-shadow-2xl">
          STEPHAN <span className="text-[#8B3A3A]">TEXTIL</span>
        </h1>

        <div className="inline-flex items-center gap-6 text-[#C5A065]/90 text-xs md:text-sm tracking-[0.4em] uppercase font-bold py-3 px-8 border-t border-b border-[#C5A065]/20 backdrop-blur-sm bg-[#0F1C18]/30">
          <span>Calidad y excelencia en telas</span>
          <span className="text-[#8B3A3A]">•</span>
          <span>Est. 2020</span>
        </div>

        <motion.a
          href="https://wa.me/525624671422?text=Hola,%20me%20gustar%C3%ADa%20conocer%20su%20cat%C3%A1logo%20de%20telas."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 px-8 py-4 mt-4 border border-[#C5A065] text-[#C5A065] hover:bg-[#C5A065] hover:text-[#0F1C18] transition-all duration-500 rounded-sm backdrop-blur-md"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" height="20" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="group-hover:scale-110 transition-transform duration-300"
          >
             <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          
          <span className="font-serif text-sm tracking-[0.2em] font-bold uppercase">
            Cotizar Telas
          </span>
        </motion.a>

      </motion.div>

    </section>
  );
}