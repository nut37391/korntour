import ProgramDetailView, { programMetadata, programStaticParams } from "@/app/views/ProgramDetailView";

export const generateStaticParams = programStaticParams;

export function generateMetadata({ params }) {
  return programMetadata("en", params.slug);
}

export default function Page({ params }) {
  return <ProgramDetailView lang="en" slug={params.slug} />;
}
