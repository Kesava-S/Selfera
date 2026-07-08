import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Build-time prerender entry (see scripts/prerender.mjs). Renders the app to
 * static HTML that gets injected into dist/index.html so crawlers receive
 * real content instead of an empty root div. The browser build ignores this
 * file entirely.
 */
export function render(): string {
  return renderToString(<App />);
}
