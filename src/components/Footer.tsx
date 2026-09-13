import { SocialRow } from "@/components/SocialRow";

export const Footer = () => {
  return (
    <footer className="border-t border-border/70 px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <blockquote className="mb-8 text-center">
          <p className="mx-auto max-w-[64ch] font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
            &ldquo;Create more value than you capture.&rdquo;
          </p>
          <cite className="mt-2 block text-xs not-italic text-muted-foreground">— Tim O&apos;Reilly</cite>
        </blockquote>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-border/50 pt-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-semibold">Kuldeep Pal</p>
            <p className="text-sm text-muted-foreground">Senior Software Engineer · Backend · Data · AI</p>
          </div>

          <SocialRow />

          <p className="text-sm text-muted-foreground">Bengaluru, India © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};
