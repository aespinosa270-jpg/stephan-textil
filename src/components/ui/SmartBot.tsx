'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BotStep = {
  id: string;
  text: string[];
  options?: { label: string; next: string; action?: string; link?: string }[]; 
  input?: boolean;
};

const getTimeContext = () => {
  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();

  if (day === 0) return "DOMINGO";
  if (hour < 10 || hour >= 18) return "CERRADO";
  
  return "ABIERTO";
};

const generateScript = (): Record<string, BotStep> => {
  const context = getTimeContext();
  
  let introText = ["¡Hola! Bienvenido a Stephan Textil 🐻"];
  
  if (context === "DOMINGO") {
    introText.push("Hoy domingo nuestro equipo descansa, pero soy tu asistente IA y puedo tomar tu pedido para procesarlo mañana lunes a primera hora. ☀️");
  } else if (context === "CERRADO") {
    introText.push("Nuestra tienda física ya cerró por hoy 🌙, pero déjame tus datos y mañana a las 10:00 AM te contactamos sin falta.");
  } else {
    introText.push("Soy tu asistente virtual. Estamos operando y listos para atenderte. ¿En qué te ayudo?");
  }

  return {
    INTRO: {
      id: 'INTRO',
      text: introText,
      options: [
        { label: "Cotizar Telas", next: 'PERFIL' },
        { label: "Ver Ubicación Exacta", next: 'UBICACION' },
        { label: "Horarios", next: 'HORARIOS' },
      ]
    },
    UBICACION: {
      id: 'UBICACION',
      text: [
        "Estamos en el corazón textil de México.",
        "📍 Dirección Completa:\nCalle República de Guatemala #114-C,\nColonia Centro, Alcaldía Cuauhtémoc,\nC.P. 06000, Ciudad de México.",
        "💡 Referencia: A solo 2 calles del Zócalo, casi esquina con calle Argentina."
      ],
      options: [
        { label: "🗺️ Ver en Google Maps", next: 'UBICACION', link: 'https://www.google.com/maps/search/?api=1&query=Republica+de+Guatemala+114c+Centro+Historico+CDMX' }, 
        { label: "Quiero cotizar", next: 'PERFIL' },
        { label: "Volver al inicio", next: 'INTRO' }
      ]
    },
    HORARIOS: {
      id: 'HORARIOS',
      text: ["📅 Horario de Atención:", "Lunes a Sábado: 10:00 AM - 6:00 PM", "Domingos: Cerrado"],
      options: [
        { label: "Cotizar ahora", next: 'PERFIL' },
        { label: "Volver", next: 'INTRO' }
      ]
    },
    PERFIL: {
      id: 'PERFIL',
      text: ["Excelente. Para asignarte al experto adecuado, dime: ¿Cuál es tu giro?"],
      options: [
        { label: "Confeccionista / Taller", next: 'TELA_MAYOREO' },
        { label: "Emprendedor / Marca Nueva", next: 'TELA_MENUDEO' },
        { label: "Distribuidor Textil", next: 'TELA_MAYOREO' }
      ]
    },
    TELA_MAYOREO: {
      id: 'TELA_MAYOREO',
      text: ["Entendido. Manejamos precios de mayoreo competitivos.", "¿Qué familia de telas buscas?"],
      options: [
        { label: "Deportiva (Dry-Fit / Lycra)", next: 'CANTIDAD_MAYOREO' },
        { label: "Escolar / Uniformes", next: 'CANTIDAD_MAYOREO' },
        { label: "Mallas / Redes", next: 'CANTIDAD_MAYOREO' }
      ]
    },
    TELA_MENUDEO: {
      id: 'TELA_MENUDEO',
      text: ["¡Nos encanta ver crecer nuevas marcas!", "¿Con qué tela vas a iniciar tu proyecto?"],
      options: [
        { label: "Deportiva (Dry-Fit / Lycra)", next: 'CANTIDAD_MENUDEO' },
        { label: "Sublimación", next: 'CANTIDAD_MENUDEO' },
        { label: "Busco Muestras", next: 'CANTIDAD_MENUDEO' }
      ]
    },
    CANTIDAD_MAYOREO: {
      id: 'CANTIDAD_MAYOREO',
      text: ["Perfecto.", "¿Qué volumen aproximado tienes planeado?"],
      options: [
        { label: "Rollos Cerrados (20kg+)", next: 'NOMBRE' },
        { label: "Más de 100 kgs (Producción)", next: 'NOMBRE' },
        { label: "Solo metraje por ahora", next: 'NOMBRE' }
      ]
    },
    CANTIDAD_MENUDEO: {
      id: 'CANTIDAD_MENUDEO',
      text: ["Muy bien.", "¿Cuánto material necesitas aprox?"],
      options: [
        { label: "Cortes (1 a 5 metros)", next: 'NOMBRE' },
        { label: "Rollos pequeños (5-20 kgs)", next: 'NOMBRE' },
      ]
    },
    NOMBRE: {
      id: 'NOMBRE',
      text: ["¡Casi listo!", "Por favor escribe tu nombre para generar tu folio de atención:"],
      input: true,
      options: [] 
    },
    FINAL: {
      id: 'FINAL',
      text: ["¡Gracias! He generado tu pre-orden.", "Te estoy conectando con un humano experto ahora mismo..."],
      options: []
    }
  };
};

