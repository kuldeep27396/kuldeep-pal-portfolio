import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Offerings } from "@/components/Offerings";
import { Skills } from "@/components/Skills";
import { Playbook } from "@/components/Playbook";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <Stats />
        <section id="skills">
          <Skills />
        </section>
        <Offerings />
        <Playbook />
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
