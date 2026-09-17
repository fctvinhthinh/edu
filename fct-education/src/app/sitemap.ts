import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { newsArticles } from "@/data/news";

const BASE_URL = "https://fcteducation.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/gioi-thieu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/quoc-gia`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/hoc-bong`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tin-tuc`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/lien-he`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const countryPages: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${BASE_URL}/quoc-gia/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const newsPages: MetadataRoute.Sitemap = newsArticles.map((a) => ({
    url: `${BASE_URL}/tin-tuc/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...countryPages, ...newsPages];
}
