// Generates the 1200x630 link-preview images in client/public/img/og/ from the `card`
// entries in server/seo.js. Renders each card with headless Chrome/Edge, then compresses
// to JPEG. Usage: npm run og  (set CHROME_PATH if the browser isn't found)
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { pathToFileURL } = require('url');
const sharp = require('sharp');
const { pages } = require('../server/seo');

const W = 1200;
const H = 630;
const img = path.join(__dirname, '../client/public/img');
const out = path.join(img, 'og');

const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((b) => fs.existsSync(b));
if (!browser) {
  console.error('No Chrome/Edge found. Set CHROME_PATH.');
  process.exit(1);
}

const fileUrl = (f) => pathToFileURL(path.join(img, f)).href;

const template = ({ eyebrow, heading, sub, background }) => `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;1,9..144,400&family=Inter:wght@400;600&display=block">
<style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
  body { position: relative; background: #060f22; font-family: Inter, sans-serif; color: #fff; }
  .photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .38; }
  .wash { position: absolute; inset: 0; background: linear-gradient(115deg, rgba(6,15,34,.97) 0%, rgba(11,26,51,.9) 48%, rgba(31,63,176,.55) 100%); }
  .ring { position: absolute; border-radius: 50%; border: 1.5px solid rgba(212,185,124,.28); }
  .seal { position: absolute; width: 380px; height: 380px; right: 90px; top: 125px; filter: drop-shadow(0 24px 48px rgba(0,0,0,.45)); }
  .copy { position: absolute; left: 80px; top: 0; bottom: 0; width: 600px; display: flex; flex-direction: column; justify-content: center; }
  .eyebrow { display: flex; align-items: center; gap: 16px; font-size: 19px; font-weight: 600; letter-spacing: .22em; text-transform: uppercase; color: #e2cf9f; }
  .eyebrow::before { content: ''; width: 44px; height: 2px; background: currentColor; }
  h1 { margin-top: 26px; font-family: Fraunces, serif; font-weight: 600; font-size: 74px; line-height: 1.04; letter-spacing: -.015em; }
  h1 em { font-weight: 400; color: #e2cf9f; }
  p { margin-top: 26px; font-size: 26px; line-height: 1.45; color: rgba(255,255,255,.82); }
  .site { position: absolute; left: 80px; bottom: 46px; font-size: 20px; font-weight: 600; letter-spacing: .06em; color: #efe4c9; }
  .bar { position: absolute; left: 0; right: 0; bottom: 0; height: 8px; background: linear-gradient(90deg, #7d6235, #d4b97c 35%, #efe4c9 50%, #d4b97c 65%, #7d6235); }
</style></head>
<body>
  ${background ? `<img class="photo" src="${fileUrl(background)}">` : ''}
  <div class="wash"></div>
  <div class="ring" style="width:520px;height:520px;right:20px;top:55px"></div>
  <div class="ring" style="width:660px;height:660px;right:-50px;top:-15px;border-color:rgba(212,185,124,.15)"></div>
  <img class="seal" src="${fileUrl('logo.png')}">
  <div class="copy">
    <div class="eyebrow">${eyebrow}</div>
    <h1>${heading}</h1>
    <p>${sub}</p>
  </div>
  <div class="site">callforcivility.com</div>
  <div class="bar"></div>
</body></html>`;

fs.mkdirSync(out, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'));

(async () => {
  for (const { image, card } of Object.values(pages).filter((p) => p.card)) {
    const html = path.join(tmp, `${image}.html`);
    const png = path.join(tmp, `${image}.png`);
    fs.writeFileSync(html, template(card));
    execFileSync(browser, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--allow-file-access-from-files',
      '--virtual-time-budget=8000',
      `--window-size=${W},${H}`,
      `--screenshot=${png}`,
      pathToFileURL(html).href,
    ], { stdio: 'ignore' });

    const file = path.join(out, `${image}.jpg`);
    await sharp(png)
      .extract({ left: 0, top: 0, width: W, height: H })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(file);
    console.log(`${path.relative(process.cwd(), file)} (${Math.round(fs.statSync(file).size / 1024)} KB)`);
  }
  fs.rmSync(tmp, { recursive: true, force: true });
})();
