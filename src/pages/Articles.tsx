import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Building Scalable Data Pipelines with Apache Spark",
    description: "Learn how to design and implement production-ready data pipelines that can process terabytes of data efficiently using Apache Spark and best practices.",
    date: "2024",
    readTime: "10 min read",
    tags: ["Apache Spark", "Data Engineering", "Python"],
    link: "https://medium.com/@kuldeep27396",
  },
  {
    title: "Real-Time Streaming with Apache Kafka",
    description: "A comprehensive guide to building real-time streaming applications using Apache Kafka, covering producers, consumers, and stream processing.",
    date: "2024",
    readTime: "12 min read",
    tags: ["Kafka", "Streaming", "Real-Time"],
    link: "https://medium.com/@kuldeep27396",
  },
  {
    title: "AWS Data Lake Architecture Best Practices",
    description: "Deep dive into designing and implementing a modern data lake on AWS using S3, Glue, and EMR for analytics at scale.",
    date: "2024",
    readTime: "15 min read",
    tags: ["AWS", "Data Lake", "Architecture"],
    link: "https://medium.com/@kuldeep27396",
  },
  {
    title: "LangChain and RAG for Data Engineers",
    description: "Exploring how data engineers can leverage LangChain and RAG patterns to build intelligent data applications and automate workflows.",
    date: "2024",
    readTime: "8 min read",
    tags: ["LangChain", "RAG", "AI"],
    link: "https://medium.com/@kuldeep27396",
  },
  {
    title: "Airflow Best Practices for Production",
    description: "Tips and tricks for running Apache Airflow in production, covering DAG design, monitoring, and scaling strategies.",
    date: "2024",
    readTime: "10 min read",
    tags: ["Airflow", "Orchestration", "DevOps"],
    link: "https://medium.com/@kuldeep27396",
  },
  {
    title: "GCP BigQuery Optimization Techniques",
    description: "Advanced techniques for optimizing BigQuery queries and reducing costs while maintaining performance.",
    date: "2024",
    readTime: "12 min read",
    tags: ["GCP", "BigQuery", "Optimization"],
    link: "https://medium.com/@kuldeep27396",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Technical deep dives and tutorials on data engineering, cloud platforms, and AI.
            </p>
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <Button variant="outline" className="gap-2" asChild>
              <a 
                href="https://linkedin.com/in/kuldeep27396/recent-activity/articles/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                View All Articles on LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-card transition-all"
              >
                {/* Article Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/30">{index + 1}</div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary rounded text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-1 text-sm font-medium text-primary">
                    Read Article
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
