import { motion } from "framer-motion";
import { Bot, Database, Hammer, Server } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

/**
 * Single statement panel: the pitch + a fact strip inside the same card.
 * Facts are capability claims (not tenure math) — see docs/DESIGN.md §7.
 */
const facts = [
  {
    icon: Server,
    tone: "bg-tone-backend-bg text-tone-backend-fg",
    title: "Backend & distributed systems",
    detail: "FastAPI · Spring Boot in production",
  },
  {
    icon: Database,
    tone: "bg-tone-data-bg text-tone-data-fg",
    title: "Big data",
    detail: "ingestion, processing, OLTP & OLAP database design, data modeling, cost savings",
  },
  {
    icon: Bot,
    tone: "bg-tone-ai-bg text-tone-ai-fg",
    title: "AI agents in production",
    detail: "RAG, multi-agent LLM platforms, multitenant SaaS",
  },
];

export const Stats = () => {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div {...fadeInUp} className="rounded-2xl bg-card p-6 shadow-card sm:p-10">
          <div className="md:grid md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:items-center md:gap-10">
            <div>
              <h2 className="max-w-[24ch] font-display text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
                8+ years building <span className="text-primary">production software</span> across backend, data &amp; AI.
              </h2>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                End-to-end ownership — from API and platform design to data architecture and AI agents,
                and the product decisions that ship them.
              </p>
            </div>

            {/* Builder block — backend depth plus full-product shipping */}
            <div className="mt-6 rounded-xl border border-border/60 bg-tone-frontend-bg/50 p-5 md:mt-0">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card text-tone-frontend-fg shadow-soft">
                <Hammer className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-[15px] font-semibold">Builder, end to end</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Backend is my craft — I design and vibe-code the UI, squash bugs across the stack, and
                have shipped whole applications to production single-handedly.
              </p>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 grid gap-5 border-t border-border/60 pt-6 sm:grid-cols-3"
          >
            {facts.map((fact) => (
              <motion.div key={fact.title} variants={staggerItem} className="flex items-center gap-3.5">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${fact.tone}`}>
                  <fact.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{fact.title}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{fact.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
