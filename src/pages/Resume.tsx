import { Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const resumeUrl =
  "https://2aadxqrvwumqaun6.public.blob.vercel-storage.com/SENIOR_DATA_ENGINEER_Kuldeep_Pal_7_Years.pdf";
const fileName = "Kuldeep-Pal-Resume.pdf";

const Resume = () => {
  const viewerUrl = new URL(resumeUrl);
  viewerUrl.hash = "toolbar=0&navpanes=0&scrollbar=0&view=FitH";

  const handleDownload = async () => {
    try {
      const response = await fetch(resumeUrl);

      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Resume download failed", error);
      toast({
        title: "Download failed",
        description: "Please try again in a moment.",
      });
    }
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
          src={viewerUrl.toString()}
          sandbox=""
          className="h-[78vh] min-h-[50vh] w-full bg-white sm:h-[calc(100vh-5rem)]"
        />
      </section>
    </main>
  );
};

export default Resume;
