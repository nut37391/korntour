/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { programs } from "../data/programs";
import { site } from "../data/site";
import { getHeroImage, getProgramImages } from "../lib/images";
import { JungleBackdrop, PhotoOrPlaceholder } from "../component/Jungle";
import { ArrowRightIcon, CheckIcon, LineIcon, PhoneIcon } from "../component/Icons";

export const metadata = {
  title: "Programs - Mae Sap Cave, Samoeng River Tubing & Elephant Sanctuary",
  description:
    "Three adventures in Samoeng, Chiang Mai: Mae Sap Cave & jungle tubing, Samoeng river tubing and elephant sanctuary & tubing. Hotel pickup, lunch, guide and insurance included.",
  alternates: { canonical: "https://chiangmaifriendlytour.com/programs" },
};

// Items every program includes (shown once in the strip under the hero).
const ALWAYS_INCLUDED = ["Round-trip hotel transfers", "Traditional Thai lunch", "Drinking water", "Insurance"];

const Accent = ({ children }) => (
  <p className="text-center text-2xl italic text-ember-400 sm:text-3xl">{children}</p>
);

export default function Programs() {
  const banner = getHeroImage(programs);
  const list = programs.map((p) => ({ ...p, images: getProgramImages(p.folder) }));

  return (
    <div className="bg-jungle-950 text-white">
      {/* Photo banner */}
      <section className="px-4 pt-4 lg:px-6">
        <div className="relative flex h-[340px] items-center justify-center overflow-hidden rounded-[1.5rem] sm:h-[420px]">
          {banner ? (
            <img src={banner} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <JungleBackdrop />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/70 via-jungle-950/50 to-jungle-950/80" />
          <div className="relative text-center">
            <h1 className="border-[3px] border-white px-6 py-3 font-display uppercase text-4xl tracking-wide sm:px-10 sm:text-6xl">
              Our <span className="text-ember-500">Programs</span>
            </h1>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              Cave · River · Elephants
            </p>
          </div>
        </div>
      </section>

      {/* Intro + always included */}
      <section className="px-5 pt-20 lg:px-10">
        <Accent>Choose your adventure!</Accent>
        <p className="mx-auto mt-5 max-w-2xl text-center text-white/70">
          Three full-day trips into the Samoeng valley, each with a float down the Samoeng River. Every program
          includes:
        </p>
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {ALWAYS_INCLUDED.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm"
            >
              <CheckIcon className="h-4 w-4 text-ember-400" /> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-[1240px] space-y-28 px-5 py-24 lg:px-10">
        {list.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={p.slug} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Photo collage */}
              <Link
                href={`/programs/${p.slug}`}
                className={`group relative block ${flip ? "lg:order-2" : ""}`}
                aria-label={p.name}
              >
                <span
                  className={`pointer-events-none absolute -top-14 z-10 font-display text-[7rem] leading-none text-ember-500/90 drop-shadow-2xl sm:text-[9rem] ${
                    flip ? "right-2" : "left-2"
                  }`}
                >
                  {p.number}
                </span>
                <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/50 ring-1 ring-white/10">
                  <PhotoOrPlaceholder
                    src={p.images[0]}
                    alt={p.name}
                    label={p.nameTh}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {p.images.length > 2 && (
                  <div className={`absolute -bottom-8 flex gap-3 ${flip ? "-left-3 sm:-left-6" : "-right-3 sm:-right-6"}`}>
                    {p.images.slice(1, 3).map((src, k) => (
                      <div
                        key={src}
                        className={`h-24 w-32 overflow-hidden rounded-xl border-4 border-jungle-950 shadow-xl sm:h-28 sm:w-36 ${
                          k ? "rotate-3" : "-rotate-3"
                        }`}
                      >
                        <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </Link>

              {/* Details */}
              <div className={flip ? "lg:order-1" : ""}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-ember-500 px-3 py-1 text-xs font-bold tracking-widest">{p.code}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/80">
                    {p.nameTh}
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/80">
                    {p.duration}
                  </span>
                </div>
                <h2 className="mt-5 font-display uppercase text-4xl leading-[0.95] sm:text-5xl">{p.name}</h2>
                <p className="mt-5 leading-relaxed text-white/70">{p.tagline}</p>

                <ul className="mt-7 space-y-3">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-white/85">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember-500/20 text-ember-400">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] text-center">
                  <div className="px-3 py-4">
                    <p className="text-[11px] uppercase tracking-widest text-white/50">From</p>
                    <p className="mt-1 font-display text-2xl text-ember-400">{p.price.toLocaleString()}</p>
                    <p className="text-[11px] text-white/50">THB / person</p>
                  </div>
                  <div className="px-3 py-4">
                    <p className="text-[11px] uppercase tracking-widest text-white/50">Pickup</p>
                    <p className="mt-1 font-semibold">{p.schedule.pickup}</p>
                  </div>
                  <div className="px-3 py-4">
                    <p className="text-[11px] uppercase tracking-widest text-white/50">Return</p>
                    <p className="mt-1 font-semibold">{p.schedule.return}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/programs/${p.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 font-semibold shadow-lg shadow-ember-500/30 transition-all hover:-translate-y-0.5 hover:bg-ember-600"
                  >
                    View & Book <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  {p.gygUrl && (
                    <a
                      href={p.gygUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white/70 underline-offset-4 hover:text-ember-400 hover:underline"
                    >
                      or book on GetYourGuide →
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Help CTA */}
      <section className="px-4 pb-4 lg:px-6">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-ember-500 via-ember-600 to-ember-700 px-6 py-16 text-center shadow-2xl">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-jungle-950/25 blur-3xl" />
          <div className="relative">
            <h2 className="font-display uppercase text-4xl sm:text-5xl">Not sure which one?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Tell us your dates and who&apos;s coming — we&apos;ll help you pick the right adventure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-jungle-950 px-6 py-3 font-semibold transition-colors hover:bg-jungle-800"
              >
                <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
              </a>
              <a
                href={site.social.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold transition-colors hover:bg-white hover:text-ember-600"
              >
                <LineIcon className="h-5 w-5" /> Chat on LINE
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
