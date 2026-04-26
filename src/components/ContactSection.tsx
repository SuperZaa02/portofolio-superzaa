import { Card, CardContent } from "@/components/ui/card";
import SocialLinks from "@/components/SocialLinks";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col gap-8 mb-20 items-center text-center">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">Get In Touch</h2>
        <p className="text-sm font-body text-muted-foreground max-w-md">
          Whether you have a question, a project idea, or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!
        </p>
      </div>

      <div className="relative w-full max-w-xs mt-8">
        <span
          className="absolute -top-2.5 left-4 z-10 bg-background px-2 text-[11px] font-body
                     text-muted-foreground border border-border rounded-full leading-5 flex items-center gap-1"
        >
          <Mail className="w-3 h-3" />
          Contact Me
        </span>
        <Card className="w-full pt-3 pb-2 border-border/40 bg-card/50 backdrop-blur-sm">
          <CardContent className="px-4 py-0">
            <SocialLinks />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
