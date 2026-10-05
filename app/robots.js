import { site } from "./data/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // No trailing slash: Firebase cleanUrls serves these as /thank-you, /payment-success/<id>.
      disallow: ["/api/", "/payment-success", "/thank-you", "/th/thank-you"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
