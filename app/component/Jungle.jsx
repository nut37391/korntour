/* eslint-disable @next/next/no-img-element */
// Shared visual building blocks for the Samoeng Jungle Tubing theme.
import Link from "next/link";

// Layered mountain / forest silhouette used when a section has no photo yet.
export const JungleBackdrop = ({ className = "" }) => (
  <svg
    className={`absolute inset-0 w-full h-full ${className}`}
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="jb-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1b4a33" />
        <stop offset="0.55" stopColor="#0f2a1d" />
        <stop offset="1" stopColor="#0a1d14" />
      </linearGradient>
      <radialGradient id="jb-sun" cx="0.72" cy="0.3" r="0.35">
        <stop offset="0" stopColor="#ff8a3d" stopOpacity="0.55" />
        <stop offset="1" stopColor="#ff6a13" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="1440" height="900" fill="url(#jb-sky)" />
    <rect width="1440" height="900" fill="url(#jb-sun)" />
    <path d="M0 520 L180 380 L320 470 L520 300 L700 440 L880 330 L1060 450 L1240 340 L1440 460 V900 H0Z" fill="#143826" />
    <path d="M0 620 L160 520 L300 590 L470 480 L640 600 L820 500 L1000 610 L1180 520 L1440 600 V900 H0Z" fill="#10301f" />
    <path d="M0 720 Q180 650 360 700 T720 690 T1080 700 T1440 680 V900 H0Z" fill="#0a1d14" />
  </svg>
);

// Shows a photo, or a themed placeholder until one is added to the folder.
export const PhotoOrPlaceholder = ({ src, alt, className = "", label }) =>
  src ? (
    <img src={src} alt={alt} loading="lazy" className={`w-full h-full object-cover ${className}`} />
  ) : (
    <div className={`relative w-full h-full overflow-hidden bg-jungle-900 ${className}`}>
      <JungleBackdrop />
      {label && (
        <span className="absolute inset-x-0 bottom-4 text-center text-sm font-semibold text-jungle-100/70">
          {label}
        </span>
      )}
    </div>
  );

// Thin divider with an orange accent segment, optionally ending in a pill label.
export const AccentRule = ({ pill, href, light = true }) => (
  <div className="flex items-center gap-4">
    <div className={`relative flex-1 h-px ${light ? "bg-white/40" : "bg-jungle-900/20"}`}>
      <span className="absolute left-[15%] top-1/2 -translate-y-1/2 h-[3px] w-[18%] bg-ember-500 rounded-full" />
    </div>
    {pill &&
      (href ? (
        <Link
          href={href}
          className="shrink-0 rounded-full border-2 border-ember-500 px-6 py-2 text-sm font-semibold text-white hover:bg-ember-500 transition-colors"
        >
          {pill}
        </Link>
      ) : (
        <span className="shrink-0 rounded-full border-2 border-ember-500 px-6 py-2 text-sm font-semibold text-white">
          {pill}
        </span>
      ))}
  </div>
);

export const QrCard = ({ src, dark = false }) =>
  src ? (
    <div
      className={`inline-flex flex-col items-center gap-2 rounded-2xl p-4 ${
        dark ? "bg-white/10 backdrop-blur" : "bg-white shadow-lg"
      }`}
    >
      <img src={src} alt="QR code" className="w-36 h-36 object-contain rounded-lg bg-white p-1" />
      <span className={`text-xs font-medium ${dark ? "text-white/80" : "text-gray-600"}`}>
        Scan to contact us
      </span>
    </div>
  ) : null;

// Header band for inner pages (Navbar sits above it on a solid background).
export const PageHero = ({ eyebrow, title, accent, children, image }) => (
  <section className="relative overflow-hidden bg-jungle-950 text-white">
    {image ? (
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" />
    ) : (
      <JungleBackdrop />
    )}
    <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/80 via-jungle-950/40 to-jungle-950" />
    <div className="relative max-w-[1280px] mx-auto px-5 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
      {eyebrow && (
        <span className="inline-block rounded-full bg-ember-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-5 font-display uppercase leading-[0.9] text-5xl sm:text-6xl lg:text-7xl">
        {title}
        {accent && <span className="block text-ember-500">{accent}</span>}
      </h1>
      {children && <div className="mt-6 max-w-xl text-white/80">{children}</div>}
    </div>
  </section>
);
