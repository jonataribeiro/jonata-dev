import { motion } from "framer-motion";
import { stack } from "@/config/site";

export const Stack = () => {
  return (
    <section id="stack" className="py-24 sm:py-32 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">/ 02 — stack</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Stack <span className="text-gradient">técnica</span> em construção.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stack.map((g, i) => {
            const isUso = g.level === "uso";
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-primary/50 hover:shadow-glow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {g.title.replace(/ — .*/, "")}
                  </h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border ${
                      isUso
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-accent/40 bg-accent/10 text-accent"
                    }`}
                  >
                    {isUso ? "em uso" : "estudando"}
                  </span>
                </div>
                <ul className="space-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
