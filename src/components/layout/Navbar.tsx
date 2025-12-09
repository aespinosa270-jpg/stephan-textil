'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nuestras Telas", href: "/#telas" },
  { name: "Visión", href: "/vision" },
  { name: "Historia", href: "/historia" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-4 bg-[#1A3C34] md:bg-transparent md:bg-gradient-to-b md:from-[#1A3C34]/95 md:to-transparent">
        
        <Link href="/" className="group relative block z-[101]" onClick={() => setIsOpen(false)}>
          <div className="relative w-14 h-14 md:w-20 md:h-20 transition-transform duration-500 ease-out md:group-hover:scale-110">
            
            <div className="hidden md:block absolute inset-1 bg-[#C5A065] opacity-20 blur-[15px] rounded-full transition-all duration-500 group-hover:opacity-50 group-hover:blur-[25px] group-hover:inset-0"></div>
            
            <Image
              src="/111.png"
              alt="Sello Stephan Textil"
              fill
              className="object-contain relative z-10 md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-500 md:group-hover:drop-shadow-[0_0_25px_rgba(197,160,101,0.8)]"
            />
          </div>
        </Link>

        <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-[#E8E4D0]/80 mt-2">
          {navLinks.slice(1).map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="hover:text-[#C5A065] transition-colors relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A065] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
          <Link href="#contacto">
            <button className="text-[#E8E4D0] border border-[#E8E4D0]/30 px-6 py-2 hover:bg-[#C5A065] hover:text-[#0F1C18] transition-all uppercase">
                Contacto
            </button>
          </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[101] p-2 focus:outline-none"
        >
          <div className="w-8 flex flex-col items-end gap-1.5">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#E8E4D0" } : { rotate: 0, y: 0, backgroundColor: "#C5A065" }}
                className="w-full h-[3px] block rounded-full transition-colors" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#C5A065" }}
                className="w-3/4 h-[3px] block rounded-full transition-colors" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8, width: '100%', backgroundColor: "#E8E4D0" } : { rotate: 0, y: 0, width: '50%', backgroundColor: "#C5A065" }}
                className="w-1/2 h-[3px] block rounded-full transition-colors" 
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
                className="fixed inset-0 bg-[#0F1C18] z-[90] flex flex-col justify-center items-center md:hidden"
            >
                <div className="flex flex-col gap-8 text-center w-full px-10">
                    {navLinks.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-serif text-[#E8E4D0] hover:text-[#C5A065] transition-colors border-b border-[#C5A065]/10 pb-4"
                        >
                            {item.name}
                        </Link>
                    ))}
                    
                    <Link href="#contacto" onClick={() => setIsOpen(false)} className="mt-8">
                        <button className="w-full bg-[#C5A065] text-[#0F1C18] text-xl font-bold py-4 uppercase tracking-widest rounded-sm shadow-lg">
                            Contáctanos
                        </button>
                    </Link>
                </div>

                <div className="absolute bottom-10 text-[#E8E4D0]/30 text-xs tracking-[0.3em] uppercase">
                    Stephan Textil
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}