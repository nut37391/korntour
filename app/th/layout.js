import RootShell, { rootMetadata } from "../views/RootShell";

export const metadata = rootMetadata("th");

export default function ThaiLayout({ children }) {
  return <RootShell lang="th">{children}</RootShell>;
}
