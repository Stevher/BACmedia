"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          BAC<span className="text-blue-600">media</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
