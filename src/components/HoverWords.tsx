import React from "react";

interface HoverWordsProps {
  children: React.ReactNode;
}

function wrapWords(text: string) {
  return text.split(/(\s+)/).map((part, index) => {
    if (/^\s+$/.test(part)) {
      return part;
    }

    return (
      <span
        key={index}
        className="
          inline-block
          transition-all
          duration-200
          hover:text-foreground
          hover:scale-105
          cursor-default
        "
      >
        {part}
      </span>
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

  return React.cloneElement(
    node,
    {
      ...node.props,
    },
    React.Children.map(node.props.children, processNode)
  );
}

export default function HoverWords({ children }: HoverWordsProps) {
  return <>{React.Children.map(children, processNode)}</>;
}