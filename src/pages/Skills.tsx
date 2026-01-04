import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const skillCategories = [
  {
    title: "Core Expertise",
    description: "Primary technologies I specialize in",
    skills: [
      { name: "Apache Spark", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "PySpark", level: "Expert" },
      { name: "Kafka", level: "Advanced" },
      { name: "Airflow", level: "Advanced" },
      { name: "Data Lakehouse", level: "Advanced" },
    ],
  },
  {
    title: "Cloud Platforms",
    description: "AWS, GCP and Azure services",
    skills: [
      { name: "AWS S3", level: "Expert" },
      { name: "AWS EMR", level: "Expert" },
      { name: "AWS Glue", level: "Advanced" },
      { name: "AWS Lambda", level: "Advanced" },
      { name: "GCP BigQuery", level: "Advanced" },
      { name: "GCP Dataproc", level: "Advanced" },
      { name: "GCS", level: "Advanced" },
      { name: "Azure", level: "Intermediate" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Languages I work with",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "SQL", level: "Expert" },
      { name: "PySpark", level: "Expert" },
      { name: "Scala", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "Shell/Bash", level: "Advanced" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Data storage technologies",
    skills: [
      { name: "BigQuery", level: "Expert" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "Elasticsearch", level: "Advanced" },
      { name: "SQL Server", level: "Intermediate" },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "AI/ML tools and frameworks",
    skills: [
      { name: "LangChain", level: "Advanced" },
      { name: "RAG", level: "Advanced" },
      { name: "AI Agents", level: "Advanced" },
      { name: "MCP Servers", level: "Intermediate" },
      { name: "OpenAI", level: "Advanced" },
      { name: "Hugging Face", level: "Intermediate" },
      { name: "MLflow", level: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Development and deployment",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Jenkins", level: "Advanced" },
      { name: "Git", level: "Expert" },
      { name: "Terraform", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
    ],
  },
  {
    title: "Backend Development",
    description: "Backend frameworks and APIs",
    skills: [
      { name: "Spring Boot", level: "Intermediate" },
      { name: "FastAPI", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "Microservices", level: "Advanced" },
    ],
  },
  {
    title: "Professional Skills",
    description: "Leadership and communication",
    skills: [
      { name: "Technical Writing", level: "Expert" },
      { name: "Problem Solving", level: "Expert" },
      { name: "System Design", level: "Advanced" },
      { name: "Mentoring", level: "Advanced" },
      { name: "Agile Methodology", level: "Advanced" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground";
    case "Advanced":
      return "bg-primary/70 text-primary-foreground";
    case "Intermediate":
      return "bg-primary/40 text-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
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
              Core technologies and professional skills I bring to every project.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                      className={`px-3 py-1.5 text-sm font-mono rounded-md ${getLevelColor(skill.level)}`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Expert
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary/70" /> Advanced
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary/40" /> Intermediate
                  </span>
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
