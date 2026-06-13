import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, AlertCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { localBlogs } from "@/data/local-blogs.generated";
import { marked } from "marked";
import mermaid from "mermaid";
import hljs from "highlight.js";

// HTML escape utility to prevent injection via code fence language strings
const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Configure marked with a custom renderer for mermaid code blocks
const renderer = new marked.Renderer();
renderer.code = (codeOrToken: any, languageOrUndefined?: string) => {
  const isToken = codeOrToken && typeof codeOrToken === "object" && "text" in codeOrToken;
  const codeText = isToken ? codeOrToken.text : codeOrToken;
  const language = isToken ? codeOrToken.lang : languageOrUndefined;

  if (language === "mermaid") {
    // Return a div that mermaid can render with mobile responsiveness support
    return `<div class="mermaid-container my-8 flex justify-center bg-card p-4 rounded-xl border border-border/50 overflow-x-auto max-w-full"><div class="mermaid w-full text-center">${codeText}</div></div>`;
  }
  
  // Sanitize language for safe insertion into HTML attributes and text
  const rawLang = language || "code";
  const cleanLang = escapeHtml(rawLang.replace(/[^a-zA-Z0-9_\-+#.]/g, ""));
  
  // Calculate line numbers (safe for trailing newlines)
  const trimmedCode = codeText.replace(/\n$/, "");
  const lines = trimmedCode.split("\n");
  const lineNumbersHtml = lines.map((_, i) => `<div class="h-6 leading-6">${i + 1}</div>`).join('');

  return `
    <div class="code-block-container my-8 rounded-2xl border border-border/80 bg-card overflow-hidden shadow-soft">
      <!-- Title/Header Bar resembling macOS window -->
      <div class="flex items-center justify-between px-5 py-3 border-b border-border/70 bg-muted/40 text-xs text-muted-foreground font-mono select-none">
        <div class="flex items-center gap-4">
          <!-- macOS Window Controls -->
          <div class="flex items-center gap-1.5">
            <span class="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
            <span class="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
          </div>
          <!-- Language badge -->
          <span class="font-semibold uppercase tracking-widest text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">${cleanLang}</span>
        </div>
        <button class="copy-code-btn text-muted-foreground/80 hover:text-foreground transition-colors font-sans flex items-center gap-1.5 focus:outline-none py-1 px-2.5 rounded-lg hover:bg-muted/80 border border-transparent hover:border-border/60">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          <span>Copy</span>
        </button>
      </div>
      
      <!-- Editor Body -->
      <div class="flex font-mono text-sm leading-6 bg-card text-foreground overflow-hidden">
        <!-- Line Numbers Column -->
        <div class="select-none text-right text-muted-foreground/40 pr-4 border-r border-border/40 pl-5 py-4 bg-muted/20 font-mono text-xs min-w-[3.5rem]">
          ${lineNumbersHtml}
        </div>
        <!-- Syntax Highlighted Code Column -->
        <pre class="p-4 flex-1 overflow-x-auto bg-card py-4 !leading-6"><code class="language-${cleanLang} !leading-6">${codeText}</code></pre>
      </div>
    </div>
  `;
};
marked.use({ renderer });

// Mermaid will be initialized dynamically in useEffect based on current theme mode

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const blogMeta = localBlogs.find((b) => b.slug === slug);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(null);

    fetch(`/content/blogs/${slug}.md`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Blog post not found. Check that the file exists.");
        }
        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("text/html")) {
          throw new Error("Blog post not found (returned HTML page instead).");
        }
        return res.text();
      })
      .then((text) => {
        // Strip frontmatter from the top of the file
        const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
        const parsed = marked.parse(body) as string;
        setHtmlContent(parsed);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Failed to load blog post content.");
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    // Dynamic theme handler for syntax highlighting stylesheets
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const themeName = isDark ? "atom-one-dark" : "atom-one-light";
      
      let link = document.getElementById("hljs-theme-link") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.id = "hljs-theme-link";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
      link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${themeName}.min.css`;
    };

    updateTheme();

    // Observe theme class toggling
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loading && htmlContent) {
      // Small delay to ensure the DOM elements are fully inserted and visible
      const timer = setTimeout(() => {
        try {
          const isDark = document.documentElement.classList.contains("dark");
          mermaid.initialize({
            startOnLoad: false,
            theme: isDark ? "dark" : "default",
            securityLevel: "loose",
            fontFamily: "var(--font-sans)",
          });
          mermaid.run({ querySelector: ".mermaid" });
          
          // Apply highlight.js syntax highlighting
          hljs.highlightAll();
        } catch (err) {
          console.error("Failed to render mermaid diagrams or highlight code", err);
        }
      }, 100);

      // Handle code copy buttons
      const handleCopyClick = (e: MouseEvent) => {
        const btn = (e.target as HTMLElement).closest(".copy-code-btn");
        if (!btn) return;

        const container = btn.closest(".code-block-container");
        const codeElement = container?.querySelector("code");
        if (!codeElement) return;

        const codeText = codeElement.innerText;
        const originalSvg = btn.querySelector("svg")?.outerHTML || "";

        const showSuccess = () => {
          btn.innerHTML = `
            <svg class="w-3.5 h-3.5 text-emerald-500 animate-fade-in" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span class="text-emerald-500 font-semibold">Copied!</span>
          `;
          btn.classList.add("text-emerald-500", "hover:text-emerald-500");
          setTimeout(() => {
            btn.innerHTML = `${originalSvg}<span>Copy</span>`;
            btn.classList.remove("text-emerald-500", "hover:text-emerald-500");
          }, 2000);
        };

        const showError = () => {
          btn.innerHTML = `
            <svg class="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            <span class="text-red-500 font-semibold">Failed</span>
          `;
          setTimeout(() => {
            btn.innerHTML = `${originalSvg}<span>Copy</span>`;
          }, 2000);
        };

        // Use Clipboard API with fallback for restricted browsers
        if (navigator.clipboard?.writeText) {
          navigator.clipboard.writeText(codeText).then(showSuccess).catch(showError);
        } else {
          // Fallback: use a hidden textarea + execCommand
          try {
            const textarea = document.createElement("textarea");
            textarea.value = codeText;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showSuccess();
          } catch {
            showError();
          }
        }
      };

      document.addEventListener("click", handleCopyClick);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleCopyClick);
      };
    }
  }, [loading, htmlContent]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16 flex items-center justify-center flex-col gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          <p className="text-muted-foreground font-medium">Loading article content...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blogMeta) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-16 px-4">
          <div className="container max-w-2xl mx-auto text-center bg-card border border-border p-8 rounded-2xl shadow-soft">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Failed to Load Article</h1>
            <p className="text-muted-foreground mb-6">{error || "Article metadata could not be found."}</p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </motion.div>

          <article className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-card">
            {blogMeta.image && (
              <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden bg-muted border-b border-border">
                <img
                  src={blogMeta.image}
                  alt={blogMeta.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6 sm:p-10 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 mb-8"
              >
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                  <span className="uppercase tracking-wider text-primary font-bold">{blogMeta.sourceLabel}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blogMeta.date}</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                  {blogMeta.title}
                </h1>

                {blogMeta.tags && blogMeta.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {blogMeta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        <Tag className="w-3 h-3 text-primary" />
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              <hr className="border-border/60 mb-8" />

              {/* Main Content Area */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0 prose-table:border prose-table:border-collapse prose-th:bg-muted prose-th:p-2 prose-td:p-2 prose-td:border prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
