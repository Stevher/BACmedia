"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors";

  return (
    <section id="contact" className="py-24 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-8 border-b border-zinc-900">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">Get in Touch</h2>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">We respond within one business day.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left */}
          <div className="lg:col-span-2 space-y-10">
            <p className="font-serif text-xl font-normal text-zinc-300 leading-relaxed">
              Tell us what you're working on. We'll tell you how we can help.
            </p>
            <div className="space-y-0 divide-y divide-zinc-900">
              {[
                { label: "New project", desc: "Brief us on your production or post requirements." },
                { label: "Ongoing partnership", desc: "Looking for a long-term post partner?" },
                { label: "Confidential work", desc: "NDA-first by default. Always." },
              ].map((item) => (
                <div key={item.label} className="py-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white mb-1">{item.label}</p>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col gap-5 py-12">
                <div className="w-10 h-10 bg-[#ffdd15] flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white mb-2">Message Received</h3>
                  <p className="text-sm text-zinc-500">A member of our team will be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-2">Name</label>
                    <input type="text" required placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-2">Email</label>
                    <input type="email" required placeholder="jane@company.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-2">Company</label>
                  <input type="text" placeholder="Your Company" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-2">Service</label>
                  <select className={inputClass}>
                    <option value="">Select a service...</option>
                    <option>Offline Editing</option>
                    <option>Online &amp; Finishing</option>
                    <option>Colour Grading</option>
                    <option>VFX &amp; Motion Graphics</option>
                    <option>Audio Post</option>
                    <option>Production &amp; Shooting</option>
                    <option>Full Pipeline</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-2">Brief</label>
                  <textarea required rows={5} placeholder="Tell us about your project, timeline, and requirements..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" className="w-full py-3.5 bg-[#ffdd15] text-black text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-yellow-300 transition-colors mt-2">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
