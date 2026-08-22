import Reveal from "@/components/Reveal";
import { projects } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full">
      {/* TOP BORDER */}
      <div
        style={{
          height: 1,
          background: "#3A3A3A",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20">
        {/* SECTION LABEL */}
        <Reveal delay={0.05}>
          <div
            style={{
              fontFamily:
                "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "#6F6F6F",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Selected Work
          </div>
        </Reveal>

        {/* HEADING */}
        <Reveal delay={0.1}>
          <div
            style={{
              marginBottom: 40,
            }}
          >
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.045em",
                lineHeight: 0.9,
                fontSize:
                  "clamp(2.8rem, 6vw, 5rem)",
                color: "#EAEAEA",
                margin: 0,
                marginBottom: 20,
              }}
            >
              Projects
            </h2>

            <p
              style={{
                fontFamily:
                  "'JetBrains Mono', monospace",
                fontSize: 12,
                lineHeight: 1.8,
                color: "#8A8A8A",
                maxWidth: "58ch",
                margin: 0,
              }}
            >
              A selection of things I&apos;ve built,
              experimented with, and worked on over
              time.
            </p>
          </div>
        </Reveal>

        {/* PROJECT COUNT */}
        <Reveal delay={0.15}>
          <div
            style={{
              marginBottom: 8,

              fontFamily:
                "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: "0.08em",
              color: "#555555",
              textTransform: "lowercase",
            }}
          >
            {projects.length}{" "}
            {projects.length === 1
              ? "project"
              : "projects"}
          </div>
        </Reveal>

        {/* PROJECT GRID */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",

            /*
             * IMPORTANT:
             * No gap. Separator comes from the grid itself.
             */
            gap: 0,

            width: "100%",

            background: "#3A3A3A",

            border: "1px solid #3A3A3A",

            /*
             * Prevent grid overflow from creating
             * accidental visual gaps.
             */
            overflow: "hidden",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                minWidth: 0,
                minHeight: 0,

                width: "100%",
                height: "100%",

                margin: 0,
                padding: 0,

                display: "flex",

                /*
                 * This is the actual separator.
                 */
                borderRight: "1px solid #3A3A3A",
                borderBottom: "1px solid #3A3A3A",

                background: "#121212",
              }}
            >
              <ProjectCard
                project={project}
                delay={index * 80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}