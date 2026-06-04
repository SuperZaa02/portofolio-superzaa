import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import type { SocialLink } from "@/data/socialsData";

interface LinkConfirmModalProps {
  link: SocialLink | null;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function LinkConfirmModal({
  link,
  open,
  onConfirm,
  onCancel,
}: LinkConfirmModalProps) {
  if (!link) return null;

  const Icon = link.icon;

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onCancel();
      }}
    >
      <DialogContent
        className="
          sm:max-w-sm
          border-border/40
          bg-background/95
          p-0
          backdrop-blur-xl
          overflow-hidden
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="p-5"
        >
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle
              className="
                font-heading
                text-lg
                font-semibold
                tracking-tight
              "
            >
              Open {link.platform}?
            </DialogTitle>

            <DialogDescription
              className="
                text-sm
                text-muted-foreground
              "
            >
              You are about to leave this website.
            </DialogDescription>
          </DialogHeader>

          <div
            className="
              mt-4
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-border/40
              px-3
              py-2.5
            "
          >
            <Icon size={15} className="text-muted-foreground" />

            <span
              className="
                truncate
                text-sm
                text-foreground
              "
            >
              {link.label}
            </span>
          </div>

          <DialogFooter
            className="
              mt-5
              flex-row
              justify-end
              gap-2
            "
          >
            <Button
              variant="ghost"
              onClick={onCancel}
              className="
                rounded-lg
                text-muted-foreground
                transition-all
                duration-200

                hover:text-foreground
                hover:bg-muted/40
              "
            >
              Cancel
            </Button>

            <Button
              onClick={onConfirm}
              className="
                group
                gap-2
                rounded-lg

                transition-all
                duration-200

                hover:shadow-md
                hover:translate-y-[-1px]
              "
            >
              Continue
              <ExternalLink
                size={14}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              />
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
