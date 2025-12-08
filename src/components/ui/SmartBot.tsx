'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURACIÓN DE LAS PREGUNTAS ---
const flow = [
  {
    id: 1,
    text: "¡Hola! Bienvenido a Stephan Textil. Soy tu asistente virtual. 🐻",
    options: [
      { label: "Cotizar Telas", next: 2 },
      { label: "Ubicación", next: 99 }, // 99 es caso especial
      { label: "Horarios", next: 98 },  // 98 es caso especial
    ]
  },
  {
    id: 2,
    text: "¿Qué tipo de cliente eres?",
    options: [
      { label: "Confeccionista / Taller", next: 3 },
      { label: "Mayorista / Distribuidor", next: 3 },
      { label: "Emprendedor / Estudiante", next: 3 },
    ]
  },
  {
    id: 3,
    text: "¿Qué tipo de tela buscas principalmente?",
    options: [
      { label: "Deportiva (Dry-Fit, Lycra)", next: 4 },
      { label: "Escolar / Uniformes", next: 4 },
      { label: "Sublimación", next: 4 },
    ]
  },
  {
    id: 4,
    text: "¿Cuál es el volumen aproximado de tu compra?",
    options: [
      { label: "Venta por Kilo/Metro", next: 100 }, // 100 = Finalizar
      { label: "Rollos Cerrados", next: 100 },
    ]
  }
];

export default function SmartBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState<any[]>([{ type: 'bot', text: flow[0].text }]);
  const [answers, setAnswers] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al final del chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isOpen]);

  const handleOption = (option: { label: string, next: number }) => {
    // 1. Agregar respuesta del usuario al chat
    setHistory(prev => [...prev, { type: 'user', text: option.label }]);
    
    // 2. Guardar respuesta para armar el mensaje final
    const newAnswers = [...answers, option.label];
    setAnswers(newAnswers);

    // 3. Manejar casos especiales
    if (option.next === 99) {
        setTimeout(() => {
            setHistory(prev => [...prev, { type: 'bot', text: "Estamos en Rep. de Guatemala 114c, Centro Histórico, CDMX." }]);
            addFinalResetOption();
        }, 600);
        return;
    }
    if (option.next === 98) {
        setTimeout(() => {
            setHistory(prev => [...prev, { type: 'bot', text: "Lunes a Sábado de 10:00 am a 6:00 pm." }]);
            addFinalResetOption();
        }, 600);
        return;
    }

    // 4. Ir al WhatsApp si terminó (ID 100)
    if (option.next === 100) {
      setTimeout(() => {
        setHistory(prev => [...prev, { type: 'bot', text: "¡Perfecto! Te conectaré con un asesor experto con esta información..." }]);
        
        setTimeout(() => {
          const mensajeFinal = `Hola Stephan Textil, soy *${newAnswers[0]}*. Busco *${newAnswers[1]}* en volumen de *${newAnswers[2]}*. ¿Me pueden ayudar?`;
          window.open(`https://wa.me/525624671422?text=${encodeURIComponent(mensajeFinal)}`, '_blank');
          setIsOpen(false); // Cerrar chat al irse
          // Resetear chat opcionalmente
          setTimeout(() => { setStep(1); setHistory([{ type: 'bot', text: flow[0].text }]); setAnswers([]); }, 1000);
        }, 1500);
      }, 600);
      return;
    }

    // 5. Avanzar a la siguiente pregunta normal
    const nextQuestion = flow.find(q => q.id === option.next);
    if (nextQuestion) {
      setStep(nextQuestion.id);
      setTimeout(() => {
        setHistory(prev => [...prev, { type: 'bot', text: nextQuestion.text }]);
      }, 600); // Pequeño delay para que se sienta natural
    }
  };

  const addFinalResetOption = () => {
     // Opción para reiniciar si preguntó ubicación/horario
     setTimeout(() => {
        setHistory(prev => [...prev, { type: 'system', isReset: true }]);
     }, 1000);
  };

  const resetChat = () => {
      setStep(1);
      setHistory([{ type: 'bot', text: flow[0].text }]);
      setAnswers([]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
      
      {/* VENTANA DEL CHAT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[350px] max-w-[90vw] h-[500px] bg-[#0F1C18] border border-[#C5A065]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1A3C34] p-4 flex justify-between items-center border-b border-[#C5A065]/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C5A065] flex items-center justify-center text-[#0F1C18] font-bold text-xs">
                    ST
                </div>
                <div>
                    <h4 className="text-[#E8E4D0] font-bold text-sm">Asistente Stephan</h4>
                    <p className="text-[#C5A065] text-xs flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> En línea
                    </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#E8E4D0]/50 hover:text-[#E8E4D0]">✕</button>
            </div>

            {/* Cuerpo del Chat */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
              {history.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.isReset ? (
                      <button onClick={resetChat} className="text-xs text-[#C5A065] underline mt-2 hover:text-[#E8E4D0]">Hacer otra consulta</button>
                  ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`max-w-[80%] p-3 text-sm rounded-2xl ${
                        msg.type === 'user' 
                            ? 'bg-[#C5A065] text-[#0F1C18] rounded-br-none font-bold' 
                            : 'bg-[#1A3C34] text-[#E8E4D0] rounded-bl-none border border-[#C5A065]/10'
                        }`}
                    >
                        {msg.text}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* Opciones (Botones) */}
              {history[history.length - 1].type === 'bot' && !history[history.length - 1].isReset && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {flow.find(q => q.id === step)?.options.map((opt, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => handleOption(opt)}
                      className="text-xs bg-[#1A3C34] border border-[#C5A065]/40 text-[#C5A065] px-3 py-2 rounded-full hover:bg-[#C5A065] hover:text-[#0F1C18] transition-colors"
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
              )}
              <div ref={chatEndRef}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÓN FLOTANTE (TRIGGER) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#C5A065] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(197,160,101,0.4)] z-50 relative group"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F1C18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
             </svg>
        ) : (
            <>
             <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white items-center justify-center font-bold">1</span>
             </span>
             {/* Icono de Chat Burbujas */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#0F1C18]" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
             </svg>
            </>
        )}
      </motion.button>
    </div>
  );
}