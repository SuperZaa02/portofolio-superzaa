import { useEffect, useState } from "react";

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

export default function TypingText({
  start,
}: TypingTextProps) {
  const [topicIndex, setTopicIndex] = useState(0);

  const [displayed, setDisplayed] =
    useState("");

  const [phase, setPhase] = useState<
    "typing" | "hold" | "erasing"
  >("typing");

  useEffect(() => {
    if (!start) return;

    const current = TOPICS[topicIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(
            current.slice(
              0,
              displayed.length + 1,
            ),
          );
        }, 70);

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
          setDisplayed(
            displayed.slice(0, -1),
          );
        }, 40);

        return () => clearTimeout(timeout);
      }

      setTopicIndex(
        (prev) => (prev + 1) % TOPICS.length,
      );

      setPhase("typing");
    }
  }, [
    displayed,
    phase,
    topicIndex,
    start,
  ]);

  return (
    <span
      style={{
        fontFamily:
          "'Courier Prime', monospace",
      }}
      className="
        inline-flex
        min-w-[22ch]
        items-center
        justify-start
        font-semibold
        text-foreground
      "
    >
      {displayed}

      <span
        className="
          ml-[2px]
          inline-block
          h-[1.1em]
          w-[2px]
          animate-pulse
          bg-foreground
          align-middle
        "
        style={{
          animationDuration: "0.5s",
        }}
      />
    </span>
  );
}