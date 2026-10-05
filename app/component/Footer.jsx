/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { site } from "../data/site";
import { getPrograms } from "../data/programs";
import { getDict } from "../i18n/dict";
import { localePath } from "../i18n";
import { getQrImage } from "../lib/images";
import { FacebookIcon, InstagramIcon, TikTokIcon, LineIcon, PhoneIcon, EnvelopeIcon, MapMarkerIcon } from "./Icons";
import { AccentRule, QrCard } from "./Jungle";

const socialClass =
  "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-ember-500 transition-colors";

const Footer = ({ lang = "en" }) => {
  const t = getDict(lang).footer;
  const href = (path) => localePath(lang, path);
  const qr = getQrImage();

  return (
    <footer className="bg-jungle-950 text-white">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={site.logo} alt={site.name} className="w-44 rounded-2xl shadow-lg" />
            <p className="mt-4 text-sm text-white/60">
              {t.operatedBy} {site.company}
              <br />
              {t.license}
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="TikTok">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href={site.social.line} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="LINE">
                <LineIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ember-400">{t.programs}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {getPrograms(lang).map((p) => (
                <li key={p.slug}>
                  <Link href={href(`/programs/${p.slug}`)} className="text-white/70 hover:text-ember-400 transition-colors">
                    {p.name} <span className="text-white/40">· {p.altName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ember-400">{t.contact}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-ember-400">
                  <PhoneIcon className="w-4 h-4 shrink-0" /> {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-ember-400">
                  <EnvelopeIcon className="w-4 h-4 shrink-0" /> {site.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapMarkerIcon className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{site.address.join(" ")}</span>
              </li>
            </ul>
          </div>

          {/* QR */}
          <div className="lg:justify-self-end">
            <QrCard src={qr} dark lang={lang} />
          </div>
        </div>

        <div className="mt-12">
          <AccentRule />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {site.name.toUpperCase()}. {t.rights}
          </p>
          <div className="flex gap-5">
            <Link href={href("/terms-of-service")} className="hover:text-ember-400">
              {t.terms}
            </Link>
            <Link href={href("/privacy-policy")} className="hover:text-ember-400">
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
