import { motion } from "framer-motion";
import { Linkedin, Github, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { XIcon } from "@/components/XIcon";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kuldeep27396",
    label: "LinkedIn",
    className: "bg-[#0a66c2]/10 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white",
  },
  {
    icon: Github,
    href: "https://github.com/kuldeep27396",
    label: "GitHub",
    className: "bg-slate-900/10 text-slate-700 hover:bg-slate-900 hover:text-white",
  },
  {
    icon: BookOpen,
    href: "/articles",
    label: "Blogs",
    internal: true,
    className: "bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500 hover:text-white",
  },
  {
    icon: XIcon,
    href: "https://x.com/kuldeep27396",
    label: "X",
    className: "bg-sky-500/10 text-sky-600 hover:bg-sky-500 hover:text-white",
  },
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
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-mono">Kuldeep Pal</h3>
            <p className="text-sm text-muted-foreground">Senior Software Engineer - Data, AI, and Backend Systems</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              social.internal ? (
                <motion.div key={social.label} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
                  <Link to={social.href} className={`block p-2.5 rounded-full transition-colors ${social.className}`} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className={`p-2.5 rounded-full transition-colors ${social.className}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              )
            ))}
          </div>

          <div className="text-sm text-muted-foreground">Bengaluru, India © {new Date().getFullYear()}</div>
        </motion.div>
      </div>
    </footer>
  );
};
