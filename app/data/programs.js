// โปรแกรมทัวร์ทั้งหมดของเว็บ — แก้ชื่อ ราคา และรายละเอียดได้ที่ไฟล์นี้
// รูปภาพของแต่ละโปรแกรมให้วางไว้ที่ public/programs/<folder>/ แล้วจะแสดงบนเว็บเอง
// คำแปลภาษาไทย (หน้า /th) อยู่ที่ programs.th.js
import { programsTh } from "./programs.th";

const TUBING_STEP = {
  title: "Jungle Tubing",
  detail:
    "Float down the river through the jungle for approximately 1–1.5 hours, enjoying several small rapids along the way.",
};
const LUNCH_STEP = { title: "Lunch", detail: "Traditional Thai food." };
const RETURN_STEPS = [
  { time: "4:30 – 5:00 PM", title: "Leaving Samoeng" },
  { time: "5:30 – 6:00 PM", title: "Arriving at your hotel" },
];

const NOT_SUITABLE = [
  "People with back problems",
  "Non-swimmers",
  "People with mobility impairments",
  "Babies under 1 year",
];

const CANCELLATION = [
  "Cancel up to 24 hours in advance for a full refund.",
  "Always a full refund if the cancellation is due to force majeure.",
  "If the itinerary changes, you can accept the change, reschedule to another date, or receive a full refund.",
];

const WHAT_TO_BRING = ["Sunblock", "Swimming suit", "Insect spray", "Change of clothes"];

