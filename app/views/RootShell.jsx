import { Anuphan, Archivo_Black, Caveat, Kanit, Mali } from "next/font/google";
import "../globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Providers from "../providers";
import { site } from "../data/site";
import { getDict } from "../i18n/dict";
import { languageAlternates, localePath } from "../i18n";

const display = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });
// Archivo Black has no Thai glyphs; Thai headings fall back to this bold Thai face.
// Not preloaded, so English pages never download it (the browser fetches it only when Thai text appears).
const displayTh = Kanit({ subsets: ["thai"], weight: "700", variable: "--font-display-th", preload: false });
// Handwritten accent lines ("Choose your adventure!"): Caveat for Latin, Mali for Thai glyphs.
const hand = Caveat({ subsets: ["latin"], weight: "600", variable: "--font-hand" });
const handTh = Mali({ subsets: ["thai", "latin"], weight: "500", variable: "--font-hand-th", preload: false });
const body = Anuphan({ subsets: ["latin", "thai"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

/** Root metadata for one language; pages override title/description/canonical. */
export function rootMetadata(lang) {
  const t = getDict(lang).meta;
  return {
    metadataBase: new URL(site.url),
    title: { default: t.homeTitle, template: `%s | ${site.name}` },
    description: t.homeDescription,
    keywords: t.keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.company,
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    alternates: { languages: languageAlternates("/") },
    openGraph: {
      title: t.homeTitle,
      description: t.homeDescription,
      type: "website",
      locale: lang === "th" ? "th_TH" : "en_US",
      alternateLocale: lang === "th" ? "en_US" : "th_TH",
      url: site.url + (lang === "th" ? "/th" : ""),
      siteName: site.name,
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: t.homeTitle, description: t.homeDescription, images: [site.ogImage] },
    icons: { icon: [{ url: site.logo, type: "image/jpeg" }], shortcut: site.logo, apple: site.logo },
  };
}

const jsonLd = (lang) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: [site.company, "ล่องห่วงสะเมิง"],
      url: site.url,
      logo: { "@type": "ImageObject", url: site.url + site.logo },
      image: site.url + site.ogImage,
      description: getDict(lang).meta.orgDescription,
      address: {
        "@type": "PostalAddress",
        streetAddress: "114 Moo 5",
        addressLocality: "Samoeng Tai, Samoeng",
        addressRegion: "Chiang Mai",
        postalCode: "50250",
        addressCountry: "TH",
      },
      geo: { "@type": "GeoCoordinates", latitude: 18.7883, longitude: 98.9853 },
      telephone: site.phone,
      email: site.email,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "07:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "THB",
      paymentAccepted: "Cash, Credit Card",
      areaServed: { "@type": "City", name: "Chiang Mai" },
      availableLanguage: ["en", "th"],
      sameAs: [site.social.facebook, site.social.instagram, site.social.tiktok],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "TAT License",
        recognizedBy: { "@type": "Organization", name: "Tourism Authority of Thailand" },
        description: "TAT License No. 23/03998",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website-${lang}`,
      url: site.url + localePath(lang, "/").replace(/^\/$/, ""),
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: lang === "th" ? "th-TH" : "en-US",
    },
  ],
});

export default function RootShell({ lang, children }) {
  return (
    <html lang={lang}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }} />
      </head>
      <body
        className={`${display.variable} ${displayTh.variable} ${hand.variable} ${handTh.variable} ${body.variable} font-body bg-sand overflow-x-hidden`}
      >
        <Providers>
          <Navbar lang={lang} />
          {children}
          <Footer lang={lang} />
        </Providers>
      </body>
    </html>
  );
}
