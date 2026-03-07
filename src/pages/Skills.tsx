import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "SQL", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: "Shell Scripting", level: "Advanced" },
      { name: "Scala", level: "Advanced" },
    ],
  },
  {
    title: "Big Data",
    icon: "⚡",
    skills: [
      { name: "Apache Spark (PySpark)", level: "Expert" },
      { name: "Scala-Spark", level: "Expert" },
      { name: "Apache Kafka", level: "Expert" },
      { name: "Apache Airflow", level: "Expert" },
      { name: "Databricks", level: "Advanced" },
      { name: "Hadoop / Hive", level: "Advanced" },
      { name: "Delta Lake", level: "Advanced" },
    ],
  },
  {
    title: "Cloud — AWS",
    icon: "☁️",
    skills: [
      { name: "S3", level: "Expert" },
      { name: "EMR", level: "Expert" },
      { name: "Glue", level: "Advanced" },
      { name: "Redshift", level: "Advanced" },
      { name: "Lambda", level: "Advanced" },
    ],
  },
  {
    title: "Cloud — GCP",
    icon: "🔷",
    skills: [
      { name: "BigQuery", level: "Expert" },
      { name: "Dataproc", level: "Advanced" },
      { name: "GCS", level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    icon: "🔧",
    skills: [
      { name: "Spring Boot", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "Microservices", level: "Advanced" },
    ],
  },
  {
    title: "GenAI & AI",
    icon: "🤖",
    skills: [
      { name: "LangChain", level: "Advanced" },
      { name: "LangGraph", level: "Advanced" },
      { name: "RAG", level: "Advanced" },
      { name: "Pydantic", level: "Advanced" },
      { name: "FastMCP", level: "Advanced" },
      { name: "AI Agents", level: "Advanced" },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "BigQuery", level: "Expert" },
      { name: "Elasticsearch", level: "Advanced" },
      { name: "Azure SQL", level: "Intermediate" },
      { name: "Milvus", level: "Intermediate" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: "🏗️",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Jenkins", level: "Advanced" },
      { name: "Terraform", level: "Intermediate" },
      { name: "Git", level: "Expert" },
      { name: "CI/CD", level: "Advanced" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground";
    case "Advanced":
      return "bg-primary/60 text-primary-foreground";
    case "Intermediate":
      return "bg-primary/30 text-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const getLevelWidth = (level: string) => {
  switch (level) {
    case "Expert": return "w-full";
    case "Advanced": return "w-3/4";
    case "Intermediate": return "w-1/2";
    default: return "w-1/4";
  }
};

const Skills = () => {
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
            <h1 className="text-4xl font-bold mb-4">Tech Stack & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Core technologies and tools I use to build scalable data platforms and AI systems.
            </p>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" /> Expert
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary/60" /> Advanced
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary/30" /> Intermediate
            </span>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.08 + skillIndex * 0.03 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-mono font-medium">{skill.name}</span>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: categoryIndex * 0.08 + skillIndex * 0.05, duration: 0.6 }}
                          className={`${getLevelWidth(skill.level)} bg-primary/70 rounded-full h-1.5`}
                        />
                      </div>
                    </motion.div>
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
