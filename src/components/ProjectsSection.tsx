import HoverWords from "@/components/HoverWords";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { projects } from "@/data/projectsData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, Math.min(2, projects.length));
  const remainingProjects = projects.slice(featuredProjects.length);

  return (
    <section
      id="projects"
      className="
        w-full
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* Heading */}
        <Reveal delay={0.2}>
          <div>
            <h2
              className="
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
                mt-3
                max-w-2xl
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
          </div>
        </Reveal>

        <div className="mt-10">
          {/* Top Row */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-6
              items-start
            "
          >
            {/* Featured Projects */}
            <div className="lg:col-span-2">
              <div
                className={`
                  grid
                  gap-6
                  ${featuredProjects.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}
                `}
              >
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} delay={index * 100} />
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div
              className="
                hidden
                lg:flex
                justify-center
                items-start
                select-none
              "
            >
              <Reveal delay={0.3}>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="flex justify-center"
                >
                  <motion.img
                    src="/assets/image/others/projects.png"
                    alt="Projects Illustration"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onContextMenu={(e) => e.preventDefault()}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      w-[200px]
                      xl:w-[240px]
                      h-auto
                      object-contain
                      pointer-events-none
                      select-none
                      [-webkit-user-drag:none]
                    "
                  />
                </motion.div>
              </Reveal>
            </div>
          </div>

          {/* Remaining Projects */}
          {remainingProjects.length > 0 && (
            <div
              className="
                mt-6

                grid
                gap-6

                grid-cols-1

                sm:grid-cols-2

                lg:[grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]
              "
            >
              {remainingProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delay={(index + featuredProjects.length) * 100}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
