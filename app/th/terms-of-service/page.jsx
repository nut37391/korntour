import TermsView, { termsMetadata } from "@/app/views/TermsView";

export const metadata = termsMetadata("th");

export default function Page() {
  return <TermsView lang="th" />;
}
