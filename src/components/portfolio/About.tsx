import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Código limpo",
    text: "Componentes bem estruturados, tipados e fáceis de manter.",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado contínuo",
    text: "Estudo diário, projetos práticos e curiosidade que não para.",
  },
  {
    icon: Rocket,
    title: "Foco em entrega",
    text: "Da ideia ao deploy: produtos funcionais que resolvem problemas.",
  },
];

export const About = () => {
  return (
    <section id="sobre" className="py-32 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">/ 01 — sobre mim</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight max-w-3xl">
            Transformando linhas de código em <span className="text-gradient">soluções reais</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Sou desenvolvedor em formação, focado em <span className="text-foreground">desenvolvimento web moderno</span> com
              JavaScript, TypeScript e o ecossistema React. Acredito que o melhor código é
              aquele que outras pessoas conseguem ler, evoluir e confiar.
            </p>
            <p>
              Cada projeto que construo é um passo intencional: aprendo uma ferramenta nova,
              refino um conceito de design, ou resolvo um problema que antes parecia impossível.
              Meu objetivo é entrar no mercado de trabalho e contribuir desde o primeiro dia,
              somando à equipe e ao produto.
            </p>
            <p>
              Quando não estou codando, estou aprendendo sobre <span className="text-foreground">UI/UX, arquitetura de software</span> e
              boas práticas que me ajudam a crescer como profissional e como pessoa.
            </p>
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
