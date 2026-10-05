import PrivacyView, { privacyMetadata } from "@/app/views/PrivacyView";

export const metadata = privacyMetadata("th");

export default function Page() {
  return <PrivacyView lang="th" />;
}
