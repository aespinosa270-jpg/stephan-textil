'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Nuestras Telas", href: "/#telas" },
  { name: "Visión", href: "/vision" },
  { name: "Historia", href: "/historia" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-[#1A3C34]/95 to-transparent backdrop-blur-[2px]">
      
      <Link href="/" className="group relative block z-50">
        <div className="relative w-14 h-14 md:w-20 md:h-20 transition-transform duration-500 ease-out group-hover:scale-110">
          
          <div className="absolute inset-1 bg-[#C5A065] opacity-20 blur-[15px] rounded-full transition-all duration-500 group-hover:opacity-50 group-hover:blur-[25px] group-hover:inset-0"></div>
          
          <div className="absolute inset-2 bg-[#E8E4D0] opacity-0 blur-[10px] rounded-full transition-opacity duration-500 group-hover:opacity-20"></div>

          <Image
            src="/111.png"
            alt="Sello Stephan Textil"
            fill
            className="object-contain relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(197,160,101,0.8)]"
          />
        </div>
      </Link>

      <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-[#E8E4D0]/80 mt-2">
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="hover:text-[#C5A065] transition-colors relative group py-1"
          >
            {item.name}
            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A065] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        ))}
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 text-[#C5A065] p-2 focus:outline-none"
      >
        <div className="w-8 flex flex-col items-end gap-1.5">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-[2px] bg-[#C5A065] block" 
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-3/4 h-[2px] bg-[#C5A065] block" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '50%' }}
              className="w-1/2 h-[2px] bg-[#C5A065] block" 
            />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-[#0F1C18]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
                {navLinks.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-serif text-[#E8E4D0] hover:text-[#C5A065] transition-colors tracking-widest uppercase"
                    >
                        {item.name}
                    </Link>
                ))}
                
                <div className="w-16 h-[1px] bg-[#C5A065]/50 my-8"></div>
                
                <Link href="#contacto" onClick={() => setIsOpen(false)}>
                    <button className="text-[#0F1C18] bg-[#C5A065] text-sm font-bold tracking-widest px-8 py-4 uppercase">
                        Contáctanos
                    </button>
                </Link>
            </motion.div>
        )}
      </AnimatePresence>

      <Link href="#contacto" className="hidden md:block">
        <button className="text-[#E8E4D0] text-xs font-bold tracking-widest border border-[#E8E4D0]/30 px-6 py-3 hover:bg-[#C5A065] hover:text-[#0F1C18] hover:border-[#C5A065] transition-all duration-300 uppercase backdrop-blur-sm">
          Contacto
        </button>
      </Link>
    </nav>
  );
}