export default function SmartBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const script = generateScript();
  
  const [history, setHistory] = useState<any[]>([{ type: 'bot', text: script.INTRO.text[0] }]);
  const [currentStep, setCurrentStep] = useState('INTRO');
  const [inputValue, setInputValue] = useState("");
  
  const userDataRef = useRef<Record<string, string>>({});
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isTyping]);

  useEffect(() => {
   
    if (isOpen && history.length === 1) {
      const dynamicScript = generateScript();
      triggerBotResponse(dynamicScript.INTRO);
    }
  }, [isOpen]);

  const triggerBotResponse = async (stepObj: BotStep) => {
    setIsTyping(true);
    const delay = 800; 

    setTimeout(() => {
      setIsTyping(false);
      
      stepObj.text.forEach((msg, i) => {
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'bot', text: msg }]);
          
          if (stepObj.id === 'FINAL' && i === stepObj.text.length - 1) {
            handleFinalRedirect();
          }
        }, i * 600);
      });
    }, delay);
  };

  const handleOption = (option: { label: string; next: string; action?: string; link?: string }) => {
    if (option.link) {
        window.open(option.link, '_blank');
        return;
    }

    setHistory(prev => [...prev, { type: 'user', text: option.label }]);
    userDataRef.current = { ...userDataRef.current, [currentStep]: option.label };

    const dynamicScript = generateScript(); 
    const nextStepObj = dynamicScript[option.next];
    
    if (nextStepObj) {
      setCurrentStep(option.next);
      triggerBotResponse(nextStepObj);
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setHistory(prev => [...prev, { type: 'user', text: inputValue }]);
    userDataRef.current = { ...userDataRef.current, NOMBRE: inputValue };
    
    setInputValue("");
    setCurrentStep('FINAL');
    
    const dynamicScript = generateScript();
    triggerBotResponse(dynamicScript.FINAL);
  };

  const handleFinalRedirect = () => {
    setTimeout(() => {
      const { NOMBRE, PERFIL, TELA_MAYOREO, TELA_MENUDEO, CANTIDAD_MAYOREO, CANTIDAD_MENUDEO } = userDataRef.current;
      
      const tipoTela = TELA_MAYOREO || TELA_MENUDEO || "Telas Varias";
      const cantidad = CANTIDAD_MAYOREO || CANTIDAD_MENUDEO || "Cotización general";
      const nombreFinal = NOMBRE || "Cliente";
      
      const timeContext = getTimeContext();
      let note = "";
      if (timeContext === "CERRADO") note = "\n(Mensaje enviado fuera de horario laboral)";
      if (timeContext === "DOMINGO") note = "\n(Mensaje enviado en Domingo)";

      const mensaje = `👋 Hola Stephan Textil.\n\nSoy *${nombreFinal}* (${PERFIL}).\nBusco: *${tipoTela}*.\nVolumen: *${cantidad}*.${note}\n\n¿Me pueden atender?`;
      
      window.location.href = `https://wa.me/525624671422?text=${encodeURIComponent(mensaje)}`;
      
      setTimeout(() => {
        setIsOpen(false);
        const resetScript = generateScript();
        setHistory([{ type: 'bot', text: resetScript.INTRO.text[0] }]);
        setCurrentStep('INTRO');
        userDataRef.current = {}; 
      }, 2000);
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[1002] flex flex-col items-end gap-4 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[340px] max-w-[calc(100vw-32px)] h-[500px] max-h-[70vh] bg-[#0F1C18] border border-[#C5A065]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-[#1A3C34] p-4 flex justify-between items-center border-b border-[#C5A065]/20 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#C5A065] flex items-center justify-center text-[#0F1C18] font-bold overflow-hidden border-2 border-[#E8E4D0]/20">
                        <img src="/osaso.png" alt="Bot" className="w-full h-full object-cover scale-150" />
                    </div>
                    <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-[#1A3C34] rounded-full ${getTimeContext() === 'ABIERTO' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                </div>
                <div>
                    <h4 className="text-[#E8E4D0] font-bold text-sm">Asistente Stephan</h4>
                    <p className="text-[#E8E4D0]/50 text-[10px] uppercase tracking-wider">
                        {getTimeContext() === 'ABIERTO' ? 'En línea' : 'Modo Mensaje'}
                    </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#E8E4D0]/50 hover:text-[#E8E4D0] p-1">✕</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0F1C18] scrollbar-thin scrollbar-thumb-[#C5A065]/20">
              {history.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] p-3 text-sm rounded-2xl shadow-sm whitespace-pre-wrap ${
                      msg.type === 'user' 
                        ? 'bg-[#C5A065] text-[#0F1C18] rounded-br-none font-medium' 
                        : 'bg-[#1A3C34] text-[#E8E4D0] rounded-bl-none border border-[#C5A065]/10'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}

              {isTyping && (
                  <div className="flex justify-start">
                      <div className="bg-[#1A3C34] p-3 rounded-2xl rounded-bl-none border border-[#C5A065]/10 flex gap-1 items-center h-10">
                          <span className="w-1.5 h-1.5 bg-[#C5A065]/50 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-[#C5A065]/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-1.5 h-1.5 bg-[#C5A065]/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                  </div>
              )}
              
              <div ref={chatEndRef}></div>
            </div>

            <div className="p-4 bg-[#1A3C34]/50 border-t border-[#C5A065]/10 shrink-0">
               {script[currentStep]?.input ? (
                   <form onSubmit={handleInputSubmit} className="flex gap-2">
                       <input 
                         autoFocus
                         type="text" 
                         value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)}
                         placeholder="Escribe tu nombre..."
                         className="flex-1 bg-[#0F1C18] border border-[#C5A065]/30 rounded-lg px-4 py-2 text-[#E8E4D0] text-sm focus:outline-none focus:border-[#C5A065]"
                       />
                       <button type="submit" className="bg-[#C5A065] text-[#0F1C18] p-2 rounded-lg font-bold">
                         ➤
                       </button>
                   </form>
               ) : (
                   <div className="flex flex-wrap gap-2 justify-end">
                      {!isTyping && script[currentStep]?.options?.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOption(opt)}
                          className={`text-xs px-4 py-3 rounded-xl transition-all active:scale-95 shadow-md flex-grow md:flex-grow-0 ${
                              opt.link 
                              ? 'bg-[#1A3C34] text-white border border-blue-500/50 hover:bg-blue-900/50' // Estilo especial para MAPS
                              : 'bg-[#0F1C18] text-[#C5A065] border border-[#C5A065]/40 hover:bg-[#C5A065] hover:text-[#0F1C18]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                   </div>
               )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#C5A065] rounded-full flex items-center justify-center shadow-[0_4px_25px_rgba(197,160,101,0.4)] z-[1002] relative border-2 border-[#1A3C34]"
      >
        {isOpen ? (
             <span className="text-2xl font-bold text-[#0F1C18]">✕</span>
        ) : (
            <>
             <span className="absolute -top-1 -right-1 flex h-5 w-5 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600 text-[10px] text-white items-center justify-center font-bold">1</span>
             </span>
             <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" fill="#0F1C18"/>
             </svg>
            </>
        )}
      </motion.button>
    </div>
  );
}