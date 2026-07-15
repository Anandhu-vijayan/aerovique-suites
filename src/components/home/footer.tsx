import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image className="footer-logo" src="/images/aerovique-logo.webp" alt="Aerovique Suites" width={640} height={466} />
            <div>Aerovique Suites<span>Nedumbasserry</span></div>
          </div>
          <div className="footer-cols">
            <div className="footer-col"><h5>Navigate</h5><Link href="/">Home</Link><Link href="/#about">About</Link><Link href="/gallery">Gallery</Link><Link href="/#contact">Contact</Link></div>
            <div className="footer-col"><h5>Contact</h5><p>6238 139 374</p><p>aeroviquesuites@gmail.com</p><p>1 km from CIAL, Nedumbasserry</p></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Aerovique Suites. All rights reserved.</span><span className="script">Book Your Stay Now</span></div>
      </div>
    </footer>
  );
}
