import { site } from "../data/site";

// Office location. Uses Google's keyless embed, so no API key or billing is needed.
const OFFICE = { lat: 18.7795919, lng: 98.9993213 };
const EMBED_URL = `https://maps.google.com/maps?q=${OFFICE.lat},${OFFICE.lng}&z=16&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE.lat},${OFFICE.lng}`;

// `dark` recolors the embed with a CSS filter (the keyless embed has no style options).
const MapComponent = ({ dark = false, directionsLabel = "Get directions" }) => (
  <div className="relative h-full min-h-[400px] w-full">
    <iframe
      src={EMBED_URL}
      title={`${site.company} office on Google Maps`}
      className="absolute inset-0 h-full w-full border-0"
      style={dark ? { filter: "invert(92%) hue-rotate(180deg) saturate(0.6) brightness(0.9)" } : undefined}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
    <a
      href={DIRECTIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 left-4 rounded-full bg-ember-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-ember-600"
    >
      {directionsLabel}
    </a>
  </div>
);

export { MapComponent };
