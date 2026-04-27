import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import { about } from "@/config/site";

const pillars = [
  {
    icon: Code2,
    title: "Disciplina técnica",
    text: "Código tipado, modular e mobile-first. Não escrevo para rodar — escrevo para durar.",
  },
  {
    icon: Lightbulb,
    title: "Visão analítica",
    text: "Anos lidando com fluxos operacionais críticos. Depuro sistemas com a mesma clareza.",
  },
  {
    icon: Rocket,
    title: "Foco em resultado",
    text: "Resiliência sob pressão e entrega de produto. Técnica a serviço da utilidade real.",
  },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">/ 01 — sobre mim</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-3xl">
            Transição estratégica para o{" "}
            <span className="text-gradient">desenvolvimento de software</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-card-gradient border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
