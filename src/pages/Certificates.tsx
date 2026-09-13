import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Layout, PageHeader } from "@/components/layout/Layout";
import { PageMeta } from "@/components/PageMeta";
import { allCredentials, issuerLogo, type Certification } from "@/data/certificates";
import { fadeInUp } from "@/lib/motion";

/** Group the sorted ledger into year sections (undated items sink to the end). */
const yearOf = (issued: string): string => {
  const year = issued.split(" ")[1];
  return year && /^\d{4}$/.test(year) ? year : "Earlier";
};

const sections = (() => {
  const map = new Map<string, Certification[]>();
  for (const cert of allCredentials) {
    const year = yearOf(cert.issued);
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(cert);
  }
  return Array.from(map.entries());
})();

const Row = ({ cert }: { cert: Certification }) => (
  <div className="grid grid-cols-1 gap-x-4 gap-y-1 border-b border-border/50 px-4 py-3.5 transition-colors last:border-b-0 hover:bg-accent/25 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:items-start sm:px-5 md:grid-cols-[4.5rem_minmax(0,1.45fr)_minmax(0,1fr)_3.5rem] md:items-center">
    <p className="tnum text-xs text-muted-foreground sm:pt-0.5 md:text-[13px]">{cert.issued}</p>

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
    </div>

    <div className="flex min-w-0 items-center gap-2.5 pl-0 md:pl-2">
      {issuerLogo(cert) ? (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted">
          <img src={issuerLogo(cert)} alt="" className="h-4 w-auto max-w-[56px] object-contain" loading="lazy" />
        </span>
      ) : null}
      <span className="truncate text-[13px] text-muted-foreground">{cert.issuer}</span>
    </div>

    <div className="md:text-right">
      {cert.credentialUrl ? (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${cert.title}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
        >
          Verify
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  </div>
);

const Credentials = () => {
  return (
    <Layout>
      <PageMeta title="Awards & Credentials" path="/certificates" />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader
            backLink
            title="Awards & Credentials"
            lede="Walmart awards and achievements, hackathon medals, and professional certifications — one ledger, newest first."
          />

          <motion.div {...fadeInUp} className="overflow-hidden rounded-xl bg-card shadow-soft">
            {/* Column headers (desktop) */}
            <div className="hidden grid-cols-[4.5rem_minmax(0,1.45fr)_minmax(0,1fr)_3.5rem] gap-x-4 border-b border-border bg-muted/50 px-5 py-2 md:grid">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Date</span>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Credential</span>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Issuer</span>
              <span className="text-right text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Proof</span>
            </div>

            {sections.map(([year, items]) => (
              <section key={year} aria-label={year}>
                <div className="tnum flex items-baseline gap-2.5 border-b border-border/50 bg-accent/20 px-4 py-1.5 sm:px-5">
                  <span className="text-sm font-semibold">{year}</span>
                  <span className="text-xs text-muted-foreground">
                    {items.length} item{items.length > 1 ? "s" : ""}
                  </span>
                </div>
                {items.map((cert) => (
                  <Row key={`${cert.title}-${cert.issued}`} cert={cert} />
                ))}
              </section>
            ))}
          </motion.div>

          <p className="tnum mt-4 text-xs text-muted-foreground">
            {allCredentials.length} credentials · awards, achievements &amp; certifications
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Credentials;
