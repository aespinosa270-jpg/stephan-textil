'use client';

import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/home/Contact";
import { motion } from 'framer-motion';

export default function VisionPage() {
  return (
    <main className="relative min-h-screen bg-[#1A3C34] text-[#E8E4D0]">
      <Navbar />
      

      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A065] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative border-l-4 border-[#C5A065] pl-8 md:pl-12 py-6"
          >
            <span className="text-[#C5A065] text-xs tracking-[0.5em] uppercase font-bold mb-6 block">
              Nuestra Filosofía
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.9] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E8E4D0] to-[#C5A065]/80">
              CALIDAD <span className="text-3xl align-middle text-[#E8E4D0]/50">&</span><br/>
              EXCELENCIA <br/>
              EN TELAS.
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#E8E4D0]/80 font-sans text-lg leading-relaxed space-y-6"
          >
            <p>
              En un mercado saturado de opciones, <strong>Stephan Textil</strong> nace con una misión clara: elevar el estándar.
            </p>
            <p>
              No somos simplemente un almacén de telas; somos el socio estratégico de confeccionistas que no pueden permitirse fallar. Nuestra visión es ser la respuesta definitiva a las dos grandes necesidades de la industria: <span className="text-[#C5A065] font-bold">Abasto Ininterrumpido</span> y <span className="text-[#C5A065] font-bold">Calidad Intransigente</span>.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="py-24 px-6 border-t border-[#C5A065]/10 bg-[#0F1C18]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#E8E4D0] mb-4">EL ESTÁNDAR STEPHAN</h2>
            <div className="w-16 h-[1px] bg-[#C5A065] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-[#1A3C34] border border-[#C5A065]/20 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C5A065] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="font-serif text-2xl text-[#C5A065] mb-4">Innovación Textil</h3>
              <p className="text-[#E8E4D0]/70 text-sm leading-relaxed">
                El deporte evoluciona, y nuestras telas también. Integramos tecnologías de secado rápido (Dry-Fit), protección UV y elasticidad de memoria para que tus prendas compitan al más alto nivel.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-[#1A3C34] border border-[#C5A065]/20 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C5A065] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="font-serif text-2xl text-[#C5A065] mb-4">Curaduría de Producto</h3>
              <p className="text-[#E8E4D0]/70 text-sm leading-relaxed">
                No llenamos el almacén por llenar. Cada rollo, cada color y cada textura ha sido seleccionado pensando en lo que el mercado mexicano realmente demanda y vende.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-[#1A3C34] border border-[#C5A065]/20 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C5A065] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="font-serif text-2xl text-[#C5A065] mb-4">Resistencia Superior</h3>
              <p className="text-[#E8E4D0]/70 text-sm leading-relaxed">
                En el deporte, la durabilidad no es negociable. Nuestras telas están diseñadas para soportar la fricción, el lavado frecuente y el uso rudo sin perder su forma ni sus propiedades técnicas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="relative py-32 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C18] via-[#1A3C34] to-[#0F1C18]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block border border-[#C5A065] px-6 py-2 rounded-full text-[#C5A065] text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            Nuestra Promesa
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-6xl text-[#E8E4D0] leading-tight">
            "TENEMOS LO QUE EL MERCADO NECESITA."
          </h2>
          
          <p className="text-[#E8E4D0]/70 font-sans text-lg max-w-2xl mx-auto">
            Entendemos la frustración del "agotado". Por eso, nuestra visión se centra en una logística de acero: mantener niveles de stock saludables en nuestras referencias clave para que tu producción nunca se detenga.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  );
}