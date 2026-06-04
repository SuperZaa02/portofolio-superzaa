import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TypingText from "@/components/TypingText";
import HoverWords from "@/components/HoverWords";
import { fadeInUp } from "@/lib/animations";

const PREFIXES = [
  "Just an ordinary teenage boy with high ambitions in",
  "Just an ordinary teenage boy driven by ambition in",
  "Just an ordinary teenage boy building in",
  "Just an ordinary teenage boy immersed in",
  "Just an ordinary teenage boy exploring",
  "Just an ordinary teenage boy devoted to",
  "Just an ordinary teenage boy relentlessly learning about",
];

export default function HeroSection() {
  const [startTyping, setStartTyping] = useState(false);

  const [prefix, setPrefix] = useState(PREFIXES[0]);

  useEffect(() => {
    setPrefix(
      PREFIXES[Math.floor(Math.random() * PREFIXES.length)]
    );
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setStartTyping(true);
    }, 1200);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <main className="flex w-full flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <motion.h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // no delay for the main title
              custom={0}
            >
              Faeza Raziq
            </motion.h1>

            <motion.p
              className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <HoverWords>Official Personal Website</HoverWords>
            </motion.p>
          </div>

          <motion.p
            className="max-w-[320px] sm:max-w-[380px] text-xs sm:text-sm leading-relaxed text-muted-foreground font-body"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
          >
            <HoverWords>
              {prefix} <TypingText start={startTyping} />
            </HoverWords>
          </motion.p>
        </main>
      </section>
    </>
  );
}