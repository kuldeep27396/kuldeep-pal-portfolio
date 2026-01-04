import { motion } from "framer-motion";
import { Linkedin, Github, Youtube, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/kuldeep27396", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/kuldeep27396", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com/@kuldeeppal", label: "YouTube" },
  { icon: Mail, href: "mailto:kuldeep27396@gmail.com", label: "Email" },
];

const skills = [
  "Apache Spark",
  "Python",
  "Data Engineering",
  "AWS",
  "Machine Learning",
  "Big Data",
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
                Data Engineer & ML Enthusiast
              </p>
            </div>

            {/* Bio */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Building scalable data platforms and ML pipelines. Passionate about 
              turning complex data challenges into elegant solutions and sharing 
              knowledge with the community.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="px-3 py-1.5 text-sm font-mono bg-secondary rounded-md text-secondary-foreground"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 shadow-glow">
                <Mail className="w-4 h-4" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
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
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-7xl font-bold gradient-text">KP</span>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 bottom-8 bg-card rounded-xl px-4 py-3 shadow-card border border-border"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">50+ Projects</p>
                    <p className="text-xs text-muted-foreground">on GitHub</p>
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
