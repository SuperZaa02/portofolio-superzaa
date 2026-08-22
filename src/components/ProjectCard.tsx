"use client";

import { useState } from "react";

import Reveal from "@/components/Reveal";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";

import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({
  project,
  delay,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isOpenSource = project.type === "open-source";

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Reveal delay={delay ? delay / 1000 : 0}>
        <article
          role="button"
          tabIndex={0}
          aria-label={`View details for ${project.title}`}
          onClick={handleOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpen();
            }
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: "100%",
            height: "100%",
            minHeight: 220,

            display: "flex",
            flexDirection: "column",

            margin: 0,
            padding: 0,

            background: "#121212",

            /*
             * Important:
             * Jangan gunakan border di sini.
             * Grid parent yang mengatur separator.
             */
            boxShadow: hovered
              ? "inset 0 0 0 1px #E61919"
              : "none",

            cursor: "pointer",

            transition: "box-shadow 120ms ease",
          }}
        >
          {/* CONTENT */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",

              margin: 0,
              padding: 20,
            }}
          >
            {/* TYPE */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: isOpenSource
                  ? "#6F6F6F"
                  : "#555555",
                marginBottom: 18,
              }}
            >
              {isOpenSource
                ? "Open Source"
                : "Proprietary"}
            </div>

            {/* TITLE */}
            <h3
              style={{
                margin: 0,

                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                fontSize:
                  "clamp(1.2rem, 2vw, 1.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",

                color: "#EAEAEA",
                textTransform: "uppercase",
              }}
            >
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              style={{
                margin: "14px 0 0 0",

                fontFamily:
                  "'JetBrains Mono', monospace",
                fontSize: 11,
                lineHeight: 1.75,

                color: "#8A8A8A",
                maxWidth: "55ch",
              }}
            >
              {project.shortDescription}
            </p>

            {/* ACTION */}
            <div
              style={{
                marginTop: "auto",
                paddingTop: 24,

                display: "flex",
                alignItems: "center",
                gap: 8,

                fontFamily:
                  "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",

                color: hovered
                  ? "#E61919"
                  : "#8A8A8A",

                transition: "color 120ms ease",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 18,
                  height: 1,

                  flexShrink: 0,

                  background: hovered
                    ? "#E61919"
                    : "#555555",

                  transition:
                    "background 120ms ease, width 120ms ease",
                }}
              />

              View project
            </div>
          </div>
        </article>
      </Reveal>

      <ProjectDetailsModal
        project={project}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}