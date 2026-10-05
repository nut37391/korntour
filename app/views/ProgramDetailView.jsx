import { notFound } from "next/navigation";
import { programs, getProgram, includesLunch, localizeProgram } from "@/app/data/programs";
import { site } from "@/app/data/site";
import { programAlt } from "@/app/data/imageAlts";
import { getDict } from "@/app/i18n/dict";
import { localePath, pageMeta } from "@/app/i18n";
import { getProgramImages, getQrImage } from "@/app/lib/images";
import { PageHero } from "@/app/component/Jungle";
import { CheckIcon } from "@/app/component/Icons";
import { Booking, ImageGalleryService } from "@/app/component";
import LunchSection from "@/app/component/LunchSection";
import StickyBookBar from "@/app/component/StickyBookBar";

export function programStaticParams() {
  return programs.map(({ slug }) => ({ slug }));
}

export function programMetadata(lang, slug) {
  const base = getProgram(slug);
  if (!base) return { title: "Program Not Found", robots: { index: false } };
  const program = localizeProgram(base, lang);
  const t = getDict(lang).meta;
  const image = getProgramImages(program.folder)[0] ?? site.ogImage;
  return pageMeta({
    lang,
    path: `/programs/${program.slug}`,
    title: t.programTitle(program.name),
    description: t.programDescription(program.tagline, program.price.toLocaleString()),
    image,
    imageAlt: program.name,
  });
}

function programJsonLd(program, images, lang) {
  const t = getDict(lang).program;
  const url = site.url + localePath(lang, `/programs/${program.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `${url}#trip`,
        name: program.name,
        description: program.description.join(" "),
        url,
        inLanguage: lang === "th" ? "th-TH" : "en-US",
        image: images.slice(0, 5).map((src) => site.url + src),
        touristType: ["Adventure", "Nature"],
        itinerary: {
          "@type": "ItemList",
          itemListElement: program.itinerary.map((step, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: step.time ? `${step.time} ${step.title}` : step.title,
            ...(step.detail && { description: step.detail }),
          })),
        },
        provider: { "@id": `${site.url}/#organization` },
        offers: {
          "@type": "Offer",
          price: program.price,
          priceCurrency: "THB",
          availability: "https://schema.org/InStock",
          url,
          seller: { "@id": `${site.url}/#organization` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: site.url + localePath(lang, "/").replace(/^\/$/, "") },
          { "@type": "ListItem", position: 2, name: t.breadcrumbPrograms, item: site.url + localePath(lang, "/programs") },
          { "@type": "ListItem", position: 3, name: program.name, item: url },
        ],
      },
    ],
  };
}

const Card = ({ title, children }) => (
  <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm">
    <h3 className="text-sm font-semibold uppercase tracking-widest text-ember-600">{title}</h3>
    <div className="mt-4">{children}</div>
  </div>
);

export default function ProgramDetailView({ lang, slug }) {
  const base = getProgram(slug);
  if (!base) notFound();
  const program = localizeProgram(base, lang);
  const t = getDict(lang);

  const images = getProgramImages(program.folder);
  const qr = getQrImage();

  return (
    <div className="bg-sand">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programJsonLd(program, images, lang)) }}
      />
      <PageHero eyebrow={`${program.code} · ${program.altName}`} title={program.name} image={images[0]} imageAlt={programAlt(program, images[0], 0, lang)}>
        {program.tagline}
      </PageHero>

      <section className="max-w-[1280px] mx-auto px-5 lg:px-10 -mt-10 relative">
        <div className="flex flex-col gap-6 rounded-3xl bg-jungle-900 p-6 text-white shadow-xl lg:flex-row lg:items-center">
          <div className="grid flex-1 gap-4 grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">{t.common.price}</p>
              <p className="mt-1 text-2xl font-semibold">
                {program.price.toLocaleString()} <span className="text-base text-ember-400">{t.common.perPerson}</span>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">{t.common.pickup}</p>
              <p className="mt-1 text-xl lg:text-2xl font-semibold">{program.schedule.pickup}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">{t.common.return}</p>
              <p className="mt-1 text-xl lg:text-2xl font-semibold">{program.schedule.return}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">{t.common.tourType}</p>
              <p className="mt-1 text-lg font-semibold">{program.type}</p>
              <p className="text-sm text-ember-400">{program.duration}</p>
            </div>
          </div>
          <a
            href="#book"
            className="shrink-0 rounded-full bg-ember-500 px-8 py-3.5 text-center font-semibold shadow-lg shadow-ember-500/30 transition-all hover:-translate-y-0.5 hover:bg-ember-600"
          >
            {t.program.bookNow}
          </a>
        </div>
        {program.gygUrl && (
          <p className="mt-4 text-right text-sm text-gray-600">
            {t.program.preferGyg}{" "}
            <a
              href={program.gygUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ember-600 underline-offset-4 hover:underline"
            >
              {t.program.bookGyg}
            </a>
          </p>
        )}
      </section>

      <section className="max-w-[1280px] mx-auto px-5 lg:px-10 py-16 grid gap-6 lg:grid-cols-2 items-start">
        <div className="lg:col-span-2">
          <Card title={t.program.about}>
            <div className="space-y-4">
              {program.description.map((para) => (
                <p key={para} className="text-gray-700 leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
          </Card>
        </div>
        <div className="grid gap-6 content-start">
          <Card title={t.program.itinerary}>
            <ol className="relative border-l-2 border-ember-500/30 ml-2 space-y-6">
              {program.itinerary.map((step) => (
                <li key={step.title} className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-ember-500" />
                  {step.time && <p className="text-xs font-semibold uppercase tracking-widest text-ember-600">{step.time}</p>}
                  <p className="font-semibold text-jungle-900">{step.title}</p>
                  {step.detail && <p className="text-sm text-gray-600 mt-0.5">{step.detail}</p>}
                </li>
              ))}
            </ol>
          </Card>
          <Card title={t.program.whatToBring}>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              {program.whatToBring.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-ember-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="grid gap-6 content-start">
          <Card title={t.program.highlights}>
            <ol className="space-y-3">
              {program.highlights.map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ember-500 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          </Card>
          <Card title={t.program.included}>
            <div className="flex flex-wrap gap-2">
              {program.included.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full bg-jungle-50 px-3 py-1.5 text-sm font-medium text-jungle-800"
                >
                  <CheckIcon className="w-4 h-4" /> {item}
                </span>
              ))}
            </div>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card title={t.program.important}>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-semibold text-jungle-900">{t.program.notSuitable}</p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {program.notSuitable.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-jungle-900">{t.program.cancellation}</p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {program.cancellation.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckIcon className="w-4 h-4 text-jungle-600 shrink-0 mt-1" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {images.length > 0 && <ImageGalleryService lang={lang} imageGallery={images.map((src, i) => ({ src, alt: programAlt(program, src, i, lang) }))} />}

      {includesLunch(program) && <LunchSection images={getProgramImages("lunch")} dark={false} lang={lang} />}

      <Booking tour={program.nameEn} tourLabel={program.name} price={program.price} qr={qr} lang={lang} />

      <StickyBookBar price={program.price} unit={t.common.perPerson} label={t.program.bookNow} />
    </div>
  );
}
