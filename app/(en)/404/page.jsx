import Link from "next/link";
import { JungleBackdrop } from "@/app/component/Jungle";

// With two root layouts (English and /th) Next has no shared styled not-found page, so this
// static /404 route builds out/404.html — the page Firebase Hosting serves (with a 404 status)
// for unknown URLs. A plain route, not a catch-all, so `next dev` still 404s unknown URLs.

export const metadata = {
  title: "Page not found · ไม่พบหน้านี้",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-jungle-950 text-white min-h-[70vh] flex items-center">
      <JungleBackdrop className="opacity-70" />
      <div className="relative max-w-2xl mx-auto px-5 py-20 text-center">
        <p className="font-display text-8xl text-ember-500">404</p>
        <h1 className="mt-6 text-3xl font-semibold">Page not found</h1>
        <p lang="th" className="mt-2 text-xl text-white/80">ไม่พบหน้าที่คุณต้องการ</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-ember-500 px-6 py-3 font-semibold hover:bg-ember-600">
            Back to home
          </Link>
          <a href="/th" lang="th" className="rounded-full border border-white/30 px-6 py-3 font-semibold hover:border-ember-500">
            กลับหน้าแรก
          </a>
        </div>
      </div>
    </section>
  );
}
