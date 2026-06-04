import React from "react";
import { motion } from "framer-motion";

interface HoverWordsProps {
  children: React.ReactNode;
}

function wrapWords(text: string) {
  let wordIndex = 0;

  return text.split(/(\s+)/).map((part, index) => {
    if (/^\s+$/.test(part)) {
      return part;
    }

    const currentWordIndex = wordIndex++;

    return (
      <motion.span
        key={index}
        className="
          transition-colors
          duration-200
          hover:text-foreground
        "
        style={{
          display: "inline-block",
          transformOrigin: "center bottom",
        }}
        whileHover={{
          y: -2,
          scale: 1.03,
          rotate: currentWordIndex % 2 === 0 ? -2 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 15,
        }}
      >
        {part}
      </motion.span>
    );
  });
}

function processNode(node: React.ReactNode): React.ReactNode {
  if (
    typeof node === "string" ||
    typeof node === "number"
  ) {
    return wrapWords(String(node));
  }

  if (!React.isValidElement(node)) {
    return node;
  }

  return React.cloneElement(
    node,
    {
      ...node.props,
    },
    React.Children.map(
      node.props.children,
      processNode
    )
  );
}

export default function HoverWords({
  children,
}: HoverWordsProps) {
  return (
    <>
      {React.Children.map(
        children,
        processNode
      )}
    </>
  );
}