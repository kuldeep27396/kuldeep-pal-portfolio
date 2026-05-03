import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Newspaper, BellPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sourceLinks, articles } from "@/data/articles.generated";

const Articles = () => {

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6">
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
            <h1 className="text-3xl sm:text-4xl font-bold">Blogs</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8"
          >
            <Button variant="outline" className="w-full justify-center gap-2 sm:w-auto" asChild>
              <a href={sourceLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Newspaper className="w-4 h-4" />
                LinkedIn Newsletter
              </a>
            </Button>
            <Button className="w-full justify-center gap-2 sm:w-auto" asChild>
              <a
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6983848189787271168"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BellPlus className="w-4 h-4" />
                Subscribe on LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-center gap-2 sm:w-auto" asChild>
              <a href={sourceLinks.medium} target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4" />
                Medium Profile
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {articles.map((article, index) => (
              <a
                key={`${article.title}-${index}`}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-[1.5rem] border border-border bg-card overflow-hidden hover:shadow-card transition-shadow"
              >
                {article.image && (
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
                    <span className="uppercase tracking-wider text-primary">{article.sourceLabel}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1" dangerouslySetInnerHTML={{ __html: article.description }} />
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
