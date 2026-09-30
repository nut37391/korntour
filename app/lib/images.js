// Reads image folders under /public at build time (and on every request in `next dev`),
// so dropping a photo into a folder is enough to show it on the site.
import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i;
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
const isCover = (file) => (/^cover/i.test(file) ? 1 : 0);

export function listImages(publicSubdir) {
  const dir = path.join(process.cwd(), "public", publicSubdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort(collator.compare)
    // A file named "cover.*" (e.g. cover.jpg) always comes first and is used as the cover photo.
    .sort((a, b) => isCover(b) - isCover(a))
    .map((file) => `/${publicSubdir}/${encodeURIComponent(file)}`);
}

export const getProgramImages = (folder) => listImages(`programs/${folder}`);

export const getHeroImage = (programs) =>
  listImages("programs/hero")[0] ??
  programs.map((p) => getProgramImages(p.folder)[0]).find(Boolean) ??
  null;

export const getQrImage = () => listImages("qrcode")[0] ?? null;
