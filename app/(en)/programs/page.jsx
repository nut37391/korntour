import ProgramsView, { programsMetadata } from "@/app/views/ProgramsView";

export const metadata = programsMetadata("en");

export default function Page() {
  return <ProgramsView lang="en" />;
}
