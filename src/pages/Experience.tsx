import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, MapPin, Calendar, GraduationCap, FileCheck } from "lucide-react";

const experiences = [
  {
    company: "Walmart Global Tech",
    location: "Bengaluru, India",
    role: "Senior Software Engineer (Data and AI)",
    period: "June 2022 - Present",
    summary:
      "Working at the intersection of data engineering, AI, and backend systems across streaming pipelines, platform ETL, AI agents, FastAPI services, Spring Boot integrations, and secure large-file workflows built for production scale.",
    tech: ["Spark", "Kafka", "PySpark", "BigQuery", "LangGraph", "LLMs", "FastAPI", "Spring Boot", "GCS"],
  },
  {
    company: "ZS Associates",
    location: "Pune, India",
    role: "Software Engineer - 2 (Big-Data, AWS, Data Modelling)",
    period: "Sept 2021 - June 2022",
    summary:
      "Built analytics and warehouse pipelines for product use cases with focus on Airflow orchestration, Spark optimization, data modeling, and AWS-based data engineering workflows.",
    tech: ["Airflow", "Spark", "AWS", "Data Modeling", "Warehousing", "SQL"],
  },
  {
    company: "Tata Consultancy Services",
    location: "Pune, India",
    role: "Data Engineer",
    period: "Sept 2018 - Sept 2021",
    clients: "Clients: Morgan Stanley, Nassau Re",
    summary:
      "Delivered ETL, cloud migration, warehousing, and backend-integrated data systems for enterprise clients using AWS Glue, PySpark, SQL, and production data quality patterns.",
    tech: ["AWS Glue", "PySpark", "SQL", "Redshift", "Data Lake", "ETL"],
  },
];

const Experience = () => {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl">
              Experience across product companies and consulting environments, with consistent focus on data engineering
              and increasing ownership in AI systems, backend services, and production platform design.
            </p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, expIndex) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: expIndex * 0.1 }}
                className="rounded-[1.75rem] border border-border bg-card p-5 sm:p-7 shadow-card"
              >
                <div className="flex flex-wrap items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold">{exp.company}</h2>
                        <p className="text-foreground font-medium">{exp.role}</p>
                        {exp.clients ? <p className="text-sm text-muted-foreground mt-1">{exp.clients}</p> : null}
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{exp.summary}</p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {exp.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-16"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Education</h2>
            <div className="bg-card rounded-xl p-6 border border-border shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Shri Vaishnav Institute of Tech. and Science</h3>
                  <p className="text-foreground font-medium">B.E. (Honours) in Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    July 2014 - July 2018 · Indore, MP, India
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                    <FileCheck className="h-3.5 w-3.5" />
                    GATE CSE 2020 · 90th Percentile
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
