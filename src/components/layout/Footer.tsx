'use client';

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1C18] border-t border-[#C5A065]/20 pt-20 pb-10 px-6 text-[#E8E4D0]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="relative w-16 h-16">
               <Image
                 src="/111.png" 
                 alt="Stephan Textil Logo"
                 fill
                 className="object-contain opacity-80"
               />
            </div>
            <p className="font-serif text-2xl text-[#E8E4D0]">STEPHAN TEXTIL</p>
            <p className="text-xs text-[#E8E4D0]/60 uppercase tracking-[0.2em] leading-relaxed">
              Elevando el estándar textil<br/>en México desde 2020.
            </p>
          </div>

          <div>
            <h4 className="text-[#C5A065] text-xs font-bold tracking-[0.2em] uppercase mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm font-sans text-[#E8E4D0]/70">
              <li><Link href="/" className="hover:text-[#C5A065] transition-colors">Inicio</Link></li>
              <li><Link href="/#telas" className="hover:text-[#C5A065] transition-colors">Catálogo de Telas</Link></li>
              <li><Link href="/vision" className="hover:text-[#C5A065] transition-colors">Nuestra Visión</Link></li>
              <li><Link href="/historia" className="hover:text-[#C5A065] transition-colors">Historia Familiar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C5A065] text-xs font-bold tracking-[0.2em] uppercase mb-6">Servicio</h4>
            <ul className="space-y-4 text-sm font-sans text-[#E8E4D0]/70">
              <li><a href="#" className="hover:text-[#C5A065] transition-colors">Venta Mayorista</a></li>
              <li><a href="#" className="hover:text-[#C5A065] transition-colors">Envíos Nacionales</a></li>
              <li><a href="#" className="hover:text-[#C5A065] transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-[#C5A065] transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C5A065] text-xs font-bold tracking-[0.2em] uppercase mb-6">Visítanos</h4>
            <address className="not-italic text-sm text-[#E8E4D0]/70 space-y-4 font-sans leading-relaxed">
              <p>
                <strong className="text-[#E8E4D0]">Centro Histórico CDMX</strong><br/>
                República de Guatemala 114c,<br/>
                Col. Centro, Cuauhtémoc,<br/>
                06000 Ciudad de México.
              </p>
              <p>
                <a href="mailto:contacto@stephantextil.com" className="hover:text-[#C5A065] transition-colors block">
                  contacto@stephantextil.com
                </a>
                <a href="tel:+525624671422" className="hover:text-[#C5A065] transition-colors block mt-1">
                  +52 56 2467 1422
                </a>
              </p>
            </address>
          </div>

        </div>

        <div className="pt-8 border-t border-[#E8E4D0]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#E8E4D0]/40 font-sans tracking-wide">
          <p>© {currentYear} Stephan Textil. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Hecho con Pasión en CDMX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}