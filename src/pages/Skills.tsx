import { motion } from "framer-motion";
import { Code2, Database, Brain, Server, Cloud, Workflow, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";
import { Layout, PageHeader } from "@/components/layout/Layout";
import { PageMeta } from "@/components/PageMeta";
import { staggerContainer, staggerItem } from "@/lib/motion";

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
    tone: "bg-tone-data-bg text-tone-data-fg",
    skills: ["PySpark", "Spark", "Kafka", "Airflow", "Data Lake", "Lakehouse", "Warehousing", "Data Modeling", "BigQuery", "Delta Lake", "Hadoop/Hive"],
  },
  {
    title: "AI and Agents",
    icon: Brain,
    description: "Practical LLM systems and workflow orchestration.",
    tone: "bg-tone-ai-bg text-tone-ai-fg",
    skills: ["LLMs", "AI Agents", "RAG", "LangChain", "LangGraph", "FastMCP", "Prompt Engineering", "Pydantic"],
  },
  {
    title: "Backend Engineering",
    icon: Server,
    description: "Production backend delivery and service design.",
    tone: "bg-tone-backend-bg text-tone-backend-fg",
    skills: ["FastAPI", "REST APIs", "Spring Boot", "System Design", "Authentication", "Secure File Flows", "Microservices"],
  },
  {
    title: "Programming",
    icon: Code2,
    description: "Languages used across data, APIs, and platform work.",
    tone: "bg-tone-craft-bg text-tone-craft-fg",
    skills: ["Python", "SQL", "Java", "Scala", "Shell Scripting"],
  },
  {
    title: "Cloud and Infra",
    icon: Cloud,
    description: "Delivery and operations across managed cloud services.",
    tone: "bg-tone-cloud-bg text-tone-cloud-fg",
    skills: ["AWS", "GCP", "S3", "EMR", "Glue", "Dataproc", "GCS", "Docker", "Kubernetes", "Git", "CI/CD"],
  },
  {
    title: "Databases and Search",
    icon: Boxes,
    description: "Storage and retrieval systems used in production work.",
    tone: "bg-tone-frontend-bg text-tone-frontend-fg",
    skills: ["SQL Databases", "Redshift", "Elasticsearch", "Azure SQL", "Milvus"],
  },
  {
    title: "Platform Workflow",
    icon: Workflow,
    description: "Cross-cutting practices around scale and reliability.",
    tone: "bg-tone-data-bg text-tone-data-fg",
    skills: ["Observability", "Data Quality", "Migration", "Orchestration", "Caching", "Signed URLs", "Platform Reliability"],
  },
];

const SkillBadge = ({ skill }: { skill: string }) => {
  const meta = getSkillMeta(skill);

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground">
      {/* Monogram is decorative — the skill name is adjacent text. Text marks get a wider pill so 3-4 letter codes never clip. */}
      <span
        aria-hidden="true"
        className={cn(
          "flex h-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background text-[10px] font-bold uppercase tracking-[0.04em] text-muted-foreground",
          meta.logo ? "w-5" : "min-w-5 px-1",
        )}
      >
        {meta.logo ? <img src={meta.logo} alt="" className="h-3.5 w-3.5 object-contain" loading="lazy" /> : meta.mark}
      </span>
      <span>{skill}</span>
    </span>
  );
};

const Skills = () => {
  return (
    <Layout>
      <PageMeta title="Tech Stack & Focus Areas" path="/skills" />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader backLink title="Tech Stack & Focus Areas" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {skillCategories.map((category) => (
              <motion.section
                key={category.title}
                variants={staggerItem}
                className="rounded-xl bg-card p-5 shadow-soft sm:p-6"
                aria-labelledby={`skills-${category.title.replace(/[^a-z]/gi, "-").toLowerCase()}`}
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${category.tone}`}>
                    <category.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id={`skills-${category.title.replace(/[^a-z]/gi, "-").toLowerCase()}`} className="font-semibold">
                      {category.title}
                    </h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
