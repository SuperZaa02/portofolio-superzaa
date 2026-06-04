import HoverWords from "@/components/HoverWords";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";

import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <Reveal className="flex flex-col items-center gap-4" delay={0.2}>
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
              Get In Touch
            </h2>

            <p
              className="
                max-w-2xl
                text-sm
                sm:text-base
                leading-relaxed
                text-muted-foreground
              "
            >
              <HoverWords>
                Whether you have a question, an interesting project, a collaboration opportunity, or
                simply want to say hello, my inbox is always open.
              </HoverWords>
            </p>
          </Reveal>

          <Reveal className="mt-12 w-full max-w-xl" delay={0.5}>
            <Card
              className="
                relative
                overflow-hidden
                rounded-3xl
                border-border/40
                bg-card/40
                backdrop-blur-md
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

              <CardContent className="px-6 py-2">
                <SocialLinks />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
