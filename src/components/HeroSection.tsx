import { useEffect, useState } from "react";
import TypingText from "@/components/TypingText";
import HoverWords from "@/components/HoverWords";

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

  const [prefix] = useState(
    () => PREFIXES[Math.floor(Math.random() * PREFIXES.length)],
  );

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
            <h1
              className="
                font-heading
                text-5xl
                sm:text-6xl
                md:text-7xl
                font-bold
                tracking-tight
                text-foreground
                opacity-0
                animate-fadeIn
                transition-opacity
                duration-700
              "
            >
              Faeza Raziq
            </h1>

            <p
              className="
                font-body
                text-xs
                sm:text-sm
                uppercase
                tracking-[0.3em]
                text-muted-foreground
                opacity-0
                animate-fadeIn
                transition-opacity
                duration-700
                [animation-delay:200ms]
              "
            >
              <HoverWords>
                Official Personal Website
              </HoverWords>
            </p>
          </div>

          <p
            className="
              max-w-[320px]
              sm:max-w-[380px]
              text-xs
              sm:text-sm
              leading-relaxed
              text-muted-foreground
              font-body
              opacity-0
              animate-fadeIn
              transition-opacity
              duration-700
              [animation-delay:400ms]
            "
          >
            <HoverWords>
              {prefix} <TypingText start={startTyping} />
            </HoverWords>
          </p>
        </main>
      </section>
    </>
  );
}