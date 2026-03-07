import { motion } from "framer-motion";
import { Menu, X, Linkedin, Github, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { XIcon } from "@/components/XIcon";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/articles" },
  { label: "Certificates", href: "/certificates" },
  { label: "Recommendations", href: "/recommendations" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kuldeep27396",
    label: "LinkedIn",
    className: "bg-[#0a66c2]/10 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white",
  },
  {
    icon: Github,
    href: "https://github.com/kuldeep27396",
    label: "GitHub",
    className: "bg-slate-900/10 text-slate-700 hover:bg-slate-900 hover:text-white",
  },
  {
    icon: BookOpen,
    href: "/articles",
    label: "Blogs",
    internal: true,
    className: "bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500 hover:text-white",
  },
  {
    icon: XIcon,
    href: "https://x.com/kuldeep27396",
    label: "X",
    className: "bg-sky-500/10 text-sky-600 hover:bg-sky-500 hover:text-white",
  },
];

const BrandMark = () => {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-[linear-gradient(145deg,hsl(var(--primary)/0.16),hsl(var(--accent)/0.28))] shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(0_0%_100%/0.65),transparent_55%)]" />
      <svg viewBox="0 0 40 40" className="relative h-7 w-7 text-foreground" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="2.5" className="fill-current stroke-none text-primary" />
        <circle cx="10" cy="30" r="2.5" className="fill-current stroke-none text-primary" />
        <circle cx="30" cy="20" r="2.5" className="fill-current stroke-none text-secondary" />
        <path d="M12.8 10H22L14 20l8 10H12.8" />
        <path d="M12.5 30 27.5 20" className="opacity-60" />
      </svg>
    </div>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <BrandMark />
            <span className="font-bold font-mono hidden sm:block">Kuldeep Pal</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map((social) => (
              social.internal ? (
                <Link
                  key={social.label}
                  to={social.href}
                  className={`rounded-full p-2 transition-colors ${social.className}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ) : (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full p-2 transition-colors ${social.className}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              )
            ))}
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-border">
                {socialLinks.map((social) => (
                  social.internal ? (
                    <Link
                      key={social.label}
                      to={social.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-full p-2 transition-colors ${social.className}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ) : (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full p-2 transition-colors ${social.className}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  )
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
