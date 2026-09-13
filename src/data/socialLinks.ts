import { Github, Linkedin, BookOpen } from "lucide-react";
import type { ComponentType } from "react";
import { XIcon } from "@/components/XIcon";

/**
 * Single source of truth for social links.
 * Neutral at rest; each network takes its brand color on hover only —
 * the one place brand colors are allowed (docs/DESIGN.md §2).
 */
export interface SocialLink {
  icon: ComponentType<{ className?: string }>;
  href: string;
  label: string;
  /** Internal links use react-router <Link>, everything else an <a> */
  internal?: boolean;
  /** Optional brand hover tint */
  hoverClass?: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kuldeep27396",
    label: "LinkedIn",
    hoverClass: "hover:bg-[#0A66C2] hover:text-white",
  },
  {
    icon: Github,
    href: "https://github.com/kuldeep27396",
    label: "GitHub",
    hoverClass: "hover:bg-foreground hover:text-background",
  },
  {
    icon: BookOpen,
    href: "/articles",
    label: "Blogs",
    internal: true,
    hoverClass: "hover:bg-primary hover:text-primary-foreground",
  },
  {
    icon: XIcon,
    href: "https://x.com/kuldeep27396",
    label: "X (Twitter)",
    hoverClass: "hover:bg-foreground hover:text-background",
  },
];
