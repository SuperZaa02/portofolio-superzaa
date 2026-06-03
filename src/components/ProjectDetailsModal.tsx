"use client";

import { Project } from "@/data/projectsData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLinkConfirmModal } from "@/hooks/useLinkConfirmModal";
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Download,
} from "lucide-react";

interface Props {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailsModal({
  project,
  open,
  onOpenChange,
}: Props) {
  const { showModal } = useLinkConfirmModal();

  const openLink = (
    href?: string,
    platform?: string,
    icon = ExternalLink
  ) => {
    if (!href) return;

    showModal({
      icon,
      label: project.title,
      href,
      platform: platform ?? "External Link",
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          p-0
          overflow-hidden
          sm:max-w-2xl
          lg:max-w-3xl
          max-h-[90vh]
        "
      >
        <DialogTitle className="sr-only">
          {project.title}
        </DialogTitle>

        <div className="flex max-h-[90vh] flex-col">
          {/* HEADER */}

          <div
            className="
              border-b
              px-6
              py-5
            "
          >
            <div className="flex flex-col gap-3">
              <h2
                className="
                  font-heading
                  text-2xl
                  font-semibold
                  tracking-tight
                  leading-tight
                "
              >
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="
                    h-7
                    rounded-md
                    px-3
                    text-xs
                    uppercase
                    tracking-wider
                  "
                >
                  {project.type === "open-source"
                    ? "Open Source"
                    : "Proprietary"}
                </Badge>

                {project.role && (
                  <span className="text-sm text-muted-foreground">
                    {project.role}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div
            className="
              flex-1
              overflow-y-auto
            "
          >
            <div
              className="
                px-6
                py-5
                space-y-6
              "
            >
              {/* DESCRIPTION */}

              <section>
                <p
                  className="
                    text-sm
                    leading-7
                    text-muted-foreground
                  "
                >
                  {project.description}
                </p>
              </section>

              {/* TECH STACK */}

              <section className="space-y-3">
                <h3 className="text-sm font-medium">
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="
                        h-7
                        rounded-md
                        px-3
                        text-xs
                      "
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* FEATURES */}

              {project.features &&
                project.features.length > 0 && (
                  <section className="space-y-3">
                    <h3 className="text-sm font-medium">
                      Key Features
                    </h3>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-muted-foreground
                          "
                        >
                          <Check
                            size={16}
                            className="shrink-0"
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              {/* ARCHITECTURE */}

              {project.architecture &&
                project.architecture.length > 0 && (
                  <section className="space-y-3">
                    <h3 className="text-sm font-medium">
                      Architecture
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {project.architecture.map((item) => (
                        <Badge
                          key={item}
                          variant="outline"
                          className="
                            h-7
                            rounded-md
                            px-3
                            text-xs
                          "
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </section>
                )}
            </div>
          </div>

          {/* FOOTER */}

          <div
            className="
              border-t
              px-6
              py-4
              bg-background
            "
          >
            <div className="flex flex-wrap gap-2">
              {project.githubLink && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    openLink(
                      project.githubLink,
                      "Source Code",
                      Github
                    )
                  }
                >
                  <Github size={14} />

                  <span>Source Code</span>

                  <ArrowUpRight size={14} />
                </Button>
              )}

              {project.liveLink && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    openLink(
                      project.liveLink,
                      "Live Demo"
                    )
                  }
                >
                  <ExternalLink size={14} />

                  <span>Live Demo</span>

                  <ArrowUpRight size={14} />
                </Button>
              )}

              {project.downloadLink && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    openLink(
                      project.downloadLink,
                      "Download",
                      Download
                    )
                  }
                >
                  <Download size={14} />

                  <span>Download</span>

                  <ArrowUpRight size={14} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}