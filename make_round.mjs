import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconPath = path.join(__dirname, 'public', 'icon-512.webp');
const svgPath = path.join(__dirname, 'public', 'icon-round.svg');

try {
  const iconData = fs.readFileSync(iconPath);
  const base64 = iconData.toString('base64');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <clipPath id="circleView">
      <circle cx="256" cy="256" r="256" />
    </clipPath>
  </defs>
  <image width="512" height="512" href="data:image/webp;base64,${base64}" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>`;

  fs.writeFileSync(svgPath, svg);
  console.log('Successfully created round SVG favicon!');
} catch (e) {
  console.error('Error creating SVG:', e.message);
}
