import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Calendar, Trophy, Medal, Star, Target, FileCheck } from "lucide-react";

const certifications = [
  {
    title: "Airflow Fundamentals",
    issuer: "Airflow / Astronomer",
    date: "2025",
    description: "Certified in Apache Airflow fundamentals, DAG design, and orchestration best practices.",
    icon: Award,
    type: "certification",
  },
  {
    title: "Data Streaming Engineer",
    issuer: "Confluent Kafka",
    date: "2025",
    description: "Professional certification in Apache Kafka and stream processing for real-time data pipelines.",
    icon: Award,
    type: "certification",
  },
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks",
    date: "2024",
    description: "Data Management Certification covering Databricks platform and lakehouse architecture.",
    icon: Award,
    type: "certification",
  },
];

const awards = [
  {
    title: "L3 to L4 — Promotion to Senior Engineer",
    issuer: "Walmart",
    date: "2025",
    description: "Recognized for technical excellence and leadership in data platform and AI initiatives.",
    icon: Trophy,
  },
  {
    title: "Bravo Award — Engineering Excellence",
    issuer: "Walmart",
    date: "2025",
    description: "Received twice a year for outstanding engineering contributions.",
    icon: Star,
  },
  {
    title: "Impact Awards — Cost Optimization & Mentoring",
    issuer: "Walmart",
    date: "2024",
    description: "Recognized for driving cost savings and mentoring junior engineers across the team.",
    icon: Target,
  },
  {
    title: "GATE CSE — 90th Percentile",
    issuer: "IIT Delhi",
    date: "2020",
    description: "Graduate Aptitude Test in Engineering - Computer Science, conducted by IIT Delhi.",
    icon: FileCheck,
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
            <h1 className="text-4xl font-bold mb-4">Certifications & Awards</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Industry certifications and recognition for technical excellence and impact.
            </p>
          </motion.div>

          {/* Certifications Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Professional Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-card transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <cert.icon className="w-7 h-7 text-primary" />
                    </div>
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm mb-3">
                    <span className="font-medium text-foreground">{cert.issuer}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <award.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{award.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{award.issuer}</span>
                        <span>·</span>
                        <span>{award.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* LinkedIn CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-card rounded-xl border border-border text-center"
          >
            <p className="text-muted-foreground">
              View all certifications and endorsements on{" "}
              <a
                href="https://linkedin.com/in/kuldeep27396"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                LinkedIn
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
