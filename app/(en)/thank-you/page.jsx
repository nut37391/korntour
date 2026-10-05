import ThankYouView, { thankYouMetadata } from "@/app/views/ThankYouView";

export const metadata = thankYouMetadata("en");

export default function Page() {
  return <ThankYouView lang="en" />;
}
