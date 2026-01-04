import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Code2, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const offerings = [
  {
    icon: Code2,
    title: "Data Engineering",
    description: "Building robust data pipelines and scalable architectures using modern tools and best practices.",
    link: "#",
    stat: "50+ projects delivered",
  },
  {
    icon: BookOpen,
    title: "Technical Writing",
    description: "Sharing knowledge through detailed articles on data engineering, ML, and cloud technologies.",
    link: "#",
    stat: "30+ articles published",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    description: "Helping teams optimize their data infrastructure and implement ML solutions at scale.",
    link: "#",
    stat: "Available for hire",
  },
];

export const Offerings = () => {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">How I Can Help You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging years of experience to help you build better data solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-card transition-shadow group cursor-pointer border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <offering.icon className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {offering.description}
                    </p>
                  </div>

                  <p className="text-sm font-mono text-primary">
                    {offering.stat}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
