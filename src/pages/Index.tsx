import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Timeline } from "@/components/portfolio/Timeline";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { WhatsAppFab } from "@/components/portfolio/WhatsAppFab";

/**
 * Página principal do portfólio.
 *
 * 🎨 BACKGROUND AMBIENTE:
 * Os "orbs" violeta são posicionados aqui (fixed) para criar a atmosfera
 * em todas as seções de uma só vez. Você pode editar posição/cor/tamanho
 * livremente — eles são apenas <div> decorativas.
 */
const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden bg-noise">
      {/* ─── Camada de background ambiente (violeta) ─── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {/* Orbs de luz */}
        <div className="bg-orb bg-orb-primary w-[520px] h-[520px] -top-40 -left-40" />
        <div className="bg-orb bg-orb-accent  w-[420px] h-[420px] top-[30%] -right-32" />
        <div className="bg-orb bg-orb-deep    w-[460px] h-[460px] top-[65%] -left-24" />
        <div className="bg-orb bg-orb-primary w-[380px] h-[380px] bottom-[-120px] right-[20%] opacity-40" />

        {/* Aurora rotativa (mais sutil) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] bg-aurora opacity-30" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
