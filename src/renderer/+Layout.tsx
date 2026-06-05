import "./index.css";

import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { LinkConfirmModalProvider } from "@/hooks/useLinkConfirmModal";
import GlobalLinkConfirmModal from "@/components/GlobalLinkConfirmModal";
import BackgroundTechIcons from "@/components/TechBackground";

const queryClient = new QueryClient();

export function Layout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LinkConfirmModalProvider>
          <Toaster />
          <Sonner />

          <BackgroundTechIcons />

          <div className="relative z-10">{children}</div>

          <GlobalLinkConfirmModal />
        </LinkConfirmModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
