import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Tours & Experiences - Chiang Mai Day Trips and Activities",
  description:
    "Browse our Chiang Mai tours: Elephant sanctuaries, Doi Suthep temple visits, Chiang Rai White Temple day trips, Doi Inthanon trekking, Thai cooking classes & more. Book your adventure today!",
  keywords: [
    "Chiang Mai tours",
    "Chiang Mai day trips",
    "elephant sanctuary Chiang Mai",
    "Doi Suthep tour",
    "Chiang Rai day trip",
    "Doi Inthanon trekking",
    "Thai cooking class",
    "Chiang Mai activities",
  ],
  alternates: {
    canonical: "https://chiangmaifriendlytour.com/services",
  },
  openGraph: {
    title: "Tours & Experiences - Chiang Mai Friendly Tour",
    description:
      "Explore our curated Chiang Mai tours. Elephant care, temple visits, trekking & more. Book your perfect adventure!",
    url: "https://chiangmaifriendlytour.com/services",
    type: "website",
  },
};

export default function Services() {
  return <ServicesClient />;
}
