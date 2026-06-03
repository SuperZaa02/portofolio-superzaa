import { projects } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";
import HoverWords from "@/components/HoverWords";
import Reveal from "@/components/Reveal";

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col gap-14">
      <Reveal className="flex flex-col gap-3 items-end text-right" delay={0.2}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">Projects</h2>

        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          <HoverWords>
            These are the things I&apos;ve built, ranging from open-source tools
            to closed systems.
          </HoverWords>
        </p>
      </Reveal>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          auto-rows-fr
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}