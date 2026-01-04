import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Stats />
        <FeaturedVideo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
