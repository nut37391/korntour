import { notFound } from "next/navigation";
import { programs, getProgram, includesLunch } from "@/app/data/programs";
import { site } from "@/app/data/site";
import { getProgramImages, getQrImage } from "@/app/lib/images";
import { PageHero } from "@/app/component/Jungle";
import { CheckIcon } from "@/app/component/Icons";
import { Booking, ImageGalleryService } from "@/app/component";
import LunchSection from "@/app/component/LunchSection";

export function generateStaticParams() {
  return programs.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const program = getProgram(params.slug);
  if (!program) return { title: "Program Not Found" };
  const url = `${site.url}/programs/${program.slug}`;
  return {
    title: program.name,
    description: `${program.tagline} From ${program.price} THB per person, hotel pickup and guide included.`,
    alternates: { canonical: url },
    openGraph: { title: `${program.name} | ${site.name}`, description: program.tagline, url, type: "website" },
  };
}

const Card = ({ title, children }) => (
  <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm">
    <h3 className="text-sm font-semibold uppercase tracking-widest text-ember-600">{title}</h3>
    <div className="mt-4">{children}</div>
  </div>
);

export default function ProgramDetail({ params }) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const images = getProgramImages(program.folder);
  const qr = getQrImage();

  return (
    <div className="bg-sand">
      <PageHero eyebrow={`${program.code} · ${program.nameTh}`} title={program.name} image={images[0]}>
        {program.tagline}
      </PageHero>

      <section className="max-w-[1280px] mx-auto px-5 lg:px-10 -mt-10 relative">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 rounded-3xl bg-jungle-900 p-6 text-white shadow-xl">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Price</p>
            <p className="mt-1 text-2xl font-semibold">
              {program.price.toLocaleString()} <span className="text-base text-ember-400">THB / person</span>
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Pickup</p>
            <p className="mt-1 text-xl lg:text-2xl font-semibold">{program.schedule.pickup}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Return</p>
            <p className="mt-1 text-xl lg:text-2xl font-semibold">{program.schedule.return}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Tour type</p>
            <p className="mt-1 text-lg font-semibold">{program.type}</p>
            <p className="text-sm text-ember-400">{program.duration}</p>
          </div>
        </div>
        {program.gygUrl && (
          <p className="mt-4 text-right text-sm text-gray-600">
            Prefer GetYourGuide?{" "}
            <a
              href={program.gygUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ember-600 underline-offset-4 hover:underline"
            >
              Book this trip on GetYourGuide →
            </a>
          </p>
        )}
      </section>

      <section className="max-w-[1280px] mx-auto px-5 lg:px-10 py-16 grid gap-6 lg:grid-cols-2 items-start">
        <div className="lg:col-span-2">
          <Card title="About this trip">
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
          <Card title="Itinerary">
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
          <Card title="What to bring">
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
          <Card title="Highlights">
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
          <Card title="What's included">
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
          <Card title="Important information">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-semibold text-jungle-900">Not suitable for</p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  {program.notSuitable.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-ember-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-jungle-900">Cancellation policy</p>
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

      {images.length > 0 && <ImageGalleryService imageGallery={images.map((src) => ({ src }))} />}

      {includesLunch(program) && <LunchSection images={getProgramImages("lunch")} dark={false} />}

      <Booking tour={program.name} price={program.price} qr={qr} />
    </div>
  );
}
