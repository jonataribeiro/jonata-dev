import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { site, hero } from "@/config/site";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-primary mb-5 flex items-center gap-2"
          >
            <span className="h-px w-8 bg-primary" />
            {hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight leading-[1.05] mb-4"
          >
            Jônata <span className="text-shine">Ribeiro</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-7"
          >
            {hero.subheadline}
            <span className="inline-block w-[3px] h-6 sm:h-7 lg:h-8 bg-primary ml-2 animate-blink align-middle" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-glow hover:scale-[1.02] transition-all"
            >
              Ver projetos
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all"
            >
              Vamos conversar
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-muted-foreground font-medium hover:text-primary transition-all"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{site.email}</span>
              <span className="sm:hidden">E-mail</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-5 mt-10"
          >
            {site.social.github && (
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            <span className="font-mono text-xs text-muted-foreground">
              {site.domain}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            {/* Halo violeta pulsante */}
            <div
              aria-hidden
              className="absolute -inset-10 rounded-full bg-primary/35 blur-3xl orbit-pulse"
            />
            {/* Anel gradient rotativo atrás da foto */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full opacity-70 orbit-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(var(--primary) / 0.0) 0deg, hsl(var(--primary-glow) / 0.8) 90deg, hsl(var(--primary) / 0.0) 180deg, hsl(var(--accent) / 0.8) 270deg, hsl(var(--primary) / 0.0) 360deg)",
                filter: "blur(8px)",
              }}
            />
            {/* Foto (sem borda) */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant animate-float">
              {/*
                📸 TROQUE A FOTO:
                - Substitua o arquivo em src/assets/avatar.jpg pela sua foto
                - Foto quadrada (1:1), boa iluminação, fundo neutro
                - object-top evita cortar o topo da cabeça
              */}
              <img
                src={avatar}
                alt={`Foto de ${site.name}`}
                width={768}
                height={768}
                className="w-full h-full object-cover object-top scale-105"
              />
              {/* Raio/shine passando sobre a foto */}
              <div className="image-shine" aria-hidden />
            </div>
            {site.available && (
              <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-full px-4 py-2 font-mono text-xs flex items-center gap-2 shadow-card-elegant">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Disponível
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
