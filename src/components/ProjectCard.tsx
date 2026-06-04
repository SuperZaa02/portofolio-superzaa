"use client";

import { useState } from "react";
import { ArrowUpRight, Lock, Unlock } from "lucide-react";

import Reveal from "@/components/Reveal";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";

import { Project } from "@/data/projectsData";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const isOpenSource = project.type === "open-source";

  return (
    <>
      <Reveal delay={delay ? delay / 1000 : 0}>
        <Card
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpen(true);
            }
          }}
          className="
            group
            h-full
            cursor-pointer
            overflow-hidden
            rounded-2xl
            border-border/40
            bg-card/30
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-primary/30
            hover:shadow-xl
            focus:outline-none
            focus:ring-2
            focus:ring-primary/30
          "
        >
          <CardHeader className="flex h-full flex-col p-6">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="
                  w-fit
                  gap-1.5
                  rounded-md
                  border-border/50
                  bg-transparent
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                {isOpenSource ? <Unlock size={12} /> : <Lock size={12} />}

                {isOpenSource ? "Open Source" : "Proprietary"}
              </Badge>

              <h3
                className="
                  font-heading
                  text-xl
                  sm:text-2xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  transition-transform
                  duration-300
                  group-hover:translate-x-[2px]
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-muted-foreground
                  line-clamp-4
                "
              >
                {project.shortDescription}
              </p>
            </div>

            <div className="mt-auto pt-8">
              <div
                className="
                  flex
                  items-center
                  justify-end
                  gap-2
                  text-sm
                  text-muted-foreground
                  transition-colors
                  duration-300
                  group-hover:text-foreground
                "
              >
                <span>Explore Project</span>

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-[2px]
                    group-hover:-translate-y-[2px]
                  "
                />
              </div>
            </div>
          </CardHeader>

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          >
            <div
              className="
                absolute
                right-0
                top-0
                h-32
                w-32
                rounded-full
                bg-primary/10
                blur-3xl
              "
            />
          </div>
        </Card>
      </Reveal>

      <ProjectDetailsModal project={project} open={open} onOpenChange={setOpen} />
    </>
  );
}
