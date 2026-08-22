import { socialLinks } from "@/data/socialsData";
import { useLinkConfirmModal } from "@/hooks/useLinkConfirmModal";
import { useState } from "react";

/* ============================================================
   SOCIAL LINKS — COMMS CHANNEL LIST
   Hard-bordered rows, monospace labels, inversion hover.
   ============================================================ */

export default function SocialLinks() {
  const { showModal } = useLinkConfirmModal();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        const isHovered = hovered === link.label;

        return (
          <button
            key={link.label}
            onClick={() => showModal(link)}
            onMouseEnter={() => setHovered(link.label)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: isHovered ? "#EAEAEA" : "transparent",
              border: "none",
              borderBottom: "1px solid #3A3A3A",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 80ms linear",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Icon
                size={14}
                style={{
                  color: isHovered ? "#0A0A0A" : "#8A8A8A",
                  transition: "color 80ms linear",
                  flexShrink: 0,
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    letterSpacing: "0.12em",
                    color: isHovered ? "#0A0A0A" : "#8A8A8A",
                    textTransform: "uppercase",
                    transition: "color 80ms linear",
                  }}
                >
                  {link.platform}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    letterSpacing: "0.05em",
                    color: isHovered ? "#0A0A0A" : "#EAEAEA",
                    transition: "color 80ms linear",
                  }}
                >
                  {link.label}
                </span>
              </div>
            </div>

            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: isHovered ? "#0A0A0A" : "#8A8A8A",
                transition: "color 80ms linear",
              }}
            >
              &gt;&gt;&gt;
            </span>
          </button>
        );
      })}
    </div>
  );
}
