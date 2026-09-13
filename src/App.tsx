import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import { ChatAgent } from "./components/ChatAgent";

// Route-level code splitting — each page is its own chunk (see docs/DESIGN.md §6 notes)
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Articles = lazy(() => import("./pages/Articles"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Recommendations = lazy(() => import("./pages/Recommendations"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      {/* Respect the user's OS-level reduced-motion preference for JS-driven animations */}
      <MotionConfig reducedMotion="user">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/resume" element={<Resume />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ChatAgent />
        </BrowserRouter>
        <Analytics />
      </MotionConfig>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
