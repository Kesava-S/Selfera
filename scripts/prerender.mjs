/**
 * Injects a server-rendered HTML snapshot of the app into dist/[route]/index.html.
 *
 * Runs after `vite build` (browser bundle) and `vite build --ssr`
 * (node-renderable bundle in dist-ssr/). The snapshot is what crawlers and
 * no-JS clients see; the browser still boots React normally, and
 * createRoot().render() replaces the snapshot behind the intro overlay.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const { render } = await import(resolve(root, 'dist-ssr/prerender-entry.js'));

const ROUTES = [
  '/',
  '/solutions-micro',
  '/products',
  '/solutions-silentchurn',
  '/solutions-noshow',
  '/solutions-allergen',
  '/solutions-loyalty',
  '/solutions-end-to-end',
  '/solutions',
  '/solutions-custom',
  '/about',
  '/case-studies',
  '/case-studies-ranna',
  '/case-study-ranna',
  '/404'
];

const indexPath = resolve(root, 'dist/index.html');
let baseTemplate = readFileSync(indexPath, 'utf8');

// Inline compiled CSS to eliminate render-blocking network requests
const cssLinkRegex = /<link rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/;
const cssMatch = baseTemplate.match(cssLinkRegex);
if (cssMatch) {
  const cssUrl = cssMatch[1];
  try {
    const cssFilePath = resolve(root, 'dist', cssUrl.replace(/^\//, ''));
    const cssContent = readFileSync(cssFilePath, 'utf8');
    const styleTag = `<style>${cssContent}</style>`;
    baseTemplate = baseTemplate.replace(cssLinkRegex, styleTag);
    console.log(`prerender: successfully inlined ${cssUrl} (${Math.round(cssContent.length / 1024)} KB)`);
  } catch (err) {
    console.warn(`prerender warning: could not inline CSS file ${cssUrl}:`, err.message);
  }
}

const marker = '<div id="root"></div>';
if (!baseTemplate.includes(marker)) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

for (const route of ROUTES) {
  let html = render(route);

  // Framer Motion serialises each element's *initial* animation frame into
  // inline styles (opacity:0, blur, off-screen transforms). Visible-by-default
  // markup is what we want crawlers to read, so strip those transient values.
  html = html
    .replace(/opacity:\s*0(?!\.)/g, 'opacity:1')
    .replace(/filter:\s*blur\([^)]*\)/g, '')
    .replace(/transform:\s*translate[^;"]*(;)?/g, '')
    .replace(/style="\s*"/g, '');

  const finalHtml = baseTemplate.replace(marker, `<div id="root">${html}</div>`);

  if (route === '/') {
    writeFileSync(indexPath, finalHtml);
    console.log(`prerender: injected / into dist/index.html`);
  } else if (route === '/404') {
    writeFileSync(resolve(root, 'dist/404.html'), finalHtml);
    console.log(`prerender: injected /404 into dist/404.html`);
  } else {
    const dir = resolve(root, `dist${route}`);
    mkdirSync(dir, { recursive: true });
    writeFileSync(resolve(dir, 'index.html'), finalHtml);
    console.log(`prerender: injected ${route} into dist${route}/index.html`);
  }
}
