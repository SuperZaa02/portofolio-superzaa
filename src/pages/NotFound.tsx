import FooterSection from "@/components/FooterSection";
import HoverWords from "@/components/HoverWords";
import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Compass } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <main className="flex flex-1 flex-col items-center justify-center text-center max-w-xl w-full gap-16 sm:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <Reveal className="relative flex items-center justify-center" delay={0}>
            <h1 className="font-heading text-8xl sm:text-9xl font-bold tracking-tight text-foreground z-10 select-none">404</h1>
          </Reveal>

          <Separator />

          <Reveal className="mt-1 text-sm sm:text-base font-body uppercase tracking-[0.3em] text-muted-foreground" delay={0.2}>
            <HoverWords>Page Not Found</HoverWords>
          </Reveal>
        </div>

        {/* Info card — mirrors Index card block */}
        <Reveal className="flex justify-center w-full" delay={0.4}>
          <div className="relative w-full max-w-sm">
            {/* Floating label — same pattern as Index "Contact Me" badge */}
            <span className="absolute -top-2.5 left-4 z-10 bg-background px-2 text-[11px] font-body text-muted-foreground border border-border rounded-full leading-5 flex items-center gap-1">
              <Compass className="w-3 h-3" />
              Lost?
            </span>

            <Card className="w-full pt-5 pb-4">
              <CardContent className="px-5 py-0 flex flex-col gap-4">
                {/* Message */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  <HoverWords>
                    The page you're looking for doesn't exist or may have been
                    moved or deleted.
                  </HoverWords>
                </p>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </main>

      <FooterSection />
    </div>
  );
};

export default NotFound;
