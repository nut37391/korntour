import PrivacyView, { privacyMetadata } from "@/app/views/PrivacyView";

export const metadata = privacyMetadata("en");

export default function Page() {
  return <PrivacyView lang="en" />;
}
