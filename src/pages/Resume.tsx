import { Download, ExternalLink } from "lucide-react";
import { PageMeta } from "@/components/PageMeta";

const resumeUrl =
  "https://2aadxqrvwumqaun6.public.blob.vercel-storage.com/Kuldeep_Pal_8_Years__Resume_May_2026.pdf";

const Resume = () => {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <PageMeta
        title="Resume"
        description="Kuldeep Pal's resume — intentionally unlisted."
        path="/resume"
        noindex
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <section className="rounded-2xl bg-card p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Kuldeep Pal — Resume</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                This page is intentionally unlisted. Anyone with the direct URL can view or download the
                resume, but it is not linked anywhere on the public portfolio.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Open PDF
              </a>
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download
              </a>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl bg-card shadow-soft">
          <iframe
            title="Kuldeep Pal Resume"
            src={resumeUrl}
            className="h-[calc(100vh-14rem)] min-h-[720px] w-full bg-white"
          />
        </section>
      </div>
    </main>
  );
};

export default Resume;
