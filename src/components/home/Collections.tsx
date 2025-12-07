'use client';

import { motion } from 'framer-motion';

const groups = [
  {
    id: 1,
    title: "TECNOLOGÍA DRY-FIT",
    desc: "Microfibras de alto rendimiento con transporte de humedad. La base perfecta para jerseys de fútbol, running y uniformes de sublimación.",
    color: "from-[#0F1C18] to-[#1A3C34]",
    border: "border-[#C5A065]/30"
  },
  {
    id: 2,
    title: "LYCRAS & COMPRESIÓN",
    desc: "Tejidos con elastano (Spandex) de alta recuperación. Ideales para leggings, tops deportivos, ciclismo y trajes de baño.",
    color: "from-[#1a1a1a] to-[#252525]", 
    border: "border-[#E8E4D0]/20"
  },
  {
    id: 3,
    title: "MALLAS & REDES",
    desc: "Texturas abiertas para máxima ventilación. Desde Mesh tradicional para shorts hasta redes caladas para insertos y forros.",
    color: "from-[#2A0A0A] to-[#3D0F0F]",
    border: "border-[#8B3A3A]/40"
  }
];

const samples = [
  { name: "Micro-Piqué", css: "radial-gradient(circle, #1e293b 1px, transparent 1px) 0 0 / 4px 4px, #0f172a", type: "Jersey" },
  { name: "Lycra Sport Negra", css: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #18181b 100%)", type: "Compresión" },
  { name: "Mesh Neón", css: "radial-gradient(circle, #a3e635 1px, transparent 1px) 0 0 / 6px 6px, #365314", type: "Ventilación" }, 
  { name: "Interlock Liso", css: "linear-gradient(to right, #dc2626, #b91c1c)", type: "Uniforme" },
  { name: "Spandex Azul", css: "linear-gradient(45deg, #1e3a8a 0%, #2563eb 100%)", type: "Natación" },
  { name: "Calado Deportivo", css: "repeating-radial-gradient(circle, transparent 0, transparent 2px, #374151 3px), #111827", type: "Shorts" },
  { name: "Microfibra Blanca", css: "linear-gradient(to bottom right, #f8fafc, #e2e8f0)", type: "Sublimación" },
  { name: "Felpa Deportiva", css: "repeating-linear-gradient(45deg, #374151 0, #374151 1px, #4b5563 1px, #4b5563 3px)", type: "Pants" },
  { name: "Lycra Colombiana", css: "conic-gradient(from 90deg, #be123c, #881337, #be123c)", type: "Leggings" },
  { name: "Kan-Kan (Malla)", css: "repeating-linear-gradient(90deg, #000 0, #000 2px, #333 2px, #333 4px), repeating-linear-gradient(0deg, #000 0, #000 2px, #333 2px, #333 4px)", type: "Red" },
];

export default function Collections() {
  return (
    <section id="telas" className="relative py-24 px-6 bg-[#0F1C18] text-[#E8E4D0] border-t border-[#C5A065]/10">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h3 className="text-[#C5A065] text-xs tracking-[0.4em] uppercase font-bold mb-4">Catálogo de Alto Rendimiento</h3>
          <h2 className="font-serif text-5xl md:text-6xl text-[#E8E4D0]">TELAS <span className="text-[#8B3A3A]">DEPORTIVAS</span></h2>
          <div className="w-24 h-[1px] bg-[#C5A065]/50 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {groups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-8 bg-gradient-to-br ${group.color} border ${group.border} relative group hover:scale-[1.02] transition-transform duration-500`}
            >
              <div className="absolute top-4 right-4 opacity-10 font-serif text-6xl text-[#E8E4D0]">{group.id}</div>
              <h3 className="font-serif text-2xl text-[#C5A065] mb-4">{group.title}</h3>
              <p className="font-sans text-sm text-[#E8E4D0]/70 leading-relaxed tracking-wide">
                {group.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mb-24">
            <h3 className="text-center text-[#E8E4D0]/50 text-xs tracking-[0.2em] uppercase mb-10">Muestras destacadas (Stock Disponible)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {samples.map((sample, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" 
                  }}
                  className="group relative aspect-square cursor-pointer overflow-hidden border border-[#E8E4D0]/10 rounded-sm transition-all duration-500 ease-in-out"
                >
                  <div 
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ background: sample.css }}
                  ></div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-[#C5A065] text-[10px] uppercase tracking-widest mb-1 font-bold">{sample.type}</span>
                    <span className="text-[#E8E4D0] font-sans text-sm font-bold">{sample.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#1A3C34]/50 border border-[#C5A065]/20 p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C5A065_0%,transparent_70%)] opacity-5"></div>
          <h4 className="relative z-10 font-serif text-3xl md:text-4xl text-[#E8E4D0] mb-6">
            ¿Buscas tela para uniformes o mayoreo?
          </h4>
          <p className="relative z-10 text-[#E8E4D0]/70 max-w-2xl mx-auto mb-10 font-sans tracking-wide">
            Manejamos rollos cerrados y venta por metro. Contamos con <strong className="text-[#C5A065]">stock inmediato</strong> de las telas más solicitadas para confección deportiva y escolar.
          </p>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/525624671422?text=Hola,%20busco%20telas%20deportivas%20para..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#C5A065] text-[#0F1C18] font-bold tracking-[0.2em] uppercase hover:bg-[#E8E4D0] transition-colors min-w-[200px]"
            >
              Cotizar por WhatsApp
            </a>
            <a 
              href="mailto:contacto@stephantextil.com?subject=Cotizaci%C3%B3n%20Telas%20Deportivas"
              className="px-8 py-3 border border-[#C5A065] text-[#C5A065] font-bold tracking-[0.2em] uppercase hover:bg-[#C5A065] hover:text-[#0F1C18] transition-colors min-w-[200px]"
            >
              Enviar Correo
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}