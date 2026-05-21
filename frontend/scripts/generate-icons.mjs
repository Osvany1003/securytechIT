import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const source = path.join(root, 'public', 'Logo.jpeg');

const targets = [
  { out: path.join(root, 'app', 'icon.png'), width: 32, height: 32 },
  { out: path.join(root, 'app', 'apple-icon.png'), width: 180, height: 180 },
  { out: path.join(root, 'public', 'img', 'og-image.png'), width: 1200, height: 630 },
];

for (const t of targets) {
  await sharp(source)
    .resize({
      width: t.width,
      height: t.height,
      fit: 'contain',
      background: { r: 0, g: 26, b: 51, alpha: 1 },
    })
    .png()
    .toFile(t.out);
  console.log(`✓ ${t.out}`);
}
