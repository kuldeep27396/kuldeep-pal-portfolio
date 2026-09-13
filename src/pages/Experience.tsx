import { motion } from "framer-motion";
import { MapPin, GraduationCap, FileCheck } from "lucide-react";
import { Layout, PageHeader } from "@/components/layout/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Card, TagPill, Reveal } from "@/components/primitives";
import { staggerContainer, staggerItem } from "@/lib/motion";

const experiences = [
  {
    company: "Walmart Global Tech",
    logo: "/company-logos/walmart.svg",
    location: "Bengaluru, India",
    role: "Senior Software Engineer — Backend, Data & AI",
    period: "June 2022 - Present",
    summary:
      "Working across backend systems and AI — FastAPI services, Spring Boot integrations, streaming pipelines, platform ETL, AI agents, and secure large-file workflows built for production scale.",
    tech: ["Spark", "Kafka", "PySpark", "BigQuery", "LangGraph", "LLMs", "FastAPI", "Spring Boot", "GCS"],
  },
  {
    company: "ZS Associates",
    logo: "/company-logos/zs.svg",
    location: "Pune, India",
    role: "Software Engineer 2 — Data Eng & AI",
    period: "Sept 2021 - June 2022",
    summary:
      "Built backend services in Flask alongside analytics and warehouse pipelines for product use cases, with focus on Airflow orchestration, Spark optimization, data modeling, and AWS-based data engineering.",
    tech: ["Flask", "Airflow", "Spark", "AWS", "Data Modeling", "Warehousing", "SQL"],
  },
  {
    company: "Tata Consultancy Services",
    logo: "/company-logos/tcs.svg",
    location: "Pune, India",
    role: "Software Engineer (Data Eng & Cloud)",
    period: "Sept 2018 - Sept 2021",
    clients: [
      { name: "Morgan Stanley", logo: "/company-logos/morganstanley.svg", wordmark: true },
      { name: "Nassau Re", logo: "/company-logos/nassau.png" },
    ],
    summary:
      "Delivered ETL, cloud migration, warehousing, and backend-integrated systems for enterprise clients on AWS — using AWS Glue, PySpark, SQL, and production data-quality patterns.",
    tech: ["AWS Glue", "PySpark", "SQL", "Redshift", "Data Lake", "ETL"],
  },
];

const Experience = () => {
  return (
    <Layout>
      <PageMeta title="Work Experience" path="/experience" />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader
            backLink
            title="Work Experience"
            lede="Experience across product companies and consulting environments, with a consistent focus on software engineering — backend services, data platforms, and increasing ownership in AI systems and production platform design."
          />

          <div className="relative">
            {/* Timeline rail — brand gradient from terracotta to teal */}
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/50 to-secondary/40"
              aria-hidden="true"
            />

            <motion.ol
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-8"
            >
              {experiences.map((exp) => (
                <motion.li key={exp.company} variants={staggerItem} className="relative pl-10">
                  <span
                    className="absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background"
                    aria-hidden="true"
                  />
                  <Card className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                      <div className="flex items-center gap-3">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="h-6 w-auto max-w-[110px] object-contain"
                          loading="lazy"
                        />
                        <h2 className="text-xl sm:text-2xl font-semibold">{exp.company}</h2>
                      </div>
                      <p className="tnum text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <p className="mt-1 font-medium">{exp.role}</p>
                    <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {exp.location}
                    </p>
                    {exp.clients ? (
                      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-muted-foreground">
                        <span>Clients:</span>
                        {exp.clients.map((client) =>
                          client.wordmark ? (
                            // Wordmark logos speak their own name — render at
                            // readable width, no adjacent text
                            <span
                              key={client.name}
                              className="inline-flex items-center rounded-full bg-muted px-3 py-1.5"
                            >
                              <img
                                src={client.logo}
                                alt={client.name}
                                className="h-3.5 w-auto object-contain"
                                loading="lazy"
                              />
                            </span>
                          ) : (
                            <span
                              key={client.name}
                              className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1"
                            >
                              <img src={client.logo} alt="" className="h-4 w-4 object-contain" loading="lazy" />
                              <span className="text-xs font-medium text-foreground">{client.name}</span>
                            </span>
                          ),
                        )}
                      </p>
                    ) : null}
                    <p className="mt-4 max-w-[68ch] text-sm leading-relaxed text-muted-foreground md:text-base">
                      {exp.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tech.map((item) => (
                        <TagPill key={item}>{item}</TagPill>
                      ))}
                    </div>
                  </Card>
                </motion.li>
              ))}
            </motion.ol>
          </div>

          <Reveal delay={0.1} className="mt-12">
            <Card className="p-5 sm:p-7">
              <div className="flex flex-wrap items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Shri Vaishnav Institute of Tech. and Science</h2>
                  <p className="mt-1 font-medium">B.E. (Honours) in Computer Science Engineering</p>
                  <p className="tnum mt-1 text-sm text-muted-foreground">
                    July 2014 - July 2018 · Indore, MP, India
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                    <FileCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="tnum">GATE CSE 2020 · 90th Percentile</span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
