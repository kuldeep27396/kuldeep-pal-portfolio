import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

/**
 * Bento grid — varied card sizes, one hero cell (docs/DESIGN.md §7).
 * Deliberately not a hero-metric template: values differ in scale and weight.
 */
const cells = [
  {
    value: "Multiple TB+",
    label: "daily data volume across batch and streaming",
    span: "",
  },
  {
    value: "2+ years",
    label: "building AI agents and LLM platforms for production use",
    span: "",
  },
  {
    value: "FastAPI + Spring Boot",
    label: "Production backend services and secure integrations",
    span: "sm:col-span-2 md:col-span-2",
  },
  {
    value: "Lakehouse + Warehousing",
    label: "platform focus, from ingestion to modeled marts",
    span: "sm:col-span-2 md:col-span-1",
  },
];

export const Stats = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Technical Positioning</h2>
          <p className="mt-3 text-muted-foreground text-measure">
            The combination of scale, stack, and production ownership I bring to senior engineering roles.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {/* Hero cell — the one larger block that anchors the grid */}
          <motion.div
            variants={staggerItem}
            className="rounded-2xl bg-card p-6 sm:p-8 shadow-card sm:col-span-2 sm:row-span-2 flex flex-col justify-between gap-8"
          >
            <p className="font-display text-4xl sm:text-5xl leading-[1.05] font-semibold">
              8+ years building <span className="text-primary">production software</span> across backend, data &amp; AI.
            </p>
            <p className="text-muted-foreground max-w-[46ch]">
              End-to-end ownership — from API and platform design to data architecture and AI agents,
              and the product decisions that ship them.
            </p>
          </motion.div>

          {cells.map((cell) => (
            <motion.div
              key={cell.value}
              variants={staggerItem}
              className={`rounded-xl bg-card p-5 sm:p-6 shadow-soft flex flex-col justify-end gap-1.5 ${cell.span}`}
            >
              <p className="tnum text-xl font-semibold">{cell.value}</p>
              <p className="text-sm text-muted-foreground">{cell.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
