import type { ArticleItem } from "@/data/articles.generated";

export const fallbackLinkedinArticles: ArticleItem[] = [
  {
    title: "CORS - Cross-Origin Resource Sharing",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Sep 21, 2025",
    isoDate: "2025-09-21T00:00:00.000Z",
    description:
      "A practical walkthrough of CORS, comparing how Spring Boot and FastAPI handle cross-origin concerns in real-world API development.",
    tags: ["Backend", "CORS", "FastAPI", "Spring Boot"],
    link: "https://www.linkedin.com/pulse/cors-cross-origin-resource-sharing-kuldeep-pal-js4xc",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQHC50hR4kXA2g/article-cover_image-shrink_720_1280/B56Zlsm1KIHAAI-/0/1758463745355?e=2147483647&t=F5WjBbJmujSdWVB0W9Zgy5vlm_tC04kGUIZY0N1DZdQ&v=beta",
  },
  {
    title: "How hash functions revolutionized duplicate file detection",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Sep 10, 2025",
    isoDate: "2025-09-10T00:00:00.000Z",
    description:
      "An engineering look at SHA-256 based duplicate detection and why content-addressable storage patterns make large file systems more efficient.",
    tags: ["Hashing", "Storage", "Backend", "Systems Design"],
    link: "https://www.linkedin.com/pulse/how-hash-functions-revolutionized-duplicate-file-detection-pal-qerac",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQHCAG1iYjooqQ/article-cover_image-shrink_720_1280/B56Zk0zh7jJsAI-/0/1757527556725?e=2147483647&t=xTLds1LBoYsOJLFrGAdkHvUJfHQXR8ZU0sTRRYFdJKg&v=beta",
  },
  {
    title: "Write-Ahead Logging vs Replication Logs vs Commit Logs: A Comprehensive Analysis",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Sep 6, 2025",
    isoDate: "2025-09-06T00:00:00.000Z",
    description:
      "A production-oriented breakdown of WAL, replication logs, and commit logs with examples from PostgreSQL, MySQL, MongoDB, and Kafka.",
    tags: ["Databases", "Distributed Systems", "Kafka", "Architecture"],
    link: "https://www.linkedin.com/pulse/write-ahead-logging-vs-replication-logs-commit-analysis-kuldeep-pal-njb3c",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQGeSqLaxPIDBA/article-cover_image-shrink_720_1280/B56ZkgVeunH8AI-/0/1757184137694?e=2147483647&t=5w-XhDGzwth3NJvRcbXsqWKJyzPQ5qLxNz7ZggGP2fY&v=beta",
  },
  {
    title: "HyperLogLog: Counting Unique Items Efficiently",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Jun 28, 2025",
    isoDate: "2025-06-28T00:00:00.000Z",
    description:
      "A practical explanation of HyperLogLog for counting large cardinalities with tiny memory footprints in analytics and streaming systems.",
    tags: ["Algorithms", "Big Data", "Analytics", "Probabilistic DS"],
    link: "https://www.linkedin.com/pulse/hyperloglog-counting-unique-items-efficiently-kuldeep-pal-wcubc",
  },
  {
    title: "How I Built a MCP server for My Data: Talking to Apache Iceberg with GenAI",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "May 21, 2025",
    isoDate: "2025-05-21T00:00:00.000Z",
    description:
      "A GenAI + data engineering piece about building an MCP interface over Apache Iceberg to query data in natural language.",
    tags: ["GenAI", "MCP", "Apache Iceberg", "Data Platforms"],
    link: "https://www.linkedin.com/pulse/how-i-built-mcp-server-my-data-talking-apache-iceberg-kuldeep-pal-pq5jc/",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQEMoY2f850Dbg/article-cover_image-shrink_720_1280/B56ZboBNIQG4AQ-/0/1747649360410?e=2147483647&t=F0xk4P2nbSdhHwhaW2e_Gjnv9ua4FPpO7sX_hZFzf5o&v=beta",
  },
  {
    title: "Inside the Python Virtual Machine",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Feb 16, 2025",
    isoDate: "2025-02-16T00:00:00.000Z",
    description:
      "A deep dive into how Python compiles, manages frames, works with bytecode, and executes code in the VM.",
    tags: ["Python", "Runtime", "Internals", "Programming"],
    link: "https://www.linkedin.com/pulse/inside-python-virtual-machine-kuldeep-pal-wkx4c/",
  },
  {
    title: "Building a Modern Data Lakehouse with Dermio(Iceberg) and MinIO: A Hackathon Journey",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Jan 11, 2025",
    isoDate: "2025-01-11T00:00:00.000Z",
    description:
      "A lakehouse architecture walkthrough using MinIO, Dremio, Apache Iceberg, Nessie, and Superset for analytics on open formats.",
    tags: ["Lakehouse", "Dremio", "MinIO", "Apache Iceberg"],
    link: "https://www.linkedin.com/pulse/building-modern-data-lakehouse-dermioiceberg-minio-hackathon-pal-o3auc",
  },
  {
    title: "Understanding Google's serverless data warehouse from the inside out",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Dec 10, 2024",
    isoDate: "2024-12-10T00:00:00.000Z",
    description:
      "A detailed explanation of BigQuery internals, including Colossus, Jupiter, Dremel, columnar storage, and distributed query execution.",
    tags: ["BigQuery", "Data Warehouse", "Architecture", "Distributed Systems"],
    link: "https://www.linkedin.com/pulse/understanding-googles-serverless-data-warehouse-from-inside-pal-vqtrc",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQFgvJqZtr9bVA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733234372501?e=2147483647&t=D0ttKtH4r1tSVLyzQUIyPuCh_NGr4Bp7emrWI8gIlGI&v=beta",
  },
  {
    title: "Communication Protocols: Polling, WebSockets, SSE, gRPC, Message Queues",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Nov 16, 2024",
    isoDate: "2024-11-16T00:00:00.000Z",
    description:
      "A backend systems comparison across common communication patterns and when each one fits in production design.",
    tags: ["Backend", "WebSockets", "gRPC", "Message Queues"],
    link: "https://www.linkedin.com/pulse/communication-protocols-polling-websockets-sse-grpc-message-pal-qabsc",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQHkulrivgN3Ug/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728640988150?e=2147483647&t=7xACTBgL7NahPNdL1djGno3cj4RHge236TFyI80bLuc&v=beta",
  },
  {
    title: "Protecting Sensitive Data in BigQuery: A Comprehensive Guide for HIPAA and PII Compliance",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Oct 2, 2024",
    isoDate: "2024-10-02T00:00:00.000Z",
    description:
      "Security-focused BigQuery patterns covering encryption, masking, IAM, anonymization, logging, tokenization, and column-level controls.",
    tags: ["BigQuery", "Security", "HIPAA", "PII"],
    link: "https://www.linkedin.com/pulse/protecting-sensitive-data-bigquery-comprehensive-guide-kuldeep-pal-ykj5c",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQGadg1OhQ-p5Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727634119566?e=2147483647&t=cZMiNEGQ4-lqN6QY2_HlWIYDOFaISTp_H3dEpUQAlBw&v=beta",
  },
  {
    title: "Apache Arrow Flight SQL: Revolutionizing Data Transfer (Flight vs JDBC/ODBC)",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Sep 29, 2024",
    isoDate: "2024-09-29T00:00:00.000Z",
    description:
      "A performance-focused article on Arrow Flight SQL and why columnar transport can beat traditional JDBC/ODBC flows.",
    tags: ["Apache Arrow", "Performance", "Data Transfer", "SQL"],
    link: "https://www.linkedin.com/pulse/apache-arrow-flight-sql-revolutionizing-data-transfer-kuldeep-pal-xbhjc",
  },
  {
    title: "Optimizing BigQuery: Strategies and Techniques for SQL",
    source: "linkedin",
    sourceLabel: "LinkedIn Newsletter",
    date: "Aug 22, 2024",
    isoDate: "2024-08-22T00:00:00.000Z",
    description:
      "A guide to BigQuery performance tuning with search indexes, vector indexes, clustering, bucketing, and partitioning.",
    tags: ["BigQuery", "SQL", "Optimization", "Analytics"],
    link: "https://www.linkedin.com/pulse/optimizing-bigquery-strategies-techniques-sql-kuldeep-pal-fdtuc",
  },
];
