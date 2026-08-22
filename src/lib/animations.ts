import type { Variants } from "framer-motion";

/* ============================================================
   ANIMATIONS — MECHANICAL / INDUSTRIAL
   No bounce, no elastic, no float.
   Fast, utilitarian, purposeful.
   ============================================================ */

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.0, 0.0, 0.2, 1], // linear-fast ease-out
    },
  },
};

export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const modal: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.1,
      ease: "linear",
    },
  },
};

export default { fadeInUp, container, modal };
