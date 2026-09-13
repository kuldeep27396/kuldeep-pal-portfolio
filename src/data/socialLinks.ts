import { Github, Linkedin, BookOpen } from "lucide-react";
import { XIcon } from "@/components/XIcon";

/**
 * Single source of truth for social links.
 * Rendering is intentionally un-branded (no per-network colors): icons use
 * muted ink and invert on hover — see docs/DESIGN.md §2.
 */
export interface SocialLink {
  icon: typeof Linkedin;
  href: string;
  label: string;
  /** Internal links use react-router <Link>, everything else an <a> */
  internal?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kuldeep27396",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/kuldeep27396",
    label: "GitHub",
  },
  {
    icon: BookOpen,
    href: "/articles",
    label: "Blogs",
    internal: true,
  },
  {
    icon: XIcon,
    href: "https://x.com/kuldeep27396",
    label: "X (Twitter)",
  },
];
