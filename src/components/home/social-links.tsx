"use client";

const WA_PATH =
  "M16.04 3C8.84 3 3 8.83 3 16.02c0 2.3.6 4.54 1.74 6.51L3 29l6.64-1.7a13 13 0 0 0 6.4 1.64h.01C23.23 28.94 29 23.2 29 16.02 29 8.83 23.23 3 16.04 3Zm0 23.7h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.94 1.01 1.05-3.84-.25-.4a10.63 10.63 0 0 1-1.63-5.73c0-5.9 4.82-10.7 10.74-10.7 5.9 0 10.7 4.8 10.7 10.7 0 5.9-4.8 10.68-10.82 10.68Zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.32.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z";

export default function SocialLinks({
  whatsapp = "https://wa.me/916238139374?text=Hi%20Aerovique%20Suites%2C%20I%27d%20like%20to%20check%20room%20availability.",
  instagram = "https://www.instagram.com/your-handle", // replace
  title = "Follow & connect",
}) {
  const items = [
    {
      key: "whatsapp",
      name: "WhatsApp",
      href: whatsapp,
      icon: (
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d={WA_PATH} />
        </svg>
      ),
    },
    {
      key: "instagram",
      name: "Instagram",
      href: instagram,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <div className="sl">
      {title && <p className="sl-title">{title}</p>}
      <ul className="sl-row">
        {items.map((s) => (
          <li key={s.key}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Aerovique Suites on ${s.name}`}
              className={`sl-btn sl-${s.key}`}
            >
              {s.icon}
              <span className="sl-name">{s.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .sl{--sl-gold:#e4b95f;--sl-line:rgba(255,255,255,.14);--sl-text:#f3efe6;--sl-muted:#93a1ba}
        @media (prefers-color-scheme:light){.sl{--sl-gold:#9a6f12;--sl-line:rgba(10,20,40,.18);--sl-text:#0a1428;--sl-muted:#5c6a82}}
        .sl-title{margin:0 0 14px;font:500 11px/1 ui-monospace,monospace;letter-spacing:.28em;text-transform:uppercase;color:var(--sl-gold)}
        .sl-row{list-style:none;margin:0;padding:0;display:flex;gap:12px;flex-wrap:wrap}
        .sl-btn{
          display:inline-flex;align-items:center;gap:0;height:48px;padding:0 13px;border-radius:999px;
          color:var(--sl-text);border:1px solid var(--sl-line);text-decoration:none;overflow:hidden;
          transition:transform .25s, background .25s, border-color .25s, color .25s, box-shadow .25s, padding .3s, gap .3s;
        }
        .sl-btn svg{flex:none}
        .sl-name{max-width:0;opacity:0;white-space:nowrap;font:500 13px/1 system-ui,sans-serif;transition:max-width .35s, opacity .25s}
        .sl-btn:hover,.sl-btn:focus-visible{transform:translateY(-3px);color:#fff;border-color:transparent;padding:0 18px 0 15px;gap:10px;box-shadow:0 10px 24px rgba(0,0,0,.28)}
        .sl-btn:hover .sl-name,.sl-btn:focus-visible .sl-name{max-width:100px;opacity:1}
        .sl-whatsapp:hover,.sl-whatsapp:focus-visible{background:#25D366}
        .sl-instagram:hover,.sl-instagram:focus-visible{background:linear-gradient(45deg,#f9a03c,#e1306c 50%,#833ab4)}
        .sl-btn:focus-visible{outline:2px solid var(--sl-gold);outline-offset:3px}
        @media (hover:none){.sl-name{display:none}}
        @media (prefers-reduced-motion:reduce){.sl-btn,.sl-name{transition:none}}
      `}</style>
    </div>
  );
}