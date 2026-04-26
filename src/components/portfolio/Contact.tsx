import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";

export const Contact = () => {
  return (
    <section id="contato" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />

      <div className="container max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-mono text-sm text-primary mb-3">/ 05 — contato</p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Vamos construir <span className="text-gradient">algo juntos</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Estou aberto a oportunidades, freelas e parcerias. Se minha pegada
            combina com o que você procura, me chama.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base sm:text-lg hover:shadow-glow hover:scale-[1.02] transition-all mb-12 max-w-full"
          >
            <Mail className="w-5 h-5 shrink-0" />
            <span className="truncate">{site.email}</span>
            <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="flex items-center justify-center gap-6 pt-8 border-t border-border">
            {site.social.github && (
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            )}
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-mono">
        © {new Date().getFullYear()}{" "}
        <span className="text-foreground">{site.domain}</span>
      </p>
      <p className="font-mono text-xs">
        Construído com React, Tailwind & ☕
      </p>
    </div>
  </footer>
);
