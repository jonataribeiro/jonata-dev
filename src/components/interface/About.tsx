/**
 * ARQUIVO: src/components/portfolio/About.tsx
 * * JÔNATA - NOTA TÉCNICA:
 * Componente responsável pela seção "Sobre Mim".
 * * Lógica:
 * 1. Utilizo 'framer-motion' para animações de entrada (scroll-triggered).
 * 2. Os dados textuais não estão hardcoded aqui; eles são importados de 'src/config/site.ts'.
 * Isso garante que, se eu precisar mudar o texto, não preciso tocar no layout.
 * 3. O grid é dividido em 5 colunas: 3 para o texto narrativo (mais espaço para leitura)
 * e 2 para os pilares (cartões de destaque).
 */

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import { about } from "@/config/site";

// JÔNATA - NOTA TÉCNICA:
// Os 'pillars' são estáticos pois definem a base da minha marca pessoal.
// Se no futuro eu quiser adicionar um quarto pilar, só preciso inserir aqui.
const pillars = [
  {
    icon: Code2,
    title: "Compromisso com o Código",
    text: "Prezo por uma estrutura de código limpa e modular. Aplico os conceitos de tipagem e responsividade para garantir que a experiência do usuário seja consistente e confiável.",
  },
  {
    icon: Lightbulb,
    title: "Reconheço minhas limitações",
    text: "Entendo que o aprendizado é constante; por isso, encaro os desafios técnicos com a humildade de quem está sempre aprendendo e a determinação de quem busca a melhor solução.",
  },
  {
    icon: Rocket,
    title: "Foco em Resultado",
    text: "Acredito que a tecnologia só faz sentido quando é útil para alguém. Aplico minha resiliência para superar obstáculos técnicos, focado em entregar soluções que facilitem a vida das pessoas e gerem valor real.",
  },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container max-w-6xl relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">/ 01 — sobre mim</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-3xl">
            Transição estratégica para o{" "}
            <span className="text-shine bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
              desenvolvimento de software
            </span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >

            {about.paragraphs.map((p, i) => (
              <p
                key={`about-p-${i}`}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed transition-all duration-500 hover:text-foreground/90 cursor-default"
              >
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--primary-rgb), 0.05)" }}
                className="bg-card/40 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-primary/50 transition-all cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};