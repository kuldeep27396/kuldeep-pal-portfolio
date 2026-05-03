import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Calendar, ExternalLink, FileCheck } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  skills?: string[];
  credentialUrl?: string;
};

const certificationGroups: Array<{ year: string; items: Certification[] }> = [
  {
    year: "2026",
    items: [
      {
        title: "Engineering Innovation Award",
        issuer: "Walmart Global Tech",
        issued: "Mar 2026",
        skills: ["Innovation", "Architecture", "AI Agents"],
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Langgraph",
        issuer: "LangChain",
        issued: "Oct 2025",
        expires: "Oct 2034",
        credentialId: "brypjmrlds",
        skills: ["GenAI", "LangChain"],
      },
      {
        title: "Data Streaming Engineer",
        issuer: "Confluent",
        issued: "Jul 2025",
        expires: "Jul 2027",
        credentialId: "155446074",
        skills: ["Apache Spark Streaming", "Distributed Systems"],
        credentialUrl:
          "https://sei.caveon.com/score/WyI5NWViYjIxNS1jYjI3LTRiNzYtOWFhOC0zNDkxZjE4YWQ3NTMiLGZhbHNlXQ.XH3TIHdTob_vh-KjljqRutd8y60",
      },
      {
        title: "DAG Authoring for Apache Airflow",
        issuer: "Astronomer",
        issued: "Mar 2025",
        credentialId: "34d34e84-dc09-4240-9e62-de866d30e7ca",
        skills: ["Apache Airflow"],
      },
      {
        title: "Apache Iceberg: 101",
        issuer: "Dremio",
        issued: "Mar 2025",
        credentialId: "66acfa3e81a4aaa8cb03029b",
        skills: ["Apache Iceberg"],
      },
      {
        title: "SQL Certificate",
        issuer: "HackerRank",
        issued: "Jan 2025",
        credentialId: "94bc0149665e",
        skills: ["Big Data"],
      },
      {
        title: "Software Engineer Certificate (Coding, SQL, REST API)",
        issuer: "HackerRank",
        issued: "Jan 2025",
        credentialId: "1de3cd060620",
        skills: ["SQL", "Data Structures", "REST API"],
      },
      {
        title: "L3 to L4 Career Promotion",
        issuer: "Walmart Global Tech",
        issued: "Apr 2025",
        skills: ["Seniority", "Ownership", "Technical Leadership"],
      },
      {
        title: "Bravo Award - Excellence in Execution",
        issuer: "Walmart Global Tech",
        issued: "Jan 2025",
        skills: ["Execution", "Reliability"],
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Academy Accreditation - Databricks Fundamentals",
        issuer: "Databricks",
        issued: "Nov 2024",
        expires: "Nov 2025",
        credentialId: "122644714",
        skills: ["Apache Spark", "PySpark"],
      },
      {
        title: "Spring: Spring Security",
        issuer: "LinkedIn",
        issued: "Sep 2024",
        skills: ["Spring Framework", "Spring Boot"],
      },
      {
        title: "Kubernetes: Microservices (2018)",
        issuer: "LinkedIn",
        issued: "Jun 2024",
        skills: ["Reliability", "Server Side", "Microservices"],
      },
      {
        title: "DATA STRUCTURES & ALGORITHMS MINI-COURSE",
        issuer: "Back To Back SWE",
        issued: "Jan 2024",
        skills: ["Algorithms", "Data Structures"],
      },
      {
        title: "Walmart Impact Award",
        issuer: "Walmart Global Tech",
        issued: "Dec 2024",
        skills: ["Business Impact", "Scale"],
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Hackathon",
        issuer: "Walmart Global Tech",
        issued: "Aug 2023",
      },
      {
        title: "Academy Accreditation - Generative AI Fundamentals",
        issuer: "Databricks",
        issued: "Jul 2023",
        expires: "Jul 2025",
        credentialId: "78724246",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Scala 3 & Functional Programming Essentials",
        issuer: "Rock the JVM",
        issued: "Oct 2022",
        credentialId: "cert_qr6m6xw6",
        skills: ["Scala", "Apache Spark Streaming"],
      },
      {
        title: "Elastic search Masterclass",
        issuer: "Udemy",
        issued: "Sep 2022",
        credentialId: "UC-088e0343-f1ba-4466-ae3d-de2c52ea0dbd",
        skills: ["Elasticsearch"],
      },
      {
        title: "The Practices of High-Performing Employees",
        issuer: "LinkedIn",
        issued: "Oct 2022",
      },
      {
        title: "Astronomer Certification for Apache Airflow Fundamentals",
        issuer: "Astronomer",
        issued: "Feb 2022",
        credentialId: "204f85a3-f256-44b1-9f81-3077cc1e341a",
        skills: ["Apache Airflow"],
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "ML and Data Foundations on AWS",
        issuer: "Udacity",
        issued: "Oct 2021",
        skills: ["Python"],
      },
      {
        title: "Problem Solving",
        issuer: "HackerRank",
        issued: "Dec 2021",
        credentialId: "0eacd252bc7e",
        skills: ["Python"],
      },
      {
        title: "Apache Spark Essential Training",
        issuer: "LinkedIn",
        issued: "Aug 2021",
        skills: ["SQL", "Apache Spark Streaming"],
      },
      {
        title: "Interpersonal Communication",
        issuer: "LinkedIn",
        issued: "Aug 2021",
      },
      {
        title: "CutShort Certified Data Science - Basic",
        issuer: "Cutshort",
        issued: "May 2021",
        credentialId: "46159",
      },
      {
        title: "Data Analytics on AWS",
        issuer: "Amazon Web Services (AWS)",
        issued: "Apr 2021",
        credentialId: "wZ_7a6qPyEu5dfaWTcSrGQ2",
        skills: ["SQL"],
      },
      {
        title: "SQL",
        issuer: "HackerRank",
        issued: "Apr 2021",
        credentialId: "83ba8d31178f",
        skills: ["SQL", "MySQL"],
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Python for Data Science and Machine learning Bootcamp",
        issuer: "Udemy",
        issued: "Sep 2020",
        credentialId: "UC-71092ea2-6f90-44e5-b7ee-ebc4a3969d6a",
        skills: ["Python"],
      },
      {
        title: "Python Basic",
        issuer: "HackerRank",
        issued: "Jul 2020",
        credentialId: "504D41D89016",
        skills: ["Python"],
      },
    ],
  },
  {
    year: "Earlier / Undated",
    items: [
      {
        title: "Product Management Fundamentals",
        issuer: "The Product Folks",
        issued: "Date not listed",
        credentialId: "cc3ed161-3be7-40b7-8b2e-708876667636",
      },
      {
        title: "Introduction to Linux (edX)",
        issuer: "The Linux Foundation",
        issued: "Date not listed",
        credentialId: "e14a964141504f15869757115a76947e",
      },
      {
        title: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
        issuer: "UC San Diego",
        issued: "Date not listed",
        credentialId: "SZKTWL2LE2PK",
      },
    ],
  },
];

