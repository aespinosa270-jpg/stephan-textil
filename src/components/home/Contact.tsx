'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null); 
  const [captchaValido, setCaptchaValido] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValido(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValido) {
      alert("Por favor, confirma que no eres un robot.");
      return;
    }

    setEnviando(true);

    setTimeout(() => {
      alert("¡Gracias! Hemos recibido tu mensaje (Simulación). Nos pondremos en contacto pronto.");
      setEnviando(false);
      form.current?.reset(); 
    }, 1500);
  };

  return (
    <section id="contacto" className="relative py-24 px-6 bg-[#0F1C18] text-[#E8E4D0] border-t border-[#C5A065]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-[#C5A065] text-xs tracking-[0.3em] uppercase font-bold mb-4">Ubicación & Venta</h3>
            <h2 className="font-serif text-5xl md:text-6xl text-[#E8E4D0]">VISÍTANOS</h2>
          </div>

          <div className="space-y-6 font-sans text-sm tracking-wide text-[#E8E4D0]/80">
            <p>
              <strong className="block text-[#C5A065] mb-1">Centro Histórico CDMX</strong>
              República de Guatemala 114c,<br />
              Col. Centro, Cuauhtémoc,<br />
              06000 Ciudad de México, CDMX.
            </p>
            <p>
              <strong className="block text-[#C5A065] mb-1">Contacto Directo</strong>
              +52 56 2467 1422<br />
              contacto@stephantextil.com
            </p>
          </div>

          <div className="w-full h-64 md:h-80 bg-[#1A3C34] rounded-sm border border-[#C5A065]/20 overflow-hidden relative group shadow-2xl">
             <iframe 
              src="https://maps.google.com/maps?q=Rep%C3%BAblica+de+Guatemala+114c,+Centro,+CDMX&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%) brightness(90%)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A3C34]/30 p-8 md:p-12 border border-[#C5A065]/10 backdrop-blur-sm shadow-xl"
        >
          <h3 className="font-serif text-3xl mb-8 text-[#C5A065]">Cotiza tus Telas</h3>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <input 
                type="text" 
                required
                placeholder="Nombre Completo" 
                className="w-full bg-transparent border-b border-[#C5A065]/30 py-3 text-[#E8E4D0] focus:outline-none focus:border-[#C5A065] transition-colors placeholder:text-[#E8E4D0]/30 font-sans"
              />
            </div>
            
            <div className="group">
              <input 
                type="email" 
                required
                placeholder="Correo Electrónico" 
                className="w-full bg-transparent border-b border-[#C5A065]/30 py-3 text-[#E8E4D0] focus:outline-none focus:border-[#C5A065] transition-colors placeholder:text-[#E8E4D0]/30 font-sans"
              />
            </div>

            <div className="group">
              <textarea 
                rows={4} 
                required
                placeholder="¿Qué tipo de tela buscas? (Lana, Lino, Seda...)" 
                className="w-full bg-transparent border-b border-[#C5A065]/30 py-3 text-[#E8E4D0] focus:outline-none focus:border-[#C5A065] transition-colors placeholder:text-[#E8E4D0]/30 resize-none font-sans"
              ></textarea>
            </div>

            <div className="pt-2 transform scale-90 origin-left">
              <ReCAPTCHA
                sitekey="TU_CLAVE_DE_SITIO_REAL_DE_GOOGLE" 
                onChange={handleCaptchaChange}
                theme="dark"
              />
            </div>

            <button 
              type="submit" 
              disabled={!captchaValido || enviando}
              className={`w-full py-4 font-bold tracking-[0.2em] uppercase transition-all duration-500 mt-4 border border-transparent ${
                captchaValido && !enviando
                  ? "bg-[#C5A065] text-[#0F1C18] hover:bg-[#E8E4D0] hover:scale-[1.02] cursor-pointer shadow-[0_0_20px_rgba(197,160,101,0.4)]" 
                  : "bg-[#C5A065]/10 text-[#C5A065]/40 border-[#C5A065]/10 cursor-not-allowed"
              }`}
            >
              {enviando ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}