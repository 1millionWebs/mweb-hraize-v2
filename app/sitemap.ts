import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hraize.com";
  const pages = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/hr-services",
    "/recruitment",
    "/submit-resume",
    "/training",
    "/vacancies",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}
