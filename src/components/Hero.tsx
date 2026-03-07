import { motion } from "framer-motion";
import { Linkedin, Github, ExternalLink, BookOpen, CalendarDays, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { XIcon } from "@/components/XIcon";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kuldeep27396",
    label: "LinkedIn",
    className: "bg-[#0a66c2]/10 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white",
  },
  {
    icon: Github,
    href: "https://github.com/kuldeep27396",
    label: "GitHub",
    className: "bg-slate-900/10 text-slate-700 hover:bg-slate-900 hover:text-white",
  },
  {
    icon: BookOpen,
    href: "/articles",
    label: "Blogs",
    internal: true,
    className: "bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500 hover:text-white",
  },
  {
    icon: XIcon,
    href: "https://x.com/kuldeep27396",
    label: "X",
    className: "bg-sky-500/10 text-sky-600 hover:bg-sky-500 hover:text-white",
  },
];

const highlights = [
  "Data engineering across data lakes, lakehouse, warehousing, modeling, and large-scale pipelines",
  "AI agents, LLM workflows, RAG systems, and platform tooling built for production use",
  "Backend delivery with FastAPI, Spring Boot, APIs, secure integrations, and operational reliability",
  "Strong fit for senior IC roles spanning data platform, AI systems, backend design, and databases",
];

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-700">Available</span>
            </motion.div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I&apos;m <span className="gradient-text">Kuldeep Pal</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                Senior Software Engineer - Data, AI, and Backend Systems
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Based in <span className="text-foreground font-semibold">Bengaluru, India</span>
              </p>
            </div>

            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I&apos;m a senior engineer working across <span className="text-foreground font-medium">data engineering, AI, and backend systems</span>.
              I build production systems on the data side, backend side, and AI side, with strong impact on data platforms,
              AI agents, APIs, and platform reliability. I&apos;m particularly interested in high-ownership engineering challenges
              where backend design, databases, and intelligent systems come together.
            </p>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">What I Bring</p>
              <div className="space-y-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.08 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 pt-2">
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

            <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  social.internal ? (
                    <motion.div key={social.label} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
                      <Link to={social.href} className={`block p-2.5 rounded-full transition-colors ${social.className}`} aria-label={social.label}>
                        <social.icon className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className={`p-2.5 rounded-full transition-colors ${social.className}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  )
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-[-1.25rem] rounded-[2.5rem] bg-[radial-gradient(circle_at_top,hsl(var(--accent)/0.55),transparent_55%)] blur-2xl" />
              <div className="relative h-[20rem] w-[16rem] sm:h-[24rem] sm:w-[19rem] md:h-[27rem] md:w-[22rem] rounded-[2rem] overflow-hidden border border-white/30 bg-[linear-gradient(180deg,hsl(var(--card)),hsl(var(--background)))] shadow-card">
                <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,hsl(0_0%_100%/0.45),transparent_70%)]" />
                <img
                  src="https://avatars.githubusercontent.com/u/61800838?v=4"
                  alt="Kuldeep Pal"
                  className="w-full h-full object-cover object-top scale-[1.03]"
                  style={{ maskImage: "linear-gradient(to bottom, black 74%, transparent 100%)" }}
                />
              </div>

              <motion.a
                href="https://linkedin.com/in/kuldeep27396/recent-activity/articles/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
                className="absolute right-2 bottom-3 sm:right-3 sm:bottom-4 bg-card/95 rounded-2xl px-3 py-2 shadow-card border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-primary" />
                  <div>
                    <p className="font-semibold text-xs">Writing</p>
                    <p className="text-[11px] text-muted-foreground">LinkedIn and Medium</p>
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
