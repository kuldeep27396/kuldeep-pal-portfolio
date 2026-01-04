import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, ExternalLink, Calendar } from "lucide-react";

const certificates = [
  {
    title: "Airflow Fundamentals",
    issuer: "Astronomer",
    date: "2024",
    description: "Comprehensive certification covering Apache Airflow fundamentals, DAG design, and production best practices.",
    credentialUrl: "#",
    logo: "🚀",
  },
  {
    title: "Data Streaming Engineer",
    issuer: "Confluent",
    date: "2024",
    description: "Professional certification in Apache Kafka and stream processing for building real-time data pipelines.",
    credentialUrl: "#",
    logo: "🌊",
  },
  {
    title: "Databricks Foundations",
    issuer: "Databricks",
    date: "2024",
    description: "Foundational certification in Databricks platform, covering data engineering and analytics capabilities.",
    credentialUrl: "#",
    logo: "⚡",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
    credentialUrl: "#",
    logo: "☁️",
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023",
    description: "Certification validating skills in designing and building data processing systems on GCP.",
    credentialUrl: "#",
    logo: "🔷",
  },
  {
    title: "Apache Spark Developer",
    issuer: "Databricks",
    date: "2023",
    description: "Certification for Apache Spark development including optimization and performance tuning.",
    credentialUrl: "#",
    logo: "🔥",
  },
];

const Certificates = () => {
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
            <h1 className="text-4xl font-bold mb-4">Professional Certifications</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Industry-recognized certifications validating expertise in data engineering and cloud technologies.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-card transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                    {cert.logo}
                  </div>
                  <Award className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {cert.title}
                  </h2>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-foreground">{cert.issuer}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>

                  {/* View Credential Link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View Credential
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-card rounded-xl border border-border text-center"
          >
            <p className="text-muted-foreground">
              Continuously learning and adding new certifications. 
              <a 
                href="https://linkedin.com/in/kuldeep27396" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                View all certifications on LinkedIn →
              </a>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificates;
