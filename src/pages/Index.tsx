import { Layout } from "@/components/layout/Layout";
import { PageMeta, PersonJsonLd } from "@/components/PageMeta";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <Layout flushTop>
      <PageMeta title="Kuldeep Pal" path="/" />
      <PersonJsonLd />
      <Hero />
      <Stats />
      <Contact />
    </Layout>
  );
};

export default Index;
