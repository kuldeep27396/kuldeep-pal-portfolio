import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputFile = path.join(projectRoot, "src/data/articles.generated.ts");

const SOURCE_LINKS = {
  linkedin: "https://www.linkedin.com/newsletters/software-data-engineering-6983848189787271168/",
  medium: "https://kuldeep27396.medium.com/",
};

const MEDIUM_RSS_URL = process.env.MEDIUM_RSS_URL ?? "https://kuldeep27396.medium.com/feed";
const LINKEDIN_NEWSLETTER_RSS_URL = process.env.LINKEDIN_NEWSLETTER_RSS_URL ?? "";

const decodeHtml = (value = "") =>
  value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();

const stripTags = (value = "") =>
  decodeHtml(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getFirstMatch = (xml, patterns) => {
  for (const pattern of patterns) {
    const match = xml.match(pattern);
    if (match?.[1]) {
      return decodeHtml(match[1]);
    }
  }
  return "";
};

const getMatches = (xml, pattern) =>
  [...xml.matchAll(pattern)].map((match) => decodeHtml(match[1]).trim()).filter(Boolean);

const parseImage = (itemXml) => {
  const directUrl = getFirstMatch(itemXml, [
    /<media:content[^>]*url="([^"]+)"/i,
    /<media:thumbnail[^>]*url="([^"]+)"/i,
    /<enclosure[^>]*url="([^"]+)"/i,
  ]);
  if (directUrl) {
    return directUrl;
  }

  const htmlBlob =
    getFirstMatch(itemXml, [/<content:encoded>([\s\S]*?)<\/content:encoded>/i]) ||
    getFirstMatch(itemXml, [/<description>([\s\S]*?)<\/description>/i]);
  const imgMatch = htmlBlob.match(/<img[^>]+src="([^"]+)"/i);
  return imgMatch?.[1] ?? "";
};

const extractItems = (xml) => {
  const itemMatches = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];

  return itemMatches
    .map((itemXml) => {
      const title = stripTags(getFirstMatch(itemXml, [/<title>([\s\S]*?)<\/title>/i]));
      const link = getFirstMatch(itemXml, [/<link>([\s\S]*?)<\/link>/i]);
      const pubDate = getFirstMatch(itemXml, [/<pubDate>([\s\S]*?)<\/pubDate>/i]);
      const content =
        getFirstMatch(itemXml, [/<content:encoded>([\s\S]*?)<\/content:encoded>/i]) ||
        getFirstMatch(itemXml, [/<description>([\s\S]*?)<\/description>/i]);
      const description = stripTags(content);
      const categories = getMatches(itemXml, /<category>([\s\S]*?)<\/category>/gi);
      const image = parseImage(itemXml);

      return {
        title,
        link,
        pubDate,
        description,
        tags: categories.slice(0, 6),
        image,
      };
    })
    .filter((item) => item.title && item.link);
};

const summarize = (value) => {
  if (!value) {
    return "";
  }
  if (value.length <= 180) {
    return value;
  }
  return `${value.slice(0, 177).trim()}...`;
};

const formatDate = (value) => {
  if (!value) {
    return "";
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const normalize = (items, source) =>
  items.map((item) => ({
    title: item.title,
    source,
    sourceLabel: source === "linkedin" ? "LinkedIn Newsletter" : "Medium",
    date: formatDate(item.pubDate),
    isoDate: item.pubDate ? new Date(item.pubDate).toISOString() : "",
    description: summarize(item.description),
    tags: item.tags,
    link: item.link,
    image: item.image,
  }));

const fetchFeed = async (url) => {
  const response = await fetch(url, {
    headers: {
      "user-agent": "kuldeep-light-canvas-feed-sync/1.0",
      accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
    },
  });

  if (!response.ok) {
    throw new Error(`Feed request failed: ${response.status} ${response.statusText}`);
  }

  return response.text();
};

const buildHighlightTags = (articles) => {
  const priority = ["LinkedIn Newsletter", "Medium", "Data Engineering", "Backend", "AI"];
  const dynamicTags = Array.from(
    new Set(
      articles
        .flatMap((article) => article.tags)
        .filter(Boolean),
    ),
  ).slice(0, 10);

  return Array.from(new Set([...priority, ...dynamicTags])).slice(0, 12);
};

const serializeModule = ({ articles, highlightTags, lastUpdated }) => `export type ArticleItem = {
  title: string;
  source: "linkedin" | "medium";
  sourceLabel: string;
  date: string;
  isoDate: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
};

export const sourceLinks = ${JSON.stringify(SOURCE_LINKS, null, 2)} as const;

export const highlightTags = ${JSON.stringify(highlightTags, null, 2)} as const;

export const lastUpdated = ${JSON.stringify(lastUpdated)};

export const articles: ArticleItem[] = ${JSON.stringify(articles, null, 2)};
`;

const main = async () => {
  await mkdir(path.dirname(outputFile), { recursive: true });

  const results = [];
  const errors = [];

  try {
    const mediumXml = await fetchFeed(MEDIUM_RSS_URL);
    results.push(...normalize(extractItems(mediumXml), "medium"));
  } catch (error) {
    errors.push(`Medium sync failed: ${error.message}`);
  }

  if (LINKEDIN_NEWSLETTER_RSS_URL) {
    try {
      const linkedinXml = await fetchFeed(LINKEDIN_NEWSLETTER_RSS_URL);
      results.push(...normalize(extractItems(linkedinXml), "linkedin"));
    } catch (error) {
      errors.push(`LinkedIn sync failed: ${error.message}`);
    }
  } else {
    errors.push("LinkedIn sync skipped: set LINKEDIN_NEWSLETTER_RSS_URL to a generated RSS feed for the newsletter.");
  }

  if (!results.length) {
    const existing = await readFile(outputFile, "utf8").catch(() => "");
    if (existing) {
      console.warn("No feeds were synced. Keeping existing generated articles file.");
      errors.forEach((message) => console.warn(message));
      return;
    }
    throw new Error(`No articles fetched.\n${errors.join("\n")}`);
  }

  const deduped = Array.from(new Map(results.map((item) => [item.link, item])).values()).sort((a, b) =>
    (b.isoDate || "").localeCompare(a.isoDate || ""),
  );

  const moduleContent = serializeModule({
    articles: deduped,
    highlightTags: buildHighlightTags(deduped),
    lastUpdated: new Date().toISOString(),
  });

  await writeFile(outputFile, moduleContent, "utf8");

  console.log(`Synced ${deduped.length} articles to ${path.relative(projectRoot, outputFile)}`);
  errors.forEach((message) => console.warn(message));
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
