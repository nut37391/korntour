import HomeView, { homeMetadata } from "@/app/views/HomeView";

export const metadata = homeMetadata("th");

export default function Page() {
  return <HomeView lang="th" />;
}
