import React from "react";
import { motion } from "framer-motion";

interface HoverWordsProps {
  children: React.ReactNode;
}

/* ============================================================
   HOVER WORDS — MECHANICAL HIGHLIGHT
   No glow, no scale, no spring bounce.
   Hard color inversion: muted → foreground.
   ============================================================ */

function wrapWords(text: string) {
  return text.split(/(\s+)/).map((part, index) => {
    if (/^\s+$/.test(part)) {
      return part;
    }

    return (
      <motion.span
        key={index}
        className="inline-block cursor-default"
        whileHover={{
          color: "#EAEAEA",
        }}
        transition={{
          duration: 0.08,
          ease: "linear",
        }}
      >
        {part}
      </motion.span>
    );
  });
}

function processNode(node: React.ReactNode): React.ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    return wrapWords(String(node));
  }

  if (!React.isValidElement(node)) {
    return node;
  }

  const element = node as React.ReactElement<{
    children?: React.ReactNode;
  }>;

  return React.cloneElement(element, {}, React.Children.map(element.props.children, processNode));
}

export default function HoverWords({ children }: HoverWordsProps) {
  return <>{React.Children.map(children, processNode)}</>;
}
