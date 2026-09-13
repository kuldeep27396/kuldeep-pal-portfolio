import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/socialLinks";

interface SocialRowProps {
  className?: string;
  /** sm = header icon buttons; md = hero/footer pills */
  size?: "sm" | "md";
  /** Called after clicking (used by the mobile menu to close itself) */
  onNavigate?: () => void;
}

const sizes = {
  sm: { button: "p-2", icon: "w-4 h-4" },
  md: { button: "p-2.5", icon: "w-5 h-5" },
} as const;

export const SocialRow = ({ className, size = "md", onNavigate }: SocialRowProps) => {
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((social) => {
        const classes = cn(
          "rounded-full transition-all duration-200 hover:-translate-y-0.5",
          social.colors,
          s.button,
        );

        if (social.internal) {
          return (
            <Link key={social.label} to={social.href} onClick={onNavigate} className={classes} aria-label={social.label}>
              <social.icon className={s.icon} />
            </Link>
          );
        }

        return (
          <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={social.label}>
            <social.icon className={s.icon} />
          </a>
        );
      })}
    </div>
  );
};
