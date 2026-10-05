/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { site } from "../data/site";
import { PhotoOrPlaceholder } from "./Jungle";
import { programAlt } from "../data/imageAlts";
import { getDict } from "../i18n/dict";
import { localePath } from "../i18n";
import { ArrowRightIcon, CertificateIcon, CheckIcon, StarIcon } from "./Icons";

// Topographic contour lines used as a subtle background texture.
const Topo = () => (
  <svg className="absolute inset-0 h-full w-full text-jungle-900/[0.06]" aria-hidden="true">
    <defs>
      <pattern id="topo" width="220" height="220" patternUnits="userSpaceOnUse">
        <path
          d="M0 110c40-30 70-30 110 0s70 30 110 0M0 150c40-30 70-30 110 0s70 30 110 0M0 70c40-30 70-30 110 0s70 30 110 0M0 30c40-30 70-30 110 0s70 30 110 0M0 190c40-30 70-30 110 0s70 30 110 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo)" />
  </svg>
);

// "About us" block for the home page: photo collage, story, stats band and GetYourGuide links.
// `programs` must include an `images` array (see app/page.jsx).
const AboutSection = ({ programs, lang = "en" }) => {
  const t = getDict(lang).about;
  const href = (path) => localePath(lang, path);
  const [a, b, c] = programs;
  const gyg = programs.filter((p) => p.gygUrl);
  const stats = [
    { value: `${site.experienceYears}+`, label: t.statYears },
    { value: "TAT", label: t.statLicensed },
    { value: programs.length, label: t.statAdventures },
    { value: "100%", label: t.statInsured },
  ];

  return (
    <section id="about-us" className="relative overflow-hidden bg-sand text-jungle-950">
      <Topo />
      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        {/* Collage + story */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto w-full max-w-[520px] pb-10 pl-6 pt-10 sm:pl-10">
            {/* Main photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-jungle-950/30">
              <PhotoOrPlaceholder src={b?.images[0]} alt={b && programAlt(b, b.images[0], 0, lang)} label={b?.altName} />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-950/60 via-transparent to-transparent" />
            </div>
            {/* Tilted photo, top-left */}
            <div className="absolute left-0 top-0 w-[38%] rotate-[-6deg] overflow-hidden rounded-2xl border-[6px] border-white shadow-xl transition-transform duration-500 hover:rotate-0">
              <div className="aspect-square">
                <PhotoOrPlaceholder src={a?.images[0]} alt={a && programAlt(a, a.images[0], 0, lang)} label={a?.altName} />
              </div>
            </div>
            {/* Tilted photo, bottom-right */}
            <div className="absolute -right-2 bottom-0 w-[44%] rotate-[5deg] overflow-hidden rounded-2xl border-[6px] border-white shadow-xl transition-transform duration-500 hover:rotate-0 sm:-right-6">
              <div className="aspect-[4/3]">
                <PhotoOrPlaceholder src={c?.images[0]} alt={c && programAlt(c, c.images[0], 0, lang)} label={c?.altName} />
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-2 right-2 flex h-28 w-28 rotate-12 flex-col items-center justify-center rounded-full bg-ember-500 text-center text-white shadow-xl shadow-ember-500/40 sm:right-0">
              <CertificateIcon className="h-6 w-6" />
              <span className="mt-1 font-display text-lg leading-none">TAT</span>
              <span className="text-[10px] font-semibold uppercase tracking-widest">{t.licensed}</span>
            </div>
            <div className="absolute bottom-16 left-0 rounded-2xl bg-jungle-900 px-5 py-4 text-white shadow-xl sm:-left-4">
              <p className="font-display text-4xl leading-none text-ember-400">{site.experienceYears}+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70">{t.yearsGuiding}</p>
            </div>
          </div>

          <div>
            <span className="inline-block rounded-full bg-ember-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              {t.badge}
            </span>
            <h2 className="mt-5 font-display uppercase text-5xl sm:text-6xl leading-[0.95]">
              {t.title1}
              <span className="block text-ember-600">{t.title2}</span>
            </h2>
            <p className="mt-7 text-lg text-gray-700 leading-relaxed">
              {t.p1(site.company, site.experienceYears)}
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t.p2}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-jungle-900 text-ember-400">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-jungle-900">{perk}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={href("/programs")}
                className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-ember-500/30 transition-all hover:-translate-y-0.5 hover:bg-ember-600"
              >
                {getDict(lang).common.exploreProgramsBtn} <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href={href("/contact-us")}
                className="inline-flex items-center rounded-full border-2 border-jungle-900 px-7 py-3.5 font-semibold text-jungle-900 transition-colors hover:bg-jungle-900 hover:text-white"
              >
                {t.talk}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-24 grid grid-cols-2 overflow-hidden rounded-[2rem] bg-jungle-900 text-white shadow-2xl shadow-jungle-950/20 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative px-6 py-10 text-center ${i % 2 ? "border-l border-white/10" : ""} ${
                i > 1 ? "border-t border-white/10 lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="font-display text-5xl lg:text-6xl text-ember-400">{s.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/70">{s.label}</p>
            </div>
          ))}
        </div>

        {/* GetYourGuide banner */}
        {gyg.length > 0 && (
          <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-ember-500 via-ember-600 to-ember-700 p-8 text-white shadow-2xl shadow-ember-600/30 md:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-jungle-950/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-white/80">{t.alsoOn}</p>
                <h3 className="mt-2 font-display uppercase text-4xl sm:text-5xl leading-none">GetYourGuide</h3>
                <p className="mt-5 max-w-md text-white/85">
                  {t.gygText}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <StarIcon className="h-4 w-4" /> {t.review}
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {gyg.map((p) => (
                  <li key={p.slug}>
                    <a
                      href={p.gygUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-3xl bg-white text-jungle-950 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <PhotoOrPlaceholder
                          src={p.images[0]}
                          alt={programAlt(p, p.images[0], 0, lang)}
                          label={p.altName}
                          className="transition-transform duration-700 group-hover:scale-110"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-jungle-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                          {p.code}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-3 p-5">
                        <div>
                          <p className="font-semibold leading-snug">{p.name}</p>
                          <p className="mt-0.5 text-sm text-gray-500">{p.altName}</p>
                        </div>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember-500 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-45deg]">
                          <ArrowRightIcon className="h-4 w-4" />
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
