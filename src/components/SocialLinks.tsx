import { socialLinks } from "@/data/socialsData";
import { useLinkConfirmModal } from "@/hooks/useLinkConfirmModal";
import { ArrowUpRight } from "lucide-react";

export default function SocialLinks() {
  const { showModal } = useLinkConfirmModal();

  return (
    <div className="flex flex-col">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;

        return (
          <button
            key={link.label}
            onClick={() => showModal(link)}
            className={`
              group
              flex
              items-center
              justify-between
              py-4
              text-left
              transition-all
              duration-300

              ${
                index !== socialLinks.length - 1
                  ? "border-b border-border/40"
                  : ""
              }
            `}
          >
            <div className="flex items-center gap-3">
              <Icon
                size={16}
                className="
                  text-muted-foreground
                  transition-colors
                  duration-300
                  group-hover:text-foreground
                "
              />

              <span
                className="
                  text-sm
                  sm:text-base
                  text-muted-foreground
                  transition-colors
                  duration-300
                  group-hover:text-foreground
                "
              >
                {link.label}
              </span>
            </div>

            <ArrowUpRight
              size={15}
              className="
                text-muted-foreground
                transition-all
                duration-300
                group-hover:text-foreground
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </button>
        );
      })}
    </div>
  );
}