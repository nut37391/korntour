// คำอธิบายรูป (alt text) สำหรับ Google Images และโปรแกรมอ่านหน้าจอ — key คือ path ใต้ public/
// แต่ละรูปมี [ภาษาอังกฤษ, ภาษาไทย]
// เพิ่มรูปใหม่แล้วอยากได้คำอธิบายเฉพาะ ให้เพิ่มบรรทัดที่นี่ ถ้าไม่เพิ่ม จะใช้คำอธิบายทั่วไปของโปรแกรมนั้นแทน

const ALTS = {
  "programs/hero/avtar-singh-sandhu-hDkKVIa1F7Y-unsplash.jpg": [
    "Tourist river tubing through jungle rapids in Samoeng, Chiang Mai",
    "นักท่องเที่ยวล่องห่วงผ่านแก่งน้ำกลางป่า สะเมิง เชียงใหม่",
  ],

  "programs/cave/cover.jpg": [
    "Visitors exploring the colourful limestone chamber of Mae Sap Cave, Samoeng, Chiang Mai",
    "นักท่องเที่ยวชมโถงหินปูนหลากสีในถ้ำแม่สาบ สะเมิง เชียงใหม่",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_1.jpg": [
    "Tour group in helmets at the entrance map of Mae Sap Cave, Samoeng",
    "กลุ่มทัวร์สวมหมวกนิรภัยหน้าป้ายแผนที่ทางเข้าถ้ำแม่สาบ สะเมิง",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_2.jpg": [
    "Mae Sap Cave entrance sign with Thai flags, Chiang Mai, Thailand",
    "ป้ายทางเข้าถ้ำหลวงแม่สาบพร้อมธงชาติไทย เชียงใหม่",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_3.jpg": [
    "Forest walking path to Mae Sap Cave in the Samoeng jungle",
    "ทางเดินในป่าไปถ้ำแม่สาบ สะเมิง",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_4.jpg": [
    "Tourists taking photos on the stone stairs up to Mae Sap Cave",
    "นักท่องเที่ยวถ่ายรูปบนบันไดหินทางขึ้นถ้ำแม่สาบ",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_6.jpg": [
    "Guided group with headlamps among stalactites inside Mae Sap Cave",
    "กลุ่มทัวร์พร้อมไฟฉายคาดหัวท่ามกลางหินย้อยในถ้ำแม่สาบ",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_7.jpg": [
    "Swirling rainbow rock layers in the Rainbow, Emerald, Ubosot and Diamond chambers of Mae Sap Cave",
    "ลวดลายหินสีรุ้งในถ้ำแม่สาบ โถงสายรุ้ง มรกต อุโบสถ และเพชร",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_8.jpg": [
    "Children posing by multi-coloured limestone walls in Mae Sap Cave",
    "เด็ก ๆ ถ่ายรูปกับผนังหินปูนหลากสีในถ้ำแม่สาบ",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_9.jpg": [
    "Giant white stalactite formation above visitors in Mae Sap Cave",
    "หินย้อยสีขาวขนาดใหญ่เหนือนักท่องเที่ยวในถ้ำแม่สาบ",
  ],
  "programs/cave/LINE_ALBUM_cave_260930_10.jpg": [
    "Visitors looking up at swirling mineral patterns on the Mae Sap Cave ceiling",
    "นักท่องเที่ยวชมลวดลายแร่ธาตุบนเพดานถ้ำแม่สาบ",
  ],

  "programs/tubing/cover.jpg": [
    "Tourist holding a rubber tube on the bank of the Samoeng River before jungle tubing",
    "นักท่องเที่ยวถือห่วงยางริมแม่น้ำสะเมิงก่อนล่องห่วง",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_1.jpg": [
    "Flowing water of the Samoeng River tubing route",
    "สายน้ำในเส้นทางล่องห่วงแม่น้ำสะเมิง",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_2.jpg": [
    "Calm bend of the Samoeng River lined with jungle grass",
    "โค้งน้ำอันเงียบสงบของแม่น้ำสะเมิงที่มีหญ้าป่าขนาบสองฝั่ง",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_3.jpg": [
    "Rocky rapids on the Samoeng River surrounded by jungle hills",
    "แก่งหินในแม่น้ำสะเมิงท่ามกลางภูเขาป่าไม้",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_4.jpg": [
    "Small whitewater rapids between rocks on the Samoeng River",
    "แก่งน้ำเล็ก ๆ ระหว่างโขดหินในแม่น้ำสะเมิง",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_5.jpg": [
    "Samoeng River flowing past green riverbanks",
    "แม่น้ำสะเมิงไหลผ่านริมตลิ่งเขียวขจี",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_6.jpg": [
    "Happy tubing group riding in the back of a pickup truck in Samoeng",
    "กลุ่มนักท่องเที่ยวล่องห่วงนั่งท้ายรถกระบะในสะเมิง",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_7.jpg": [
    "Tourists in life jackets at the Samoeng Jungle Tubing meeting point",
    "นักท่องเที่ยวสวมเสื้อชูชีพที่จุดนัดพบ Samoeng Jungle Tubing",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_8.jpg": [
    "Guests relaxing at the Samoeng Jungle Tubing rest area",
    "ลูกค้าพักผ่อนที่จุดพักของ Samoeng Jungle Tubing",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_9.jpg": [
    "Samoeng River winding through rice fields and misty mountains",
    "แม่น้ำสะเมิงคดเคี้ยวผ่านทุ่งนาและภูเขาในสายหมอก",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_10.jpg": [
    "Samoeng Tubing wooden hut and sign, Chiang Mai",
    "บ้านไม้และป้าย Samoeng Tubing เชียงใหม่",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_11.jpg": [
    "Mountain valley view from the Samoeng Jungle Tubing base",
    "วิวหุบเขาจากฐาน Samoeng Jungle Tubing",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_13.jpg": [
    "Smiling tourist floating on a tube down the Samoeng River",
    "นักท่องเที่ยวยิ้มแย้มขณะล่องห่วงในแม่น้ำสะเมิง",
  ],
  "programs/tubing/LINE_ALBUM_tubing_260930_14.jpg": [
    "Tubers floating down the jungle-lined Samoeng River",
    "นักท่องเที่ยวล่องห่วงไปตามแม่น้ำสะเมิงกลางป่า",
  ],

  "programs/elephant/cover.jpg": [
    "Woman feeding a happy elephant at an ethical elephant sanctuary near Chiang Mai",
    "นักท่องเที่ยวให้อาหารช้างที่ปางช้างแบบเป็นมิตร ใกล้เชียงใหม่",
  ],
  "programs/elephant/LINE_ALBUM_elephant_260930_1.jpg": [
    "Elephants walking with their mahouts through the sanctuary meadow",
    "ช้างเดินกับควาญช้างในทุ่งหญ้าของปางช้าง",
  ],
  "programs/elephant/LINE_ALBUM_elephant_260930_2.jpg": [
    "Visitor feeding elephants over a wooden fence at the sanctuary",
    "นักท่องเที่ยวให้อาหารช้างข้ามรั้วไม้ที่ปางช้าง",
  ],
  "programs/elephant/LINE_ALBUM_elephant_260930_3.jpg": [
    "Elephants bathing and playing in the river at the sanctuary",
    "ช้างอาบน้ำและเล่นน้ำในแม่น้ำที่ปางช้าง",
  ],
  "programs/elephant/LINE_ALBUM_elephant_260930_4.jpg": [
    "Visitor in traditional Karen shirt posing with an elephant",
    "นักท่องเที่ยวสวมเสื้อกะเหรี่ยงถ่ายรูปกับช้าง",
  ],
  "programs/elephant/LINE_ALBUM_elephant_260930_5.jpg": [
    "Tourist sitting on a log feeding elephants bananas",
    "นักท่องเที่ยวนั่งบนขอนไม้ป้อนกล้วยให้ช้าง",
  ],
  "programs/elephant/LINE_ALBUM_elephant_260930_7.jpg": [
    "Three elephants walking along a jungle trail at the sanctuary",
    "ช้างสามตัวเดินตามทางในป่าของปางช้าง",
  ],
  "programs/elephant/LINE_ALBUM_elephant_260930_8.jpg": [
    "Young child smiling in front of elephants at the sanctuary",
    "เด็กน้อยยิ้มหน้าฝูงช้างที่ปางช้าง",
  ],
  "programs/elephant/LINE_ALBUM_elephant_260930_9.jpg": [
    "Couple in traditional Karen shirts walking with elephants",
    "คู่รักสวมเสื้อกะเหรี่ยงเดินกับช้าง",
  ],

  "programs/lunch/LINE_ALBUM_lunch_260930_1.jpg": [
    "Thai lunch buffet with pad thai, dragon fruit and rambutan",
    "อาหารกลางวันแบบไทย ผัดไทย แก้วมังกร และเงาะ",
  ],
  "programs/lunch/LINE_ALBUM_lunch_260930_2.jpg": [
    "Lunch table set with pad thai, fruit and bananas for tour guests",
    "โต๊ะอาหารกลางวันพร้อมผัดไทย ผลไม้ และกล้วยสำหรับลูกทัวร์",
  ],
  "programs/lunch/LINE_ALBUM_lunch_260930_3.jpg": [
    "Tray of pad thai served for lunch on the Samoeng tour",
    "ผัดไทยสำหรับมื้อกลางวันในทัวร์สะเมิง",
  ],
  "programs/lunch/LINE_ALBUM_lunch_260930_4.jpg": [
    "Fresh dragon fruit and rambutan served with lunch",
    "แก้วมังกรและเงาะสด เสิร์ฟพร้อมอาหารกลางวัน",
  ],
};

const DEFAULT_ALT = { en: "Samoeng Jungle Tubing, Chiang Mai", th: "Samoeng Jungle Tubing ล่องห่วงสะเมิง เชียงใหม่" };

const keyOf = (src) => decodeURIComponent(src ?? "").replace(/^\//, "");

/** Alt text for an image path from lib/images (e.g. "/programs/cave/cover.jpg"); `fallback` if not listed. */
export const altOf = (src, fallback, lang = "en") => {
  const entry = ALTS[keyOf(src)];
  if (entry) return entry[lang === "th" ? 1 : 0];
  return fallback ?? DEFAULT_ALT[lang] ?? DEFAULT_ALT.en;
};

/** Alt text for a program photo; falls back to "<program name> in Samoeng, Chiang Mai – photo N". */
export const programAlt = (program, src, i = 0, lang = "en") =>
  altOf(
    src,
    lang === "th" ? `${program.name} สะเมิง เชียงใหม่ – รูปที่ ${i + 1}` : `${program.name} in Samoeng, Chiang Mai – photo ${i + 1}`,
    lang
  );
