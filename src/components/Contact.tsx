import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Send, CalendarDays } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/motion";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent — I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again in a moment.");
      }
    } catch {
      toast.error("Network issue — please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div {...fadeInUp} className="mb-10 sm:mb-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Get in Touch</h2>
          <p className="mt-3 text-muted-foreground text-measure">
            For opportunities, collaboration, or technical conversations around data platforms, AI systems,
            and backend engineering, send a message here.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeInUp} className="rounded-xl bg-card p-5 shadow-soft sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Location</h3>
            <p className="mt-1 text-sm text-muted-foreground">Bengaluru, India</p>

            <div className="mt-5 space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Best for senior software engineering roles across backend systems, data platforms,
                and AI agents.
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Messages are submitted directly through the form. Your message, name, and email are sent
                securely without showing a personal email address on the page.
              </p>
              <Button variant="outline" className="mt-2 w-full justify-center gap-2 sm:w-auto" asChild>
                <a href="https://cal.com/kuldeep.pal/meet-kuldeep" target="_blank" rel="noopener noreferrer">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Schedule via Cal.com
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.form
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.08 }}
            onSubmit={onSubmit}
            className="space-y-4 rounded-xl bg-card p-5 shadow-soft sm:p-6"
          >
            <input type="hidden" name="subject" value="New portfolio contact submission" />
            <input type="hidden" name="from_name" value="Kuldeep Pal Portfolio" />
            {/* Honeypot field for spam bots — visually hidden, skipped in tab order */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="grid gap-4 md:grid-cols-2">
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
                Company <span className="font-normal text-muted-foreground">(optional)</span>
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

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground" role="status" aria-live="polite">
                {isSubmitting ? "Sending…" : ""}
              </p>
              <Button type="submit" className="w-full justify-center gap-2 sm:w-auto" disabled={isSubmitting}>
                <Send className="h-4 w-4" aria-hidden="true" />
                {isSubmitting ? "Sending…" : "Send Message"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
