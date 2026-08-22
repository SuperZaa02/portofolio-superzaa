import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import TypingText from "@/components/TypingText";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setPrefix(PREFIXES[Math.floor(Math.random() * PREFIXES.length)]);
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartTyping(true);
    }, 900);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        padding: isMobile ? "48px 16px" : "64px 24px",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* SMALL INTRO */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            lineHeight: 1.4,
            letterSpacing: "0.14em",
            color: "#6F6F6F",
            textTransform: "uppercase",
            marginBottom: isMobile ? 18 : 24,
          }}
        >
          Web Portfolio
        </motion.div>

        {/* NAME */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          style={{
            width: "100%",
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.055em",
            lineHeight: 0.85,
            fontSize: isMobile
              ? "clamp(3.2rem, 18vw, 5.5rem)"
              : "clamp(3.8rem, 11vw, 9rem)",
            color: "#EAEAEA",
            overflowWrap: "break-word",
          }}
        >
          Faeza Raziq
        </motion.h1>

        {/* ROLE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          style={{
            marginTop: isMobile ? 14 : 18,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            lineHeight: 1.5,
            letterSpacing: "0.1em",
            color: "#8A8A8A",
            textTransform: "uppercase",
          }}
        >
          Student · Developer · Engineer
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          style={{
            width: "100%",
            maxWidth: 560,
            marginTop: isMobile ? 24 : 32,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: isMobile ? 11 : "clamp(11px, 1.4vw, 13px)",
            lineHeight: 1.8,
            color: "#8A8A8A",
            overflowWrap: "anywhere",
          }}
        >
          {prefix}{" "}
          <TypingText start={startTyping} />
        </motion.div>

        {/* ACTIONS */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          style={{
            width: "100%",
            maxWidth: 460,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            marginTop: isMobile ? 28 : 36,
          }}
        >
          <a
            href="#about"
            className="cmd-btn"
            style={{
              flex: isMobile ? "1 1 120px" : "0 0 auto",
              textAlign: "center",
            }}
          >
            About Me
          </a>

          <a
            href="#projects"
            className="cmd-btn"
            style={{
              flex: isMobile ? "1 1 120px" : "0 0 auto",
              textAlign: "center",
            }}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="cmd-btn"
            style={{
              flex: isMobile ? "1 1 120px" : "0 0 auto",
              textAlign: "center",
            }}
          >
            Contact
          </a>
        </motion.div>

        {/* SIMPLE INFO */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          style={{
            width: "100%",
            maxWidth: 620,
            marginTop: isMobile ? 36 : 48,
            borderTop: "1px solid #3A3A3A",
            borderBottom: "1px solid #3A3A3A",

            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: isMobile ? "11px 14px" : "12px 20px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              lineHeight: 1.5,
              color: "#8A8A8A",
              letterSpacing: "0.08em",
              textAlign: "center",
            }}
          >
            Bekasi, Indonesia
          </div>

          <div
            style={{
              width: isMobile ? "100%" : 1,
              height: isMobile ? 1 : "auto",
              background: "#3A3A3A",
              flexShrink: 0,
            }}
          />

          <div
            style={{
              flex: 1,
              padding: isMobile ? "11px 14px" : "12px 20px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              lineHeight: 1.5,
              color: "#8A8A8A",
              letterSpacing: "0.08em",
              textAlign: "center",
            }}
          >
            Web Development
          </div>

          <div
            style={{
              width: isMobile ? "100%" : 1,
              height: isMobile ? 1 : "auto",
              background: "#3A3A3A",
              flexShrink: 0,
            }}
          />

          <div
            style={{
              flex: 1,
              padding: isMobile ? "11px 14px" : "12px 20px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              lineHeight: 1.5,
              color: "#8A8A8A",
              letterSpacing: "0.08em",
              textAlign: "center",
            }}
          >
            Open to Collaboration
          </div>
        </motion.div>
      </main>
    </section>
  );
}