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
  <div className="grid grid-cols-1 gap-x-5 gap-y-1.5 border-b border-border/50 px-4 py-4 transition-colors last:border-b-0 hover:bg-accent/25 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-start sm:px-6">
    {/* Date — stacked month over year for scannability */}
    <p className="tnum leading-tight text-muted-foreground sm:pt-0.5">
      <span className="block text-[13px] font-medium">{cert.issued.split(" ")[0]}</span>
      <span className="block text-sm font-semibold">{cert.issued.split(" ")[1] ?? ""}</span>
    </p>

    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <p className="text-[15px] font-medium leading-snug">{cert.title}</p>
        {cert.type === "award" ? (
          <span className="rounded-full bg-tone-frontend-bg px-2 py-0.5 text-xs font-semibold text-tone-frontend-fg">
            Award
          </span>
        ) : null}
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

      {cert.note ? (
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{cert.note}</p>
      ) : null}

      <div className="mt-1.5 flex min-w-0 items-center gap-2">
        {issuerLogo(cert) ? (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted">
            <img src={issuerLogo(cert)} alt="" className="h-3.5 w-auto max-w-[52px] object-contain" loading="lazy" />
          </span>
        ) : null}
        <span className="truncate text-[13px]">{cert.issuer}</span>
        {cert.expires ? (
          <span className="tnum text-xs text-muted-foreground">· valid to {cert.expires}</span>
        ) : null}
      </div>
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
            {sections.map(([year, items]) => (
              <section key={year} aria-label={year}>
                <div className="flex items-baseline gap-3 border-y border-border/50 bg-accent/25 px-4 py-2 first:border-t-0 sm:px-6">
                  <span className="tnum font-display text-lg font-semibold leading-none">{year}</span>
                  <span className="tnum text-xs text-muted-foreground">
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
