import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Code2, Database, Brain, Server, Cloud, Workflow, Boxes } from "lucide-react";

type SkillMeta = {
  logo?: string;
  mark?: string;
};

const skillMeta: Record<string, SkillMeta> = {
  PySpark: { logo: "/skill-logos/apachespark.svg" },
  Spark: { logo: "/skill-logos/apachespark.svg" },
  Kafka: { logo: "/skill-logos/apachekafka.svg" },
  Airflow: { logo: "/skill-logos/apacheairflow.svg" },
  BigQuery: { logo: "/skill-logos/googlebigquery.svg" },
  LLMs: { mark: "LLM" },
  "AI Agents": { mark: "AI" },
  RAG: { mark: "RAG" },
  LangChain: { logo: "/skill-logos/langchain.svg" },
  LangGraph: { logo: "/skill-logos/langgraph.svg" },
  FastMCP: { mark: "MCP" },
  "Prompt Engineering": { mark: "PE" },
  Pydantic: { mark: "PYD" },
  FastAPI: { logo: "/skill-logos/fastapi.svg" },
  "REST APIs": { mark: "API" },
  "Spring Boot": { logo: "/skill-logos/springboot.svg" },
  "System Design": { mark: "SYS" },
  Authentication: { mark: "AUTH" },
  "Secure File Flows": { mark: "SEC" },
  Microservices: { mark: "MS" },
  Python: { logo: "/skill-logos/python.svg" },
  SQL: { mark: "SQL" },
  Java: { logo: "/skill-logos/java.svg" },
  Scala: { logo: "/skill-logos/scala.svg" },
  "Shell Scripting": { mark: "SH" },
  AWS: { mark: "AWS" },
  GCP: { logo: "/skill-logos/googlecloud.svg" },
  S3: { mark: "S3" },
  EMR: { mark: "EMR" },
  Glue: { mark: "GL" },
  Dataproc: { mark: "DP" },
  GCS: { logo: "/skill-logos/gcs.svg" },
  Docker: { logo: "/skill-logos/docker.svg" },
  "CI/CD": { mark: "CI" },
  "SQL Databases": { mark: "DB" },
  Redshift: { mark: "RS" },
  Elasticsearch: { logo: "/skill-logos/elasticsearch.svg" },
  "Azure SQL": { mark: "AZ" },
  Milvus: { logo: "/skill-logos/milvus.svg" },
  Observability: { mark: "OBS" },
  "Data Quality": { mark: "DQ" },
  Migration: { mark: "MIG" },
  Orchestration: { mark: "ORCH" },
  Caching: { mark: "CA" },
  "Signed URLs": { mark: "URL" },
  "Platform Reliability": { mark: "SRE" },
  "Data Lake": { mark: "DL" },
  Lakehouse: { mark: "LH" },
  Warehousing: { mark: "WH" },
  "Data Modeling": { mark: "DM" },
};

const getSkillMeta = (skill: string) => {
  return skillMeta[skill] ?? { mark: skill.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "•" };
};

const skillCategories = [
  {
    title: "Data Engineering",
    icon: Database,
    description: "Core data platform and analytics engineering stack.",
    tone: "bg-amber-500/10 text-amber-700",
    skills: ["PySpark", "Spark", "Kafka", "Airflow", "Data Lake", "Lakehouse", "Warehousing", "Data Modeling", "BigQuery"],
  },
  {
    title: "AI and Agents",
    icon: Brain,
    description: "Practical LLM systems and workflow orchestration.",
    tone: "bg-emerald-500/10 text-emerald-700",
    skills: ["LLMs", "AI Agents", "RAG", "LangChain", "LangGraph", "FastMCP", "Prompt Engineering", "Pydantic"],
  },
  {
    title: "Backend Engineering",
    icon: Server,
    description: "Production backend delivery and service design.",
    tone: "bg-sky-500/10 text-sky-700",
    skills: ["FastAPI", "REST APIs", "Spring Boot", "System Design", "Authentication", "Secure File Flows", "Microservices"],
  },
  {
    title: "Programming",
    icon: Code2,
    description: "Languages used across data, APIs, and platform work.",
    tone: "bg-rose-500/10 text-rose-700",
    skills: ["Python", "SQL", "Java", "Scala", "Shell Scripting"],
  },
  {
    title: "Cloud and Infra",
    icon: Cloud,
    description: "Delivery and operations across managed cloud services.",
    tone: "bg-cyan-500/10 text-cyan-700",
    skills: ["AWS", "GCP", "S3", "EMR", "Glue", "Dataproc", "GCS", "Docker", "CI/CD"],
  },
  {
    title: "Databases and Search",
    icon: Boxes,
    description: "Storage and retrieval systems used in production work.",
    tone: "bg-violet-500/10 text-violet-700",
    skills: ["SQL Databases", "Redshift", "Elasticsearch", "Azure SQL", "Milvus"],
  },
  {
    title: "Platform Workflow",
    icon: Workflow,
    description: "Cross-cutting practices around scale and reliability.",
    tone: "bg-orange-500/10 text-orange-700",
    skills: ["Observability", "Data Quality", "Migration", "Orchestration", "Caching", "Signed URLs", "Platform Reliability"],
  },
];

const SkillBadge = ({ skill }: { skill: string }) => {
  const meta = getSkillMeta(skill);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-[9px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
        {meta.logo ? <img src={meta.logo} alt="" className="h-3.5 w-3.5 object-contain" loading="lazy" /> : meta.mark}
      </span>
      <span>{skill}</span>
    </span>
  );
};

const Skills = () => {
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
            className="mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack & Focus Areas</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-border bg-card p-5 sm:p-6 shadow-card"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${category.tone}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{category.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
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

export default Skills;
