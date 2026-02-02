import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://chiangmaifriendlytour.com"),
  title: {
    default: "Chiang Mai Friendly Tour - Best Tours & Travel in Chiang Mai, Thailand",
    template: "%s | Chiang Mai Friendly Tour",
  },
  description:
    "Discover the best Chiang Mai tours with 35+ years of local experience. Elephant sanctuaries, temple visits, Doi Inthanon trekking, cooking classes & more. Licensed tour operator (TAT 23/03998). Book your adventure today!",
  keywords: [
    "Chiang Mai tours",
    "Chiang Mai travel",
    "elephant sanctuary Chiang Mai",
    "Chiang Mai day trips",
    "Doi Suthep temple tour",
    "Chiang Rai White Temple tour",
    "Doi Inthanon trekking",
    "Thai cooking class Chiang Mai",
    "Chiang Mai tour guide",
    "Chiang Mai private tour",
    "ethical elephant tour Thailand",
    "Grand Canyon water park Chiang Mai",
    "Sticky waterfall Chiang Mai",
  ],
  authors: [{ name: "Chiang Mai Friendly Tour" }],
  creator: "Chiang Mai Friendly Tour",
  publisher: "Chiang Mai Friendly Tour",
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
    canonical: "https://chiangmaifriendlytour.com",
  },
  openGraph: {
    title: "Chiang Mai Friendly Tour - Best Tours & Travel in Chiang Mai",
    description:
      "Experience authentic Chiang Mai with local experts. Elephant sanctuaries, temple tours, trekking & more. 35+ years experience. Book now!",
    type: "website",
    locale: "en_US",
    url: "https://chiangmaifriendlytour.com",
    siteName: "Chiang Mai Friendly Tour",
    images: [
      {
        url: "/images/wat-phra-that-doi-suthep.jpg",
        width: 1200,
        height: 630,
        alt: "Chiang Mai Friendly Tour - Elephant Care and Temple Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiang Mai Friendly Tour - Best Tours & Travel in Chiang Mai",
    description:
      "Experience authentic Chiang Mai with local experts. Elephant sanctuaries, temple tours, trekking & more. Book now!",
    images: ["/images/wat-phra-that-doi-suthep.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://chiangmaifriendlytour.com/#organization",
      name: "Chiang Mai Friendly Tour",
      alternateName: "Chiang Mai Friendly Tour & Travel",
      url: "https://chiangmaifriendlytour.com",
      logo: {
        "@type": "ImageObject",
        url: "https://chiangmaifriendlytour.com/images/logo.png",
      },
      image: "https://chiangmaifriendlytour.com/images/wat-phra-that-doi-suthep.jpg",
      description:
        "Licensed tour operator in Chiang Mai, Thailand offering elephant sanctuaries, temple tours, trekking, cooking classes and more. 35+ years of local experience.",
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
      email: "ChiangmaiFriendlyTour.cnx@gmail.com",
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
        "https://www.facebook.com/profile.php?id=100094070260358",
        "https://www.instagram.com/elephantcaregrandcanyonjumping",
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
      name: "Chiang Mai Friendly Tour",
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
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
