/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Modal from "react-modal";

const AUTOPLAY_MS = 5000;
const SWIPE_PX = 40;

const Arrow = ({ dir, onClick, className = "" }) => (
  <button
    onClick={onClick}
    aria-label={dir === "left" ? "Previous image" : "Next image"}
    className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-ember-500 hover:bg-ember-500 ${className}`}
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  </button>
);

// Coverflow-style carousel with autoplay, thumbnails, swipe, keyboard and a fullscreen lightbox.
const ImageGalleryService = ({ imageGallery }) => {
  const images = imageGallery.map((img) => img.src);
  const count = images.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const pointerX = useRef(null);
  const swiped = useRef(false);
  const thumbsRef = useRef(null);

  const go = useCallback((i) => setActive(((i % count) + count) % count), [count]);
  const next = useCallback(() => go(active + 1), [go, active]);
  const prev = useCallback(() => go(active - 1), [go, active]);

  // Autoplay (restarts whenever the slide changes)
  useEffect(() => {
    if (paused || lightbox || count < 2) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, paused, lightbox, next, count]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Keep the active thumbnail in view without scrolling the page
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[active];
    if (!strip || !thumb) return;
    strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  if (!count) return null;

  // Shortest circular distance from the active slide, e.g. -2..2
  const offsetOf = (i) => {
    let d = i - active;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  const onPointerDown = (e) => (pointerX.current = e.clientX);
  const onPointerUp = (e) => {
    if (pointerX.current === null) return;
    const dx = e.clientX - pointerX.current;
    pointerX.current = null;
    swiped.current = Math.abs(dx) > SWIPE_PX;
    if (dx > SWIPE_PX) prev();
    else if (dx < -SWIPE_PX) next();
  };

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-jungle-950 py-20 md:py-24">
      {/* Blurred backdrop of the current photo */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-110 object-cover blur-3xl transition-opacity duration-1000 ${
            i === active ? "opacity-40" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-jungle-950 via-jungle-950/60 to-jungle-950" />

      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-ember-400 text-sm font-semibold uppercase tracking-widest">Explore The Trip</p>
            <h2 className="mt-2 font-display uppercase text-5xl md:text-6xl text-white">Gallery</h2>
          </div>
          <div className="flex items-center gap-5">
            <p className="font-display text-white">
              <span className="text-4xl text-ember-500">{pad(active + 1)}</span>
              <span className="text-lg text-white/40"> / {pad(count)}</span>
            </p>
            <div className="hidden md:flex gap-3">
              <Arrow dir="left" onClick={prev} />
              <Arrow dir="right" onClick={next} />
            </div>
          </div>
        </div>

        {/* Coverflow stage */}
        <div
          className="relative mt-12 h-[260px] sm:h-[380px] lg:h-[520px] select-none touch-pan-y"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          style={{ perspective: "1600px" }}
        >
          {images.map((src, i) => {
            const d = offsetOf(i);
            const abs = Math.abs(d);
            const hidden = abs > 2;
            return (
              <button
                key={src}
                onClick={() => {
                  if (swiped.current) return (swiped.current = false);
                  d === 0 ? setLightbox(true) : go(i);
                }}
                aria-label={d === 0 ? "Open fullscreen" : `Show image ${i + 1}`}
                className="absolute left-1/2 top-0 h-full w-[78%] sm:w-[62%] lg:w-[58%] overflow-hidden rounded-3xl shadow-2xl shadow-black/50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(calc(-50% + ${d * 58}%)) scale(${1 - abs * 0.16}) rotateY(${d * -8}deg)`,
                  zIndex: 10 - abs,
                  opacity: hidden ? 0 : 1 - abs * 0.25,
                  pointerEvents: hidden ? "none" : "auto",
                  filter: d === 0 ? "none" : "brightness(0.55) saturate(0.8)",
                }}
              >
                <img src={src} alt={`Gallery image ${i + 1}`} draggable={false} className="h-full w-full object-cover" />
                {d === 0 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                      </svg>
                      View fullscreen
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Autoplay progress */}
        <div className="mx-auto mt-8 h-1 w-full max-w-md overflow-hidden rounded-full bg-white/10">
          <div
            key={`${active}-${paused}`}
            className="h-full origin-left rounded-full bg-ember-500"
            style={{
              animation: paused || count < 2 ? "none" : `gallery-progress ${AUTOPLAY_MS}ms linear forwards`,
              transform: paused ? "scaleX(0)" : undefined,
            }}
          />
        </div>

        {/* Thumbnails */}
        <div ref={thumbsRef} className="mt-6 flex gap-3 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none]">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => go(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative h-16 w-24 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-xl transition-all duration-300 ${
                i === active ? "ring-2 ring-ember-500 ring-offset-2 ring-offset-jungle-950" : "opacity-50 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <Arrow dir="left" onClick={prev} />
          <Arrow dir="right" onClick={next} />
        </div>
      </div>

      {/* Lightbox */}
      <Modal
        isOpen={lightbox}
        onRequestClose={() => setLightbox(false)}
        contentLabel="Image preview"
        className="fixed inset-0 z-50 flex items-center justify-center outline-none"
        overlayClassName="fixed inset-0 z-50 bg-black/95"
        ariaHideApp={false}
      >
        <div className="relative flex h-full w-full items-center justify-center p-4">
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-ember-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Arrow dir="left" onClick={prev} className="absolute left-4 z-10" />
          <img src={images[active]} alt="Preview" className="max-h-[85vh] max-w-full rounded-xl object-contain" />
          <Arrow dir="right" onClick={next} className="absolute right-4 z-10" />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
            {active + 1} / {count}
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default ImageGalleryService;
