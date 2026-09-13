import { Layout } from "@/components/layout/Layout";
import { PageMeta, PersonJsonLd } from "@/components/PageMeta";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <Layout flushTop>
      <PageMeta
        title="Kuldeep Pal"
        description="Kuldeep Pal — Senior Software Engineer working across data engineering, AI systems, and backend platforms."
        path="/"
      />
      <PersonJsonLd />
      <Hero />
      <Stats />
      <Contact />
    </Layout>
  );
};

export default Index;
