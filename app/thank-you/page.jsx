import Link from "next/link";
import { site } from "../data/site";
import { JungleBackdrop } from "../component/Jungle";
import { CheckIcon, LineIcon, PhoneIcon } from "../component/Icons";

export const metadata = {
  title: "Thank You for Your Booking",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <section className="relative overflow-hidden bg-jungle-950 text-white min-h-[75vh] flex items-center">
      <JungleBackdrop className="opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/70 via-jungle-950/50 to-jungle-950" />

      <div className="relative max-w-2xl mx-auto px-5 py-20 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ember-500 shadow-lg shadow-ember-500/40">
          <CheckIcon className="w-10 h-10 text-white" />
        </div>
        <h1 className="mt-8 font-display uppercase text-4xl sm:text-6xl leading-none">
          Thank you for <span className="text-ember-500">booking!</span>
        </h1>
        <p className="mt-6 text-lg text-white/80">
          Your payment was received. We&apos;ll send a confirmation email with your booking details
          shortly — please check your inbox and spam folder.
        </p>
        <p className="mt-2 text-sm text-white/60">
          Our team will contact you before the trip to confirm your hotel pickup time.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={site.social.line}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-6 py-3 font-semibold hover:brightness-110"
          >
            <LineIcon className="w-5 h-5" /> Chat on LINE
          </a>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold hover:border-ember-500 hover:text-ember-400"
          >
            <PhoneIcon className="w-5 h-5" /> {site.phoneDisplay}
          </a>
        </div>

        <Link href="/" className="mt-8 inline-block text-sm font-semibold text-ember-400 hover:text-ember-300">
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
