import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Phone, MapPin, MessageCircle, FileDown } from "lucide-react";
import { site } from "@/config/site";

export const Contact = () => {
  const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
    site.whatsapp.message
  )}`;

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
          <p className="font-mono text-sm text-primary mb-3">/ 06 — contato</p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Onde a técnica <span className="text-gradient">encontra a oportunidade</span>.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Em busca da primeira oportunidade no mercado de tecnologia.
            Se meu perfil combina com o que você procura, vamos conversar.
          </p>

          {/* CTA principal — WhatsApp */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base sm:text-lg hover:shadow-glow hover:scale-[1.02] transition-all mb-4 max-w-full"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span className="truncate">Falar no WhatsApp</span>
            <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Grid de contatos */}
          <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient hover:border-primary/50 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">E-mail principal</p>
                <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                  {site.email}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${site.emailAlt}`}
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient hover:border-primary/50 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">E-mail alternativo</p>
                <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                  {site.emailAlt}
                </p>
              </div>
            </a>

            <a
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient hover:border-primary/50 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">Telefone</p>
                <p className="font-medium text-sm group-hover:text-primary transition-colors">
                  {site.phone}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">Localização</p>
                <p className="font-medium text-sm">{site.location}</p>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center justify-center gap-6 pt-10 mt-10 border-t border-border">
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
