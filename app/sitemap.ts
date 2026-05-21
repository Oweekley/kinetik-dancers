import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://genuine-baklava-2427ce.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy-policy", "/safeguarding", "/terms", "/diolch"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    }),
  );
}
