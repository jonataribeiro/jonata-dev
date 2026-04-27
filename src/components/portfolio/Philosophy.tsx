import { motion } from "framer-motion";
import { philosophy } from "@/config/site";

/**
 * Seção Filosofia de Código.
 * Três princípios que guiam minhas decisões técnicas.
 *
 * Estilo: Bento minimalista, glassmorphism sutil.
 * Para editar: src/config/site.ts → philosophy
 */
export const Philosophy = () => {
  return (
    <section id="filosofia" className="py-24 sm:py-32 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-3xl"
        >
          <p className="font-mono text-sm text-primary mb-3">/ 05 — filosofia de código</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Por que <span className="text-gradient">este portfólio</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {philosophy.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {philosophy.pillars.map((p, i) => (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 hover:border-primary/40 transition-colors"
            >
              <span className="font-mono text-xs text-primary/80 tracking-wider">
                {p.number}
              </span>
              <h3 className="font-display font-bold text-2xl mt-2 mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
