import { motion } from "framer-motion";
import { Linkedin, Github, Youtube, Mail, ExternalLink, Twitter, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@kuldeeppal", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/in/kuldeep27396", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/kuldeep27396", label: "GitHub" },
  { icon: BookOpen, href: "https://medium.com/@kuldeep27396", label: "Medium" },
  { icon: Twitter, href: "https://twitter.com/kuldeep27396", label: "Twitter" },
];

const highlights = [
  "Gift Card Fraud Detection — $4M/year recovery",
  "Insurance Fraud Investigation — $544K/year savings",
  "Processing 8K msg/sec (2TB/day) streaming pipelines",
  "GenAI Agents with LangGraph & MCP Servers",
];

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for consulting</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Kuldeep Pal</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Senior Software Engineer - Data & AI
              </p>
              <p className="text-lg text-muted-foreground">
                at <span className="text-foreground font-semibold">Walmart Global Tech</span> · Bengaluru, India
              </p>
            </div>

            {/* Bio */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              <span className="text-primary font-semibold">7+ years</span> building high-performance systems in 
              Big Data, Backend & AI. Expert in Python, Spark, Kafka, Spring Boot, AWS, GCP, and GenAI — 
              architecting solutions that drive measurable business impact.
            </p>

            {/* Key Highlights */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">Key Impact</p>
              <div className="space-y-1.5">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">▸</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="gap-2 shadow-glow" asChild>
                <a href="mailto:kuldeep27396@gmail.com">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://youtube.com/@kuldeeppal" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4" />
                  Watch on YouTube
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-card">
                <img 
                  src="https://avatars.githubusercontent.com/u/61800838?v=4" 
                  alt="Kuldeep Pal"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge - Articles */}
              <motion.a
                href="https://linkedin.com/in/kuldeep27396/recent-activity/articles/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 bottom-20 bg-card rounded-xl px-4 py-3 shadow-card border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">50+ Articles</p>
                    <p className="text-xs text-muted-foreground">on LinkedIn & Medium</p>
                  </div>
                </div>
              </motion.a>

              {/* Floating Badge - Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-4 top-8 bg-card rounded-xl px-4 py-3 shadow-card border border-border"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">B.E. (Hons) CSE</p>
                    <p className="text-xs text-muted-foreground">CGPA: 7.83/10</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
