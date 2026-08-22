import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TOPICS = [
  "Reverse Engineering",
  "Cyber Security",
  "Backend Development",
  "System Programming",
  "CTF Challenges",
  "Open Source Projects",
  "Technology and Hobbies",
];

interface TypingTextProps {
  start: boolean;
}

/* ============================================================
   TYPING TEXT — TERMINAL STYLE
   JetBrains Mono, red blinking cursor, no bounce animation.
   ============================================================ */
export default function TypingText({ start }: TypingTextProps) {
  const [topicIndex, setTopicIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing">("typing");

  useEffect(() => {
    if (!start) return;

    const current = TOPICS[topicIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 65);

        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => {
        setPhase("hold");
      }, 1800);

      return () => clearTimeout(timeout);
    }

    if (phase === "hold") {
      const timeout = setTimeout(() => {
        setPhase("erasing");
      }, 400);

      return () => clearTimeout(timeout);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, 35);

        return () => clearTimeout(timeout);
      }

      setTopicIndex((prev) => (prev + 1) % TOPICS.length);
      setPhase("typing");
    }
  }, [displayed, phase, topicIndex, start]);

  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.85em",
        fontWeight: 500,
        letterSpacing: "0.05em",
      }}
      className="inline-flex min-w-[22ch] items-center text-foreground"
    >
      <AnimatePresence mode="popLayout">
        {displayed.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="whitespace-pre"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.06, ease: "linear" }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* RED BLINKING CURSOR */}
      <motion.span
        className="ml-[2px] inline-block h-[1em] w-[2px]"
        style={{ background: "#E61919" }}
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </span>
  );
}
