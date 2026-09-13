import { motion } from "framer-motion";
import { Calendar, ExternalLink, FileCheck } from "lucide-react";
import { Layout, PageHeader } from "@/components/layout/Layout";
import { PageMeta } from "@/components/PageMeta";
import { TagPill } from "@/components/primitives";
import { certificationGroups, totalCertifications } from "@/data/certificates";
import { staggerContainer, staggerItem } from "@/lib/motion";

const Certificates = () => {
  return (
    <Layout>
      <PageMeta title="Licenses & Certifications" path="/certificates" />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader
            backLink
            title="Licenses & Certifications"
            lede="Public credentials from LinkedIn and internal Engineering Excellence awards from Walmart, reflecting impact across data engineering, AI, and backend systems."
          />

          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mb-12 grid gap-4 md:grid-cols-3"
          >
            <div className="flex flex-col rounded-xl bg-card p-5 shadow-soft">
              <dt className="order-last text-sm text-muted-foreground">Total credentials listed</dt>
              <dd className="tnum text-2xl font-semibold">{totalCertifications}</dd>
            </div>
            <div className="flex flex-col rounded-xl bg-card p-5 shadow-soft">
              <dt className="order-last text-sm text-muted-foreground">Most recent certification wave</dt>
              <dd className="tnum text-2xl font-semibold">2025</dd>
            </div>
            <div className="flex flex-col rounded-xl bg-card p-5 shadow-soft">
              <dt className="order-last text-sm text-muted-foreground">Themes reflected across the credential set</dt>
              <dd className="text-2xl font-semibold">Data + AI + Backend</dd>
            </div>
          </motion.dl>

          <div className="space-y-12">
            {certificationGroups.map((group, groupIndex) => (
              <motion.section
                key={group.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.06 * groupIndex }}
                aria-labelledby={`certs-year-${groupIndex}`}
              >
                <div className="mb-5 flex items-baseline gap-3">
                  <h2 id={`certs-year-${groupIndex}`} className="tnum text-2xl font-semibold">
                    {group.year}
                  </h2>
                  <p className="tnum text-sm text-muted-foreground">
                    {group.items.length} credential{group.items.length > 1 ? "s" : ""}
                  </p>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {group.items.map((cert) => (
                    <motion.article
                      key={`${group.year}-${cert.title}`}
                      variants={staggerItem}
                      className="flex flex-col rounded-xl bg-card p-5 shadow-soft sm:p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
                          <p className="mt-1 text-sm font-medium">{cert.issuer}</p>
                        </div>
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <FileCheck className="h-[18px] w-[18px]" aria-hidden="true" />
                        </div>
                      </div>

                      <div className="tnum mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                          Issued {cert.issued}
                        </span>
                        {cert.expires ? <span>Expires {cert.expires}</span> : null}
                      </div>

                      {cert.credentialId ? (
                        <p className="tnum mt-2 text-sm text-muted-foreground">
                          Credential ID: <span className="font-mono text-foreground">{cert.credentialId}</span>
                        </p>
                      ) : null}

                      {cert.skills?.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <TagPill key={skill}>{skill}</TagPill>
                          ))}
                        </div>
                      ) : null}

                      {cert.credentialUrl ? (
                        <div className="mt-4">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                          >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            Show credential
                          </a>
                        </div>
                      ) : null}
                    </motion.article>
                  ))}
                </motion.div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certificates;
