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
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-[#1A3C34]/95 to-transparent backdrop-blur-[2px]">
        
        <Link href="/" className="group relative block z-50">
          <div className="relative w-14 h-14 md:w-20 md:h-20 transition-transform duration-500 ease-out group-hover:scale-110">
            <div className="absolute inset-1 bg-[#C5A065] opacity-20 blur-[15px] rounded-full transition-all duration-500 group-hover:opacity-50 group-hover:blur-[25px] group-hover:inset-0"></div>
            <Image
              src="/111.png"
              alt="Sello Stephan Textil"
              fill
              className="object-contain relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(197,160,101,0.8)]"
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
            <button className="text-[#E8E4D0] border border-[#E8E4D0]/30 px-6 py-2 hover:bg-[#C5A065] hover:text-[#0F1C18] hover:border-[#C5A065] transition-all duration-300 uppercase backdrop-blur-sm">
                Contacto
            </button>
          </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[60] text-[#C5A065] p-2 focus:outline-none relative"
          aria-label="Abrir menú"
        >
          <div className="w-8 flex flex-col items-end gap-1.5">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-[2px] bg-[#C5A065] block transition-colors" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-3/4 h-[2px] bg-[#C5A065] block transition-colors" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '50%' }}
                className="w-1/2 h-[2px] bg-[#C5A065] block transition-colors" 
              />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed inset-0 bg-[#0F1C18] z-[55] flex flex-col items-center justify-center md:hidden"
            >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C5A065] opacity-5 blur-[100px] rounded-full"></div>

                <div className="flex flex-col items-center space-y-8 relative z-10 w-full px-10">
                    {navLinks.map((item, i) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + (i * 0.1) }}
                          className="w-full text-center"
                        >
                            <Link 
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block font-serif text-3xl text-[#E8E4D0] hover:text-[#C5A065] transition-colors py-2 border-b border-[#C5A065]/10 w-full"
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                    
                    <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5 }}
                       className="pt-8"
                    >
                        <Link href="#contacto" onClick={() => setIsOpen(false)}>
                            <button className="text-[#0F1C18] bg-[#C5A065] text-lg font-bold tracking-[0.2em] px-10 py-4 uppercase shadow-[0_0_20px_rgba(197,160,101,0.3)] rounded-sm">
                                Cotizar Ahora
                            </button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-10 text-[#E8E4D0]/30 text-xs tracking-widest uppercase text-center"
                >
                    <p>Stephan Textil • CDMX</p>
                    <p className="mt-1">Calidad & Herencia</p>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}