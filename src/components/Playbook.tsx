import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Ship more",
    description: "Volume negates luck — the more you build, the luckier you get.",
  },
  {
    number: "02",
    title: "Love the grind",
    description: "Boring work compounds — consistency beats intensity every time.",
  },
  {
    number: "03",
    title: "Track progress",
    description: "What you measure improves — data drives better decisions.",
  },
  {
    number: "04",
    title: "Stretch beyond comfort",
    description: "That's where growth lies — embrace the unfamiliar.",
  },
];

export const Playbook = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Playbook for Doing Great Work</h2>
          <p className="text-muted-foreground">
            Principles that guide my approach to engineering and problem-solving.
          </p>
        </motion.div>

        <div className="space-y-4">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-start gap-6 p-4 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <span className="text-3xl font-bold text-primary font-mono">
                {principle.number}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                  {principle.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
