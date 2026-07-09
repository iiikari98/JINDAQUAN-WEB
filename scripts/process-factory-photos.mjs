import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = "C:/Users/a/Pictures/领英素材库";
const outputDir = path.resolve("public/assets/factory-processed");

const photos = [
  ["微信图片_20260629133725_278_2.jpg", "factory-warehouse-raw-material-stock-a", "warehouse"],
  ["微信图片_20260629133729_279_2.jpg", "factory-warehouse-raw-material-stock-b", "warehouse"],
  ["微信图片_20260629133734_280_2.jpg", "factory-warehouse-raw-material-stock-c", "warehouse"],
  ["微信图片_20260629133743_281_2.jpg", "factory-production-line-extruder-a", "equipment"],
  ["微信图片_20260629133746_282_2.jpg", "factory-production-workshop-overview", "equipment"],
  ["微信图片_20260629133750_283_2.jpg", "factory-production-equipment-control-area", "equipment"],
  ["微信图片_20260629133758_284_2.jpg", "company-reception-logo-wall-wide", "brand"],
  ["微信图片_20260629133812_285_2.jpg", "company-product-display-wall", "brand"],
  ["微信图片_20260629133818_286_2.jpg", "company-about-us-display-wall", "brand"],
  ["微信图片_20260629133822_287_2.jpg", "company-certification-patent-wall", "brand"],
  ["微信图片_20260629133825_288_2.jpg", "company-reception-logo-wall-centered", "brand"],
  ["微信图片_20260629133829_289_2.jpg", "factory-production-line-extruder-b", "equipment"],
  ["微信图片_20260629133833_290_2.jpg", "factory-warehouse-packaged-materials-closeup", "warehouse"],
  ["微信图片_20260629133836_291_2.jpg", "factory-warehouse-packaged-materials-storage", "warehouse"],
  ["微信图片_20260629133840_292_2.jpg", "factory-warehouse-material-aisle", "warehouse"],
  ["微信图片_20260629133845_293_2.jpg", "factory-production-line-extruder-c", "equipment"],
  ["微信图片_20260629133848_294_2.jpg", "factory-safety-helmet-storage", "portrait"],
  ["微信图片_20260629133851_295_2.jpg", "factory-dust-collector-equipment", "portrait"],
  ["微信图片_20260629133855_296_2.jpg", "factory-maintenance-tool-wall", "equipment"],
  ["微信图片_20260629133858_297_2.jpg", "factory-building-exterior-courtyard", "portrait"],
];

const geometryCorrections = {
  "微信图片_20260629133725_278_2.jpg": { rotate: -0.35, crop: 0.012 },
  "微信图片_20260629133729_279_2.jpg": { rotate: -0.28, crop: 0.012 },
  "微信图片_20260629133734_280_2.jpg": { rotate: -0.28, crop: 0.012 },
  "微信图片_20260629133743_281_2.jpg": { rotate: 0.18, crop: 0.01 },
  "微信图片_20260629133746_282_2.jpg": { rotate: 0.45, crop: 0.014 },
  "微信图片_20260629133750_283_2.jpg": { rotate: 0.22, crop: 0.01 },
  "微信图片_20260629133758_284_2.jpg": { rotate: -0.42, crop: 0.014 },
  "微信图片_20260629133812_285_2.jpg": { rotate: 0.18, crop: 0.01 },
  "微信图片_20260629133818_286_2.jpg": { rotate: -0.22, crop: 0.012 },
  "微信图片_20260629133822_287_2.jpg": { rotate: 0.2, crop: 0.01 },
  "微信图片_20260629133825_288_2.jpg": { rotate: -0.5, crop: 0.016 },
  "微信图片_20260629133829_289_2.jpg": { rotate: 0.12, crop: 0.01 },
  "微信图片_20260629133833_290_2.jpg": { rotate: -0.18, crop: 0.01 },
  "微信图片_20260629133836_291_2.jpg": { rotate: -0.32, crop: 0.012 },
  "微信图片_20260629133840_292_2.jpg": { rotate: -0.28, crop: 0.012 },
  "微信图片_20260629133845_293_2.jpg": { rotate: 0.1, crop: 0.01 },
  "微信图片_20260629133848_294_2.jpg": { rotate: -0.38, crop: 0.014 },
  "微信图片_20260629133851_295_2.jpg": { rotate: -0.2, crop: 0.012 },
  "微信图片_20260629133855_296_2.jpg": { rotate: 0.12, crop: 0.01 },
  "微信图片_20260629133858_297_2.jpg": { rotate: 0.32, crop: 0.014 },
};

const cropProfiles = {
  warehouse: { width: 1800, brightness: 1.035, saturation: 1.05, contrast: 1.045, offset: -4 },
  equipment: { width: 1800, brightness: 1.0, saturation: 1.025, contrast: 1.025, offset: -2 },
  brand: { width: 1800, brightness: 1.025, saturation: 1.035, contrast: 1.035, offset: -3 },
  portrait: { width: 1200, brightness: 1.02, saturation: 1.035, contrast: 1.035, offset: -3 },
};

