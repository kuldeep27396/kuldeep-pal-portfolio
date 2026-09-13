import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion language — see docs/DESIGN.md §6.
 * One entrance (fade + 12px rise), one stagger, one hover lift.
 * All wrapped globally in <MotionConfig reducedMotion="user">.
 */

export const EASE_OUT: Transition["ease"] = [0.25, 0.46, 0.45, 0.94];

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, ease: EASE_OUT },
};

/** Same entrance but triggered on mount (above-the-fold content). */
export const enterOnMount = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: EASE_OUT },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};
