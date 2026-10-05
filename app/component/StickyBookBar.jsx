"use client";
import { useEffect, useState } from "react";

// Mobile-only bar with the price and a "Book Now" jump to #book.
// Shows once the visitor scrolls past the hero, and hides when the booking section reaches the screen.
const StickyBookBar = ({ price, unit, label }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const book = document.getElementById("book");
    const update = () => {
      const bookVisible = book && book.getBoundingClientRect().top < window.innerHeight;
      setShow(window.scrollY > 400 && !bookVisible);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-jungle-950/95 px-5 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-white">
          <span className="font-display text-2xl text-ember-400">{price.toLocaleString()}</span>{" "}
          <span className="text-sm text-white/60">{unit}</span>
        </p>
        <a
          href="#book"
          tabIndex={show ? 0 : -1}
          className="rounded-full bg-ember-500 px-6 py-3 font-semibold text-white shadow-lg shadow-ember-500/30 hover:bg-ember-600 transition-colors"
        >
          {label}
        </a>
      </div>
    </div>
  );
};

export default StickyBookBar;
