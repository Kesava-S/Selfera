/**
 * Injects a server-rendered HTML snapshot of the app into dist/index.html.
 *
 * Runs after `vite build` (browser bundle) and `vite build --ssr`
 * (node-renderable bundle in dist-ssr/). The snapshot is what crawlers and
 * no-JS clients see; the browser still boots React normally, and
 * createRoot().render() replaces the snapshot behind the intro overlay.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const { render } = await import(resolve(root, 'dist-ssr/prerender-entry.js'));

let html = render();

// Framer Motion serialises each element's *initial* animation frame into
// inline styles (opacity:0, blur, off-screen transforms). Visible-by-default
// markup is what we want crawlers to read, so strip those transient values.
html = html
  .replace(/opacity:\s*0(?!\.)/g, 'opacity:1')
  .replace(/filter:\s*blur\([^)]*\)/g, '')
  .replace(/transform:\s*translate[^;"]*(;)?/g, '')
  .replace(/style="\s*"/g, '');

const indexPath = resolve(root, 'dist/index.html');
const template = readFileSync(indexPath, 'utf8');

const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

writeFileSync(indexPath, template.replace(marker, `<div id="root">${html}</div>`));

const kb = Math.round(Buffer.byteLength(html, 'utf8') / 1024);
console.log(`prerender: injected ${kb} KB of static HTML into dist/index.html`);
