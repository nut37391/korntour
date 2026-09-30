/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { site } from "../data/site";
import { programs } from "../data/programs";
import { getQrImage } from "../lib/images";
import { FacebookIcon, InstagramIcon, TikTokIcon, LineIcon, PhoneIcon, EnvelopeIcon, MapMarkerIcon } from "./Icons";
import { AccentRule, QrCard } from "./Jungle";

const socialClass =
  "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-ember-500 transition-colors";

const Footer = () => {
  const qr = getQrImage();

  return (
    <footer className="bg-jungle-950 text-white">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={site.logo} alt={site.name} className="w-44 rounded-2xl shadow-lg" />
            <p className="mt-4 text-sm text-white/60">
              Operated by {site.company}
              <br />
              {site.license}
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
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ember-400">Programs</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link href={`/programs/${p.slug}`} className="text-white/70 hover:text-ember-400 transition-colors">
                    {p.name} <span className="text-white/40">· {p.nameTh}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ember-400">Contact</h4>
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
            <QrCard src={qr} dark />
          </div>
        </div>

        <div className="mt-12">
          <AccentRule />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {site.name.toUpperCase()}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/terms-of-service" className="hover:text-ember-400">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-ember-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
