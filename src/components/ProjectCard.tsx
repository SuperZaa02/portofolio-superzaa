import { Project } from "@/data/projectsData";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock, Download, type LucideIcon } from "lucide-react";
import { useLinkConfirmModal } from "@/hooks/useLinkConfirmModal";

type ProjectLink = {
  icon: LucideIcon;
  label: string;
  href: string;
  platform: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const isOpenSource = project.type === "open-source";
  const { showModal } = useLinkConfirmModal();

  const links: ProjectLink[] = [
    isOpenSource && project.githubLink
      ? { icon: Github, label: "Source Code", href: project.githubLink, platform: "Source Code" }
      : null,
    project.liveLink
      ? { icon: ExternalLink, label: "Live Demo", href: project.liveLink, platform: "Live Demo" }
      : null,
    project.downloadLink
      ? { icon: Download, label: "Download", href: project.downloadLink, platform: "Download" }
      : null,
  ].filter((l): l is ProjectLink => l !== null);

  return (
    <Card className="group h-full flex flex-col transition-all duration-200 hover:border-border/60 border-border/40 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3 mb-1">
          <CardTitle className="text-base font-heading tracking-tight leading-snug group-hover:text-foreground transition-colors">
            {project.title}
          </CardTitle>
          <Badge
            variant={isOpenSource ? "default" : "secondary"}
            className="shrink-0 uppercase text-[10px] tracking-wider font-body"
          >
            {isOpenSource ? "Open Source" : "Proprietary"}
          </Badge>
        </div>
        <p className="font-body text-sm leading-relaxed text-muted-foreground/80">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="flex-grow pt-0 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="font-body text-[10px] px-2 py-0.5 text-muted-foreground/70 bg-background/40"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-border/30 flex items-center gap-3 flex-wrap">
        {!isOpenSource && (
          <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground/40 select-none">
            <Lock size={13} strokeWidth={1.5} />
            {links.length === 0 && <span>Source Unavailable</span>}
          </div>
        )}
        {links.map(({ icon: Icon, label, href, platform }) => (
          <button
            key={label}
            onClick={() =>
              showModal({ icon: Icon, label: project.title, href, platform })
            }
            className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label={`${label} — ${project.title}`}
          >
            <Icon size={13} strokeWidth={1.5} />
            <span>{label}</span>
          </button>
        ))}
      </CardFooter>
    </Card>
  );
}