import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-primary mb-6 flex items-center gap-2"
          >
            <span className="h-px w-8 bg-primary" />
            Olá, mundo. Eu sou
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] mb-4"
          >
            Jônata <span className="text-gradient">Ribeiro</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8"
          >
            Desenvolvedor em construção
            <span className="inline-block w-[3px] h-7 sm:h-8 lg:h-10 bg-primary ml-2 animate-blink align-middle" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Construo interfaces limpas, performáticas e acessíveis. Apaixonado por
            código bem escrito, design intencional e por transformar ideias em
            produtos reais. Estudo todo dia para conquistar minha primeira vaga e
            ir muito além.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-glow hover:scale-[1.02] transition-all"
            >
              Ver projetos
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="mailto:contato@jonataribeiro.dev"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all"
            >
              <Mail className="w-4 h-4" />
              contato@jonataribeiro.dev
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-5 mt-10"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="font-mono text-xs text-muted-foreground">
              jonataribeiro.dev
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/40 shadow-elegant">
              <img
                src="/src/assets/avatar.jpg"
                alt="Jônata Ribeiro"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-full px-4 py-2 font-mono text-xs flex items-center gap-2 shadow-card-elegant">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Disponível
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
