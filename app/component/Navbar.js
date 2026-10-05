"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { site } from "../data/site";
import { getDict } from "../i18n/dict";
import { basePath, localePath } from "../i18n";

const Navbar = ({ lang = "en" }) => {
  const t = getDict(lang).nav;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  // Path without the /th prefix, e.g. "/programs/cave" on both /programs/cave and /th/programs/cave.
  const current = basePath(pathname);
  const isHome = current === "/";

  const links = [
    { href: "/", label: t.home },
    { href: "/programs", label: t.programs },
    { href: "/contact-us", label: t.contact },
  ];

  // Close the mobile menu on Escape or on a tap outside the nav.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onPointer = (e) => !navRef.current?.contains(e.target) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? current === "/" : current.startsWith(href));

  // Same page in the other language. Plain <a>: the two languages use different root layouts.
  const otherLang = lang === "th" ? "en" : "th";
  const switchHref = localePath(otherLang, current);
  const LangSwitch = ({ className = "" }) => (
    <a
      href={switchHref}
      hrefLang={otherLang}
      lang={otherLang}
      aria-label={t.switchTo}
      title={t.switchTo}
      className={`rounded-full border border-white/40 px-3 py-1.5 text-sm font-semibold text-white hover:border-ember-500 hover:text-ember-400 transition-colors ${className}`}
    >
      {t.switchLabel}
    </a>
  );

  return (
    <nav
      ref={navRef}
      className={`${
        isHome ? "absolute inset-x-0 top-0 z-30 bg-transparent" : "relative bg-jungle-950"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <Link
            href={localePath(lang, "/")}
            className="py-3 font-display text-sm lg:text-base uppercase tracking-wide text-ember-500 hover:text-ember-400 transition-colors"
          >
            {site.name}
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={localePath(lang, link.href)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-ember-500 text-white"
                    : "text-white hover:text-ember-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="ml-3 rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold text-white hover:border-ember-500 hover:text-ember-400 transition-colors"
            >
              {site.phoneDisplay}
            </a>
            <LangSwitch />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LangSwitch />
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
              onClick={() => setOpen(!open)}
              aria-label={t.menu}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Accent line under the nav, like the reference design */}
        <div className="relative mt-4 h-px bg-white/40">
          <span className="absolute left-[33%] top-1/2 -translate-y-1/2 h-[3px] w-[30%] bg-ember-500 rounded-full" />
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden mt-3 space-y-1 rounded-2xl bg-jungle-950/95 p-3 backdrop-blur">
            {links.map((link) => (
              <Link
                key={link.href}
                href={localePath(lang, link.href)}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 font-semibold ${
                  isActive(link.href) ? "bg-ember-500 text-white" : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${site.phone}`} className="block rounded-lg px-3 py-2 font-semibold text-ember-400">
              {site.phoneDisplay}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
