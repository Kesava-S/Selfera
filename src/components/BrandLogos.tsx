/**
 * Inline brand-logo marks, each drawn on a 0 0 24 24 grid and returned as a
 * bare <g> so they can be dropped inside a parent <svg> and positioned with a
 * transform. Recognisable, correctly-coloured marks — not pixel-perfect trace
 * copies. Used by the orchestration diagram.
 */
import type { ReactElement } from 'react';

/* ---------- social & ad platforms ---------- */

export function Instagram(): ReactElement {
  return (
    <g>
      <defs>
        <radialGradient id="ig-g" cx="30%" cy="107%" r="140%">
          <stop offset="0" stopColor="#FDF497" />
          <stop offset=".08" stopColor="#FDF497" />
          <stop offset=".45" stopColor="#FD5949" />
          <stop offset=".6" stopColor="#D6249F" />
          <stop offset=".9" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill="url(#ig-g)" />
      <rect x="4.8" y="4.8" width="14.4" height="14.4" rx="4.6" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="16.6" cy="7.5" r="1.15" fill="#fff" />
    </g>
  );
}

export function Facebook(): ReactElement {
  return (
    <g>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.6 15.5l.53-3.44h-3.3V9.83c0-.94.46-1.86 1.94-1.86h1.5V5.05s-1.36-.23-2.66-.23c-2.72 0-4.5 1.65-4.5 4.63v2.62H6.1v3.44h3.02V24h3.7v-8.5z"
      />
    </g>
  );
}

export function WhatsApp(): ReactElement {
  return (
    <g>
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#fff"
        d="M17.5 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.88 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.07-.12-.27-.19-.57-.34z"
      />
      <path
        fill="#fff"
        d="M12 5.5a6.45 6.45 0 00-5.5 9.83L5.6 18.5l3.28-.86A6.45 6.45 0 1012 5.5zm0 1.5a4.95 4.95 0 11-2.6 9.16l-.28-.17-1.72.45.46-1.67-.18-.29A4.95 4.95 0 0112 7z"
      />
    </g>
  );
}

export function LinkedIn(): ReactElement {
  return (
    <g>
      <rect width="24" height="24" rx="4.5" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.2 9.5H4.5V19h2.7V9.5zM5.85 8.3a1.57 1.57 0 100-3.15 1.57 1.57 0 000 3.15zM19.5 19h-2.7v-4.8c0-1.14-.02-2.62-1.6-2.62-1.6 0-1.85 1.25-1.85 2.54V19h-2.7V9.5h2.6v1.3h.03c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.25 1.8 3.25 4.15V19z"
      />
    </g>
  );
}

export function GoogleAds(): ReactElement {
  return (
    <g>
      <rect x="8.6" y="1.5" width="6.8" height="17.5" rx="3.4" transform="rotate(-30 12 12)" fill="#FBBC04" />
      <rect x="8.6" y="5" width="6.8" height="17.5" rx="3.4" transform="rotate(30 12 12)" fill="#4285F4" />
      <circle cx="5.6" cy="18" r="3.2" fill="#34A853" />
    </g>
  );
}

export function TikTok(): ReactElement {
  return (
    <g>
      <rect width="24" height="24" rx="6" fill="#010101" />
      <path
        fill="#25F4EE"
        d="M15 5.5c.1.9.5 1.7 1.2 2.3v2.2a5 5 0 01-2.7-.9v4.6a4.1 4.1 0 11-4.1-4.1c.2 0 .4 0 .6.05v2.2a1.9 1.9 0 101.3 1.8V5.5H15z"
        transform="translate(-1 0)"
      />
      <path
        fill="#FE2C55"
        d="M16 5.5c.1.9.5 1.7 1.2 2.3v2.2a5 5 0 01-2.7-.9v4.6a4.1 4.1 0 11-4.1-4.1c.2 0 .4 0 .6.05v2.2a1.9 1.9 0 101.3 1.8V5.5H16z"
        transform="translate(1 0)"
      />
      <path
        fill="#fff"
        d="M15.5 5.5c.1.9.5 1.7 1.2 2.3v2.2a5 5 0 01-2.7-.9v4.6a4.1 4.1 0 11-4.1-4.1c.2 0 .4 0 .6.05v2.2a1.9 1.9 0 101.3 1.8V5.5h3.7z"
      />
    </g>
  );
}

/* ---------- AI brains ---------- */

export function Anthropic(): ReactElement {
  // orange radiating burst
  const spokes = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <g>
      {spokes.map((a) => (
        <rect key={a} x="11" y="1.5" width="2" height="9.2" rx="1" fill="#D97757" transform={`rotate(${a} 12 12)`} />
      ))}
    </g>
  );
}