const totalCertifications = certificationGroups.reduce((total, group) => total + group.items.length, 0);

const Certificates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Licenses & Certifications</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Public credentials from LinkedIn and internal Engineering Excellence awards from Walmart, reflecting impact across data engineering, AI, and backend systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="text-2xl font-bold gradient-text mb-1">{totalCertifications}</div>
              <p className="text-sm text-muted-foreground">Total credentials listed</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="text-2xl font-bold gradient-text mb-1">2025</div>
              <p className="text-sm text-muted-foreground">Most recent certification wave</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="text-2xl font-bold gradient-text mb-1">Data + AI + Backend</div>
              <p className="text-sm text-muted-foreground">Themes reflected across the credential set</p>
            </div>
          </motion.div>

          <div className="space-y-10">
            {certificationGroups.map((group, groupIndex) => (
              <motion.section
                key={group.year}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * groupIndex }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{group.year}</h2>
                    <p className="text-sm text-muted-foreground">{group.items.length} credential{group.items.length > 1 ? "s" : ""}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {group.items.map((cert) => (
                    <div key={`${group.year}-${cert.title}`} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-card">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
                          <p className="text-sm font-medium text-foreground mt-1">{cert.issuer}</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <FileCheck className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          Issued {cert.issued}
                        </span>
                        {cert.expires ? <span>Expires {cert.expires}</span> : null}
                      </div>

                      {cert.credentialId ? (
                        <p className="mt-3 text-sm text-muted-foreground">
                          Credential ID: <span className="font-mono text-foreground">{cert.credentialId}</span>
                        </p>
                      ) : null}

                      {cert.skills?.length ? (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {cert.credentialUrl ? (
                        <div className="mt-5">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Show credential
                          </a>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificates;
