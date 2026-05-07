"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-900">
          <div>
            <span className="rule-yellow mb-4 inline-block" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Get in Touch</h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed sm:text-right">
            We respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: statement */}
          <div className="space-y-8">
            <p className="text-2xl font-bold text-white leading-snug">
              Tell us what you're working on. We'll tell you how we can help.
            </p>
            <div className="space-y-4 pt-4">
              {[
                { label: "New project enquiry", desc: "Brief us on your upcoming production or post requirements." },
                { label: "Ongoing partnership", desc: "Looking for a long-term post partner for your pipeline?" },
                { label: "Confidential work", desc: "NDA-first by default. Your project is safe with us." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 py-4 border-b border-zinc-900">
                  <span className="w-1 h-1 rounded-full bg-[#ffdd15] mt-2.5 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          {submitted ? (
            <div className="flex flex-col items-start gap-6 py-12">
              <div className="w-12 h-12 rounded-full bg-[#ffdd15] flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-zinc-500">A member of our team will be in touch shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">Name</label>
                  <input type="text" required placeholder="Jane Smith"
                    className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-[#ffdd15]/40 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">Email</label>
                  <input type="email" required placeholder="jane@company.com"
                    className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-[#ffdd15]/40 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">Company</label>
                <input type="text" placeholder="Your Company"
                  className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-[#ffdd15]/40 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">Service</label>
                <select className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm focus:outline-none focus:border-[#ffdd15]/40 transition-colors">
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
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">Project Brief</label>
                <textarea required rows={5} placeholder="Tell us about your project, timeline, and any specific requirements..."
                  className="w-full px-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-[#ffdd15]/40 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full py-4 rounded-full bg-[#ffdd15] text-black text-xs font-bold tracking-widest uppercase hover:bg-yellow-300 transition-colors mt-2">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
