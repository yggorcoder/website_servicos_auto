import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const logoPath = path.join(publicDir, "logo.png");
const outPath = path.join(publicDir, "og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;
const BG = { r: 18, g: 18, b: 18, alpha: 1 }; // #121212 (tema do site)

const logo = await sharp(logoPath)
  .resize({
    width: Math.round(WIDTH * 0.68),
    height: Math.round(HEIGHT * 0.68),
    fit: "inside",
    withoutEnlargement: true,
  })
  .toBuffer();

await sharp({
  create: { width: WIDTH, height: HEIGHT, channels: 4, background: BG },
})
  .composite([{ input: logo, gravity: "center" }])
  .png()
  .toFile(outPath);

console.log(`OG image generated: ${outPath} (${WIDTH}x${HEIGHT})`);
