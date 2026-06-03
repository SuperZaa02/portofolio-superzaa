"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds
  style?: React.CSSProperties;
};

export default function Reveal({ children, className, delay = 0, style }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
