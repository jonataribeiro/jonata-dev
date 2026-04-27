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
          {stack.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {g.title}
              </h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};
