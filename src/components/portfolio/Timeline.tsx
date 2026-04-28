import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FileDown } from "lucide-react";
import { timeline, site } from "@/config/site";

const iconMap = {
  education: GraduationCap,
  experience: Briefcase,
};

const labelMap = {
  education: "Formação",
  experience: "Experiência",
};

export const Timeline = () => {
  return (
    <section id="trajetoria" className="py-24 sm:py-32 relative">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="font-mono text-sm text-primary mb-3">/ 03 — trajetória</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Minha <span className="text-shine">trajetória</span> acadêmica
              e profissional.
            </h2>
          </div>
          <a
            href={site.resumeUrl}
            download
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-semibold hover:border-primary hover:text-primary hover:shadow-glow-sm transition-all"
          >
            <FileDown className="w-4 h-4" />
            Baixar Currículo (PDF)
          </a>
        </motion.div>

        <div className="relative">
          {/* Linha vertical */}
          <div
            className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent"
            aria-hidden
          />

          <ol className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.type];
              return (
                <motion.li
                  key={`${item.period}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Marcador */}
                  <span className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-card border border-primary/40 shadow-glow-sm">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </span>

                  <div className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                        {item.period}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {labelMap[item.type]}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.org}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
