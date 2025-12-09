'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (window.innerWidth < 768) {
          document.body.style.position = 'fixed';
          document.body.style.width = '100%';
      }
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[999] flex justify-between items-center px-6 py-6 transition-all duration-300 bg-[#1A3C34] md:bg-transparent md:bg-gradient-to-b md:from-[#1A3C34]/90 md:to-transparent">
        
        <Link href="/" className="group relative block z-[1001]" onClick={() => setIsOpen(false)}>
          <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 ease-out md:group-hover:scale-105">
            <div className="hidden md:block absolute inset-1 bg-[#C5A065] opacity-20 blur-[15px] rounded-full transition-all duration-500 group-hover:opacity-50 group-hover:blur-[25px] group-hover:inset-0"></div>
            
            <Image
              src="/111.png"
              alt="Sello Stephan Textil"
              fill
              className="object-contain relative z-10 md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-500 md:group-hover:drop-shadow-[0_0_25px_rgba(197,160,101,0.8)]"
            />
          </div>
        </Link>

        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12">
            <Link href="/#telas" className="text-xs font-bold tracking-[0.25em] uppercase text-[#E8E4D0]/80 hover:text-[#C5A065] transition-colors relative group py-2">
                Nuestras Telas
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A065] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
            
            <div className="w-1 h-1 rounded-full bg-[#C5A065]/30"></div>

            <Link href="/vision" className="text-xs font-bold tracking-[0.25em] uppercase text-[#E8E4D0]/80 hover:text-[#C5A065] transition-colors relative group py-2">
                Visión
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A065] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>

            <div className="w-1 h-1 rounded-full bg-[#C5A065]/30"></div>

            <Link href="/historia" className="text-xs font-bold tracking-[0.25em] uppercase text-[#E8E4D0]/80 hover:text-[#C5A065] transition-colors relative group py-2">
                Historia
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A065] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </Link>
        </div>

        <div className="hidden md:block">
            <Link href="#contacto">
                <button className="text-[#E8E4D0] text-[10px] font-bold tracking-[0.25em] border border-[#E8E4D0]/20 px-8 py-3 hover:bg-[#C5A065] hover:text-[#0F1C18] hover:border-[#C5A065] transition-all duration-500 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(197,160,101,0.3)] rounded-sm">
                    Contacto
                </button>
            </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[1001] p-2 focus:outline-none group"
        >
          <div className="w-8 flex flex-col items-end gap-1.5">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#E8E4D0" } : { rotate: 0, y: 0, backgroundColor: "#C5A065" }}
                className="w-full h-[2px] block rounded-full transition-colors group-hover:bg-[#E8E4D0]" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#C5A065" }}
                className="w-3/4 h-[2px] block rounded-full transition-colors group-hover:w-full group-hover:bg-[#E8E4D0]" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8, width: '100%', backgroundColor: "#E8E4D0" } : { rotate: 0, y: 0, width: '50%', backgroundColor: "#C5A065" }}
                className="w-1/2 h-[2px] block rounded-full transition-colors group-hover:w-full group-hover:bg-[#E8E4D0]" 
              />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed inset-0 bg-[#0F1C18] z-[1000] flex flex-col justify-center items-center md:hidden h-[100dvh] w-screen"
            >
                <div className="flex flex-col gap-10 text-center w-full px-10">
                    
                    <Link href="/" onClick={() => setIsOpen(false)} className="border-b border-[#C5A065]/10 pb-5 w-full">
                        <span className="text-3xl font-serif text-[#E8E4D0] hover:text-[#C5A065] transition-colors">Inicio</span>
                    </Link>

                    <Link href="/#telas" onClick={() => setIsOpen(false)} className="border-b border-[#C5A065]/10 pb-5 w-full">
                        <span className="text-3xl font-serif text-[#E8E4D0] hover:text-[#C5A065] transition-colors">Catálogo</span>
                    </Link>

                    <Link href="/vision" onClick={() => setIsOpen(false)} className="border-b border-[#C5A065]/10 pb-5 w-full">
                        <span className="text-3xl font-serif text-[#E8E4D0] hover:text-[#C5A065] transition-colors">Visión</span>
                    </Link>

                    <Link href="/historia" onClick={() => setIsOpen(false)} className="border-b border-[#C5A065]/10 pb-5 w-full">
                        <span className="text-3xl font-serif text-[#E8E4D0] hover:text-[#C5A065] transition-colors">Historia</span>
                    </Link>
                    
                    <Link href="#contacto" onClick={() => setIsOpen(false)} className="mt-8 w-full">
                        <button className="w-full bg-[#C5A065] text-[#0F1C18] text-xl font-bold py-5 uppercase tracking-widest rounded-sm shadow-2xl active:scale-95 transition-transform border border-[#C5A065]">
                            Contáctanos
                        </button>
                    </Link>
                </div>

                <div className="absolute bottom-8 text-[#E8E4D0]/30 text-[10px] tracking-[0.4em] uppercase">
                    Stephan Textil • CDMX
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}