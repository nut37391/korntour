import ProgramsView, { programsMetadata } from "@/app/views/ProgramsView";

export const metadata = programsMetadata("th");

export default function Page() {
  return <ProgramsView lang="th" />;
}
