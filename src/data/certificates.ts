// Certification data — extracted from the page component for maintainability.

export type CredentialType = "award" | "certification";

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  skills?: string[];
  credentialUrl?: string;
  /** Issuer brand mark (see public/company-logos, public/skill-logos); falls back to a tinted icon */
  logo?: string;
  /** One-line context (used mainly for internal awards) */
  note?: string;
  /** Awards/career milestones render with a chip and sort to their date like everything else */
  type?: CredentialType;
};

/** issuer -> logo map, applied where a credential has no explicit logo */
const issuerLogos: Record<string, string> = {
  "Walmart Global Tech": "/company-logos/walmart.svg",
  LangChain: "/skill-logos/langchain.svg",
  Astronomer: "/skill-logos/apacheairflow.svg",
  HackerRank: "/company-logos/hackerrank.png",
  LinkedIn: "/company-logos/linkedin.svg",
  Databricks: "/company-logos/databricks.png",
  Udemy: "/company-logos/udemy.svg",
  Udacity: "/company-logos/udacity.svg",
  "Amazon Web Services (AWS)": "/company-logos/aws.svg",
  "The Linux Foundation": "/company-logos/linuxfoundation.png",
  "UC San Diego": "/company-logos/ucsandiego.svg",
};

// Flat credential list — the ledger's source of truth. Add new entries to
// the group that matches their year; they flow into the sorted list below.
const certificationGroups: Array<{ year: string; items: Certification[] }> = [
  {
    year: "2026",
    items: [
      {
        title: "Engineering Innovation Award",
        issuer: "Walmart Global Tech",
        issued: "Mar 2026",
        skills: ["Innovation", "Architecture", "AI Agents"],
        note: "Internal award for AI-agent platform innovation",
        type: "award",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Langgraph",
        issuer: "LangChain",
        issued: "Oct 2025",
        expires: "Oct 2034",
        credentialId: "brypjmrlds",
        skills: ["GenAI", "LangChain"],
      },
      {
        title: "Data Streaming Engineer",
        issuer: "Confluent",
        issued: "Jul 2025",
        expires: "Jul 2027",
        credentialId: "155446074",
        skills: ["Apache Spark Streaming", "Distributed Systems"],
        credentialUrl:
          "https://sei.caveon.com/score/WyI5NWViYjIxNS1jYjI3LTRiNzYtOWFhOC0zNDkxZjE4YWQ3NTMiLGZhbHNlXQ.XH3TIHdTob_vh-KjljqRutd8y60",
      },
      {
        title: "DAG Authoring for Apache Airflow",
        issuer: "Astronomer",
        issued: "Mar 2025",
        credentialId: "34d34e84-dc09-4240-9e62-de866d30e7ca",
        skills: ["Apache Airflow"],
      },
      {
        title: "Apache Iceberg: 101",
        issuer: "Dremio",
        issued: "Mar 2025",
        credentialId: "66acfa3e81a4aaa8cb03029b",
        skills: ["Apache Iceberg"],
      },
      {
        title: "SQL Certificate",
        issuer: "HackerRank",
        issued: "Jan 2025",
        credentialId: "94bc0149665e",
        skills: ["Big Data"],
      },
      {
        title: "Software Engineer Certificate (Coding, SQL, REST API)",
        issuer: "HackerRank",
        issued: "Jan 2025",
        credentialId: "1de3cd060620",
        skills: ["SQL", "Data Structures", "REST API"],
      },
      {
        title: "L3 to L4 Career Promotion",
        issuer: "Walmart Global Tech",
        issued: "Apr 2025",
        skills: ["Seniority", "Ownership", "Technical Leadership"],
        note: "Career promotion for ownership and technical leadership",
        type: "award",
      },
      {
        title: "Bravo Award — Excellence in Execution",
        issuer: "Walmart Global Tech",
        issued: "Jan 2025",
        skills: ["Execution", "Reliability"],
        note: "Internal award for excellence in execution",
        type: "award",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Academy Accreditation - Databricks Fundamentals",
        issuer: "Databricks",
        issued: "Nov 2024",
        expires: "Nov 2025",
        credentialId: "122644714",
        skills: ["Apache Spark", "PySpark"],
      },
      {
        title: "Spring: Spring Security",
        issuer: "LinkedIn",
        issued: "Sep 2024",
        skills: ["Spring Framework", "Spring Boot"],
      },
      {
        title: "Kubernetes: Microservices (2018)",
        issuer: "LinkedIn",
        issued: "Jun 2024",
        skills: ["Reliability", "Server Side", "Microservices"],
      },
      {
        title: "DATA STRUCTURES & ALGORITHMS MINI-COURSE",
        issuer: "Back To Back SWE",
        issued: "Jan 2024",
        skills: ["Algorithms", "Data Structures"],
      },
      {
        title: "Walmart Impact Award",
        issuer: "Walmart Global Tech",
        issued: "Dec 2024",
        skills: ["Business Impact", "Scale"],
        note: "Internal award for business impact at scale",
        type: "award",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Hackathon — Bronze Medal (3rd Place)",
        issuer: "Walmart Global Tech",
        issued: "Aug 2023",
        skills: ["AI Agent"],
        note: "Placed 3rd building an AI agent — hosted on HackerRank",
        credentialUrl: "https://www.hackerrank.com/profile/kuldeep27396",
        type: "award",
      },
      {
        title: "Academy Accreditation - Generative AI Fundamentals",
        issuer: "Databricks",
        issued: "Jul 2023",
        expires: "Jul 2025",
        credentialId: "78724246",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        title: "Scala 3 & Functional Programming Essentials",
        issuer: "Rock the JVM",
        issued: "Oct 2022",
        credentialId: "cert_qr6m6xw6",
        skills: ["Scala", "Apache Spark Streaming"],
      },
      {
        title: "Elastic search Masterclass",
        issuer: "Udemy",
        issued: "Sep 2022",
        credentialId: "UC-088e0343-f1ba-4466-ae3d-de2c52ea0dbd",
        skills: ["Elasticsearch"],
      },
      {
        title: "The Practices of High-Performing Employees",
        issuer: "LinkedIn",
        issued: "Oct 2022",
      },
      {
        title: "Astronomer Certification for Apache Airflow Fundamentals",
        issuer: "Astronomer",
        issued: "Feb 2022",
        credentialId: "204f85a3-f256-44b1-9f81-3077cc1e341a",
        skills: ["Apache Airflow"],
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title: "ML and Data Foundations on AWS",
        issuer: "Udacity",
        issued: "Oct 2021",
        skills: ["Python"],
      },
      {
        title: "Problem Solving",
        issuer: "HackerRank",
        issued: "Dec 2021",
        credentialId: "0eacd252bc7e",
        skills: ["Python"],
      },
      {
        title: "Apache Spark Essential Training",
        issuer: "LinkedIn",
        issued: "Aug 2021",
        skills: ["SQL", "Apache Spark Streaming"],
      },
      {
        title: "Interpersonal Communication",
        issuer: "LinkedIn",
        issued: "Aug 2021",
      },
      {
        title: "CutShort Certified Data Science - Basic",
        issuer: "Cutshort",
        issued: "May 2021",
        credentialId: "46159",
      },
      {
        title: "Data Analytics on AWS",
        issuer: "Amazon Web Services (AWS)",
        issued: "Apr 2021",
        credentialId: "wZ_7a6qPyEu5dfaWTcSrGQ2",
        skills: ["SQL"],
      },
      {
        title: "SQL",
        issuer: "HackerRank",
        issued: "Apr 2021",
        credentialId: "83ba8d31178f",
        skills: ["SQL", "MySQL"],
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Python for Data Science and Machine learning Bootcamp",
        issuer: "Udemy",
        issued: "Sep 2020",
        credentialId: "UC-71092ea2-6f90-44e5-b7ee-ebc4a3969d6a",
        skills: ["Python"],
      },
      {
        title: "Python Basic",
        issuer: "HackerRank",
        issued: "Jul 2020",
        credentialId: "504D41D89016",
        skills: ["Python"],
      },
    ],
  },
  {
    year: "Earlier / Undated",
    items: [
      {
        title: "Product Management Fundamentals",
        issuer: "The Product Folks",
        issued: "Date not listed",
        credentialId: "cc3ed161-3be7-40b7-8b2e-708876667636",
      },
      {
        title: "Introduction to Linux (edX)",
        issuer: "The Linux Foundation",
        issued: "Date not listed",
        credentialId: "e14a964141504f15869757115a76947e",
      },
      {
        title: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
        issuer: "UC San Diego",
        issued: "Date not listed",
        credentialId: "SZKTWL2LE2PK",
      },
    ],
  },
];

/** Resolve a credential's logo: explicit field first, then issuer match. */
export const issuerLogo = (cert: Certification): string | undefined =>
  cert.logo ?? issuerLogos[cert.issuer];

const MONTHS: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Sept: 9, Oct: 10, Nov: 11, Dec: 12,
};

/** "Mar 2026" -> 202603; undated items sort last. */
const dateRank = (issued: string): number => {
  const [mon, year] = issued.split(" ");
  const m = MONTHS[mon];
  const y = Number(year);
  return m && y ? y * 100 + m : 0;
};

/** Every credential, newest first — the ledger order. */
export const allCredentials: Certification[] = certificationGroups
  .flatMap((group) => group.items)
  .sort((a, b) => dateRank(b.issued) - dateRank(a.issued));

export const totalCredentials = allCredentials.length;
export const totalAwards = allCredentials.filter((c) => c.type === "award").length;
