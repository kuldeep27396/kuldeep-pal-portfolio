import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    value: "India",
  },
  {
    icon: Mail,
    title: "Email",
    value: "kuldeep27396@gmail.com",
    href: "mailto:kuldeep27396@gmail.com",
  },
  {
    icon: Briefcase,
    title: "Open to",
    value: "Consulting, Speaking, Collaborations",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Typically within 24-48 hours",
  },
];

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              {item.href ? (
                <a 
                  href={item.href} 
                  className="text-sm text-primary hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
