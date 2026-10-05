import ThankYouView, { thankYouMetadata } from "@/app/views/ThankYouView";

export const metadata = thankYouMetadata("th");

export default function Page() {
  return <ThankYouView lang="th" />;
}
