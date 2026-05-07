"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ffdd15] mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Start?
          </h2>
          <p className="text-gray-500 text-lg">
            Tell us about your project and we'll get back to you within one
            business day.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-[#0f0f0f] border border-[#ffdd15]/20 p-12 text-center">
            <div className="w-12 h-12 rounded-full bg-[#ffdd15] flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
            <p className="text-gray-500">
              Thanks for reaching out. A member of our team will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl bg-[#0f0f0f] border border-white/5 p-8 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-white placeholder-gray-700 focus:outline-none focus:border-[#ffdd15]/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-white placeholder-gray-700 focus:outline-none focus:border-[#ffdd15]/40 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Company</label>
              <input
                type="text"
                placeholder="Your Company (optional)"
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-white placeholder-gray-700 focus:outline-none focus:border-[#ffdd15]/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Service</label>
              <select className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-white focus:outline-none focus:border-[#ffdd15]/40 transition-colors">
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
              <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Project Brief</label>
              <textarea
                required
                rows={5}
                placeholder="Describe your project, timeline, and any specific requirements..."
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/5 text-white placeholder-gray-700 focus:outline-none focus:border-[#ffdd15]/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#ffdd15] text-black font-bold text-sm tracking-wide hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
