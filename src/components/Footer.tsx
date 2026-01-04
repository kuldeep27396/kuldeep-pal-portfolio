import { motion } from "framer-motion";
import { Linkedin, Github, Youtube, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/kuldeep27396", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/kuldeep27396", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com/@kuldeeppal", label: "YouTube" },
  { icon: Mail, href: "mailto:kuldeep27396@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-mono">Kuldeep Pal</h3>
            <p className="text-sm text-muted-foreground">Data Engineer & ML Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
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

          {/* Copyright */}
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> © {new Date().getFullYear()}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
