import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const recommendations = [
  {
    name: "Payal Ghosal",
    headline:
      "Financial Analyst - Technology Lead in Siemens | Tableau | Power BI | SQL | ETL | Ex Synechron | Ex Accenture | Ex TCSer",
    date: "February 13, 2024",
    context: "Payal worked with Kuldeep on the same team",
    content:
      "I have had the pleasure of working closely with Kuldeep Pal for over a year at TCS, where he has consistently demonstrated exceptional expertise in the field of Big Data Analytics, Programming (Python) and Cloud technologies. Kuldeep's dedication to his work, combined with his extensive knowledge, makes him an invaluable asset to any team.\n\nKuldeep is a highly skilled Data Engineer with a keen eye for detail and a proactive approach to problem-solving. He possesses a deep understanding of designing and implementing scalable data pipelines for both batch processing and real-time streaming, which has significantly contributed to the success of our projects at Walmart.\n\nThroughout our collaboration, Kuldeep has showcased his proficiency in various technologies, including Python, PySpark, SQL, AWS, and GCP, among others. His ability to adapt to new technologies and methodologies has been instrumental in delivering high-quality solutions to complex business challenges.\n\nMoreover, Kuldeep's commitment to continuous learning and innovation is truly commendable. He actively seeks out opportunities to expand his knowledge and skill set, which reflects his dedication to personal and professional growth.\n\nIn addition to his technical expertise, Kuldeep is a reliable team player and an excellent communicator. He effectively collaborates with cross-functional teams, demonstrates strong leadership qualities, and consistently delivers results that exceed expectations.\n\nI have no hesitation in recommending Kuldeep Pal for any role that requires a talented and experienced Senior Data Engineer. He would be a valuable addition to any organization, and I am confident that he will continue to excel in his career endeavors.",
  },
  {
    name: "Rahul Patel",
    headline: "Faculty at Sunstone",
    date: "February 22, 2023",
    context: "Rahul was Kuldeep's teacher",
    content:
      "I am writing to highly recommend my former student, Kuldeep, for any opportunity that he may pursue. Kuldeep completed his B.Tech in Computer Science from our institution over a period of 4 years. During his time here, Kuldeep was an outstanding student who consistently demonstrated exceptional skills and knowledge in his field.\n\nSince graduating, Kuldeep has worked as a Data Engineer at Walmart, where he has excelled in his role. He has extensive experience in building data warehouses and data lakes using modern cloud platforms and technologies. He is highly skilled in implementing and automating data pipelines, ETL processes, data cleaning, processing, and standardization using machine learning and NLP techniques. Additionally, he has expertise in data migration, both homogenous and heterogenous.\n\nKuldeep has extensive experience working with various technologies, including Python, PySpark, SQL, Pandas, AWS, Redshift, RDS, PostgreSQL, MySQL, S3, Cloud Data Store, AWS Glue & EMR, Airflow, Tableau, Excel, Hadoop, Hive, Spark, NLP, Jupyter Notebook, and data structures. He has demonstrated his ability to design and develop complex data pipelines and data processing systems, making him an asset to any organization.\n\nKuldeep's excellent communication skills, strong work ethic, and ability to work well under pressure have made him a valuable member of the Walmart team. He is a team player who is always willing to lend a hand and collaborate with his colleagues. His strong problem-solving skills and attention to detail have been instrumental in delivering high-quality work.\n\nOverall, I am confident that Kuldeep would be an asset to any team or organization. He is a highly skilled and dedicated individual with a strong work ethic, passion for learning, and impressive skill set. I highly recommend him without hesitation.",
  },
  {
    name: "Sundarm Soni",
    headline:
      "SDE - III (Full Stack Web Developer) @ Morgan Stanley | Ex-Tide | Ex-HCLite | Ex-TCSer | Angular | React | Typescript | Javascript | Rxjs | Microfrontends | BFF | GCP | 2x OCI Certified",
    date: "August 1, 2022",
    context: "Sundarm worked with Kuldeep but on different teams",
    content:
      "Kuldeep is an excellent resource, and a master at Data Engineering. He is one of the most valuable person I came across with. He is dedicated hard and smart worker. He has an easiness to build interpersonal relations with others. He is always capable of adapting new work environments. He is a quick learner with excellent fundamentals. I am sure he will be a real gem for any organisation and clients with whom he will be working with.",
  },
  {
    name: "Srisakhi Sengupta",
    headline: "Senior Manager at Morgan Stanley",
    date: "April 25, 2019",
    context: "Srisakhi managed Kuldeep directly",
    content:
      "I had the chance to work with Kuldeep for almost 6 months in TCS, collaborating in a sales and trading, middle office, production support project. It's rare that you come across a standout talent like Kuldeep. He has sound technical knowledge and is always keen to learn new things. He has the ability to juggle between multiple tasks and is a man of his words. He is a team player. As a team member, Kuldeep earns my highest recommendation.",
  },
  {
    name: "Aishwarya Mahajan",
    headline: "Deep Learning Engineer | Computer Vision | Generative AI | NIT Calicut",
    date: "April 13, 2019",
    context: "Aishwarya worked with Kuldeep on the same team",
    content:
      "Few people have the opportunity to work with someone 'Ridiculously efficient' like Kuldeep. I had the pleasure of working with Kuldeep collaborating on several project and I'm fairly impressed by the proficiency he commands on his skills. No matter how tense a meeting, Kuldeep made sure everyone left with a smile. He demonstrates enthusiasm, resourcefulness and critical thinking in unusual situations to accomplish the end goal. Kuldeep would be an asset to any company.",
  },
  {
    name: "Divyesh Kuchekar",
    headline: "Data Engineering @ NTT",
    date: "July 26, 2018",
    context: "Divyesh and Kuldeep studied together",
    content:
      "I know Kuldeep as a hard working, very serious and motivated team player. He is a great networker and focused guy. He is perfectly a good asset for any organization as he is good in software development and have good experience in multiple projects. He is always ready for any kind of support when needed.",
  },
];