export const programs = [
  {
    slug: "cave",
    folder: "cave",
    code: "SM1",
    gygUrl: "https://www.getyourguide.com/mae-sap-cave-l265518/mae-sap-cave-river-tubing-chiangmai-t1484624/",
    number: "01",
    name: "Mae Sap Cave & Jungle Tubing",
    nameTh: "ถ้ำแม่สาบ + ล่องห่วง",
    tagline:
      "Explore the 450-million-year-old Mae Sap Cave, then float down the Samoeng River through small jungle rapids.",
    description: [
      "Mae Sap Cave is approximately 450 million years old, celebrated for its stunning stalactites, stalagmites and breathtaking cavern halls. Inside, natural patterns and vibrant hues created by mineral deposits adorn the rock walls.",
      "The system comprises four distinct chambers: Rainbow Cave, Ubosot Cave, Emerald Cave and Diamond Cave. A complete walking tour through the complex takes around 45 minutes. After a traditional Thai lunch, enjoy tubing through several small rapids along the Samoeng River.",
    ],
    price: 1800,
    duration: "Full day",
    type: "Join tour (non-private)",
    schedule: { pickup: "8:00 - 8:30 AM", return: "5:30 - 6:00 PM" },
    itinerary: [
      { time: "8:00 – 8:30 AM", title: "Hotel pickup" },
      {
        title: "Mae Sap Cave",
        detail:
          "Walk through the Rainbow, Ubosot, Emerald and Diamond chambers — about 45 minutes.",
      },
      LUNCH_STEP,
      TUBING_STEP,
      ...RETURN_STEPS,
    ],
    highlights: [
      "Experience the thrill of river tubing on the crystal-clear Samoeng River",
      "Explore the mysterious underground world of Mae Sap Cave",
      "Admire the cave's multi-coloured limestone layers, stalactites and stalagmites",
      "Four cave chambers: Rainbow, Ubosot, Emerald and Diamond",
    ],
    included: [
      "River tubing adventure",
      "Mae Sap Cave visit",
      "Round-trip hotel transfers",
      "Guide",
      "Lunch",
      "Drinking water",
      "Tubing equipment",
      "Ticket fees",
      "Insurance",
    ],
    whatToBring: WHAT_TO_BRING,
    notSuitable: NOT_SUITABLE,
    cancellation: CANCELLATION,
  },
  {
    slug: "jungle-tubing",
    folder: "tubing",
    code: "SM2",
    gygUrl:
      "https://www.getyourguide.com/chiang-mai-province-l142822/chiang-mai-samoeng-jungle-river-tubing-adventure-t1485644/",
    number: "02",
    name: "Samoeng River Tubing Adventure",
    nameTh: "ล่องห่วง",
    tagline:
      "A 1-hour, 2.5 km float down the peaceful Samoeng River with small, gentle rapids.",
    description: [
      "Get ready for an unforgettable 1-hour river tubing adventure along approximately 2.5 km of the beautiful Samoeng River, hidden away in the peaceful mountain countryside of Chiang Mai. Sit back, relax and let the gentle current carry you downstream, surrounded by lush green forests, rolling mountains, fresh air and the sounds of nature.",
      "Small and gentle rapids add just the right amount of excitement, making it fun for first-time tubers and adventure lovers alike. Unlike crowded tourist attractions, the route runs through a quiet, private natural setting so you can enjoy the river at a relaxed pace.",
      "Experienced safety staff guide and assist you from start to finish. Whether you're travelling with friends, family or a small group, Samoeng River Tubing is a wonderful way to connect with nature, cool off from the tropical heat and create unforgettable memories.",
    ],
    price: 1300,
    duration: "1-hour tubing",
    type: "Join tour (non-private)",
    schedule: { pickup: "8:00 - 8:30 AM", return: "5:30 - 6:00 PM" },
    itinerary: [
      { time: "8:00 – 8:30 AM", title: "Hotel pickup" },
      {
        title: "Samoeng River Tubing",
        detail: "About 1 hour and 2.5 km downstream with small, gentle rapids and experienced safety staff.",
      },
      LUNCH_STEP,
      ...RETURN_STEPS,
    ],
    highlights: [
      "Experience the thrill of tubing down the Samoeng River in Chiang Mai",
      "Enjoy a relaxing escape surrounded by lush forests and rolling mountains",
      "Feel the excitement of small and gentle rapids along the way",
      "Benefit from the guidance and assistance of experienced safety staff",
      "Take in the beautiful scenery from a completely different perspective",
    ],
    included: [
      "1-hour river tubing adventure",
      "Experienced safety staff",
      "Round-trip hotel transfers",
      "English-speaking guide",
      "Lunch",
      "Drinking water",
      "Tubing equipment & life jacket",
      "Insurance",
    ],
    whatToBring: WHAT_TO_BRING,
    notSuitable: NOT_SUITABLE,
    cancellation: CANCELLATION,
  },
  {
    slug: "elephant",
    folder: "elephant",
    code: "SM3",
    number: "03",
    name: "Elephant Sanctuary & Jungle Tubing",
    nameTh: "ช้าง + ล่องห่วง",
    tagline:
      "Care for elephants at the sanctuary in the morning, then head up to Samoeng for jungle river tubing.",
    description: [
      "A collaboration between Elephant Sanctuary and Samoeng Jungle Tubing. Start the day caring for elephants — learning about them, feeding them food and natural medicine, and observing their lifestyle.",
      "After a traditional Thai lunch, head up to Samoeng district for an adventure in beautiful nature: float down the river through the jungle and enjoy several small rapids along the way.",
    ],
    price: 2500,
    duration: "Full day",
    type: "Join tour (non-private)",
    schedule: { pickup: "8:00 - 8:30 AM", return: "5:30 - 6:00 PM" },
    itinerary: [
      { time: "8:00 – 8:30 AM", title: "Hotel pickup" },
      { title: "Learn & feed", detail: "Prepare food and natural medicine for the elephants." },
      { title: "Observe the elephants", detail: "Learn about the elephants' lifestyle at the sanctuary." },
      LUNCH_STEP,
      TUBING_STEP,
      ...RETURN_STEPS,
    ],
    highlights: [
      "Learn about elephants and feed them food and natural medicine",
      "Observe the elephants' lifestyle at the sanctuary",
      "Float down the Samoeng River through the jungle",
      "Enjoy several small rapids along the way",
    ],
    included: [
      "Elephant activity",
      "1-hour river tubing adventure",
      "Experienced safety staff",
      "Round-trip hotel transfers",
      "English-speaking guide",
      "Lunch",
      "Drinking water",
      "Tubing equipment & life jacket",
      "Insurance",
    ],
    whatToBring: WHAT_TO_BRING,
    notSuitable: NOT_SUITABLE,
    cancellation: CANCELLATION,
  },
];

export const getProgram = (slug) => programs.find((p) => p.slug === slug);

// Checks the English data, so it works for localized programs too.
export const includesLunch = (program) => getProgram(program.slug).included.some((item) => /lunch/i.test(item));

/**
 * The program in the given language (Thai text from programs.th.js).
 * `nameEn` is always the English name (sent to the booking backend); `altName` is the
 * name in the other language, shown as a small secondary label.
 */
export const localizeProgram = (program, lang) => ({
  ...program,
  ...(lang === "th" ? programsTh[program.slug] : {}),
  nameEn: program.name,
  altName: lang === "th" ? program.name : program.nameTh,
});

export const getPrograms = (lang) => programs.map((p) => localizeProgram(p, lang));
