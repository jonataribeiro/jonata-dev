import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquare } from "lucide-react";
import { site } from "@/config/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);
  const whatsappUrl = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/60 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo e Nome do Site — Retornado ao padrão original jonataribeiro.tech */}
        <a
          href="#top"
          className="flex items-center gap-6 group"
          aria-label={`Ir para o topo — ${site.domain}`}
        >
          <div className="relative w-10 h-10 p-[2px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/50 to-transparent border border-white/10 group-hover:border-primary/50 transition-all duration-500">
            <img 
              src="/fivecon-logo.png" 
              alt="Logo" 
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all duration-500" 
            />
          </div>
          
          {/* Nome do site em linha única como era antes */}
          <span className="font-display font-bold text-lg tracking-tighter text-white">
            jonataribeiro<span className="text-primary">.tech</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href} className="relative group">
              <a
                href={l.href}
                className="text-xs uppercase tracking-widest font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Botão Contate-me */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500 shadow-lg shadow-primary/5 hover:shadow-primary/20"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Contate-me
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 border-t border-white/5 bg-background/95 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <ul className="container py-8 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={handleNavClick}
                    className="text-lg font-display font-medium text-muted-foreground hover:text-primary flex items-center justify-between group"
                  >
                    {l.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-xs"
                  onClick={handleNavClick}
                >
                  Vamos conversar?
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};