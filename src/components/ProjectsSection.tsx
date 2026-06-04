import HoverWords from "@/components/HoverWords";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 flex flex-col items-end gap-3" delay={0.2}>
          <h2
            className="
              text-right
              font-heading
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              tracking-tight
              text-foreground
            "
          >
            Projects
          </h2>

          <p
            className="
              max-w-2xl
              text-right
              text-sm
              sm:text-base
              leading-relaxed
              text-muted-foreground
            "
          >
            <HoverWords>
              These are the things I&apos;ve built, ranging from open-source tools to proprietary
              systems and long-term personal projects.
            </HoverWords>
          </p>
        </Reveal>

        <div
          className="
            grid
            gap-6
            [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]
          "
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
