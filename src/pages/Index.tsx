// Exemplo de como deve estar no seu src/pages/Index.tsx


// ... outros imports

import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/interface/Hero";
import { About } from "@/components/interface/About";
import { Stack } from "@/components/interface/Stack";
import { Timeline } from "@/components/interface/Timeline";
import { Projects } from "@/components/interface/Projects";
import { Contact } from "@/components/interface/Contact";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Stack />
      <Timeline />
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Index;