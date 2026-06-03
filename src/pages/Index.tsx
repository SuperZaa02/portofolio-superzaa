import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="border-t border-border/40 pt-8 pb-6 text-center">
        <p className="font-body text-xs text-muted-foreground">
          &copy; {new Date().getUTCFullYear()} Faeza Raziq
        </p>
      </footer>
    </div>
  );
};

export default Index;