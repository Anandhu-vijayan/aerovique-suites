import Image from "next/image";

const ticker = ["1 KM FROM CIAL", "NEDUMBASSERRY", "HI-CLASS SECURITY", "ROOM SERVICE 24/7"];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-scene" aria-hidden="true">
        <Image
          src="/images/airport-background.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      <div className="hero-photo">
        <Image
          src="/images/hero-suite.webp"
          alt="Aerovique Suites lounge overlooking the airport runway"
          fill
          priority
          sizes="(max-width: 720px) 100vw, 72vw"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-content">
        {/* <p className="eyebrow">Near CIAL · Nedumbasserry</p> */}
        <h1 className="hero-title">Your Perfect Stay,<span className="script">With a View</span>That Inspires</h1>
        <p className="hero-sub">Wake up to the sight of takeoffs and landings right from your window. A boutique stay one kilometre from Cochin International Airport — quiet, refined, and built for travellers in transit or at rest.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-solid">Book Your Stay</a>
          <a href="#gallery" className="btn btn-ghost">Explore Rooms</a>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true" />
      <div className="ticker" aria-label="Hotel highlights">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-item" key={copy} aria-hidden={copy === 1}>
              <b>RUNWAY VIEW</b>
              {ticker.map((item) => <span className="ticker-detail" key={item}><i className="dot" />{item}</span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
