"use client";

import { useState } from "react";
import { Github, Download, ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";

import { Project } from "@/data/projectsData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLinkConfirmModal } from "@/hooks/useLinkConfirmModal";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { showModal } = useLinkConfirmModal();

  const isOpenSource = project.type === "open-source";

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
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          style={{
            padding: 0,
            background: "#121212",
            border: "1px solid #3A3A3A",
            borderRadius: 0,
            maxWidth: "min(95vw, 900px)",
            maxHeight: "90vh",
            boxShadow: "none",
            overflow: "hidden",
          }}
        >
          <DialogTitle className="sr-only">
            {project.title}
          </DialogTitle>

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "90vh",
            }}
          >
            {/* HEADER */}
            <header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                padding: "14px 16px 14px 20px",
                borderBottom: "1px solid #3A3A3A",
                background: "#181818",
                flexShrink: 0,
              }}
            >
              {/* PROJECT META */}
              <div
                style={{
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      color: "#6F6F6F",
                      textTransform: "uppercase",
                    }}
                  >
                    Project
                  </span>

                  <span
                    style={{
                      width: 3,
                      height: 3,
                      background: "#555555",
                      flexShrink: 0,
                    }}
                  />

                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9,
                      letterSpacing: "0.08em",
                      color: isOpenSource ? "#8A8A8A" : "#6F6F6F",
                      textTransform: "uppercase",
                    }}
                  >
                    {isOpenSource ? "Open Source" : "Proprietary"}
                  </span>
                </div>

                {project.role && (
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9,
                      letterSpacing: "0.06em",
                      color: "#555555",
                      textTransform: "uppercase",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.role}
                  </span>
                )}
              </div>

              {/* CLOSE */}
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close project details"
                style={{
                  width: 30,
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "transparent",
                  border: "1px solid #3A3A3A",
                  color: "#8A8A8A",
                  cursor: "pointer",
                  transition:
                    "background 120ms ease, color 120ms ease, border-color 120ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E61919";
                  e.currentTarget.style.borderColor = "#E61919";
                  e.currentTarget.style.color = "#EAEAEA";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "#3A3A3A";
                  e.currentTarget.style.color = "#8A8A8A";
                }}
              >
                <X size={14} strokeWidth={1.8} />
              </button>
            </header>

            {/* SCROLLABLE BODY */}
            <div style={{ flex: 1, overflowY: "auto" }}>
              <div style={{ padding: "24px" }}>
                {/* TITLE */}
                <section style={{ marginBottom: 28 }}>
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "-0.04em",
                      lineHeight: 0.92,
                      fontSize: "clamp(2rem, 5vw, 3.4rem)",
                      color: "#EAEAEA",
                    }}
                  >
                    {project.title}
                  </h2>
                </section>

                {/* SCREENSHOTS */}
                {project.screenshots?.length > 0 && (
                  <section style={{ marginBottom: 32 }}>
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
                            <button
                              type="button"
                              onClick={() => setPreviewImage(image)}
                              style={{
                                display: "block",
                                width: "100%",
                                padding: 0,
                                overflow: "hidden",
                                border: "1px solid #3A3A3A",
                                background: "#0A0A0A",
                                cursor: "zoom-in",
                              }}
                              aria-label={`Preview screenshot ${index + 1}`}
                            >
                              <img
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                loading="lazy"
                                style={{
                                  display: "block",
                                  width: "100%",
                                  aspectRatio: "16 / 9",
                                  objectFit: "cover",
                                }}
                              />
                            </button>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      <CarouselPrevious
                        style={{
                          left: 8,
                          width: 32,
                          height: 32,
                          background: "#121212",
                          border: "1px solid #3A3A3A",
                          borderRadius: 0,
                          color: "#EAEAEA",
                        }}
                      />

                      <CarouselNext
                        style={{
                          right: 8,
                          width: 32,
                          height: 32,
                          background: "#121212",
                          border: "1px solid #3A3A3A",
                          borderRadius: 0,
                          color: "#EAEAEA",
                        }}
                      />
                    </Carousel>

                    {project.screenshots.length > 1 && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 4,
                          marginTop: 10,
                        }}
                        aria-label={`Screenshot ${currentSlide + 1} of ${project.screenshots.length}`}
                      >
                        {project.screenshots.map((_, index) => (
                          <span
                            key={index}
                            style={{
                              width: currentSlide === index ? 18 : 5,
                              height: 2,
                              background:
                                currentSlide === index
                                  ? "#E61919"
                                  : "#3A3A3A",
                              transition: "width 120ms ease",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </section>
                )}

                {/* DESCRIPTION */}
                <section style={{ marginBottom: 32 }}>
                  <p
                    style={{
                      margin: 0,
                      maxWidth: "68ch",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      lineHeight: 1.85,
                      color: "#8A8A8A",
                    }}
                  >
                    {project.description}
                  </p>
                </section>

                {/* DETAILS GRID */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: 1,
                    background: "#3A3A3A",
                    marginBottom: 32,
                  }}
                >
                  {/* TECH */}
                  <div
                    style={{
                      background: "#121212",
                      padding: 18,
                    }}
                  >
                    <div
                      style={{
                        marginBottom: 12,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9,
                        letterSpacing: "0.1em",
                        color: "#6F6F6F",
                        textTransform: "uppercase",
                      }}
                    >
                      Tech Stack
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                      }}
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            color: "#EAEAEA",
                            border: "1px solid #3A3A3A",
                            padding: "5px 8px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ARCHITECTURE */}
                  {project.architecture?.length > 0 && (
                    <div
                      style={{
                        background: "#121212",
                        padding: 18,
                      }}
                    >
                      <div
                        style={{
                          marginBottom: 12,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9,
                          letterSpacing: "0.1em",
                          color: "#6F6F6F",
                          textTransform: "uppercase",
                        }}
                      >
                        Architecture
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 6,
                        }}
                      >
                        {project.architecture.map((item) => (
                          <span
                            key={item}
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 10,
                              color: "#8A8A8A",
                              border: "1px solid #3A3A3A",
                              padding: "5px 8px",
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* FEATURES */}
                {project.features?.length > 0 && (
                  <section>
                    <div
                      style={{
                        marginBottom: 12,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9,
                        letterSpacing: "0.1em",
                        color: "#6F6F6F",
                        textTransform: "uppercase",
                      }}
                    >
                      Key Features
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(220px, 1fr))",
                        borderTop: "1px solid #3A3A3A",
                        borderLeft: "1px solid #3A3A3A",
                      }}
                    >
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          style={{
                            padding: "10px 12px",
                            borderRight: "1px solid #3A3A3A",
                            borderBottom: "1px solid #3A3A3A",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11,
                            lineHeight: 1.6,
                            color: "#8A8A8A",
                          }}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* FOOTER */}
            {(project.githubLink ||
              project.liveLink ||
              project.downloadLink) && (
                <footer
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    padding: "12px 20px",
                    borderTop: "1px solid #3A3A3A",
                    background: "#181818",
                    flexShrink: 0,
                  }}
                >
                  {project.githubLink && (
                    <button
                      type="button"
                      onClick={() =>
                        openLink(
                          project.githubLink,
                          "Source Code",
                          Github
                        )
                      }
                      className="cmd-btn"
                      style={{
                        fontSize: 10,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                      }}
                    >
                      <Github size={12} />
                      Source Code
                    </button>
                  )}

                  {project.liveLink && (
                    <button
                      type="button"
                      onClick={() =>
                        openLink(project.liveLink, "Live Demo")
                      }
                      className="cmd-btn"
                      style={{ fontSize: 10 }}
                    >
                      Live Demo
                    </button>
                  )}

                  {project.downloadLink && (
                    <button
                      type="button"
                      onClick={() =>
                        openLink(
                          project.downloadLink,
                          "Download",
                          Download
                        )
                      }
                      className="cmd-btn"
                      style={{
                        fontSize: 10,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                      }}
                    >
                      <Download size={12} />
                      Download
                    </button>
                  )}
                </footer>
              )}
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* IMAGE PREVIEW */}
      <Dialog
        open={Boolean(previewImage)}
        onOpenChange={(value) => {
          if (!value) setPreviewImage(null);
        }}
      >
        <DialogContent
          style={{
            padding: 0,
            width: "auto",
            maxWidth: "95vw",
            border: "1px solid #3A3A3A",
            borderRadius: 0,
            background: "#0A0A0A",
            boxShadow: "none",
          }}
        >
          <DialogTitle className="sr-only">
            Image Preview
          </DialogTitle>

          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            aria-label="Close image preview"
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 10,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#121212",
              border: "1px solid #3A3A3A",
              color: "#EAEAEA",
              cursor: "pointer",
            }}
          >
            <X size={16} />
          </button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            style={{
              width: "90vw",
              height: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <img
              src={previewImage ?? ""}
              alt="Project preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}