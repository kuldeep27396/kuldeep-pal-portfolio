import { motion } from "framer-motion";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Newspaper, BellPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sourceLinks } from "@/data/articles.generated";

const Articles = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[data-rssapp-list-widget="true"]');
    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://widget.rss.app/v1/list.js";
    script.async = true;
    script.type = "text/javascript";
    script.dataset.rssappListWidget = "true";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold">Blogs</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <Button variant="outline" className="gap-2" asChild>
              <a href={sourceLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Newspaper className="w-4 h-4" />
                LinkedIn Newsletter
              </a>
            </Button>
            <Button className="gap-2" asChild>
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6983848189787271168"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BellPlus className="w-4 h-4" />
                Subscribe on LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href={sourceLinks.medium} target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4" />
                Medium Profile
              </a>
            </Button>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mb-14"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Live Newsletter Wall</h2>
                <p className="text-muted-foreground mt-2">
                  Embedded view of the LinkedIn newsletter feed for quick browsing.
                </p>
              </div>
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6983848189787271168"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BellPlus className="w-4 h-4" />
                  Subscribe on LinkedIn
                </a>
              </Button>
            </div>

            <div className="rss-embed-shell w-full overflow-hidden rounded-[1.25rem]">
              <rssapp-list id="02YvGSMPwlBwIWEu" />
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mb-14"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Medium Wall</h2>
                <p className="text-muted-foreground mt-2">
                  Embedded view of the Medium feed for fast browsing through the archive.
                </p>
              </div>
              <Button variant="outline" className="gap-2" asChild>
                <a href={sourceLinks.medium} target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4" />
                  Open Medium Profile
                </a>
              </Button>
            </div>

            <div className="rss-embed-shell w-full overflow-hidden rounded-[1.25rem]">
              <rssapp-list id="7MPetCZibcZLILhs" />
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
