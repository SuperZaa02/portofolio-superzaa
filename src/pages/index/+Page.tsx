import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
