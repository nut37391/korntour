import ContactView, { contactMetadata } from "@/app/views/ContactView";

export const metadata = contactMetadata("th");

export default function Page() {
  return <ContactView lang="th" />;
}
