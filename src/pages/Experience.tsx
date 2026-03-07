import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "Walmart Global Tech",
    location: "Bengaluru, India",
    role: "Senior Software Engineer (GenAI, Data Platform)",
    period: "June 2022 – Present",
    logo: "🏪",
    color: "bg-primary/10 text-primary",
    achievements: [
      {
        title: "Gift Card Fraud Detection",
        description: "Architected a Streaming Pipeline processing 8K msg/sec (2TB/day) using Spark, Kafka, Elasticsearch. Improved latency from 180s to 40s.",
        impact: "$4M/year fraud recovery",
      },
      {
        title: "Insurance Fraud Investigation",
        description: "Leading product and developed batch ETL processing 750K daily records using PySpark, BigQuery. Implemented LLM classification and detection.",
        impact: "$544K/year savings",
      },
      {
        title: "GenAI Agent",
        description: "Architected multi-tenant AI agent (LangGraph) with custom FAST-MCP servers for Data pipeline debugging. Built enterprise synthetic data generator with optimized LLM tokens.",
        impact: "Enterprise AI automation",
      },
      {
        title: "SEC Compliance Automation",
        description: "Built daily batch pipeline generating 10K+ personalized SEC blackout notifications in 2 minutes.",
        impact: "$50K annual savings",
      },
      {
        title: "Healthcare Compliance & Risk Detection",
        description: "Developed Walmart Pharmacy ETL integrating Social Media and US Medical Board data with NLP-based entity resolution for automated prescriber risk investigation.",
        impact: "Automated risk detection",
      },
      {
        title: "Data Migration & Orchestration",
        description: "Executed zero-downtime 2TB migration (200+ tables) and built 15 Airflow DAGs with quality monitoring.",
        impact: "Zero-downtime migration",
      },
      {
        title: "Walmart Aviation",
        description: "Developed REST API service using Spring Boot to generate passenger flight itineraries with intelligent caching.",
        impact: "Optimized data aggregation",
      },
      {
        title: "Risk Investigation CMS",
        description: "Owned end-to-end design of file upload/download system. Integrated GCS signed URLs with security for large files.",
        impact: "Eliminated server crashes",
      },
    ],
  },
  {
    company: "ZS Associates",
    location: "Pune, India",
    role: "Data Engineer - 2 (Big-Data, AWS, Data Modelling)",
    period: "Sept 2021 – June 2022",
    logo: "📊",
    color: "bg-accent text-accent-foreground",
    achievements: [
      {
        title: "Clinical Trial Analytics (ZAIDYN™)",
        description: "Contributed to ZAIDYN™ clinical trial planning SaaS as key member of Data Platform team for Unified Data Analytics Solution.",
        impact: "Enterprise SaaS product",
      },
      {
        title: "Data Warehouse Pipeline",
        description: "Designed data pipeline using Airflow, integrating 12 datasets for Clinical Trial Feasibility Analysis Data Warehouse.",
        impact: "12 datasets integrated",
      },
      {
        title: "Spark Performance Optimization",
        description: "Optimized Spark jobs through partitioning strategies, broadcast joins, and memory tuning. Reduced processing time from 6 hours to 3.5 hours.",
        impact: "40% cost savings on EMR",
      },
      {
        title: "Entity Resolution",
        description: "Implemented entity resolution using Dedupe library and Spark SQL, achieving high match accuracy across 10M+ records.",
        impact: "10M+ records unified",
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    location: "Pune, India",
    role: "Data Engineer (Clients: Morgan Stanley, Nassau Re)",
    period: "Sept 2018 – Sept 2021",
    logo: "💼",
    color: "bg-secondary text-secondary-foreground",
    achievements: [
      {
        title: "ReInsurance Data Pipelines",
        description: "Developed AWS-Glue scripts using Python, PySpark, SQL for DataLake and Redshift Data Warehouse with Data Quality checks.",
        impact: "Enterprise data lake",
      },
      {
        title: "Cloud Migration Orchestration",
        description: "Automated Data Pipeline for Cloud Migration with AWS-Lambda, Step Function, and Athena for Batch Processing.",
        impact: "Automated cloud migration",
      },
      {
        title: "Banking Data Reporting",
        description: "Streamlined executive reporting by developing automated ETL pipelines, reducing report generation time.",
        impact: "Faster decision-making",
      },
      {
        title: "Alerts Pipeline Automation",
        description: "Automated alert handling using Python and Sockeye API.",
        impact: "50% workload reduction",
      },
    ],
  },
];

const Experience = () => {
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
            <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              7+ years building scalable data platforms, streaming systems, and AI solutions at top companies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            {experiences.map((exp, expIndex) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: expIndex * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                {/* Company Card */}
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  {/* Header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-wrap items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${exp.color} flex items-center justify-center text-2xl`}>
                        {exp.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold">{exp.company}</h2>
                        <p className="text-foreground font-medium">{exp.role}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achievement.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: expIndex * 0.15 + achIndex * 0.05 }}
                          className="p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
                        >
                          <h3 className="font-semibold text-sm mb-1.5">{achievement.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                            {achievement.description}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
                            <TrendingUp className="w-3 h-3" />
                            {achievement.impact}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="bg-card rounded-xl p-6 border border-border md:ml-16 relative">
              <div className="absolute left-[-2.25rem] top-4 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold">Shri Vaishnav Institute of Tech. and Science</h3>
                  <p className="text-foreground font-medium">B.E. (Honours) in Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground mt-1">CGPA: 7.83/10 · July 2014 – July 2018 · Indore, MP, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GATE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 bg-card rounded-xl p-6 border border-border md:ml-16"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <h3 className="font-bold">GATE CSE 2020</h3>
                <p className="text-sm text-muted-foreground">90th Percentile — IIT Delhi</p>
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
