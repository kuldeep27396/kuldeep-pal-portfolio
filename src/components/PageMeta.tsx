import { Helmet } from "react-helmet-async";

const SITE_NAME = "Kuldeep Pal";
const SITE_URL = "https://kuldeeppal.vercel.app";
const DEFAULT_DESCRIPTION =
  "Senior Software Engineer working across data engineering, AI systems, and backend platforms.";
const DEFAULT_OG_IMAGE = "/og.png";

/**
 * Per-route document head: title, description, canonical URL, and social cards.
 * See docs/DESIGN.md and docs/SEO.md.
 */
export const PageMeta = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  path = "",
  noindex = false,
}: {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  noindex?: boolean;
}) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kuldeep27396" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />
    </Helmet>
  );
};

/** Structured data for rich results (Person + ProfilePage). */
export const PersonJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Kuldeep Pal",
      jobTitle: "Senior Software Engineer — Data, AI, and Backend Systems",
      url: SITE_URL,
      image: `${SITE_URL}/profile.webp`,
      sameAs: [
        "https://linkedin.com/in/kuldeep27396",
        "https://github.com/kuldeep27396",
        "https://x.com/kuldeep27396",
        "https://kuldeep27396.medium.com",
      ],
      knowsAbout: [
        "Data Engineering",
        "AI Agents",
        "LLM Workflows",
        "Backend Systems",
        "FastAPI",
        "Spring Boot",
        "Apache Spark",
        "Kafka",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressCountry: "IN",
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};
