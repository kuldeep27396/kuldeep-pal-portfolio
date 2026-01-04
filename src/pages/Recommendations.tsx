import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Quote, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    name: "Tech Lead",
    role: "Senior Software Engineer at Top Tech Company",
    avatar: "TL",
    content: "Kuldeep is an exceptional data engineer with deep expertise in building scalable data pipelines. His knowledge of Apache Spark and Kafka is outstanding. He consistently delivers high-quality solutions and is always willing to share his knowledge with the team. His ability to architect complex data systems while keeping them maintainable is remarkable.",
    relationship: "Worked together",
  },
  {
    name: "Engineering Manager",
    role: "Data Engineering Lead",
    avatar: "EM",
    content: "I've had the pleasure of working with Kuldeep on several complex data engineering projects. His technical skills are top-notch, but what truly sets him apart is his ability to mentor junior engineers and foster a collaborative environment. He has a natural teaching ability and creates excellent documentation.",
    relationship: "Manager",
  },
  {
    name: "Data Scientist",
    role: "ML Engineer at Fortune 500",
    avatar: "DS",
    content: "Kuldeep's expertise in building data pipelines made our ML projects significantly more efficient. He understands both the engineering and analytical aspects of data work, which is rare. His contributions to our data infrastructure reduced processing times by 60% and improved data quality metrics across the board.",
    relationship: "Worked together",
  },
  {
    name: "Software Architect",
    role: "Principal Engineer",
    avatar: "SA",
    content: "Kuldeep has an impressive grasp of distributed systems and cloud architecture. His work on our AWS data lake was instrumental in scaling our analytics capabilities. He approaches problems methodically and always considers the long-term implications of architectural decisions.",
    relationship: "Worked together",
  },
  {
    name: "Product Manager",
    role: "Senior PM at Tech Startup",
    avatar: "PM",
    content: "Working with Kuldeep was a great experience. He has the rare ability to translate complex technical concepts into business value. His proactive communication and commitment to delivery made him an invaluable partner in our product development process.",
    relationship: "Stakeholder",
  },
  {
    name: "Junior Developer",
    role: "Software Engineer",
    avatar: "JD",
    content: "Kuldeep has been an amazing mentor. His patience in explaining complex data engineering concepts and his willingness to share his knowledge helped me grow significantly as an engineer. He creates a supportive learning environment and celebrates the success of others.",
    relationship: "Mentee",
  },
];

const RecommendationCard = ({ rec, index }: { rec: typeof recommendations[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = rec.content.length > 200;
  const displayContent = shouldTruncate && !isExpanded 
    ? rec.content.slice(0, 200) + "..." 
    : rec.content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 border border-border"
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-primary/30 mb-4" />

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-4">
        "{displayContent}"
      </p>

      {/* Read More Toggle */}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-sm text-primary hover:underline mb-4"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
          {rec.avatar}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{rec.name}</h3>
          <p className="text-sm text-muted-foreground">{rec.role}</p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
          {rec.relationship}
        </span>
      </div>
    </motion.div>
  );
};

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">What People Say</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Recommendations and testimonials from colleagues, industry leaders, and community members.
            </p>
          </motion.div>

          {/* View LinkedIn Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <Button variant="outline" className="gap-2" asChild>
              <a 
                href="https://linkedin.com/in/kuldeep27396" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                View All on LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Recommendations Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <RecommendationCard key={rec.name} rec={rec} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recommendations;
