"use client";

export default function WhatsAppButton({
  phone = "916238139374",
  message = "Hi Aerovique Suites, I'd like to check room availability.",
  label = "Chat with us",
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aerovique Suites on WhatsApp"
        className="wa-btn"
      >
        <span className="wa-label">{label}</span>
        <span className="wa-icon">
          <svg viewBox="0 0 32 32" width="25" height="25" aria-hidden="true" fill="currentColor">
            <path d="M16.04 3C8.84 3 3 8.83 3 16.02c0 2.3.6 4.54 1.74 6.51L3 29l6.64-1.7a13 13 0 0 0 6.4 1.64h.01C23.23 28.94 29 23.2 29 16.02 29 8.83 23.23 3 16.04 3Zm0 23.7h-.01a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.94 1.01 1.05-3.84-.25-.4a10.63 10.63 0 0 1-1.63-5.73c0-5.9 4.82-10.7 10.74-10.7 5.9 0 10.7 4.8 10.7 10.7 0 5.9-4.8 10.68-10.82 10.68Zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.32.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z"/>
          </svg>
        </span>
      </a>

      <style jsx>{`
        .wa-btn{
          position:fixed; z-index:50;
          right:max(16px, env(safe-area-inset-right));
          bottom:max(16px, env(safe-area-inset-bottom));
          display:flex; align-items:center; gap:0;
          height:52px; padding:0; border-radius:999px;
          background:#25D366; color:#fff; text-decoration:none;
          box-shadow:0 8px 20px rgba(37,211,102,.35), 0 2px 6px rgba(0,0,0,.2);
          transition:gap .3s, padding .3s, transform .25s, box-shadow .25s;
        }
        .wa-icon{position:relative; width:52px; height:52px; display:grid; place-items:center; flex:none}
        .wa-icon::before{
          content:""; position:absolute; inset:0; border-radius:50%;
          background:#25D366; opacity:.55; z-index:-1;
          animation:wa-pulse 2.2s ease-out infinite;
        }
        .wa-label{
          max-width:0; overflow:hidden; white-space:nowrap; opacity:0;
          font:500 13px/1 system-ui, sans-serif; letter-spacing:.02em;
          transition:max-width .35s, opacity .25s, padding .35s;
        }
        .wa-btn:hover, .wa-btn:focus-visible{transform:translateY(-2px); box-shadow:0 12px 28px rgba(37,211,102,.45), 0 2px 8px rgba(0,0,0,.25)}
        .wa-btn:hover .wa-label, .wa-btn:focus-visible .wa-label{max-width:140px; opacity:1; padding-left:18px}
        .wa-btn:focus-visible{outline:3px solid #fff; outline-offset:3px}
        @keyframes wa-pulse{0%{transform:scale(1);opacity:.55}100%{transform:scale(1.6);opacity:0}}
        @media (prefers-reduced-motion:reduce){.wa-icon::before{animation:none;opacity:0}}
        @media (max-width:560px){.wa-btn{height:48px}.wa-icon{width:48px;height:48px}}
      `}</style>
    </>
  );
}