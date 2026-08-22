"use client";

/* ============================================================
   INDUSTRIAL BACKGROUND
   Replaces floating tech icons with a classified military grid:
   - Structural grid with 1px cell lines
   - Corner crosshair markers
   - Structural accent lines
   - No glows, no blur, no floating icons
   ============================================================ */

const CORNER_SIZE = 16;

function Crosshair({ x, y }: { x: "left" | "right"; y: "top" | "bottom" }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        [x]: 24,
        [y]: 24,
        width: CORNER_SIZE,
        height: CORNER_SIZE,
      }}
    >
      {/* Horizontal arm */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 1,
          background: "#3A3A3A",
          transform: "translateY(-50%)",
        }}
      />
      {/* Vertical arm */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 1,
          background: "#3A3A3A",
          transform: "translateX(-50%)",
        }}
      />
      {/* Center dot */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 3,
          height: 3,
          background: "#E61919",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

/* Grid of static structural lines */
function StructuralGrid() {
  const cols = 12;
  const rows = 8;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        opacity: 0.06,
      }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #EAEAEA",
          }}
        />
      ))}
    </div>
  );
}

export default function IndustrialBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* STRUCTURAL GRID */}
      <StructuralGrid />

      {/* HORIZONTAL STRUCTURAL LINES */}
      <div className="absolute top-[25%] left-0 right-0" style={{ height: 1, background: "#3A3A3A", opacity: 0.4 }} />
      <div className="absolute top-[50%] left-0 right-0" style={{ height: 1, background: "#3A3A3A", opacity: 0.2 }} />
      <div className="absolute top-[75%] left-0 right-0" style={{ height: 1, background: "#3A3A3A", opacity: 0.4 }} />

      {/* VERTICAL STRUCTURAL LINES */}
      <div className="absolute top-0 bottom-0 left-[20%]" style={{ width: 1, background: "#3A3A3A", opacity: 0.2 }} />
      <div className="absolute top-0 bottom-0 right-[20%]" style={{ width: 1, background: "#3A3A3A", opacity: 0.2 }} />

      {/* ACCENT LINE — red structural marker */}
      <div
        className="absolute left-0"
        style={{
          top: 0,
          bottom: 0,
          width: 2,
          background: "#E61919",
          opacity: 0.5,
        }}
      />

      {/* CORNER CROSSHAIRS */}
      <Crosshair x="left" y="top" />
      <Crosshair x="right" y="top" />
      <Crosshair x="left" y="bottom" />
      <Crosshair x="right" y="bottom" />

      {/* TELEMETRY LABEL — top right */}
      <div
        className="absolute top-6 right-8 pointer-events-none"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          letterSpacing: "0.15em",
          color: "#3A3A3A",
          textTransform: "uppercase",
          userSelect: "none",
        }}
      >
        SYS / TERMINAL-01
      </div>
    </div>
  );
}
