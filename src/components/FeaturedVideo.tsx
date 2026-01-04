import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeaturedVideo = () => {
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
          <h2 className="text-3xl font-bold mb-4">Featured Video</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dive into real-world data engineering challenges and solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Video Embed Placeholder */}
          <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden border border-border">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Youtube className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Data Engineering Best Practices</h3>
              <p className="text-muted-foreground leading-relaxed">
                Explore the latest content on data engineering, Apache Spark, AWS, Kafka, 
                and modern data lakehouse architecture. Learn practical tips and real-world 
                solutions from hands-on experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="gap-2" asChild>
                <a href="https://youtube.com/@kuldeeppal?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4" />
                  Subscribe to Channel
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://youtube.com/@kuldeeppal/videos" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  View All Videos
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
