import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Dados",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Supabase"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Postman"],
  },
  {
    title: "Estudando agora",
    items: ["Testes (Vitest)", "Docker", "Arquitetura limpa", "Inglês técnico"],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-32 relative bg-muted/20">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">/ 02 — stack</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight">
            Tecnologias que <span className="text-gradient">domino</span> e que estudo.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
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
