"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      brief: (form.elements.namedItem("brief") as HTMLTextAreaElement).value,
      source: "form",
    };
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
  }

  const fieldLabel = "block text-[10px] font-medium uppercase tracking-[0.12em] mb-2";

  return (
    <section id="contact" className="py-24 sm:py-32" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="mb-16">
          <span className="label-tag mb-5 inline-flex">Contact</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-serif text-5xl sm:text-6xl leading-[1]">
              Let&rsquo;s talk about{" "}
              <em className="not-italic" style={{ color: "var(--accent)" }}>your next project.</em>
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              We respond within one business day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          <div className="lg:col-span-2 space-y-10">
            <p className="font-serif text-2xl leading-snug" style={{ color: "var(--text)" }}>
              Tell us what you&rsquo;re working on. We&rsquo;ll tell you how we can help.
            </p>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { label: "New project", desc: "Brief us on your production or post requirements." },
                { label: "Ongoing partnership", desc: "Looking for a long-term post partner?" },
                { label: "Confidential work", desc: "Discretion as standard. Always." },
              ].map((item) => (
                <div key={item.label} className="py-5" style={{ borderBottom: "1px solid var(--border)" }}>
                  <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--text)" }}>{item.label}</p>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col gap-6 py-12">
                <div className="flex items-center justify-center" style={{ width: "2.5rem", height: "2.5rem", background: "var(--accent)" }}>
                  <svg className="w-5 h-5" style={{ color: "#000" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2" style={{ color: "var(--text)" }}>Message Received</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>A member of our team will be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className={fieldLabel} style={{ color: "var(--muted)" }}>Name</label>
                    <input type="text" name="name" required placeholder="Jane Smith" className="form-input" />
                  </div>
                  <div>
                    <label className={fieldLabel} style={{ color: "var(--muted)" }}>Email</label>
                    <input type="email" name="email" required placeholder="jane@company.com" className="form-input" />
                  </div>
                </div>
                <div>
                  <label className={fieldLabel} style={{ color: "var(--muted)" }}>Company</label>
                  <input type="text" name="company" placeholder="Your Company" className="form-input" />
                </div>
                <div>
                  <label className={fieldLabel} style={{ color: "var(--muted)" }}>Service</label>
                  <select name="service" className="form-input">
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
                  <label className={fieldLabel} style={{ color: "var(--muted)" }}>Brief</label>
                  <textarea name="brief" required rows={5}
                    placeholder="Tell us about your project, timeline, and requirements..."
                    className="form-input resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-90"
                  style={{ background: "var(--accent)", color: "#000" }}>
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
