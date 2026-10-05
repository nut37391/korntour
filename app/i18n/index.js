// Two languages: English at the site root (/programs), Thai under /th (/th/programs).
import { site } from "../data/site";

export const LANGS = ["en", "th"];
export const DEFAULT_LANG = "en";

/** "/programs" -> "/th/programs" for Thai; "/" -> "/th". */
export const localePath = (lang, path = "/") =>
  lang === "th" ? (path === "/" ? "/th" : `/th${path}`) : path;

/** Strips the /th prefix: "/th/programs" -> "/programs". */
export const basePath = (pathname = "/") => pathname.replace(/^\/th(?=\/|$)/, "") || "/";

export const langOf = (pathname = "/") => (/^\/th(\/|$)/.test(pathname) ? "th" : "en");

const absolute = (lang, path) => `${site.url}${localePath(lang, path) === "/" ? "" : localePath(lang, path)}`;

/** hreflang links for a page that exists in both languages. */
export const languageAlternates = (path) => ({
  en: absolute("en", path),
  th: absolute("th", path),
  "x-default": absolute("en", path),
});

/**
 * Page metadata shared by both languages: canonical + hreflang, Open Graph and Twitter.
 * `title` goes through the layout's "%s | Site" template unless `absoluteTitle` is set.
 */
export function pageMeta({ lang, path, title, absoluteTitle, description, image = site.ogImage, imageAlt }) {
  const url = absolute(lang, path);
  const shareTitle = absoluteTitle ?? `${title} | ${site.name}`;
  const images = [{ url: image, ...(image === site.ogImage && { width: 1200, height: 630 }), alt: imageAlt ?? site.name }];
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title: shareTitle,
      description,
      url,
      type: "website",
      siteName: site.name,
      locale: lang === "th" ? "th_TH" : "en_US",
      alternateLocale: lang === "th" ? "en_US" : "th_TH",
      images,
    },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: [image] },
  };
}
