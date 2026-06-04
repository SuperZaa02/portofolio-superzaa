"use client";

import { Project } from "@/data/projectsData";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLinkConfirmModal } from "@/hooks/useLinkConfirmModal";
import { ArrowUpRight, Check, ExternalLink, Github, Download, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import HoverWords from "./HoverWords";
import { motion } from "framer-motion";

interface Props {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailsModal({ project, open, onOpenChange }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { showModal } = useLinkConfirmModal();

  const openLink = (href?: string, platform?: string, icon = ExternalLink) => {
    if (!href) return;

    showModal({
      icon,
      label: project.title,
      href,
      platform: platform ?? "External Link",
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="
            p-0
            overflow-hidden

            border-border/40
            bg-background/95
            backdrop-blur-xl

            sm:max-w-3xl
            lg:max-w-4xl

            max-h-[90vh]
          "
        >
          <DialogTitle className="sr-only">{project.title}</DialogTitle>

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="flex max-h-[90vh] flex-col"
          >
            {/* HEADER */}
            <div
              className="
                px-6
                pt-6
                pb-4
              "
            >
              <div className="flex flex-col gap-3">
                <h2
                  className="
                    font-heading
                    text-2xl
                    md:text-3xl
                    font-semibold
                    tracking-tight
                    leading-tight
                  "
                >
                  {project.title}
                </h2>

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    text-sm
                    text-muted-foreground
                  "
                >
                  <Badge
                    variant="outline"
                    className="
                      h-6
                      rounded-full
                      px-2.5
                      text-[10px]
                      uppercase
                      tracking-wider
                    "
                  >
                    {project.type === "open-source" ? "Open Source" : "Proprietary"}
                  </Badge>

                  {project.role && (
                    <>
                      <span>•</span>
                      <span>{project.role}</span>
                    </>
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
                {/* SCREENSHOTS */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <section className="space-y-3">
                    <h3 className="text-sm font-medium">Screenshots</h3>

                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                      setApi={(api) => {
                        if (!api) return;

                        setCurrentSlide(api.selectedScrollSnap());

                        api.on("select", () => {
                          setCurrentSlide(api.selectedScrollSnap());
                        });
                      }}
                    >
                      <CarouselContent>
                        {project.screenshots.map((image, index) => (
                          <CarouselItem key={image}>
                            <div
                              className="
                                    relative
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    bg-muted/20
                                  "
                            >
                              <motion.img
                                src={image}
                                alt={`${project.title} ${index + 1}`}
                                loading="lazy"
                                onClick={() => setPreviewImage(image)}
                                whileHover={{
                                  scale: 1.015,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                                className="
                                      w-full
                                      aspect-[16/9]
                                      object-cover
                                      cursor-pointer
                                    "
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <CarouselPrevious
                        className="
                            left-3
                            bg-background/80
                            backdrop-blur
                          "
                      />

                      <CarouselNext
                        className="
                            right-3
                            bg-background/80
                            backdrop-blur
                          "
                      />
                    </Carousel>

                    {/* INDICATOR */}
                    <div className="flex justify-center gap-1.5">
                      {project.screenshots.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`
                                h-1.5
                                rounded-full
                                transition-all
                                duration-300
                                ${
                                  currentSlide === index
                                    ? "w-6 bg-primary"
                                    : "w-1.5 bg-muted-foreground/30"
                                }
                              `}
                        />
                      ))}
                    </div>
                  </section>
                )}

                {/* DESCRIPTION */}
                <section>
                  <h3 className="text-sm font-medium">Description</h3>

                  <p
                    className="
                      text-sm
                      leading-7
                      text-muted-foreground
                    "
                  >
                    <HoverWords>{project.description}</HoverWords>
                  </p>
                </section>

                {/* TECH STACK */}
                <section className="space-y-3">
                  <h3 className="text-sm font-medium">Tech Stack</h3>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="
                          h-7
                          rounded-full
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
                {project.features && project.features.length > 0 && (
                  <section className="space-y-3">
                    <h3 className="text-sm font-medium">Key Features</h3>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                              flex
                              items-start
                              gap-2
                              text-sm
                              text-muted-foreground
                            "
                        >
                          <Check
                            size={14}
                            className="
                                shrink-0
                                mt-1
                                text-primary
                              "
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* ARCHITECTURE */}
                {project.architecture && project.architecture.length > 0 && (
                  <section className="space-y-3">
                    <h3 className="text-sm font-medium">Architecture</h3>

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
              "
            >
              <div className="flex flex-wrap gap-5">
                {project.githubLink && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openLink(project.githubLink, "Source Code", Github)}
                    className="
                      group
                      h-auto
                      p-0

                      text-muted-foreground

                      hover:bg-transparent
                      hover:text-foreground
                    "
                  >
                    Source Code
                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-200

                        group-hover:translate-x-[2px]
                        group-hover:-translate-y-[2px]
                      "
                    />
                  </Button>
                )}

                {project.liveLink && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openLink(project.liveLink, "Live Demo")}
                    className="
                      group
                      h-auto
                      p-0

                      text-muted-foreground

                      hover:bg-transparent
                      hover:text-foreground
                    "
                  >
                    Live Demo
                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-200

                        group-hover:translate-x-[2px]
                        group-hover:-translate-y-[2px]
                      "
                    />
                  </Button>
                )}

                {project.downloadLink && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openLink(project.downloadLink, "Download", Download)}
                    className="
                      group
                      h-auto
                      p-0

                      text-muted-foreground

                      hover:bg-transparent
                      hover:text-foreground
                    "
                  >
                    Download
                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-200

                        group-hover:translate-x-[2px]
                        group-hover:-translate-y-[2px]
                      "
                    />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!previewImage}
        onOpenChange={(open) => {
          if (!open) setPreviewImage(null);
        }}
      >
        <DialogContent
          className="
            p-0
            border-none
            bg-transparent
            shadow-none
            max-w-none
            w-auto
          "
        >
          <DialogTitle className="sr-only">Image Preview</DialogTitle>

          <button
            onClick={() => setPreviewImage(null)}
            className="
              absolute
              right-4
              top-4
              z-50

              rounded-full

              border
              border-white/10

              bg-background/80

              p-2

              backdrop-blur-md
            "
          >
            <X size={18} />
          </button>

          <div
            className="
              flex
              items-center
              justify-center
              w-[90vw]
              h-[90vh]
            "
          >
            <motion.img
              src={previewImage ?? ""}
              alt="Preview"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                max-w-full
                max-h-full
                object-contain
                rounded-xl
              "
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
