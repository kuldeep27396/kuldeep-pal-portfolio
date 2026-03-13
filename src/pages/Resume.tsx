import { Download } from "lucide-react";

const resumeUrl =
  "https://2aadxqrvwumqaun6.public.blob.vercel-storage.com/SENIOR_DATA_ENGINEER_Kuldeep_Pal_7_Years.pdf";
const fileName = "Kuldeep-Pal-Resume.pdf";
const viewerUrl = (() => {
  const url = new URL(resumeUrl);
  url.hash = "toolbar=0&navpanes=0&scrollbar=0&view=FitH";
  return url.toString();
})();

const Resume = () => {
  return (
    <main className="min-h-screen bg-background p-2 sm:p-4">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border/70 bg-background shadow-soft">
        <div className="flex justify-end border-b border-border/70 bg-background px-3 py-2">
          <a
            href={resumeUrl}
            download={fileName}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
        <iframe
          title="Kuldeep Pal Resume"
          src={viewerUrl}
          sandbox="allow-same-origin"
          className="h-[78vh] min-h-[50vh] w-full bg-white sm:h-[calc(100vh-5rem)]"
        />
      </section>
    </main>
  );
};

export default Resume;
