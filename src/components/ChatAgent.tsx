import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User, Loader2, Sparkles, Cpu, Mail } from "lucide-react";
import { getChatResponse } from "@/lib/openrouter";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Simple markdown-to-html helper for better formatting
const formatMessage = (text: string) => {
  // Bold
  let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>');
  // Bullet points (handle both - and *)
  formatted = formatted.replace(/^\s*[-*]\s*(.*)/gm, '<li class="ml-4 list-disc my-1">$1</li>');
  // Headers (e.g., ### Title)
  formatted = formatted.replace(/^### (.*)/gm, '<h3 class="text-sm font-bold mt-3 mb-1 text-primary">$1</h3>');
  // New lines to br
  formatted = formatted.replace(/\n/g, "<br />");
  return formatted;
};

export const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "**Hi! I'm Kuldeep's AI agent.** 🤖\n\nI can tell you about his:\n- **Senior Role** at Walmart\n- **AI & RAG** Projects\n- **Technical Newsletter**\n- **Recent Awards**\n\nWhat would you like to know?" }
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
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "**System Alert:** All models are currently busy. Please try again in a few moments." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 20 }}
            whileHover={{ scale: 1.1 }}
            className="relative group"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full group-hover:bg-primary/50 transition-colors" />
            
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 rounded-2xl bg-card border-2 border-primary/20 shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <Bot className="w-8 h-8 text-primary" />
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" 
              />
            </button>
            
            <div className="absolute -top-12 right-0 bg-card border border-border px-3 py-1.5 rounded-xl shadow-xl text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Chat with Kuldeep AI
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ y: 50, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[420px] h-full sm:h-[600px] sm:max-h-[calc(100vh-120px)] bg-card/80 backdrop-blur-xl border-t sm:border border-border/50 rounded-t-[2rem] sm:rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-border/50 flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight">Kuldeep Neural Link</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">Autonomous Agent</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)} 
                className="rounded-xl hover:bg-destructive/10 hover:text-destructive transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-border">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1 ${
                      msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-border"
                    }`}>
                      {msg.role === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-primary" />}
                    </div>
                    <div
                      className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none shadow-lg shadow-primary/20"
                          : "bg-muted/50 text-foreground rounded-tl-none border border-border/50"
                      }`}
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                    />
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center mt-1">
                      <Sparkles className="w-4 h-4 text-primary animate-spin" />
                    </div>
                    <div className="bg-muted/30 p-4 rounded-2xl rounded-tl-none border border-border/50 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-muted/20 border-t border-border/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative group"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Query the database..."
                  className="w-full bg-card/50 border border-border/50 rounded-2xl px-5 py-4 text-sm pr-14 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-inner"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 bottom-2 w-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Neural Core v1.0</span>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-muted-foreground">Ready for query</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
