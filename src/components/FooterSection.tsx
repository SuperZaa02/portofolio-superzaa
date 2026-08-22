import pkg from "../../package.json";
import { useEffect, useState } from "react";
import VersionModal from "./VersionModal";

const buildVersion = "v" + pkg.version + "+" + __BUILD_ID__;

export default function FooterSection() {
  const [versionModalOpen, setVersionModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth <= 520);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <footer
      style={{
        width: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      {/* TOP BORDER */}
      <div
        style={{
          width: "100%",
          height: 1,
          background: "#3A3A3A",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "minmax(0, 1fr) auto minmax(0, 1fr)",
          gridTemplateRows: isMobile ? "auto auto auto" : "auto",
          alignItems: "center",
          gap: isMobile ? 10 : 24,
          width: "100%",
          boxSizing: "border-box",
          padding: isMobile ? "12px 14px" : "12px 24px",
          background: "#0A0A0A",
        }}
      >
        {/* COORDINATES */}
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://www.google.com/search?q=6%C2%B0LU-11%C2%B0LS%20&%2095%C2%B0BT-141%C2%B0BT",
              "_blank",
              "noopener,noreferrer",
            )
          }
          style={{
            gridColumn: isMobile ? "1" : "1",
            gridRow: isMobile ? "1" : "1",
            justifySelf: "start",
            width: isMobile ? "100%" : "auto",
            minWidth: 0,

            background: "transparent",
            border: "none",
            outline: "none",
            cursor: "pointer",
            padding: 0,
            margin: 0,

            textAlign: "left",
            whiteSpace: isMobile ? "normal" : "nowrap",

            fontFamily: "'JetBrains Mono', monospace",
            fontSize: isMobile ? 9 : 10,
            lineHeight: 1.4,
            letterSpacing: isMobile ? "0.08em" : "0.1em",
            color: "#8A8A8A",
            textTransform: "uppercase",

            transition: "color 80ms linear",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#EAEAEA";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#8A8A8A";
          }}
        >
          LAT / 6°N–11°S <span>&nbsp;</span> LON / 95°E–141°E
        </button>

        {/* COPYRIGHT */}
        <span
          style={{
            gridColumn: isMobile ? "1" : "2",
            gridRow: isMobile ? "3" : "1",

            justifySelf: isMobile ? "center" : "center",

            width: isMobile ? "100%" : "auto",
            minWidth: 0,

            fontFamily: "'JetBrains Mono', monospace",
            fontSize: isMobile ? 9 : 10,
            lineHeight: 1.4,
            letterSpacing: isMobile ? "0.08em" : "0.1em",
            color: "#8A8A8A",
            textTransform: "uppercase",
            textAlign: "center",
            whiteSpace: isMobile ? "normal" : "nowrap",

            paddingTop: isMobile ? 2 : 0,
          }}
        >
          &copy; {new Date().getUTCFullYear()} Faeza Raziq
        </span>

        {/* VERSION */}
        <button
          type="button"
          onClick={() => setVersionModalOpen(true)}
          style={{
            gridColumn: isMobile ? "1" : "3",
            gridRow: isMobile ? "2" : "1",

            justifySelf: isMobile ? "end" : "end",

            width: isMobile ? "auto" : "100%",
            minWidth: 0,

            background: "transparent",
            border: "none",
            outline: "none",
            cursor: "pointer",
            padding: 0,
            margin: 0,

            textAlign: "right",
            whiteSpace: "nowrap",

            fontFamily: "'JetBrains Mono', monospace",
            fontSize: isMobile ? 9 : 10,
            lineHeight: 1.4,
            letterSpacing: isMobile ? "0.08em" : "0.1em",
            color: "#8A8A8A",
            textTransform: "uppercase",

            transition: "color 80ms linear",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#EAEAEA";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#8A8A8A";
          }}
        >
          REV / {buildVersion}
        </button>
      </div>

      {/* BOTTOM RED MARKER */}
      <div
        style={{
          width: "100%",
          height: 2,
          background: "#E61919",
          opacity: 0.6,
        }}
      />

      <VersionModal
        open={versionModalOpen}
        onOpenChange={setVersionModalOpen}
      />
    </footer>
  );
}