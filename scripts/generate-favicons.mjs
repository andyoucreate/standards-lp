#!/usr/bin/env node
/**
 * Favicon generator script
 * Converts SVG logo to all required favicon formats for PWA and SEO
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "..");
const PUBLIC_DIR = join(ROOT_DIR, "public");
const LOGO_PATH = join(PUBLIC_DIR, "images", "logo.svg");

// Favicon sizes to generate
const SIZES = {
  "favicon-32.png": 32,
  "apple-touch-icon.png": 180,
  "icon-192.png": 192,
  "icon-512.png": 512,
};

async function generateFavicons() {
  console.log("🎨 Generating favicons from logo.svg...\n");

  // Verify logo exists
  if (!existsSync(LOGO_PATH)) {
    console.error(`❌ Logo not found at: ${LOGO_PATH}`);
    process.exit(1);
  }

  const svgBuffer = readFileSync(LOGO_PATH);

  // Generate PNG files at different sizes
  for (const [filename, size] of Object.entries(SIZES)) {
    const outputPath = join(PUBLIC_DIR, filename);

    await sharp(svgBuffer)
      .resize(size, size, {
        fit: "contain",
        background: { r: 14, g: 12, b: 21, alpha: 1 }, // #0E0C15 - dark background
      })
      .png()
      .toFile(outputPath);

    console.log(`✅ Generated ${filename} (${size}x${size})`);
  }

  // Generate favicon.ico from 32x32 PNG
  const favicon32Path = join(PUBLIC_DIR, "favicon-32.png");
  const icoBuffer = await pngToIco([favicon32Path]);
  writeFileSync(join(PUBLIC_DIR, "favicon.ico"), icoBuffer);
  console.log("✅ Generated favicon.ico");

  // Copy SVG as favicon.svg (for modern browsers)
  const faviconSvgPath = join(PUBLIC_DIR, "favicon.svg");
  writeFileSync(faviconSvgPath, svgBuffer);
  console.log("✅ Generated favicon.svg");

  // Clean up temporary 32px PNG (used only for ico generation)
  const fs = await import("node:fs/promises");
  await fs.unlink(favicon32Path);

  console.log("\n🎉 All favicons generated successfully!");
}

generateFavicons().catch((error) => {
  console.error("❌ Error generating favicons:", error);
  process.exit(1);
});
