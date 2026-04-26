import { projects } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-3 items-end text-right">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
        <p className="text-sm font-body text-muted-foreground max-w-2xl">
          These are the things I&apos;ve built. ranging from open-source tools to closed systems.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}