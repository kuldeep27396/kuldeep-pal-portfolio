import { Github, Linkedin, BookOpen } from "lucide-react";
import type { ComponentType } from "react";
import { XIcon } from "@/components/XIcon";

/**
 * Single source of truth for social links.
 * Rest state: light brand tint (theme-muted). Hover: solid brand/ink.
 * The only place per-network color is allowed — see docs/DESIGN.md §2.
 */
export interface SocialLink {
  icon: ComponentType<{ className?: string }>;
  href: string;
  label: string;
  /** Internal links use react-router <Link>, everything else an <a> */
  internal?: boolean;
  /** Rest-state tint + hover treatment */
  colors: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kuldeep27396",
    label: "LinkedIn",
    colors: "bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
  },
  {
    icon: Github,
    href: "https://github.com/kuldeep27396",
    label: "GitHub",
    colors: "bg-foreground/10 text-foreground hover:bg-foreground hover:text-background",
  },
  {
    icon: BookOpen,
    href: "/articles",
    label: "Blogs",
    internal: true,
    colors: "bg-tone-backend-bg text-tone-backend-fg hover:bg-tone-backend-fg hover:text-white",
  },
  {
    icon: XIcon,
    href: "https://x.com/kuldeep27396",
    label: "X (Twitter)",
    colors: "bg-foreground/10 text-foreground hover:bg-foreground hover:text-background",
  },
];
