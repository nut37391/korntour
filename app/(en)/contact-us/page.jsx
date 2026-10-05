import ContactView, { contactMetadata } from "@/app/views/ContactView";

export const metadata = contactMetadata("en");

export default function Page() {
  return <ContactView lang="en" />;
}
