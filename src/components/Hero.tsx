import { motion } from "framer-motion";
import { ExternalLink, CalendarDays, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialRow } from "@/components/SocialRow";
import { enterOnMount, EASE_OUT } from "@/lib/motion";

const highlights = [
  {
    title: "Data engineering",
    detail: "lakehouse, warehousing, and large-scale batch + streaming pipelines",
  },
  {
    title: "AI systems",
    detail: "agentic workflows, RAG, and LLM platforms built for production",
  },
  {
    title: "Backend delivery",
    detail: "FastAPI & Spring Boot services, secure integrations, operational reliability",
  },
];

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 items-center">
          <motion.div {...enterOnMount} className="space-y-7">
            <div
              className="inline-flex items-center gap-2 rounded-full bg-tone-backend-bg px-3.5 py-1.5"
              role="status"
            >
              <span className="h-2 w-2 rounded-full bg-tone-backend-fg animate-pulse" />
              <span className="text-sm font-medium text-tone-backend-fg">Available for new opportunities</span>
            </div>

            <div>
              <h1 className="text-display">
                Building data platforms, <span className="gradient-text">AI agents</span> &amp; backend systems.
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-muted-foreground">
                Kuldeep Pal — Senior Software Engineer based in Bengaluru, India.
              </p>
            </div>

            <p className="text-measure text-base sm:text-lg text-muted-foreground leading-relaxed">
              I build production systems where large-scale data, backend design, and intelligent systems
              come together — with strong ownership across data platforms, AI agents, APIs, and reliability.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.15 + index * 0.06 }}
                  className="flex items-start gap-3 text-sm sm:text-base"
                >
                  <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">
                    <span className="font-medium text-foreground">{item.title}</span> — {item.detail}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1">
              <Button size="lg" className="w-full sm:w-auto justify-center gap-2 shadow-glow" asChild>
                <a href="#contact">
                  <Send className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto justify-center gap-2" asChild>
                <a href="https://cal.com/kuldeep.pal/meet-kuldeep" target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="w-4 h-4" />
                  Book a Call
                </a>
              </Button>
            </div>

            <SocialRow className="pt-1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="h-[23rem] sm:h-[26rem] md:h-[28rem]"
                style={{ filter: "drop-shadow(0 20px 28px hsl(212 30% 16% / 0.14))" }}
              >
                {/* Transparent cutout sits directly on the page canvas. The mask
                    dissolves the canvas-cut edges (shoulders/bottom) into the
                    page — a mask always matches the background behind it. */}
                <img
                  src="/profile.webp"
                  alt="Kuldeep Pal"
                  width={800}
                  height={1067}
                  className="h-full w-auto"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 80%, transparent 99%), linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 80%, transparent 99%), linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
                    WebkitMaskComposite: "source-in",
                  }}
                  fetchPriority="high"
                />
              </div>

              <motion.a
                href="https://linkedin.com/in/kuldeep27396/recent-activity/articles/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.45 }}
                className="absolute bottom-10 right-0 rounded-xl border border-border/70 bg-card px-3.5 py-2.5 shadow-card transition-shadow hover:shadow-lift sm:right-2"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold">Writing on LinkedIn &amp; Medium</p>
                    <p className="text-xs text-muted-foreground">12k+ reads on data &amp; AI</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
