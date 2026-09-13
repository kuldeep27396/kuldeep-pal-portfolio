import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/**
 * Page scaffolding: skip link, fixed header, main landmark, footer.
 * Every route renders inside this — pages never re-declare header/footer.
 * `flushTop` removes the top padding for pages whose first section is a
 * full-viewport hero that sits under the translucent header.
 */
export const Layout = ({ children, flushTop = false }: { children: ReactNode; flushTop?: boolean }) => (
  <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
    >
      Skip to content
    </a>
    <Header />
    <main id="main-content" className={flushTop ? "pb-16" : "pt-24 pb-16"}>
      {children}
    </main>
    <Footer />
  </>
);

/** Standard content container inside a page. */
export const Container = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className ?? ""}`}>{children}</div>
);

/**
 * Page title + one-sentence lede. No eyebrow labels (see docs/DESIGN.md §3).
 * Optional trailing node (e.g. a "Back to Home" affordance is added by pages
 * via `backLink`).
 */
export const PageHeader = ({
  title,
  lede,
  backLink,
  action,
}: {
  title: string;
  lede?: string;
  backLink?: boolean;
  action?: ReactNode;
}) => (
  <div className="mb-10 sm:mb-14">
    {backLink && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10.5 3.5 6 8l4.5 4.5" />
          </svg>
          Back to Home
        </Link>
      </motion.div>
    )}
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-3xl sm:text-4xl font-semibold">{title}</h1>
        {lede && <p className="mt-3 text-muted-foreground text-measure">{lede}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  </div>
);
