"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#ffdd15] mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Ready to Grow?
          </h2>
          <p className="text-gray-400 text-lg">
            Tell us about your project and we'll get back to you within one
            business day.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-gray-900 border border-green-800 p-12 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
            <p className="text-gray-400">
              Thanks for reaching out. A member of our team will be in touch
              shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl bg-gray-900 border border-gray-800 p-8 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-[#ffdd15] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-[#ffdd15] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Company
              </label>
              <input
                type="text"
                placeholder="Your Company (optional)"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-[#ffdd15] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                What are you looking for?
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#ffdd15] transition-colors"
              >
                <option value="">Select a service...</option>
                <option>Digital Marketing</option>
                <option>Video & Content Production</option>
                <option>Brand Strategy & Design</option>
                <option>PR & Communications</option>
                <option>Web & Digital Experience</option>
                <option>Analytics & Insights</option>
                <option>Full-Service Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Tell us about your project
              </label>
              <textarea
                required
                rows={5}
                placeholder="Describe your goals, timeline, or anything else we should know..."
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-[#ffdd15] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#ffdd15] text-black font-bold text-base hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-900/20"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
