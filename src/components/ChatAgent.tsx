import { useState, useRef, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User, Sparkles, MessageCircleQuestion } from "lucide-react";
import { getChatResponse } from "@/lib/openrouter";
import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Escape HTML special characters to prevent XSS from untrusted model output
const escapeHtml = (str: string): string =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Simple markdown-to-html helper for better formatting (HTML-escapes input first)
const formatMessage = (text: string) => {
  const escaped = escapeHtml(text);
  let formatted = escaped.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
  formatted = formatted.replace(/^\s*[-*]\s*(.*)/gm, '<li class="ml-4 list-disc my-1">$1</li>');
  formatted = formatted.replace(/^### (.*)/gm, '<h3 class="text-sm font-semibold mt-3 mb-1 text-primary">$1</h3>');
  formatted = formatted.replace(/\n/g, "<br />");
  return formatted;
};

export const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "**Hi — I'm Kuldeep's AI assistant.**\n\nAsk me about his experience, projects, or the stack he works with.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await getChatResponse([...messages, userMessage]);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "The assistant is unavailable right now — please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="group"
            >
              <DialogPrimitive.Trigger asChild>
                <button
                  aria-label="Open the AI assistant chat"
                  className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-card shadow-lift transition-transform hover:scale-[1.03]"
                >
                  <Bot className="h-7 w-7 text-primary" aria-hidden="true" />
                  <span
                    className="absolute right-2 top-2 h-2 w-2 rounded-full bg-tone-backend-fg"
                    aria-hidden="true"
                  />
                </button>
              </DialogPrimitive.Trigger>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-11 right-0 whitespace-nowrap rounded-lg border border-border/70 bg-card px-3 py-1.5 text-xs font-medium opacity-0 shadow-soft transition-opacity group-hover:opacity-100"
              >
                Ask my AI assistant
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <DialogPrimitive.Portal forceMount>
          <AnimatePresence>
            {isOpen && (
              <>
                <DialogPrimitive.Overlay asChild forceMount>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="fixed inset-0 z-50 bg-foreground/20"
                  />
                </DialogPrimitive.Overlay>

                <DialogPrimitive.Content asChild forceMount>
                  <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0 }}
                    transition={{ duration: 0.2, ease: EASE_OUT }}
                    className="fixed inset-x-0 bottom-0 z-50 flex h-[92dvh] flex-col overflow-hidden rounded-t-2xl border border-border/70 bg-card shadow-lift sm:inset-x-auto sm:right-6 sm:bottom-6 sm:h-[600px] sm:max-h-[calc(100vh-7.5rem)] sm:w-[420px] sm:rounded-2xl"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-border/50 px-5 py-4">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                          <Bot className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <DialogPrimitive.Title className="text-base font-semibold">
                            Kuldeep's AI Assistant
                          </DialogPrimitive.Title>
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-tone-backend-fg" aria-hidden="true" />
                            <span className="text-xs text-muted-foreground">Online</span>
                          </div>
                        </div>
                      </div>
                      <DialogPrimitive.Close asChild>
                        <Button variant="ghost" size="icon" aria-label="Close chat">
                          <X className="h-5 w-5" aria-hidden="true" />
                        </Button>
                      </DialogPrimitive.Close>
                    </div>

                    {/* Messages */}
                    <DialogPrimitive.Description className="sr-only">
                      Ask questions about Kuldeep Pal's experience, projects, and skills.
                    </DialogPrimitive.Description>
                    <div ref={scrollRef} className="flex-1 space-y-5 overflow-y-auto p-5">
                      {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                          <div className={`flex max-w-[85%] gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                            <div
                              className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                                msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                              }`}
                              aria-hidden="true"
                            >
                              {msg.role === "user" ? <User className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5 text-primary" />}
                            </div>
                            <div
                              className={`rounded-2xl p-3.5 text-sm leading-relaxed ${
                                msg.role === "user"
                                  ? "rounded-tr-sm bg-primary text-primary-foreground"
                                  : "rounded-tl-sm bg-muted/60 text-foreground"
                              }`}
                              dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                            />
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="flex gap-2.5">
                            <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg bg-muted" aria-hidden="true">
                              <Sparkles className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-muted/60 p-3.5" aria-label="Assistant is typing">
                              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Input */}
                    <div className="border-t border-border/50 p-4">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSend();
                        }}
                        className="relative"
                      >
                        <label htmlFor="chat-input" className="sr-only">
                          Ask the AI assistant a question
                        </label>
                        <input
                          id="chat-input"
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Ask about my work, skills, or projects…"
                          className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 pr-12 text-sm transition-colors focus:border-primary focus:outline-none"
                        />
                        <button
                          type="submit"
                          disabled={!input.trim() || isLoading}
                          aria-label="Send message"
                          className="absolute bottom-2 right-2 top-2 flex w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
                        >
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </form>
                      <div className="mt-3 flex items-center gap-1.5">
                        <MessageCircleQuestion className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                        <span className="text-xs text-muted-foreground">
                          Answers are AI-generated from Kuldeep's public profile.
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </DialogPrimitive.Content>
              </>
            )}
          </AnimatePresence>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </div>
  );
};
