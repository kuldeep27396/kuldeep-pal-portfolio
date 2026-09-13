import { SocialRow } from "@/components/SocialRow";

export const Footer = () => {
  return (
    <footer className="border-t border-border/70 px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
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
