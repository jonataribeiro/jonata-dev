import type { Config } from "tailwindcss";

/**
 * CONFIGURAÇÃO DO TAILWIND (Tailwind Config)
 * =========================================================================
 * Responsável por estender o tema base e definir a identidade visual (Design System).
 * * POR QUE AQUI?
 * Centralizamos as variações de cores, fontes e animações para evitar valores 
 * mágicos (hardcoded) nos componentes. Se a identidade visual mudar, mudamos aqui.
 */
export default {
  darkMode: ["class"], // Define que o modo escuro é controlado por classe CSS no <html>
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true, // Garante alinhamento centralizado padrão para layouts
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /** * EXTENSÃO DE CORES
       * Mantemos as variáveis CSS aqui para que elas respeitem os temas 
       * (Light/Dark) definidos no seu CSS global.
       */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... (resto da configuração)
      },
      /**
       * ANIMAÇÕES E KEYFRAMES
       * Documentamos o comportamento de entrada aqui para reuso em componentes
       * como o seu WhatsAppFab e a Timeline.
       */
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;