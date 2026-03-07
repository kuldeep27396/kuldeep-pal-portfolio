import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hybrid RAG Pipeline",
    description: "Intelligent document retrieval platform with dynamic routing between local knowledge base, web search, and hybrid approaches.",
    tech: ["Python", "LangChain", "FAISS", "Groq AI"],
    github: "https://github.com/kuldeep27396",
    featured: true,
  },
  {
    title: "GitHub PR Review Agent",
    description: "Vibe-coded code review system with webhook-based processing using Node.js, GitHub API, and Groq's LLaMA 3.3 70B for security vulnerability detection.",
    tech: ["Node.js", "GitHub API", "Groq", "LLaMA 3.3"],
    github: "https://github.com/kuldeep27396",
    featured: true,
  },
  {
    title: "YouTube AI Browser Extension",
    description: "Chrome extension for instant YouTube video analysis with Perplexity AI integration. Privacy-first design with zero data collection.",
    tech: ["Chrome Extension", "Perplexity AI", "JavaScript"],
    github: "https://github.com/kuldeep27396",
    stats: "80+ installs · 82.56% retention",
    featured: true,
  },
  {
    title: "Apache Pinot Real-time OLAP",
    description: "Real-time analytics system streaming performance metrics through Kafka to Apache Pinot with Docker-containerized architecture.",
    tech: ["Apache Pinot", "Kafka", "Docker", "Python"],
    github: "https://github.com/kuldeep27396",
    featured: false,
  },
  {
    title: "Engineering Blogs",
    description: "Sharing learnings and engineering tools internals in simple way. Published 50+ articles on LinkedIn and Medium covering data engineering topics.",
    tech: ["Technical Writing", "Data Engineering", "System Design"],
    link: "https://medium.com/@kuldeep27396",
    featured: false,
  },
];

const Projects = () => {
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
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">Open Source & Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Building tools for the data engineering community — from AI agents to real-time analytics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://github.com/kuldeep27396" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-card transition-all overflow-hidden ${
                  project.featured ? "ring-1 ring-primary/10" : ""
                }`}
              >
                {project.featured && (
                  <div className="bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary flex items-center gap-1">
                    <Star className="w-3 h-3" /> Featured Project
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {project.stats && (
                    <p className="text-xs font-medium text-primary">{project.stats}</p>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-secondary rounded-md text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
