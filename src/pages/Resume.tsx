import { Download } from "lucide-react";

const resumeUrl =
  "https://2aadxqrvwumqaun6.public.blob.vercel-storage.com/SENIOR_DATA_ENGINEER_Kuldeep_Pal_7_Years.pdf";
const viewerUrl = `${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
const fileName = "Kuldeep-Pal-Resume.pdf";

const Resume = () => {
  const handleDownload = async () => {
    const response = await fetch(resumeUrl);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  };

  return (
    <main className="min-h-screen bg-background p-2 sm:p-4">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border/70 bg-background shadow-soft">
        <div className="flex justify-end border-b border-border/70 bg-background px-3 py-2">
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
        <iframe
          title="Kuldeep Pal Resume"
          src={viewerUrl}
          className="h-[calc(100vh-4.5rem)] min-h-[680px] w-full bg-white sm:h-[calc(100vh-5rem)]"
        />
      </section>
    </main>
  );
};

export default Resume;
