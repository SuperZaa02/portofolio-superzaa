import HoverWords from "@/components/HoverWords";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32">
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:gap-16
            xl:gap-20
            lg:grid-cols-[minmax(0,1fr)_420px]
            xl:grid-cols-[minmax(0,1fr)_500px]
          "
        >
          {/* Content */}
          <div className="min-w-0">
            <Reveal
              className="flex flex-col gap-3"
              delay={0.2}
            >
              <h2
                className="
                  font-heading
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-tight
                  text-foreground
                "
              >
                About Me
              </h2>

              <p
                className="
                  max-w-xl
                  text-sm
                  sm:text-base
                  text-muted-foreground
                "
              >
                <HoverWords>
                  Background, perspective, and the things
                  that drive me.
                </HoverWords>
              </p>
            </Reveal>

            <div
              className="
                mt-8
                space-y-6
                text-[15px]
                sm:text-base
                lg:text-lg
                leading-relaxed
                text-muted-foreground
                max-w-3xl
              "
            >
              <Reveal delay={0.4}>
                <HoverWords>
                  Hi, I&apos;m Faeza Raziq. I tend to see
                  the world like a system waiting to be
                  understood like patterns, logic, cause
                  and effect. Whether it&apos;s a technical
                  problem, a strategic decision, or
                  something most people just accept at
                  face value, I instinctively break it
                  down, test the edges, and look for the
                  most efficient path forward.
                </HoverWords>
              </Reveal>

              <Reveal delay={0.6}>
                <HoverWords>
                  I&apos;m naturally drawn to complexity.
                  There&apos;s a particular satisfaction
                  in taking something dense or confusing
                  and distilling it into something clean
                  and clear, whether that&apos;s through
                  code, math, or just careful thinking.
                  I don&apos;t just want things to work; I
                  want to understand <em>why</em> they
                  work, and how they could work better.
                </HoverWords>
              </Reveal>

              <Reveal delay={0.8}>
                <HoverWords>
                  I&apos;m also someone who learns best by
                  building. Concepts don&apos;t fully
                  click until I&apos;ve gotten my hands
                  into them, experimenting, breaking
                  things, and reasoning through the
                  results. Beyond the technical side, I
                  care about ideas, cultural, creative,
                  and philosophical ones too.
                </HoverWords>
              </Reveal>
            </div>
          </div>

          {/* Illustration */}
          <Reveal delay={0.3}>
            <motion.div
              className="
                relative
                mx-auto
                flex
                w-full
                max-w-[280px]
                sm:max-w-[340px]
                lg:max-w-[420px]
                xl:max-w-[500px]
                justify-center
                select-none
              "
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-0
                  m-auto
                  h-64
                  w-64
                  sm:h-80
                  sm:w-80
                  rounded-full
                  bg-primary/15
                  blur-3xl
                "
              />

              <motion.img
                src="/assets/image/others/about-me.png"
                alt="About Me Illustration"
                draggable={false}
                onDragStart={(e) =>
                  e.preventDefault()
                }
                onContextMenu={(e) =>
                  e.preventDefault()
                }
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  w-full
                  h-auto
                  object-contain
                  pointer-events-none
                  select-none
                  [-webkit-user-drag:none]
                "
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}