const RecommendationCard = ({
  recommendation,
  index,
}: {
  recommendation: (typeof recommendations)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = recommendation.content.length > 360;
  const displayContent =
    shouldTruncate && !expanded
      ? `${recommendation.content.slice(0, 360)}...`
      : recommendation.content;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-[1.5rem] border border-border bg-card p-6 shadow-card"
    >
      <Quote className="w-7 h-7 text-primary/30 mb-4" />

      <div className="mb-4">
        <h2 className="text-xl font-semibold">{recommendation.name}</h2>
        <p className="text-sm text-muted-foreground mt-1">{recommendation.headline}</p>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
        <span>{recommendation.date}</span>
        <span>•</span>
        <span>{recommendation.context}</span>
      </div>

      <div className="space-y-4">
        {displayContent.split("\n\n").map((paragraph, paragraphIndex) => (
          <p key={`${recommendation.name}-${paragraphIndex}`} className="text-sm leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {shouldTruncate ? (
        <button
          onClick={() => setExpanded((value) => !value)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {expanded ? (
            <>
              Show less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Read full recommendation
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      ) : null}
    </motion.article>
  );
};

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container max-w-6xl mx-auto">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">LinkedIn Recommendations</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Public recommendations received on LinkedIn from teammates, managers, teachers, and collaborators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="rounded-[1.5rem] border border-border bg-card p-6 shadow-card mb-10 flex flex-wrap items-center justify-between gap-5"
          >
            <div>
              <p className="text-sm font-semibold text-primary mb-1">Recommendation Snapshot</p>
              <h2 className="text-2xl font-bold">{recommendations.length} received recommendations</h2>
              <p className="text-sm text-muted-foreground mt-1">This page uses the exact recommendation text you provided from LinkedIn.</p>
            </div>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/kuldeep27396/details/recommendations/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Open LinkedIn Recommendations
              </a>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((recommendation, index) => (
              <RecommendationCard key={`${recommendation.name}-${recommendation.date}`} recommendation={recommendation} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recommendations;
