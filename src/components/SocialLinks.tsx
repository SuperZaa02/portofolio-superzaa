import { socialLinks } from "@/data/socialsData";
import { useLinkConfirmModal } from "@/hooks/useLinkConfirmModal";

const SocialLinks = () => {
  const { showModal } = useLinkConfirmModal();
  return (
    <div className="flex flex-col gap-2">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <button
            key={link.label}
            onClick={() => showModal(link)}
            className="flex items-center gap-2.5 text-muted-foreground transition-colors duration-200 hover:text-primary w-full text-left py-1"
          >
            <Icon size={18} strokeWidth={1.5} />
            <span className="text-sm font-body">{link.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
