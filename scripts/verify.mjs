import sharp from "sharp";

const src = "C:/Users/HYPE AMD/Documents/CODE/Portofolio/portfolio-web/public/assets/images/projects/ambient-particulate/thumbnail.jpg";
const meta = await sharp(src).metadata();
console.log(`Cover: ${meta.width}x${meta.height}, ${meta.size} bytes`);

const data = await sharp(src).raw().toBuffer();

// Analyze 8 horizontal sections
const sections = 8;
const sectionH = Math.floor(meta.height / sections);

console.log("\nHorizontal analysis:");
for (let i = 0; i < sections; i++) {
  const top = i * sectionH;
  const h = Math.min(sectionH, meta.height - top);
  let sum = 0, ct = 0, darkPx = 0;
  for (let y = top; y < top + h; y++) {
    for (let x = 0; x < meta.width; x += 4) {
      const idx = (y * meta.width + x) * 3;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      sum += (r + g + b) / 3; ct++;
      if (r < 80 && g < 100 && b < 140) darkPx++;
    }
  }
  const avg = (sum / ct).toFixed(0);
  const darkPct = (darkPx / ct * 100).toFixed(1);
  console.log(`  Row ${i+1} (y=${top}-${top+h}): avg=${avg} dark-blue=${darkPct}%`);
}

// Also check for blue/teal colors (the accent)
console.log("\nColor accent analysis (checking for blue-ish pixels > 150 blue channel):");
let bluePx = 0, totalPx = 0;
for (let i = 0; i < data.length; i += 12) {
  const b = data[i+2];
  if (b > 150) bluePx++;
  totalPx++;
}
console.log(`  Blue-accent pixels (>150 blue): ${(bluePx/totalPx*100).toFixed(1)}%`);

// Check corners
function getPx(x, y) {
  const idx = (y * meta.width + x) * 3;
  return `(${data[idx]},${data[idx+1]},${data[idx+2]})`;
}
console.log(`\nCorners:`);
console.log(`  TL(0,0): RGB${getPx(0,0)}`);
console.log(`  TR(1919,0): RGB${getPx(1919,0)}`);
console.log(`  BL(0,1079): RGB${getPx(0,1079)}`);
console.log(`  BR(1919,1079): RGB${getPx(1919,1079)}`);
console.log(`  Center(960,540): RGB${getPx(960,540)}`);
