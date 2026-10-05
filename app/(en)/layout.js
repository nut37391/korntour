import RootShell, { rootMetadata } from "../views/RootShell";

export const metadata = rootMetadata("en");

export default function EnglishLayout({ children }) {
  return <RootShell lang="en">{children}</RootShell>;
}
