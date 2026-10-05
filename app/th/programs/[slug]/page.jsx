import ProgramDetailView, { programMetadata, programStaticParams } from "@/app/views/ProgramDetailView";

export const generateStaticParams = programStaticParams;

export function generateMetadata({ params }) {
  return programMetadata("th", params.slug);
}

export default function Page({ params }) {
  return <ProgramDetailView lang="th" slug={params.slug} />;
}
