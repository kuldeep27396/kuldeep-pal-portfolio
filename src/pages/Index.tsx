import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <Layout flushTop>
      <Hero />
      <Stats />
      <Contact />
    </Layout>
  );
};

export default Index;
