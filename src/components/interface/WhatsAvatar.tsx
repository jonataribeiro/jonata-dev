import { motion } from "framer-motion";
import { site } from "@/config/site";

/**
 * Componente: WhatsAppFab (WhatsAvatar)
 * Versão: Avatar com escala reduzida para evitar efeito de "cabeçona".
 */
export const WhatsAppFab = () => {
  const { number, message } = site.whatsapp;
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      // bg-transparent remove a borda azul e shadow mantém o brilho
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 bg-transparent"
    >
      {/* Tooltip Informativo */}
      <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl hidden sm:block">
        Contate-me pelo WhatsApp
      </span>

      {/* Efeito de pulso discreto */}
      <span
        className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20 z-0"
        aria-hidden
      />

      {/* Container da Foto */}
      <div className="relative w-full h-full flex items-center justify-center z-20 rounded-full overflow-hidden">
        <img 
          src="/public/design/chat-avatar.jpg" 
          alt="Jônata Ribeiro" 
          // Scale reduzido de 125/110 para 0.9 (90%) para dar recuo ao rosto
          className="w-full h-full object-cover scale-[1.0] origin-center"
          onError={(e) => {
            e.currentTarget.src = "https://ui-avatars.com/api/?name=Jonata+Ribeiro&background=2563eb&color=fff";
          }}
        />
      </div>
    </motion.a>
  );
};