import { PhotoOrPlaceholder } from "./Jungle";

const MAX_TILES = 5;

// Bento layouts per photo count, so the grid is always filled with no gaps.
// Grid is 2 columns on mobile and 4 on desktop, with fixed row heights.
const LAYOUTS = {
  1: ["col-span-2 lg:col-span-4 row-span-2"],
  2: ["col-span-2 row-span-2", "col-span-2 row-span-2"],
  3: ["col-span-2 row-span-2", "col-span-2", "col-span-2"],
  4: ["col-span-2 row-span-2", "col-span-2", "", ""],
  5: ["col-span-2 row-span-2", "", "", "", ""],
};

// Food photos from public/programs/lunch — shown on the home page and on programs that include lunch.
const LunchSection = ({ images, dark = true }) => {
  const tiles = images.length ? images.slice(0, MAX_TILES) : [null, null, null];
  const layout = LAYOUTS[tiles.length];
  const extra = images.length - tiles.length;

  return (
    <section className={dark ? "bg-jungle-900 text-white" : "bg-sand text-jungle-950"}>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-ember-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              Lunch Included
            </span>
            <h2 className="mt-4 font-display uppercase text-4xl sm:text-5xl leading-none">
              Taste of <span className="text-ember-500">Samoeng</span>
            </h2>
          </div>
          <p className={`max-w-md text-sm leading-relaxed ${dark ? "text-white/70" : "text-gray-700"}`}>
            Refuel after the adventure with a fresh local Thai lunch, cooked by village families
            with ingredients from the Samoeng valley.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] lg:auto-rows-[210px] gap-3 sm:gap-4">
          {tiles.map((src, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl ${layout[i]}`}>
              <PhotoOrPlaceholder
                src={src}
                alt={`Lunch ${i + 1}`}
                label="Lunch"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {i === tiles.length - 1 && extra > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-jungle-950/60 backdrop-blur-[2px]">
                  <span className="font-display text-3xl text-white">+{extra}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LunchSection;
