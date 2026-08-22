import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";

/* ============================================================
   CONTACT SECTION
   Minimal industrial / editorial treatment.
   Strong typography, restrained borders, no decorative UI.
   ============================================================ */

export default function ContactSection() {
  return (
    <section id="contact" className="w-full">
      {/* TOP BORDER */}
      <div
        style={{
          height: 1,
          background: "#3A3A3A",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        {/* LABEL */}
        <Reveal delay={0.05}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "#6F6F6F",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Contact
          </div>
        </Reveal>

        {/* HEADING */}
        <Reveal delay={0.1}>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              color: "#EAEAEA",
              margin: 0,
              marginBottom: 20,
            }}
          >
            Get In Touch
          </h2>
        </Reveal>

        {/* DESCRIPTION */}
        <Reveal delay={0.15}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              lineHeight: 1.8,
              color: "#8A8A8A",
              maxWidth: "55ch",
              margin: 0,
              marginBottom: 40,
            }}
          >
            Have a question, project, collaboration, or just want to say hello?
            Feel free to reach out.
          </p>
        </Reveal>

        {/* CONTACT LINKS */}
        <Reveal delay={0.2}>
          <div
            style={{
              maxWidth: 520,
              borderTop: "1px solid #3A3A3A",
            }}
          >
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </section>
  );
}