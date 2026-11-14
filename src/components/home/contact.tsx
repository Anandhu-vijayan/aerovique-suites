export function Contact() {
  return (
    <section className="contact section-pad on-dark" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="pass">
            <div className="pass-top">
              <span className="pass-brand">Boarding · Aerovique Suites</span>
              <span className="pass-code">PINCODE · 683572</span>
            </div>
            <div className="pass-body">
              <div className="pass-route">
                <div className="city">YOU<small>Departing From</small></div>
                <svg className="plane-ico" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true"><path d="m2 16 20-7-7 20-3-8-8-3Z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div className="city">AVS<small>Nedumbassery</small></div>
              </div>
              <div className="pass-fields">
                <div className="pass-field"><span>Phone</span><a href="tel:+916238139374"><b>6238 139 374</b></a></div>
                <div className="pass-field"><span>Email</span><a href="mailto:aeroviquesuites@gmail.com"><b>aeroviquesuites@gmail.com</b></a></div>
                <div className="pass-field"><span>Location</span><b>Aerovique Suites, Nayathodu, Nedumbaserry, Kerala, 683572</b></div>
                <div className="pass-field"><span>Check-in</span><b>From 12:00 PM</b></div>
              </div>
            </div>
            <div className="pass-bottom"><span>Comfort · Style · Serenity</span><span>Seat 1A</span></div>
          </div>

          <div className="location-map">
            <div className="location-map-copy">
<div>
                <p className="eyebrow">Our Location</p>
                <h3>Aerovique Suites, Nayathodu<br />Nedumbasserry, Kerala<br />683572</h3>
              </div>
              <div className="contact-actions">
                <a className="btn btn-solid" href="https://maps.app.goo.gl/RHASTt9qGVrGcDvx5?g_st=aw" target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="location-map-frame">
              <iframe
                title="Aerovique Suites location on Google Maps"
                src="https://www.google.com/maps?q=10.1612,76.3969312&z=16&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}