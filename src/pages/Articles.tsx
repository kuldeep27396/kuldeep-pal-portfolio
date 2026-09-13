import { motion } from "framer-motion";
import { Layout, PageHeader } from "@/components/layout/Layout";
import { PageMeta } from "@/components/PageMeta";
import { BookOpen, Newspaper, BellPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TagPill } from "@/components/primitives";
import { sourceLinks, articles } from "@/data/articles.generated";

const Articles = () => {

  return (
    <Layout>
      <PageMeta title="Blogs" path="/articles" />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader backLink title="Blogs" />

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
            <Button variant="outline" className="w-full justify-center gap-2 sm:w-auto" asChild>
              <a href={sourceLinks.substack} target="_blank" rel="noopener noreferrer">
                <Newspaper className="w-4 h-4" />
                Substack Newsletter
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
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
            <Button variant="outline" className="w-full justify-center gap-2 sm:w-auto" asChild>
              <a href={sourceLinks.substack} target="_blank" rel="noopener noreferrer">
                <Newspaper className="w-4 h-4" />
                Substack Newsletter
              </a>
            </Button>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {articles.map((article, index) => (
              <a
                key={`${article.title}-${index}`}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                {article.image && (
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="tnum mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span className="text-primary">{article.sourceLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="mb-3 text-lg font-semibold transition-colors line-clamp-2 group-hover:text-primary">
                    {article.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <TagPill key={tag}>#{tag}</TagPill>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
