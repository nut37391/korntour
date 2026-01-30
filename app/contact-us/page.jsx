import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us - Chiang Mai Friendly Tour",
  description:
    "Contact Chiang Mai Friendly Tour for tour bookings and inquiries. Phone: +66 62-283-0334, Email: ChiangmaiFriendlyTour.cnx@gmail.com. Located in Chang Khlan, Chiang Mai. Available 24/7.",
  keywords: [
    "contact Chiang Mai tour",
    "book Chiang Mai tour",
    "Chiang Mai tour inquiry",
    "Chiang Mai travel agent contact",
    "Chiang Mai tour phone number",
  ],
  alternates: {
    canonical: "https://chiangmaifriendlytour.com/contact-us",
  },
  openGraph: {
    title: "Contact Us - Chiang Mai Friendly Tour",
    description:
      "Get in touch with us for tour bookings and inquiries. We're available 24/7!",
    url: "https://chiangmaifriendlytour.com/contact-us",
    type: "website",
  },
};

export default function Contact() {
  return <ContactClient />;
}
