import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, FolderGit2, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const githubStats = [
  { label: "Public repos", value: "122" },
  { label: "Followers", value: "33" },
  { label: "Stars", value: "76" },
];

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  liveApp?: string;
  aboutUrl?: string;
};

const projects: Project[] = [
  {
    title: "Agentic PDF RAG",
    description: "Serverless RAG pipeline for document chat with page-level citations. Features hierarchical chunking, multi-model LLM routing, and session-scoped privacy.",
    tech: ["FastAPI", "Redis", "Next.js 15", "RAG", "Milvus"],
    liveApp: "https://agentic-pdf-rag.vercel.app",
    aboutUrl: "https://agentic-pdf-rag.vercel.app/about",
  },
  {
    title: "pr-review-agent",
    description: "Automated code review agent that analyzes PR sections, generates architectural flowcharts, and suggests actionable fixes under 10 seconds.",
    tech: ["FastAPI", "LangGraph", "LLMs", "Automation"],
    github: "https://github.com/kuldeep27396/pr-review-agent",
  },
  {
    title: "youtube-summary-with-perplexity-extension",
    description: "Browser extension that summarizes YouTube content with AI-assisted prompts and a lightweight product-style user experience.",
    tech: ["JavaScript", "Browser Extension", "Perplexity", "Product Build"],
    github: "https://github.com/kuldeep27396/youtube-summary-with-perplexity-extension",
    liveApp: "https://chromewebstore.google.com/detail/youtube-to-perplexity-ai/jgoiaakanloefcjgaecbmmifbnhecppl",
  },
  {
    title: "airflow-projects-deployed",
    description: "Collection of Airflow deployment and DAG patterns shaped around practical orchestration and production-oriented workflow design.",
    tech: ["Apache Airflow", "Python", "Orchestration", "Deployment"],
    github: "https://github.com/kuldeep27396/airflow-projects-deployed",
  },
  {
    title: "All-Data-engineering-Notebooks-Projects",
    description: "Personal notebooks and mini-projects covering Spark, streaming, warehousing, and hands-on data engineering practice.",
    tech: ["Spark", "Kafka", "SQL", "Data Engineering"],
    github: "https://github.com/kuldeep27396/All-Data-engineering-Notebooks-Projects",
  },
  {
    title: "RealTime-ECommerce-Analytics-Flink",
    description: "Streaming analytics project around real-time e-commerce events, focused on event processing and operational insights.",
    tech: ["Apache Flink", "Streaming", "Analytics", "Kafka"],
    github: "https://github.com/kuldeep27396/RealTime-ECommerce-Analytics-Flink",
  },
  {
    title: "SplitKro",
    description: "Personal expense-sharing application built with product thinking, backend flows, and practical full-stack engineering tradeoffs.",
    tech: ["Full Stack", "Backend", "Product Build", "Application Design"],
    github: "https://github.com/kuldeep27396/SplitKro",
  },
];

const Projects = () => {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">GitHub & Personal Projects</h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl">
              A selection of personal projects from my public GitHub profile, spanning AI tooling, browser products,
              orchestration, and real-time data engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-[1.75rem] border border-border bg-card p-5 sm:p-7 shadow-card mb-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Public GitHub Snapshot</p>
                <h2 className="text-xl sm:text-2xl font-bold">Hands-on personal work beyond the resume</h2>
                <p className="text-muted-foreground max-w-2xl">
                  This section is based on the current public GitHub profile and focuses on projects that reinforce the same story:
                  data engineering depth, AI experimentation, and production-minded backend work.
                </p>
              </div>
              <Button variant="outline" className="w-full justify-center gap-2 sm:w-auto" asChild>
                <a href="https://github.com/kuldeep27396" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  View All on GitHub
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {githubStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-background/80 p-5">
                  <div className="text-2xl font-bold gradient-text mb-1">{item.value}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[1.5rem] border border-border bg-card p-5 sm:p-6 shadow-card"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <FolderGit2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Personal Project</p>
                      <h2 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h2>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full border border-border bg-background">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-5 mt-auto">
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
                  {project.liveApp && (
                    <a
                      href={project.liveApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live App
                    </a>
                  )}
                  {project.aboutUrl && (
                    <a
                      href={project.aboutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      About & Architecture
                    </a>
                  )}
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
