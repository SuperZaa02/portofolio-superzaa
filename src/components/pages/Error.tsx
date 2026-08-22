import React from "react";
import FooterSection from "@/components/FooterSection";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type ErrorPageProps = {
  code?: string | number;
  title?: string;
  message?: React.ReactNode;
  showFooter?: boolean;
};

function ErrorPage({
  code = 404,
  title = "Page Not Found",
  message,
  showFooter = true,
}: ErrorPageProps) {
  const defaultMessage = (
    <>
      The page you&apos;re looking for doesn&apos;t exist or may have been
      moved or deleted.
    </>
  );

  const errorCode = String(code).padStart(3, "0");

  const rows = [
    ["CODE", `E-${errorCode}`],
    ["MODULE", "NAVIGATION"],
    ["STATUS", title],
  ];

  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden bg-[#0A0A0A]">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        {/* ERROR CODE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          className="w-full text-center"
        >
          <div
            className="
              relative
              inline-block
              font-black
              leading-[0.8]
              tracking-[-0.06em]
              text-[#EAEAEA]
              text-[clamp(6rem,22vw,15rem)]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {code}

            <div className="absolute bottom-[-4px] left-0 right-0 h-[3px] bg-[#E61919]" />
          </div>
        </motion.div>

        {/* ERROR REPORT */}
        <Reveal delay={0.18}>
          <div className="mt-6 w-full max-w-[460px] border border-[#E61919] bg-[#121212] sm:mt-8">
            {/* HEADER */}
            <div
              className="bg-[#E61919] px-3.5 py-[7px] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#EAEAEA]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Error Report
            </div>

            {/* DATA */}
            <div>
              {rows.map(([label, value], index) => (
                <div
                  key={label}
                  className={[
                    "flex min-h-[40px] items-center justify-between gap-4 px-3.5 py-2.5",
                    index < rows.length - 1
                      ? "border-b border-[#1E1E1E]"
                      : "",
                  ].join(" ")}
                >
                  <span
                    className="shrink-0 text-[10px] uppercase tracking-[0.1em] text-[#8A8A8A]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {label}
                  </span>

                  <span
                    className="
                      min-w-0
                      break-words
                      text-right
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                    "
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color:
                        label === "STATUS" ? "#E61919" : "#EAEAEA",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* MESSAGE */}
            <div className="border-t border-[#3A3A3A] px-3.5 py-3.5">
              <div
                className="break-words text-[10px] uppercase leading-[1.7] tracking-[0.05em] text-[#8A8A8A]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {message ?? defaultMessage}
              </div>
            </div>

            {/* ACTION */}
            <div className="border-t border-[#3A3A3A] px-3.5 py-2.5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span
                  className="text-[10px] uppercase tracking-[0.08em] text-[#E61919]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Connection Terminated
                </span>

                <a
                  href="/"
                  className="
                    w-fit
                    text-[10px]
                    uppercase
                    tracking-[0.08em]
                    text-[#8A8A8A]
                    no-underline
                    transition-colors
                    duration-100
                    hover:text-[#EAEAEA]
                  "
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Return to Base
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      {showFooter && <FooterSection />}
    </div>
  );
}

export { ErrorPage };
export default ErrorPage;