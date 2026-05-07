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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/97 border-b border-zinc-900" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-18 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="BAC Media" width={90} height={28} className="brightness-0 invert" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-semibold tracking-widest uppercase text-zinc-500 hover:text-white transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffdd15] text-black text-xs font-bold tracking-widest uppercase hover:bg-yellow-300 transition-colors">
            Get in Touch
          </a>
        </div>

        <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-zinc-900 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="self-start inline-flex items-center px-5 py-2.5 rounded-full bg-[#ffdd15] text-black text-xs font-bold tracking-widest uppercase">
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
