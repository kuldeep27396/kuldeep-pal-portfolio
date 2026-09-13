import { motion } from "framer-motion";
import { ExternalLink, FileCheck } from "lucide-react";
import { Layout, PageHeader } from "@/components/layout/Layout";
import { PageMeta } from "@/components/PageMeta";
import { allCredentials, issuerLogo } from "@/data/certificates";
import { enterOnMount, staggerContainer, staggerItem } from "@/lib/motion";

const Credentials = () => {
  return (
    <Layout>
      <PageMeta
        title="Awards & Credentials"
        path="/certificates"
      />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader
            backLink
            title="Awards & Credentials"
            lede="Walmart awards and achievements, hackathon medals, and professional certifications — one ledger, newest first."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="overflow-hidden rounded-xl bg-card shadow-soft"
          >
            {allCredentials.map((cert) => (
              <motion.div
                key={`${cert.title}-${cert.issued}`}
                variants={staggerItem}
                className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-x-4 gap-y-1 border-b border-border/50 px-4 py-3 transition-colors last:border-b-0 hover:bg-muted/40 sm:px-5 md:grid-cols-[5rem_minmax(0,1.35fr)_minmax(0,1fr)_auto]"
              >
                {/* Date */}
                <p className="tnum self-start pt-0.5 text-xs text-muted-foreground md:text-sm">
                  {cert.issued}
                </p>

                {/* Title + note (issuer moves under the title on mobile) */}
                <div className="min-w-0">
                  <p className="flex flex-wrap items-center gap-2 text-sm font-medium md:text-[15px]">
                    {cert.title}
                    {cert.type === "award" ? (
                      <span className="rounded-full bg-tone-frontend-bg px-2 py-0.5 text-xs font-semibold text-tone-frontend-fg">
                        Award
                      </span>
                    ) : null}
                  </p>
                  {cert.note ? (
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{cert.note}</p>
                  ) : null}
                  <p className="mt-0.5 text-xs text-muted-foreground md:hidden">{cert.issuer}</p>
                </div>

                {/* Issuer (desktop) */}
                <div className="hidden min-w-0 items-center gap-2 md:flex">
                  {issuerLogo(cert) ? (
                    <img
                      src={issuerLogo(cert)}
                      alt=""
                      className="h-4 w-auto max-w-[64px] shrink-0 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <FileCheck className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  )}
                  <span className="truncate text-sm text-muted-foreground">{cert.issuer}</span>
                </div>

                {/* Verify */}
                <div className="self-start pt-0.5 text-right">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Show credential: ${cert.title}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      Verify
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            {...enterOnMount}
            className="tnum mt-4 text-xs text-muted-foreground"
          >
            {allCredentials.length} credentials · awards, achievements &amp; certifications
          </motion.p>
        </div>
      </div>
    </Layout>
  );
};

export default Credentials;
