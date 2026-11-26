import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hraize.com";
  const lastModified = new Date();

  const pages: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/hr-services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/recruitment", changeFrequency: "weekly", priority: 0.9 },
    { path: "/business-support", changeFrequency: "weekly", priority: 0.9 },
    { path: "/website-solutions", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    // Hidden in full static mode; re-enable when dynamic portals are active:
    // { path: "/careers", changeFrequency: "weekly", priority: 0.7 },
    // { path: "/submit-resume", changeFrequency: "monthly", priority: 0.6 },
    // { path: "/vacancies", changeFrequency: "weekly", priority: 0.7 },
  ];

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
