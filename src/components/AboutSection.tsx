import Reveal from "@/components/Reveal";

export default function AboutSection() {
  const details = [
    {
      label: "Based in",
      value: "Bekasi, Indonesia",
    },
    {
      label: "Focus",
      value: "Web Development",
    },
    {
      label: "Interests",
      value: "Software · Mathematics · Technology",
    },
    {
      label: "Currently",
      value: "Student & Developer",
    },
  ];

  const stack = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Python",
  ];

  return (
    <section id="about" className="w-full">
      {/* TOP BORDER */}
      <div className="h-px w-full bg-[#3A3A3A]" />

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-20">
        {/* SECTION LABEL */}
        <Reveal delay={0.05}>
          <div
            className="mb-6 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6F6F6F] sm:mb-8"
          >
            About Me
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          {/* MAIN CONTENT */}
          <div className="min-w-0">
            <Reveal delay={0.1}>
              <h2
                className="mb-6 text-[2.6rem] font-black uppercase leading-[0.9] tracking-[-0.045em] text-[#EAEAEA] sm:mb-8 sm:text-5xl md:text-[clamp(3.5rem,6vw,5rem)]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                A Little About Me
              </h2>
            </Reveal>

            <div className="flex max-w-[68ch] flex-col gap-[18px] text-[13px] leading-[1.85] text-[#8A8A8A] sm:text-sm">
              <Reveal delay={0.15}>
                <p className="m-0">
                  Hi, I&apos;m Faeza Raziq. I tend to see the world like a
                  system waiting to be understood — patterns, logic, cause and
                  effect. Whether it&apos;s a technical problem, a strategic
                  decision, or something most people simply accept at face
                  value, I naturally want to break it down and understand how
                  it works.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="m-0">
                  I&apos;m drawn to complexity, especially when it can be turned
                  into something simple and useful. I enjoy working with code,
                  mathematics, and technical problems, but what matters most to
                  me is understanding the reasoning behind them.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <p className="m-0">
                  Most of what I learn comes from building. I experiment, break
                  things, fix them, and keep going until the idea finally makes
                  sense. Outside of technology, I&apos;m also interested in
                  creative, cultural, and philosophical ideas.
                </p>
              </Reveal>
            </div>
          </div>

          {/* SIDEBAR */}
          <Reveal delay={0.2}>
            <aside className="w-full min-w-0 border-t border-[#3A3A3A]">
              {/* DETAILS */}
              <div>
                {details.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-[#1E1E1E] py-[13px]"
                  >
                    <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#6F6F6F]">
                      {item.label}
                    </div>

                    <div className="break-words font-mono text-[11px] leading-[1.6] text-[#EAEAEA]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* STACK */}
              <div className="pt-[22px]">
                <div className="mb-[11px] font-mono text-[9px] uppercase tracking-[0.1em] text-[#6F6F6F]">
                  Tools I Use
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="whitespace-nowrap border border-[#3A3A3A] px-2 py-[5px] font-mono text-[9px] leading-[1.3] text-[#8A8A8A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}