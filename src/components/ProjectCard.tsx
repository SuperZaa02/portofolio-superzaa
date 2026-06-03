"use client";

import React, { useState } from "react";
import { Project } from "@/data/projectsData";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Lock,
  Unlock,
} from "lucide-react";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";

export function ProjectCard({
  project,
  delay,
}: {
  project: Project;
  delay?: number;
}) {
  const isOpenSource = project.type === "open-source";
  const [open, setOpen] = useState(false);

  return (
    <>
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
        style={{
          animationDelay: `${delay}ms`,
          animationFillMode: "forwards",
        }}
        className="
          groups
          cursor-pointer
          border-border/40
          bg-transparent

          opacity-0
          animate-fadeIn

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-border/80
        "
      >
        <CardHeader className="space-y-4">
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
                whitespace-nowrap
                rounded-sm
                border-border/50
                bg-transparent
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              {isOpenSource ? (
                <Unlock size={12} />
              ) : (
                <Lock size={12} />
              )}

              {isOpenSource
                ? "Open Source"
                : "Proprietary"}
            </Badge>
          </div>

          <p
            className="
              text-sm
              leading-7
              text-muted-foreground
              line-clamp-3
            "
          >
            {project.shortDescription}
          </p>

          <div className="pt-2">
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
              <span>View Details</span>

              <ArrowUpRight
                size={14}
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
      </Card>

      <ProjectDetailsModal
        project={project}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}