const resumeUrl =
  "https://2aadxqrvwumqaun6.public.blob.vercel-storage.com/SENIOR_DATA_ENGINEER_Kuldeep_Pal_7_Years.pdf";
const viewerUrl = `${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

const Resume = () => {
  return (
    <main className="min-h-screen bg-background p-2 sm:p-4">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border/70 bg-background shadow-soft">
        <iframe
          title="Kuldeep Pal Resume"
          src={viewerUrl}
          className="h-[calc(100vh-1rem)] min-h-[720px] w-full bg-white sm:h-[calc(100vh-2rem)]"
        />
      </section>
    </main>
  );
};

export default Resume;
