"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { site } from "../data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/contact-us", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <nav
      className={`${
        isHome ? "absolute inset-x-0 top-0 z-30 bg-transparent" : "relative bg-jungle-950"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logo} alt={site.name} className="h-12 sm:h-14 w-auto rounded-lg shadow-md" />
            <span className="hidden sm:block font-display text-sm lg:text-base uppercase tracking-wide text-ember-500">
              {site.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
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

        {/* Accent line under the nav, like the reference design */}
        <div className="relative mt-4 h-px bg-white/40">
          <span className="absolute left-[33%] top-1/2 -translate-y-1/2 h-[3px] w-[30%] bg-ember-500 rounded-full" />
        </div>

        {open && (
          <div className="md:hidden mt-3 space-y-1 rounded-2xl bg-jungle-950/95 p-3 backdrop-blur">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
