import { Anuphan, Archivo_Black } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Providers from "./providers";
import { site } from "./data/site";

const display = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Anuphan({ subsets: ["latin", "thai"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Samoeng Jungle Tubing - Cave, River Tubing & Elephant Adventures in Chiang Mai",
    template: "%s | Samoeng Jungle Tubing",
  },
  description:
    "Adventure and nature in Samoeng, Chiang Mai: cave exploring, jungle river tubing and ethical elephant care. Licensed tour operator (TAT 23/03998). Book your adventure today!",
  keywords: [
    "Samoeng Jungle Tubing",
    "Samoeng tubing",
    "Chiang Mai river tubing",
    "Chiang Mai cave tour",
    "ethical elephant care Chiang Mai",
    "Samoeng adventure",
    "Chiang Mai nature tour",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.company,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: "Samoeng Jungle Tubing - Adventure & Nature in Chiang Mai",
    description:
      "Cave exploring, jungle river tubing and ethical elephant care in Samoeng, Chiang Mai. Book now!",
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    images: [{ url: site.logo, width: 1402, height: 1122, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samoeng Jungle Tubing - Adventure & Nature in Chiang Mai",
    description: "Cave exploring, jungle river tubing and ethical elephant care in Samoeng, Chiang Mai.",
    images: [site.logo],
  },
  icons: {
    icon: [{ url: site.logo, type: "image/jpeg" }],
    shortcut: site.logo,
    apple: site.logo,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://chiangmaifriendlytour.com/#organization",
      name: site.name,
      alternateName: site.company,
      url: "https://chiangmaifriendlytour.com",
      logo: {
        "@type": "ImageObject",
        url: site.url + site.logo,
      },
      image: site.url + site.logo,
      description:
        "Adventure and nature tours in Samoeng, Chiang Mai: cave exploring, jungle river tubing and ethical elephant care.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6/1 Kamphaeng Din Road 2",
        addressLocality: "Chang Khlan, Mueang Chiang Mai",
        addressRegion: "Chiang Mai",
        postalCode: "51000",
        addressCountry: "TH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.7883,
        longitude: 98.9853,
      },
      telephone: "+66622830334",
      email: "Samoengjungletubing@gmail.com",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "THB",
      paymentAccepted: "Cash, Credit Card",
      areaServed: {
        "@type": "City",
        name: "Chiang Mai",
      },
      sameAs: [
        site.social.facebook,
        site.social.instagram,
        site.social.tiktok,
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "TAT License",
        recognizedBy: {
          "@type": "Organization",
          name: "Tourism Authority of Thailand",
        },
        description: "TAT License No. 23/03998",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://chiangmaifriendlytour.com/#website",
      url: "https://chiangmaifriendlytour.com",
      name: site.name,
      publisher: {
        "@id": "https://chiangmaifriendlytour.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} font-body bg-sand overflow-x-hidden`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
