import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, MapPin, MessageCircle, FileDown } from "lucide-react";
import { site } from "@/config/site";

export const Contact = () => {
  const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
    site.whatsapp.message
  )}`;

  return (
    <section id="contato" className="py-20 sm:py-24 relative">
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
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Em busca da primeira oportunidade no mercado de tecnologia.
            Se meu perfil combina com o que você procura, vamos conversar.
          </p>

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

          <div className="grid sm:grid-cols-2 gap-3 mt-8 text-left">
            {/* E-mail Principal - Link Direto */}
            <a 
              href={`mailto:${site.email}`} 
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient hover:border-primary/50 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-5 h-5 text-primary group-hover:text-inherit" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Main Inbox</p>
                <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">{site.email}</p>
              </div>
            </a>

            {/* E-mail Secundário (.tech) - Link Direto */}
            <a 
              href="mailto:contato@jonataribeiro.tech" 
              className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card-gradient hover:border-primary/50 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Mail className="w-5 h-5 text-primary group-hover:text-inherit" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Secondary Alias</p>
                <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">contato@jonataribeiro.tech</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;

  return (
    <footer className="relative border-t border-white/10 mt-8 bg-black pt-12 pb-8">
      <div aria-hidden className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 mb-10 text-left">
          
          <div className="md:col-span-2 space-y-4">
            <a href="#top" className="group flex items-center gap-4">
              <img 
                src="/fivecon-logo.png" 
                alt="Logo" 
                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" 
              />
              <span className="font-display font-bold text-lg tracking-tighter text-white">
                jonataribeiro<span className="text-primary">.dev</span>
              </span>
            </a>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Analista de Processos e Desenvolvedor Full-Stack focado em transformar desafios em soluções digitais robustas.
            </p>
            
            <div className="flex items-center gap-5 pt-1">
              {site.social.github && (
                <a 
                  href={site.social.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-500 hover:text-white transition-all hover:scale-110 duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {site.social.linkedin && (
                <a 
                  href={site.social.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-500 hover:text-[#0A66C2] transition-all hover:scale-110 duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-semibold text-[10px] uppercase tracking-[0.2em] text-primary">Mapa</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#sobre" className="text-zinc-400 hover:text-primary transition-colors">Sobre</a>
              <a href="#stack" className="text-zinc-400 hover:text-primary transition-colors">Stack</a>
              <a href="#projetos" className="text-zinc-400 hover:text-primary transition-colors">Projetos</a>
              <a href={site.resumeUrl} download className="text-zinc-400 hover:text-primary transition-colors">Currículo</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-semibold text-[10px] uppercase tracking-[0.2em] text-primary">Contato</h4>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
               <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  São Paulo - SP
               </div>
               <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  E-mail Principal
               </a>
               <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-emerald-500 transition-colors">
                  <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                  WhatsApp
               </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-mono">
            © {new Date().getFullYear()} — Jônata Emerson da Silva Ribeiro ©
          </div>
          <div className="flex items-center gap-2 text-[9px] text-zinc-500 font-mono uppercase tracking-tighter text-center sm:text-right">
            Construído e Personalizado com React, VS Code,TypeScript, Tailwind, Cloudflare e Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
};
