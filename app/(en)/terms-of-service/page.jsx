import TermsView, { termsMetadata } from "@/app/views/TermsView";

export const metadata = termsMetadata("en");

export default function Page() {
  return <TermsView lang="en" />;
}
