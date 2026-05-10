"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(14,13,11,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">

        <Link href="/">
          <Image src="/logo.svg" alt="BAC Media" width={88} height={28} className="brightness-0 invert" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-[11px] font-medium tracking-[0.18em] uppercase">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 hover:opacity-80"
          style={{ border: "1px solid rgba(255,221,21,0.35)", color: "var(--accent)" }}>
          Get in Touch
        </a>

        <button className="md:hidden nav-link" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-8 flex flex-col gap-6" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link text-[11px] font-medium tracking-[0.18em] uppercase">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="self-start px-5 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase"
            style={{ border: "1px solid rgba(255,221,21,0.35)", color: "var(--accent)" }}>
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
