import { Project } from "@/data/projectsData";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Download,
  ArrowUpRight,
  Lock,
  type LucideIcon,
  Unlock,
} from "lucide-react";
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
      ? {
          icon: Github,
          label: "Source",
          href: project.githubLink,
          platform: "Source Code",
        }
      : null,
    project.liveLink
      ? {
          icon: ExternalLink,
          label: "Demo",
          href: project.liveLink,
          platform: "Live Demo",
        }
      : null,
    project.downloadLink
      ? {
          icon: Download,
          label: "Download",
          href: project.downloadLink,
          platform: "Download",
        }
      : null,
  ].filter(Boolean) as ProjectLink[];

  return (
    <Card
      className="
        group
        flex
        h-full
        flex-col
        border-border/40
        bg-transparent
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-border/80
      "
    >
      <CardHeader className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="
              font-heading
              text-xl
              font-semibold
              tracking-tight
              leading-tight
              transition-transform
              duration-300
              group-hover:translate-x-[2px]
            "
          >
            {project.title}
          </h3>

          <Badge
            variant="outline"
            className="
              gap-1.5
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-muted-foreground
              border-border/50
              bg-transparent
              rounded-sm
            "
          >
            {isOpenSource ? (
              <Unlock size={12} />
            ) : (
              <Lock size={12} />
            )}

            {isOpenSource ? "Open Source" : "Proprietary"}
          </Badge>
        </div>

        <p
          className="
            text-sm
            leading-7
            text-muted-foreground
            line-clamp-4
          "
        >
          {project.description}
        </p>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {project.techStack.map((tech, index) => (
            <span
              key={tech}
              className="text-xs text-muted-foreground"
            >
              {tech}
              {index !== project.techStack.length - 1 && (
                <span className="ml-2 opacity-30">•</span>
              )}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter
        className="
          border-t
          border-border/30
          pt-4
          flex
          flex-wrap
          gap-5
        "
      >
        {links.map(({ label, href, icon: Icon, platform }) => (
          <button
            key={label}
            onClick={() =>
              showModal({
                icon: Icon,
                label: project.title,
                href,
                platform,
              })
            }
            className="
              group/link
              inline-flex
              items-center
              gap-1.5
              text-xs
              text-muted-foreground
              transition-colors
              duration-200
              hover:text-foreground
            "
          >
            <span>{label}</span>

            <ArrowUpRight
              size={12}
              className="
                transition-transform
                duration-200
                group-hover/link:translate-x-[1px]
                group-hover/link:-translate-y-[1px]
              "
            />
          </button>
        ))}
      </CardFooter>
    </Card>
  );
}