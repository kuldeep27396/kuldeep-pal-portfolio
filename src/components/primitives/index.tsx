import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Content card — the ONE card recipe (docs/DESIGN.md §5):
 * bg-card, rounded-xl, soft border, offset shadow. Hover lift opt-in.
 */
export const Card = ({
  children,
  className,
  hover = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  /** Adds the standard hover lift (translate + shadow). */
  hover?: boolean;
  as?: "div" | "article" | "section" | "li";
}) => {
  const Comp = Tag as "div";
  return (
    <Comp
      className={cn(
        "rounded-xl border border-border/70 bg-card",
        hover && "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Comp>
  );
};

/** Scroll-reveal wrapper for the shared entrance language. */
export const Reveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay }} className={className}>
    {children}
  </motion.div>
);

/** Tag pill — one size everywhere (docs/DESIGN.md §7). */
export const TagPill = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground",
      className,
    )}
  >
    {children}
  </span>
);