export function OpenAI(): ReactElement {
  return (
    <g>
      <path
        fill="#0f0f0f"
        d="M22.28 9.82a5.98 5.98 0 00-.51-4.91 6.05 6.05 0 00-6.51-2.9A6.07 6.07 0 004.98 4.18a5.98 5.98 0 00-4 2.9 6.05 6.05 0 00.74 7.1 5.98 5.98 0 00.51 4.9 6.05 6.05 0 006.52 2.9A5.98 5.98 0 0013.26 24a6.06 6.06 0 005.77-4.21 5.99 5.99 0 004-2.9 6.06 6.06 0 00-.75-7.07zm-9.02 12.6a4.48 4.48 0 01-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 00.39-.68v-6.74l2.02 1.17a.07.07 0 01.04.05v5.58a4.5 4.5 0 01-4.49 4.5zM3.6 18.3a4.47 4.47 0 01-.53-3.01l.14.08 4.78 2.76a.77.77 0 00.78 0l5.84-3.37v2.33a.08.08 0 01-.03.06L9.74 19.95a4.5 4.5 0 01-6.14-1.65zM2.34 7.9a4.49 4.49 0 012.37-1.98v5.68a.77.77 0 00.39.68l5.81 3.35-2.02 1.17a.08.08 0 01-.07 0l-4.83-2.79A4.5 4.5 0 012.34 7.9zm16.6 3.86l-5.84-3.4L15.12 7.2a.08.08 0 01.07 0l4.83 2.79a4.49 4.49 0 01-.68 8.1v-5.68a.79.79 0 00-.4-.66zm2.01-3.02l-.14-.09-4.77-2.78a.78.78 0 00-.79 0L9.41 9.23V6.9a.07.07 0 01.03-.06l4.83-2.79a4.5 4.5 0 016.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 01-.04-.06V6.07a4.5 4.5 0 017.38-3.45l-.14.08-4.78 2.76a.79.79 0 00-.39.68zm1.1-2.36L12 9l2.6 1.5v3l-2.6 1.5-2.6-1.5z"
      />
    </g>
  );
}

export function Gemini(): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id="gem-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4285F4" />
          <stop offset=".4" stopColor="#9B72CB" />
          <stop offset=".7" stopColor="#D96570" />
          <stop offset="1" stopColor="#F9AB00" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gem-g)"
        d="M12 2c0 5.52-4.48 10-10 10 5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z"
      />
    </g>
  );
}

export function Gemma(): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id="gma-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5A9BFF" />
          <stop offset="1" stopColor="#1A73E8" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gma-g)"
        d="M12 2.5c0 5.24-4.26 9.5-9.5 9.5 5.24 0 9.5 4.26 9.5 9.5 0-5.24 4.26-9.5 9.5-9.5-5.24 0-9.5-4.26-9.5-9.5z"
      />
    </g>
  );
}

export function Qwen(): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id="qwn-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6E5BF6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        fill="url(#qwn-g)"
        d="M8.2 3.2h4.1l2.05 3.55h4.1l-2.05 3.55 2.05 3.55h-4.1L12.3 20.8H8.2l2.05-3.55h-4.1l2.05-3.55L6.15 10.1h4.1L8.2 6.75z"
      />
      <path fill="#fff" fillOpacity=".22" d="M8.2 3.2h4.1l2.05 3.55h-4.1z" />
    </g>
  );
}

/* ---------- storage ---------- */

export function Supabase(): ReactElement {
  return (
    <g>
      <defs>
        <linearGradient id="sb-g" x1="6" y1="2" x2="16" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sb-g)"
        d="M13.4 22.3c-.6.75-1.8.34-1.8-.6v-8H5.06c-1.06 0-1.65-1.22-.99-2.05L10.6 1.7c.6-.75 1.8-.34 1.8.6v8h6.54c1.06 0 1.65 1.22.99 2.05z"
      />
    </g>
  );
}

export function Sheets(): ReactElement {
  return (
    <g>
      <path fill="#0F9D58" d="M6 1.5h8.5L20 7v14.5A1.5 1.5 0 0118.5 23h-13A1.5 1.5 0 014 21.5v-18A1.5 1.5 0 015.5 1.5z" />
      <path fill="#fff" fillOpacity=".28" d="M14.5 1.5L20 7h-5.5z" />
      <path
        fill="#fff"
        d="M8 11h8v6.5H8V11zm1.3 1.3v1.3h2.05v-1.3H9.3zm3.35 0v1.3h2.05v-1.3h-2.05zM9.3 14.9v1.3h2.05v-1.3H9.3zm3.35 0v1.3h2.05v-1.3h-2.05z"
      />
    </g>
  );
}

/* ---------- placement helper ---------- */

export function LogoAt({
  Comp,
  x,
  y,
  size = 24,
}: {
  Comp: () => ReactElement;
  x: number;
  y: number;
  size?: number;
}): ReactElement {
  return (
    <g transform={`translate(${x} ${y}) scale(${size / 24})`}>
      <Comp />
    </g>
  );
}
