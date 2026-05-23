import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theleadhaus.io";

  const corePages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/how-it-works`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pricing`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly" as const, priority: 0.6 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/cookies`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${baseUrl}/diy-cost-calculator`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/lead-generation`, changeFrequency: "weekly" as const, priority: 0.9 },
  ];

  const comparisons = [
    "leadhaus-vs-mailchimp",
    "leadhaus-vs-smartlead",
    "leadhaus-vs-lemlist",
    "leadhaus-vs-apollo",
    "leadhaus-vs-instantly",
  ];

  const sectors = ["recruiters", "accountants", "solicitors", "agencies", "consultants"];
  const cities = [
    "london",
    "birmingham",
    "manchester",
    "new-york",
    "san-francisco",
    "chicago",
    "toronto",
    "vancouver",
    "sydney",
    "melbourne",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...corePages.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...comparisons.map((slug) => ({
      url: `${baseUrl}/comparison/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // Append programmatic pages
  for (const sec of sectors) {
    for (const city of cities) {
      sitemapEntries.push({
        url: `${baseUrl}/lead-generation/for-${sec}-in-${city}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
      });
    }
  }

  return sitemapEntries;
}
