import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { MapPin, Send, CalendarDays } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "b197f08b-7dcf-4b39-a454-6693672fe936");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully.");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 px-6 bg-card">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            For opportunities, collaboration, or technical conversations around data platforms, AI systems, and backend engineering, send a message here.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-border bg-background p-6 shadow-soft"
          >
            <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground mb-6">Bengaluru, India</p>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Best for roles and conversations around data engineering, AI agents, backend systems, and platform architecture.
              </p>
              <p className="text-xs text-muted-foreground">
                Messages are submitted directly through the form. Your message, name, and email are sent securely without showing a personal email address on the page.
              </p>
              <Button variant="outline" className="gap-2 mt-2" asChild>
                <a href="https://cal.com/kuldeep.pal/meet-kuldeep" target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="w-4 h-4" />
                  Schedule via Cal.com
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={onSubmit}
            className="rounded-[1.5rem] border border-border bg-background p-6 shadow-soft space-y-4"
          >
            <input type="hidden" name="subject" value="New portfolio contact submission" />
            <input type="hidden" name="from_name" value="Kuldeep Pal Portfolio" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="contact-name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium">
                  Work Email
                </label>
                <Input id="contact-email" name="email" type="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-company" className="text-sm font-medium">
                Company
              </label>
              <Input id="contact-company" name="company" placeholder="Company or team" />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a bit about the role, project, or reason for reaching out."
                className="min-h-[160px]"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground min-h-4">{result}</p>
              <Button type="submit" className="gap-2" disabled={isSubmitting}>
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
