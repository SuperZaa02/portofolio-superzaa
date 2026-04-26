export default function AboutSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h2>
        <p className="text-sm font-body text-muted-foreground max-w-2xl">
          Background, perspective, and the things that drive me.
        </p>
      </div>
      <div className="font-body text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl space-y-6">
        <p>
          Hi, I&apos;m Faeza Raziq. I tend to see the world like a system waiting to be
          understood like patterns, logic, cause and effect. Whether it&apos;s a technical
          problem, a strategic decision, or something most people just accept at face value,
          I instinctively break it down, test the edges, and look for the most efficient
          path forward.
        </p>
        <p>
          I&apos;m naturally drawn to complexity. There&apos;s a particular satisfaction in
          taking something dense or confusing and distilling it into something clean and
          clear, whether that&apos;s through code, math, or just careful thinking. I
          don&apos;t just want things to work; I want to understand <em>why</em> they work,
          and how they could work better.
        </p>
        <p>
          I&apos;m also someone who learns best by building. Concepts don&apos;t fully click
          until I&apos;ve gotten my hands into them, experimenting, breaking things, and
          reasoning through the results. Beyond the technical side, I care about ideas,
          cultural, creative, and philosophical ones too. The most interesting thinkers are
          the ones who refuse to stay in a single lane, and that&apos;s the kind of thinker
          I&apos;m always trying to become.
        </p>
      </div>
    </section>
  );
}