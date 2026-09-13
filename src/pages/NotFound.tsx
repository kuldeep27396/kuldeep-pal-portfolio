import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <PageMeta title="Page Not Found" noindex />
      <div className="text-center">
        <p className="tnum text-sm font-semibold text-primary">Error 404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold">This page doesn't exist</h1>
        <p className="mt-4 text-muted-foreground text-measure mx-auto">
          The page you're looking for was moved, renamed, or never existed.
        </p>
        <Button asChild className="mt-8">
          <a href="/">Back to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
