/**
 * ARQUIVO: src/components/portfolio/Contact.tsx
 * JÔNATA - NOTA TÉCNICA:
 * Este componente gerencia a interface de contato e o footer.
 * A principal complexidade aqui é a integração com APIs externas (WhatsApp, E-mail, GitHub/LinkedIn).
 */

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Phone, MapPin, MessageCircle, FileDown } from "lucide-react";
import { site } from "@/config/site";

export const Contact = () => {
  // JÔNATA - NOTA TÉCNICA:
  // Utilizo a API oficial do WhatsApp (wa.me) para garantir que funcione em dispositivos móveis (abrir App)
  // e Desktop (abrir Web). O encodeURIComponent é essencial para que caracteres especiais na mensagem
  // não quebrem a URL.
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
            Onde a técnica <span className="text-shine">encontra a oportunidade</span>.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Em busca da primeira oportunidade no mercado de tecnologia.
            Se meu perfil combina com o que você procura, vamos conversar.
          </p>

          {/* JÔNATA - NOTA TÉCNICA: CTAs focados em conversão rápida. WhatsApp como prioridade. */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base sm:text-lg hover:shadow-glow hover:scale-[1.02] transition-all max-w-full"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span className="truncate">Falar no WhatsApp</span>
              <ArrowUpRight className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={site.resumeUrl}
              download
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full border-2 border-primary/60 text-foreground font-semibold text-base sm:text-lg hover:border-primary hover:text-primary hover:shadow-glow-sm transition-all"
            >
              <FileDown className="w-5 h-5 shrink-0" />
              <span>Baixar Currículo</span>
            </a>
          </div>

          {/* JÔNATA - NOTA TÉCNICA: Grid de contatos. 
              Uso o site.email e site.phone que centralizei no config/site.ts para facilitar a manutenção. */}
          <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
            <a href={`mailto:${site.email}`} className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient hover:border-primary/50 transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">E-mail principal</p>
                <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">{site.email}</p>
              </div>
            </a>

            <a href={`mailto:${site.emailAlt}`} className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient hover:border-primary/50 transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">E-mail alternativo</p>
                <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">{site.emailAlt}</p>
              </div>
            </a>

            <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient hover:border-primary/50 transition-colors">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">Telefone</p>
                <p className="font-medium text-sm group-hover:text-primary transition-colors">{site.phone}</p>
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

          {/* JÔNATA - NOTA TÉCNICA: Redes Sociais. 
              Adicionei verificações condicionais para não renderizar ícones se os links estiverem vazios no site.ts. */}
          <div className="flex items-center justify-center gap-6 pt-10 mt-10 border-t border-border">
            {site.social.github && (
              <a href={site.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            )}
            {site.social.linkedin && (
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
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

export const Footer = () => {
  const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;

  return (
    <footer className="relative border-t border-border mt-12">
      <div aria-hidden className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          
          {/* JÔNATA - NOTA TÉCNICA: Branding do rodapé */}
          <div>
            <a href="#top" className="inline-flex font-display font-bold text-xl tracking-tight logo-neon">
              <span className="text-foreground">jonataribeiro</span>
              <span className="text-primary">.dev</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Analista e Desenvolvedor Full-Stack em construção — disciplina, técnica e propósito.
            </p>
          </div>

          {/* Contatos Footer */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"><Mail className="w-4 h-4" /> {site.email}</a></li>
              <li><a href={`mailto:${site.emailAlt}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"><Mail className="w-4 h-4" /> {site.emailAlt}</a></li>
              <li><a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a></li>
              <li className="inline-flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4" /> {site.location}</li>
            </ul>
          </div>

          {/* JÔNATA - NOTA TÉCNICA: Navegação rápida para melhorar a experiência do usuário (UX) */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 text-foreground">Navegar</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li><a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#stack" className="text-muted-foreground hover:text-primary transition-colors">Stack</a></li>
              <li><a href="#trajetoria" className="text-muted-foreground hover:text-primary transition-colors">Trajetória</a></li>
              <li><a href="#projetos" className="text-muted-foreground hover:text-primary transition-colors">Projetos</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href={site.resumeUrl} download className="text-muted-foreground hover:text-primary transition-colors">Currículo</a></li>
            </ul>

            <div className="flex items-center gap-4 mt-5">
              {site.social.github && <a href={site.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>}
              {site.social.linkedin && <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted-foreground">
          <p className="font-mono">© {new Date().getFullYear()} <span className="text-foreground">{site.domain}</span> — Desenvolvido por Jônata Emerson da Silva Ribeiro ©</p>
          <p className="font-mono">Construído com React, TypeScript, Tailwind & ☕ | Editado com VS-Code e Pesquisas</p>
        </div>
      </div>
    </footer>
  );
};