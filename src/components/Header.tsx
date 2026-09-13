import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SocialRow } from "@/components/SocialRow";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/articles" },
  { label: "Awards", href: "/certificates" },
  { label: "Recommendations", href: "/recommendations" },
];

const BrandMark = () => (
  <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-primary/20 bg-[linear-gradient(145deg,hsl(var(--primary)/0.16),hsl(var(--accent)/0.28))] shadow-soft">
    <svg viewBox="0 0 40 40" className="relative h-6 w-6 text-foreground" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="10" r="2.5" className="fill-current stroke-none text-primary" />
      <circle cx="10" cy="30" r="2.5" className="fill-current stroke-none text-primary" />
      <circle cx="30" cy="20" r="2.5" className="fill-current stroke-none text-secondary" />
      <path d="M12.8 10H22L14 20l8 10H12.8" />
      <path d="M12.5 30 27.5 20" className="opacity-60" />
    </svg>
  </div>
);

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Kuldeep Pal — Home">
            <BrandMark />
            <span className="hidden text-[15px] font-semibold sm:block">Kuldeep Pal</span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-foreground underline decoration-primary decoration-2 underline-offset-8"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <SocialRow size="sm" className="hidden md:flex" />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-expanded={isOpen}
                  aria-controls="mobile-nav"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72" id="mobile-nav">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        location.pathname === link.href
                          ? "bg-accent/50 text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                      aria-current={location.pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-6 border-t border-border pt-6">
                  <SocialRow onNavigate={() => setIsOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
