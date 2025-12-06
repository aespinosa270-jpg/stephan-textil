'use client';

import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/home/Contact";
import FloatingWhatsapp from "@/components/ui/FloatingWhatsapp";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HistoriaPage() {
  return (
    <main className="relative min-h-screen bg-[#1A3C34] text-[#E8E4D0]">
      <Navbar />
      <FloatingWhatsapp />

      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[70vh] flex items-center justify-center">
        
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C5A065] opacity-10 blur-[120px] rounded-full"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 border border-[#C5A065]/50 rounded-full text-[#C5A065] text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-[#0F1C18]/30 backdrop-blur-md">
              Desde 2020
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight font-bold text-[#E8E4D0] drop-shadow-2xl">
              TODO COMENZÓ CON <br />
              <span className="italic text-[#C5A065]">UN SUEÑO.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-[#E8E4D0]/80 font-sans leading-relaxed max-w-2xl mx-auto"
          >
            Lo que hoy ves como una realidad sólida, nació en el corazón de una familia que se atrevió a imaginar algo diferente en un año donde el mundo parecía detenerse.
          </motion.p>
        </div>
      </section>


      <section className="relative py-24 px-6 bg-[#0F1C18]/50 border-t border-[#C5A065]/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#E8E4D0]">
              Más que una empresa, <br/>
              <span className="text-[#C5A065]">somos Sangre y Pasión.</span>
            </h2>
            
            <div className="space-y-6 text-[#E8E4D0]/70 font-sans leading-relaxed text-justify">
              <p>
                <strong>Stephan Textil</strong> no fue fundado por una junta directiva anónima. Fue forjado por una familia unida por el hilo invisible de la perseverancia. En 2020, decidimos materializar una visión: crear un espacio donde la calidad textil se encontrara con la calidez humana.
              </p>
              <p>
                Sabíamos que el mercado estaba lleno de opciones frías y transaccionales. Nosotros queríamos construir algo distinto. Queríamos que cada rollo de tela entregado llevara consigo el compromiso de nuestros valores.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] bg-[#1A3C34] rounded-sm border border-[#C5A065]/20 flex items-center justify-center overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C5A065_0%,transparent_60%)] opacity-10"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 opacity-80 mix-blend-screen">
                <Image
                  src="/sello-st.png"
                  alt="Familia Stephan"
                  fill
                  className="object-contain invert sepia saturate-200 hue-rotate-[10deg] drop-shadow-[0_0_30px_rgba(197,160,101,0.5)]"
                />
            </div>
            
            <div className="absolute bottom-6 text-[#C5A065] text-xs tracking-[0.4em] uppercase font-bold">
              Familia Stephan
            </div>
          </motion.div>

        </div>
      </section>


      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C34] to-[#0F1C18]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#C5A065]/5 border border-[#C5A065]/20 p-10 md:p-20 rounded-sm backdrop-blur-sm relative"
          >
            <div className="absolute top-8 left-8 text-6xl text-[#C5A065] opacity-20 font-serif">“</div>

            <h3 className="font-serif text-3xl md:text-5xl text-[#E8E4D0] mb-8 leading-tight">
              Al entrar a Stephan Textil, <br/>
              <span className="text-[#C5A065]">entras a la familia.</span>
            </h3>

            <p className="text-lg md:text-xl text-[#E8E4D0]/80 font-sans max-w-3xl mx-auto leading-relaxed">
              No vemos números de cliente, vemos socios de vida. Entendemos que detrás de tu pedido hay un proyecto, un esfuerzo y tu propio sueño. 
              <br/><br/>
              Por eso, nuestra promesa es simple: <strong>cuidaremos de tu negocio como cuidamos del nuestro.</strong> Porque en esta familia, cuando uno crece, crecemos todos.
            </p>
            
            <div className="mt-12 pt-8 border-t border-[#C5A065]/20 inline-block px-12">
              <p className="font-serif italic text-[#C5A065] text-2xl">La Familia Stephan</p>
            </div>

          </motion.div>

        </div>
      </section>

      <Contact />
    </main>
  );
}