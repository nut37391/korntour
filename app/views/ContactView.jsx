import ContactClient from "./ContactClient";
import { getHeroImage, getQrImage, listImages } from "../lib/images";
import { programs } from "../data/programs";
import { getDict } from "../i18n/dict";
import { pageMeta } from "../i18n";

export const contactMetadata = (lang) => {
  const t = getDict(lang).meta;
  return pageMeta({ lang, path: "/contact-us", title: t.contactTitle, description: t.contactDescription });
};

export default function ContactView({ lang }) {
  // Banner photo: public/programs/contact/ if provided, otherwise the home page hero photo.
  const banner = listImages("programs/contact")[0] ?? getHeroImage(programs);
  return <ContactClient qr={getQrImage()} banner={banner} lang={lang} />;
}
