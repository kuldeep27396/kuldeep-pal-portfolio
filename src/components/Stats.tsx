import { motion } from "framer-motion";

const stats = [
  { label: "Data Engineering & Backend", value: "8+ years" },
  { label: "AI and Agents", value: "2+ years" },
  { label: "Data, AI, Backend + Product", value: "End-to-End Ownership" },
  { label: "Daily Data Volume (Batch + Streaming)", value: "Multiple TB+" },
  { label: "AI-Enabled Backend", value: "FastAPI + Spring Boot" },
  { label: "Platform Focus", value: "Lakehouse + Warehousing" },
];

export const Stats = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-card/90">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Technical Positioning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The combination of scale, stack, and production ownership I bring to senior engineering roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-background/80 p-4 sm:p-5 text-left shadow-soft"
            >
              <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
