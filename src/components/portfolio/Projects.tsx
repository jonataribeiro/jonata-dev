import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Dashboard Analytics",
    description:
      "Painel de métricas em tempo real com gráficos interativos, filtros avançados e tema escuro. Construído com foco em performance.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    featured: true,
  },
  {
    title: "API de Tarefas",
    description:
      "REST API com autenticação JWT, validação, testes automatizados e documentação Swagger.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
  },
  {
    title: "E-commerce SPA",
    description:
      "Loja virtual com carrinho persistente, checkout simulado e integração com API de produtos.",
    tags: ["React", "Context API", "Stripe", "Vite"],
  },
  {
    title: "Landing Pages",
    description:
      "Coleção de landing pages responsivas e animadas para portfolios, SaaS e produtos digitais.",
    tags: ["HTML", "CSS", "Framer Motion"],
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-32 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="font-mono text-sm text-primary mb-3">/ 03 — projetos</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight">
              Coisas que <span className="text-gradient">construí</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Uma seleção de projetos pessoais e estudos que mostram minha evolução.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-card-gradient border border-border rounded-2xl p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 ${
                p.featured ? "md:col-span-2" : ""
              }`}
            >
              {p.featured && (
                <span className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">
                  Destaque
                </span>
              )}

              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display font-bold text-2xl group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted-foreground bg-muted/60 border border-border rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Código
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver online
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
