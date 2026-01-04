import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Expertise",
    description: "Primary technologies I specialize in",
    skills: ["Apache Spark", "Python", "AWS", "Data Engineering", "Machine Learning"],
  },
  {
    title: "Data Tools",
    description: "Tools for building data pipelines",
    skills: ["Airflow", "dbt", "Kafka", "Snowflake", "BigQuery"],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure and deployment",
    skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions"],
  },
];

export const Skills = () => {
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
          <h2 className="text-3xl font-bold mb-4">Tech Stack & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technologies and professional skills I bring to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 text-sm font-mono bg-secondary rounded-lg text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
