import { programs } from "./data/programs";
import { site } from "./data/site";
import { languageAlternates, LANGS, localePath } from "./i18n";

// Built at `next build`, so lastModified is the deploy date and new programs are added automatically.
// Every page is listed in both languages, each linking to its translation (hreflang).
export default function sitemap() {
  const lastModified = new Date();
  const pages = [
    ["/", "weekly", 1],
    ["/programs", "weekly", 0.9],
    ...programs.map((p) => [`/programs/${p.slug}`, "weekly", 0.9]),
    ["/contact-us", "monthly", 0.7],
    ["/privacy-policy", "yearly", 0.2],
    ["/terms-of-service", "yearly", 0.2],
  ];

  return pages.flatMap(([path, changeFrequency, priority]) =>
    LANGS.map((lang) => ({
      url: site.url + (localePath(lang, path) === "/" ? "" : localePath(lang, path)),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    }))
  );
}
