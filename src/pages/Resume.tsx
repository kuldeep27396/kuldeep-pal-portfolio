import { Download, ExternalLink, FileText } from "lucide-react";

const resumeUrl =
  "https://2aadxqrvwumqaun6.public.blob.vercel-storage.com/SENIOR_DATA_ENGINEER_Kuldeep_Pal_7_Years.pdf";

const Resume = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,hsl(var(--accent)/0.14),transparent_42%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.32))] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <section className="rounded-3xl border border-border/70 bg-background/92 p-6 shadow-soft backdrop-blur sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                <FileText className="h-3.5 w-3.5" />
                Shared Resume
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Kuldeep Pal Resume</h1>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This page is intentionally unlisted. Anyone with the direct URL can view or download the resume,
                  but it is not linked anywhere on the public portfolio.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Open PDF
              </a>
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-soft">
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
