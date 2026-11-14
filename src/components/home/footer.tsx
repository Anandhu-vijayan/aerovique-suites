import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/home/social-links";

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
            <div className="footer-col"><h5>Contact</h5><p>6238139374</p><p>aeroviquesuites@gmail.com</p><p>Aerovique Suites</p><p> Nayathodu, Nedumbaserry</p><p> Kerala, 683572</p></div>
            <div className="footer-col"><SocialLinks /></div>
</div>
        </div>
        <div className="footer-bottom"><span>© 2026 Aerovique Suites. All rights reserved.</span><a href="#rooms" className="script">Book Your Stay Now</a></div>
      </div>
    </footer>
  );
}
