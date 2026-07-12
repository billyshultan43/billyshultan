import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = ["", "/projects", "/resume", "/about", "/contact"];

  const staticEntries = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const projectEntries = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...projectEntries];
}