async function processPhoto([sourceName, outputName, profile]) {
  const input = path.join(sourceDir, sourceName);
  const jpgOutput = path.join(outputDir, `${outputName}.jpg`);
  const webpOutput = path.join(outputDir, `${outputName}.webp`);
  const { width = 0, height = 0 } = await sharp(input).metadata();
  const settings = cropProfiles[profile];
  const correction = geometryCorrections[sourceName] ?? { rotate: 0, crop: 0 };

  const trimTop = sourceName.includes("_297_") ? 70 : 0;
  const trimBottom = sourceName.includes("_294_") || sourceName.includes("_295_") ? 90 : 0;
  const corrected = await sharp(input)
    .rotate()
    .extract({
      left: 0,
      top: trimTop,
      width,
      height: Math.max(1, height - trimTop - trimBottom),
    })
    .rotate(correction.rotate, {
      background: { r: 246, g: 248, b: 246, alpha: 1 },
    })
    .toBuffer({ resolveWithObject: true });

  const rotatedWidth = corrected.info.width;
  const rotatedHeight = corrected.info.height;
  const marginX = Math.round(rotatedWidth * correction.crop);
  const marginY = Math.round(rotatedHeight * correction.crop);

  const base = sharp(corrected.data)
    .extract({
      left: marginX,
      top: marginY,
      width: Math.max(1, rotatedWidth - marginX * 2),
      height: Math.max(1, rotatedHeight - marginY * 2),
    })
    .resize({
      width: settings.width,
      withoutEnlargement: true,
    })
    .modulate({
      brightness: settings.brightness,
      saturation: settings.saturation,
    })
    .linear(settings.contrast, settings.offset)
    .gamma(1.015)
    .sharpen({
      sigma: 0.7,
      m1: 0.45,
      m2: 1.2,
      x1: 2,
      y2: 10,
      y3: 20,
    });

  const jpg = await base
    .clone()
    .jpeg({
      quality: 86,
      mozjpeg: true,
    })
    .toFile(jpgOutput);

  const webp = await base
    .clone()
    .webp({
      quality: 82,
      effort: 5,
    })
    .toFile(webpOutput);

  return {
    sourceName,
    jpg: `${outputName}.jpg`,
    webp: `${outputName}.webp`,
    rotate: correction.rotate,
    width: jpg.width,
    height: jpg.height,
    jpgBytes: jpg.size,
    webpBytes: webp.size,
  };
}

async function createContactSheet(results) {
  const columns = 4;
  const tileWidth = 420;
  const imageHeight = 236;
  const labelHeight = 58;
  const gap = 18;
  const padding = 28;
  const rows = Math.ceil(results.length / columns);
  const width = padding * 2 + columns * tileWidth + (columns - 1) * gap;
  const height = padding * 2 + rows * (imageHeight + labelHeight) + (rows - 1) * gap;

  const composites = [];

  for (let index = 0; index < results.length; index += 1) {
    const item = results[index];
    const col = index % columns;
    const row = Math.floor(index / columns);
    const left = padding + col * (tileWidth + gap);
    const top = padding + row * (imageHeight + labelHeight + gap);

    const imageBuffer = await sharp(path.join(outputDir, item.jpg))
      .resize(tileWidth, imageHeight, { fit: "cover" })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();

    const label = `${index + 1}. ${item.jpg.replace(/\.(jpg|webp)$/i, "")}`;
    const labelSvg = Buffer.from(`
      <svg width="${tileWidth}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f7faf8"/>
        <text x="14" y="24" fill="#10231f" font-family="Arial, sans-serif" font-size="15" font-weight="700">${label}</text>
        <text x="14" y="45" fill="#5c6c67" font-family="Arial, sans-serif" font-size="13">${item.width}x${item.height} · ${(item.webpBytes / 1024).toFixed(0)}KB WebP</text>
      </svg>
    `);

    composites.push({ input: imageBuffer, left, top });
    composites.push({ input: labelSvg, left, top: top + imageHeight });
  }

  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: "#eef5f1",
    },
  })
    .composite(composites)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(outputDir, "factory-photo-contact-sheet.jpg"));
}

await fs.mkdir(outputDir, { recursive: true });

const results = [];
for (const photo of photos) {
  results.push(await processPhoto(photo));
}

await createContactSheet(results);

const manifest = {
  generatedAt: new Date().toISOString(),
  note: "Color, contrast, brightness, conservative crop, resize and web optimization for Jindaquan website/SEO use. Original files are unchanged.",
  images: results,
};

await fs.writeFile(
  path.join(outputDir, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
  "utf8",
);

console.table(results);
