'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
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
      alert("¡Gracias! Hemos recibido tu mensaje. Nos pondremos en contacto pronto.");
      setEnviando(false);
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.480776362447!2d-99.1335966!3d19.4346452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f93368255555%3A0x5555555555555555!2sRep%C3%BAblica%20de%20Guatemala%20114C%2C%20Centro%20Hist%C3%B3rico%2C%2006000%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%) brightness(90%)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>
            
            <div className="absolute top-2 right-2 bg-[#0F1C18]/80 px-3 py-1 text-[9px] tracking-widest text-[#C5A065] backdrop-blur-sm pointer-events-none border border-[#C5A065]/20">
              CENTRO CDMX
            </div>
          </div>
        </motion.div>


        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A3C34]/30 p-8 md:p-12 border border-[#C5A065]/10 backdrop-blur-sm shadow-xl"
        >
          <h3 className="font-serif text-3xl mb-8 text-[#C5A065]">Cotiza tus Telas</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="¿Qué tipo de tela buscas?" 
                className="w-full bg-transparent border-b border-[#C5A065]/30 py-3 text-[#E8E4D0] focus:outline-none focus:border-[#C5A065] transition-colors placeholder:text-[#E8E4D0]/30 resize-none font-sans"
              ></textarea>
            </div>

            <div className="pt-2 transform scale-90 origin-left">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
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