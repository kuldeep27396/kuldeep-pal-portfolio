import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Layout, PageHeader } from "@/components/layout/Layout";
import { PageMeta } from "@/components/PageMeta";
import { TagPill, Reveal } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/motion";

const GITHUB_USER = "kuldeep27396";

/** Live profile stats with hardcoded fallback if the public API is unavailable. */
const FALLBACK_STATS = [
  { label: "Public repos", value: 122 },
  { label: "Followers", value: 33 },
  { label: "Stars earned", value: 76 },
];

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  liveApp?: string;
  aboutUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Agentic PDF RAG",
    description:
      "Serverless RAG pipeline for document chat with page-level citations. Features hierarchical chunking, multi-model LLM routing, and session-scoped privacy.",
    tech: ["FastAPI", "Redis", "Next.js 15", "RAG", "Milvus"],
    liveApp: "https://agentic-pdf-rag.vercel.app",
    aboutUrl: "https://agentic-pdf-rag.vercel.app/about",
    featured: true,
  },
  {
    title: "pr-review-agent",
    description:
      "Automated code review agent that analyzes PR sections, generates architectural flowcharts, and suggests actionable fixes under 10 seconds.",
    tech: ["FastAPI", "LangGraph", "LLMs", "Automation"],
    github: "https://github.com/kuldeep27396/pr-review-agent",
  },
  {
    title: "youtube-summary-with-perplexity-extension",
    description:
      "Browser extension that summarizes YouTube content with AI-assisted prompts and a lightweight product-style user experience.",
    tech: ["JavaScript", "Browser Extension", "Perplexity", "Product Build"],
    github: "https://github.com/kuldeep27396/youtube-summary-with-perplexity-extension",
    liveApp: "https://chromewebstore.google.com/detail/youtube-to-perplexity-ai/jgoiaakanloefcjgaecbmmifbnhecppl",
  },
  {
    title: "airflow-projects-deployed",
    description:
      "Collection of Airflow deployment and DAG patterns shaped around practical orchestration and production-oriented workflow design.",
    tech: ["Apache Airflow", "Python", "Orchestration", "Deployment"],
    github: "https://github.com/kuldeep27396/airflow-projects-deployed",
  },
  {
    title: "All-Data-engineering-Notebooks-Projects",
    description:
      "Personal notebooks and mini-projects covering Spark, streaming, warehousing, and hands-on data engineering practice.",
    tech: ["Spark", "Kafka", "SQL", "Data Engineering"],
    github: "https://github.com/kuldeep27396/All-Data-engineering-Notebooks-Projects",
  },
  {
    title: "RealTime-ECommerce-Analytics-Flink",
    description:
      "Streaming analytics project around real-time e-commerce events, focused on event processing and operational insights.",
    tech: ["Apache Flink", "Streaming", "Analytics", "Kafka"],
    github: "https://github.com/kuldeep27396/RealTime-ECommerce-Analytics-Flink",
  },
  {
    title: "SplitKro",
    description:
      "Personal expense-sharing application built with product thinking, backend flows, and practical full-stack engineering tradeoffs.",
    tech: ["Full Stack", "Backend", "Product Build", "Application Design"],
    github: "https://github.com/kuldeep27396/SplitKro",
  },
  {
    title: "Technical Writing Newsletter",
    description:
      "A professional engineering newsletter with over 12k+ views, focusing on the intersection of distributed systems, data engineering, and AI architecture.",
    tech: ["Technical Writing", "System Design", "Newsletter", "Architecture"],
    liveApp: "https://www.linkedin.com/newsletters/software-data-engineering-6983848189787271168/",
  },
  {
    title: "Apache Pinot Real-time OLAP",
    description:
      "Architectural exploration and deployment of Apache Pinot for real-time analytical queries on massive streaming datasets.",
    tech: ["Apache Pinot", "Real-time OLAP", "Streaming", "Presto/Trino"],
    github: "https://github.com/kuldeep27396/Apache-Pinot-with-Kafka-Realtime-OLAP",
  },
];

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        <Github className="h-4 w-4" aria-hidden="true" />
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
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        Live App
      </a>
    )}
    {project.aboutUrl && (
      <a
        href={project.aboutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline"
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        About &amp; Architecture
      </a>
    )}
  </div>
);

const Projects = () => {
  const [stats, setStats] = useState(FALLBACK_STATS);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const userResp = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
        if (!userResp.ok) return;
        const user = await userResp.json();

        let stars = 0;
        // Stars across all public repos (two pages cover up to 200 repos)
        const repoPages = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&page=2`),
        ]);
        for (const reposResp of repoPages) {
          if (reposResp.ok) {
            const repos = await reposResp.json();
            stars += repos.reduce((sum: number, r: { stargazers_count?: number }) => sum + (r.stargazers_count ?? 0), 0);
          }
        }

        if (!cancelled) {
          setStats([
            { label: "Public repos", value: user.public_repos ?? FALLBACK_STATS[0].value },
            { label: "Followers", value: user.followers ?? FALLBACK_STATS[1].value },
            { label: "Stars earned", value: stars || FALLBACK_STATS[2].value },
          ]);
        }
      } catch {
        // keep fallback stats
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Layout>
      <PageMeta title="GitHub & Personal Projects" path="/projects" />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader
            backLink
            title="GitHub & Personal Projects"
            lede="A selection of personal projects from my public GitHub profile, spanning backend services, AI tooling, real-time data engineering, and browser products."
            action={
              <Button variant="outline" className="justify-center gap-2" asChild>
                <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View All on GitHub
                </a>
              </Button>
            }
          />

          <Reveal className="mb-10 rounded-2xl bg-card p-5 shadow-soft sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-xl sm:text-2xl font-semibold">Hands-on personal work beyond the resume</h2>
              <dl className="flex gap-8 sm:gap-10">
                {stats.map((item) => (
                  <div key={item.label}>
                    <dt className="order-last text-sm text-muted-foreground">{item.label}</dt>
                    <dd className="tnum text-2xl font-semibold">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {featured && (
            <Reveal className="mb-4">
              <article className="group rounded-2xl bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-tone-backend-bg text-tone-backend-fg">
                      <FolderGit2 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold sm:text-2xl">{featured.title}</h2>
                      <p className="mt-0.5 text-sm font-medium text-primary">Featured project</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                  {featured.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <TagPill key={t}>{t}</TagPill>
                  ))}
                </div>
                <ProjectLinks project={featured} />
              </article>
            </Reveal>
          )}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {rest.map((project) => (
              <motion.article
                key={project.title}
                variants={staggerItem}
                className="flex flex-col rounded-xl bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift sm:p-6"
              >
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <TagPill key={t}>{t}</TagPill>
                  ))}
                </div>
                <ProjectLinks project={project} />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
