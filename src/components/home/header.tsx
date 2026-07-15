"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Gallery", "/gallery"],
  ["Contact", "/#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
      <Link className="nav-brand" href="/" aria-label="Aerovique Suites home">
        <Image
          className="nav-logo"
          src="/images/aerovique-logo.webp"
          alt="Aerovique Suites"
          width={640}
          height={466}
          priority
        />
      </Link>

      <div className={`nav-links${open ? " open" : ""}`} id="main-menu">
        {links.map(([label, href]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link href="/#contact" className="nav-cta" onClick={() => setOpen(false)}>Book Now</Link>
      </div>

      <button
        className={`nav-toggle${open ? " active" : ""}`}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
