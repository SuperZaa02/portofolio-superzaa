import { Mail, Github, Instagram, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
  platform: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    label: "faezaraziqg@gmail.com",
    href: "mailto:faezaraziqg@gmail.com",
    platform: "Email",
  },
  {
    icon: Github,
    label: "@SuperZaa02",
    href: "https://github.com/SuperZaa02",
    platform: "GitHub",
  },
  {
    icon: Instagram,
    label: "@superzaa02",
    href: "https://instagram.com/superzaa02",
    platform: "Instagram",
  },
];
