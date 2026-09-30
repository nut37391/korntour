/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { programs } from "./data/programs";
import { site } from "./data/site";
import { getHeroImage, getProgramImages, getQrImage } from "./lib/images";
import LunchSection from "./component/LunchSection";
import AboutSection from "./component/AboutSection";
import { AccentRule, JungleBackdrop, PhotoOrPlaceholder, QrCard } from "./component/Jungle";
import { ArrowRightIcon, PhoneIcon, LineIcon } from "./component/Icons";

export default function Home() {
  const hero = getHeroImage(programs);
  const qr = getQrImage();
  const cards = programs.map((p) => ({ ...p, images: getProgramImages(p.folder) }));

  // Up to four photos for the "Explore the wild" strip, taken round-robin from each program.
  const strip = [];
  for (let i = 0; strip.length < 4 && i < 20; i++) {
    const img = cards[i % cards.length].images[Math.floor(i / cards.length)];
    if (img) strip.push(img);
  }
  while (strip.length < 4) strip.push(null);

  return (
    <div className="bg-jungle-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[720px] lg:min-h-[880px] overflow-hidden">
        {hero ? (
          <img src={hero} alt={site.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <JungleBackdrop />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/60 via-jungle-950/30 to-jungle-950" />

        <div className="relative max-w-[1280px] mx-auto px-5 lg:px-10 pt-40 lg:pt-48 pb-16">
          <h1 className="font-display uppercase leading-[0.9] tracking-tight">
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-ember-500">Samoeng</span>
            <span className="block text-5xl sm:text-7xl lg:text-[8.5rem] text-white">Jungle Tubing</span>
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.3fr_auto] md:items-start">
            <p className="max-w-[240px] text-sm text-white/80 leading-relaxed">
              Samoeng is a quiet mountain valley west of Chiang Mai — clear rivers, limestone caves and
              green jungle only an hour from the city.
            </p>
            <div className="max-w-sm">
              <p className="text-sm text-white/80 leading-relaxed">
                Three real adventures in one wild place. Explore caves, float the river and meet gentle
                elephants with our local guides.
              </p>
              <Link
                href="/programs"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-ember-600 transition-colors"
              >
                Start Exploring <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <ul className="flex md:flex-col gap-2 md:items-end flex-wrap">
              {programs.map((p, i) => (
                <li key={p.slug}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className={`inline-block rounded-full px-4 py-1 text-sm font-semibold transition-colors ${
                      i === 0 ? "bg-ember-500 text-white" : "text-white hover:text-ember-400"
                    }`}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact-us" className="inline-block px-4 py-1 text-sm font-semibold text-white hover:text-ember-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="max-w-[1280px] mx-auto px-5 lg:px-10 pb-24">
        <AccentRule pill="Our Programs" href="/programs" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((p) => (
            <Link key={p.slug} href={`/programs/${p.slug}`} className="group block">
              <div className="relative">
                <span className="absolute -top-6 left-3 z-10 font-display text-5xl text-ember-500 drop-shadow-lg">
                  {p.number}
                </span>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <PhotoOrPlaceholder
                    src={p.images[0]}
                    alt={p.name}
                    label={p.nameTh}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">
                  {p.name} <span className="text-white/50 font-normal whitespace-nowrap">· {p.nameTh}</span>
                </h3>
                <span className="shrink-0 text-sm text-ember-400">from {p.price.toLocaleString()} THB</span>
              </div>
              <p className="mt-1 text-sm text-white/60">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <AboutSection programs={cards} />

      <LunchSection images={getProgramImages("lunch")} />

      {/* Why Samoeng / Explore the wild */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {strip[0] ? (
            <img src={strip[0]} alt="" className="w-full h-full object-cover opacity-40" />
          ) : (
            <JungleBackdrop className="opacity-70" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-jungle-950 via-jungle-950/70 to-jungle-950/90" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-5 lg:px-10 py-24 grid gap-12 lg:grid-cols-2 lg:items-end">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold text-ember-500">Why Samoeng?</h2>
            <p className="mt-5 text-sm text-white/80 leading-relaxed">
              Samoeng is one of the greenest corners of Chiang Mai — a loop of forested mountains, strawberry
              farms and cool rivers that most visitors never see.
            </p>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Explore the 450-million-year-old Mae Sap Cave, float down the crystal-clear Samoeng River
              through small jungle rapids, and spend time with elephants in the forest.
            </p>
            <Link
              href="/programs"
              className="mt-7 inline-flex rounded-full bg-ember-500 px-6 py-2.5 text-sm font-semibold hover:bg-ember-600 transition-colors"
            >
              Explore Programs
            </Link>
          </div>

          <div>
            <h2 className="font-display uppercase leading-[0.9] text-right">
              <span className="block text-5xl sm:text-7xl">Explore</span>
              <span className="block text-5xl sm:text-7xl text-ember-500">The Wild</span>
            </h2>
            <div className="relative mt-10 grid grid-cols-4 h-56 overflow-hidden rounded-2xl">
              {strip.map((src, i) => (
                <PhotoOrPlaceholder key={i} src={src} alt={`Samoeng adventure ${i + 1}`} />
              ))}
              <Link
                href="/programs"
                className="absolute right-4 bottom-4 rounded-full bg-ember-500 px-6 py-2.5 text-sm font-semibold hover:bg-ember-600 transition-colors"
              >
                Show More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact band */}
      <section className="bg-ember-500 text-jungle-950">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="font-display uppercase text-4xl sm:text-5xl leading-none">Ready for the jungle?</h2>
            <p className="mt-4 font-medium">Call, message us on LINE, or book online in a few minutes.</p>
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-jungle-950 px-6 py-3 font-semibold text-white hover:bg-jungle-800 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" /> {site.phoneDisplay}
              </a>
              <a
                href={site.social.line}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-jungle-950 px-6 py-3 font-semibold hover:bg-jungle-950 hover:text-white transition-colors"
              >
                <LineIcon className="w-5 h-5" /> Chat on LINE
              </a>
            </div>
          </div>
          <QrCard src={qr} />
        </div>
      </section>
    </div>
  );
}
