const amenities = [
  ["Quality Room", "M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"],
  ["Hi-Class Security", "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"],
  ["Room Service", "M4 19h16M6 19V9a2 2 0 012-2h1V5a1 1 0 011-1h4a1 1 0 011 1v2h1a2 2 0 012 2v10"],
  ["Airport Proximity", "M2 16l20-7-7 20-3-8-8-3z"],
];

export function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <p className="eyebrow">The Aerovique Experience</p>
          <h2>Comfort, style, and serenity — with the sky as your backdrop.</h2>
          <p>Aerovique Suites sits a single kilometre from the runway, close enough that arrivals and departures become part of the view rather than a distraction from it. Every room is designed around quiet comfort: considered furnishings, calm palettes, and a window seat built for watching the evening&apos;s last flights come in.</p>
          <p>Whether you&apos;re catching an early departure or unwinding after a long one, our team keeps things simple — attentive service, a quality room, and the kind of stillness that&apos;s hard to find this close to an airport.</p>
          <div className="amenities">
            {amenities.map(([label, path]) => (
              <div className="amenity" key={label}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d={path} strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="window-card" aria-label="Illustration of a suite window facing runway 09">
          <div className="w-runway" /><div className="w-lights" />
          <svg className="w-plane" viewBox="0 0 200 60" fill="none" aria-hidden="true"><path d="M2 34 70 30 118 6h12l-30 24h50l22-10h12l-16 12 16 4h-12l-22-4-50 2 28 20h-12L72 36 2 38Z" fill="#F6F4EF" /></svg>
          <p className="w-tag">Suite Window · Facing Runway 09</p>
          <div className="window-frame" />
        </div>
      </div>
    </section>
  );
}
