import { motion } from "framer-motion";
import { ExternalLink, Lightbulb, Medal, Target, TrendingUp, Zap, type LucideIcon } from "lucide-react";
import { Layout, PageHeader } from "@/components/layout/Layout";
import { PageMeta } from "@/components/PageMeta";
import { awards, certifications, issuerLogo, type Certification } from "@/data/certificates";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

/** Per-award icon + tone so the cards don't read as five clones. */
const awardVisuals: Record<string, { icon: LucideIcon; tone: string }> = {
  "Engineering Innovation Award": { icon: Lightbulb, tone: "bg-tone-ai-bg text-tone-ai-fg" },
  "Hackathon — Bronze Medal (3rd Place)": { icon: Medal, tone: "bg-tone-frontend-bg text-tone-frontend-fg" },
  "L3 to L4 Career Promotion": { icon: TrendingUp, tone: "bg-tone-backend-bg text-tone-backend-fg" },
  "Bravo Award — Excellence in Execution": { icon: Zap, tone: "bg-tone-data-bg text-tone-data-fg" },
  "Walmart Impact Award": { icon: Target, tone: "bg-tone-craft-bg text-tone-craft-fg" },
};

const AwardCard = ({ award }: { award: Certification }) => {
  const visual = awardVisuals[award.title] ?? { icon: Lightbulb, tone: "bg-tone-ai-bg text-tone-ai-fg" };
  const logo = issuerLogo(award);

  return (
    <motion.article variants={staggerItem} className="flex flex-col rounded-xl bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${visual.tone}`}>
          <visual.icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {logo ? (
          <img src={logo.src} alt="" className="h-4 w-auto max-w-[72px] object-contain" loading="lazy" />
        ) : null}
      </div>

      <h3 className="mt-3.5 text-[15px] font-semibold leading-snug">{award.title}</h3>
      {award.note ? (
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{award.note}</p>
      ) : null}

      <div className="mt-auto flex items-center justify-between pt-3.5">
        <span className="tnum text-xs text-muted-foreground">{award.issued}</span>
        {award.credentialUrl ? (
          <a
            href={award.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${award.title}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            Verify
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
};

/** Group the sorted ledger into year sections (undated items sink to the end). */
const yearOf = (issued: string): string => {
  const year = issued.split(" ")[1];
  return year && /^\d{4}$/.test(year) ? year : "Earlier";
};

const ledgerSections = (() => {
  const map = new Map<string, Certification[]>();
  for (const cert of certifications) {
    const year = yearOf(cert.issued);
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(cert);
  }
  return Array.from(map.entries());
})();

const LedgerRow = ({ cert }: { cert: Certification }) => {
  const logo = issuerLogo(cert);

  return (
  <div className="grid grid-cols-1 gap-x-5 gap-y-1.5 border-b border-border/50 px-4 py-4 transition-colors last:border-b-0 hover:bg-accent/25 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:items-start sm:px-6">
    <p className="tnum leading-tight text-muted-foreground sm:pt-0.5">
      <span className="block text-[13px] font-medium">{cert.issued.split(" ")[0]}</span>
      <span className="block text-sm font-semibold">{cert.issued.split(" ")[1] ?? ""}</span>
    </p>

    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <p className="text-[15px] font-medium leading-snug">{cert.title}</p>
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
        {logo ? (
          <span
            className={
              logo.wordmark
                ? "flex h-6 shrink-0 items-center justify-center rounded-md bg-muted px-1.5"
                : "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-muted"
            }
          >
            <img src={logo.src} alt="" className={logo.wordmark ? "h-3 w-auto object-contain" : "h-3.5 w-auto max-w-[52px] object-contain"} loading="lazy" />
          </span>
        ) : null}
        {logo?.wordmark ? null : <span className="truncate text-[13px]">{cert.issuer}</span>}
        {cert.expires ? (
          <span className="tnum text-xs text-muted-foreground">· valid to {cert.expires}</span>
        ) : null}
      </div>
    </div>
  </div>
  );
};

const Credentials = () => {
  return (
    <Layout>
      <PageMeta title="Awards & Credentials" path="/certificates" />
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader
            backLink
            title="Awards & Credentials"
            lede="Walmart awards and achievements, hackathon medals, and professional certifications — one page, newest first."
          />

          {/* Awards — hero cards */}
          <motion.section
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            aria-label="Awards and achievements"
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {awards.map((award) => (
              <AwardCard key={award.title} award={award} />
            ))}
          </motion.section>

          {/* Certifications — compact ledger */}
          <motion.section {...fadeInUp} aria-label="Certifications">
            <div className="mb-4 mt-10 flex items-baseline gap-3">
              <h2 className="text-lg font-semibold">Certifications</h2>
              <span className="tnum text-xs text-muted-foreground">
                {certifications.length} credentials
              </span>
            </div>

            <div className="overflow-hidden rounded-xl bg-card shadow-soft">
              {ledgerSections.map(([year, items]) => (
                <section key={year} aria-label={year}>
                  <div className="tnum flex items-baseline gap-3 border-y border-border/50 bg-accent/25 px-4 py-1.5 sm:px-6">
                    <span className="tnum text-sm font-semibold">{year}</span>
                    <span className="tnum text-xs text-muted-foreground">
                      {items.length} item{items.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  {items.map((cert) => (
                    <LedgerRow key={`${cert.title}-${cert.issued}`} cert={cert} />
                  ))}
                </section>
              ))}
            </div>

            <p className="tnum mt-4 text-xs text-muted-foreground">
              {awards.length} awards · {certifications.length} certifications
            </p>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default Credentials;
