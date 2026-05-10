import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12">

        <div className="space-y-4">
          <Image src="/logo.svg" alt="BAC Media" width={76} height={24} className="brightness-0 invert opacity-30" />
          <p className="text-xs leading-relaxed" style={{ color: "var(--muted)", opacity: 0.55 }}>
            Build. Align. Create.<br />Video &amp; Post Production.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--muted)", opacity: 0.35 }}>Navigation</p>
          {[["Capabilities", "#capabilities"], ["Process", "#process"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} href={href} className="footer-link block text-sm">{label}</a>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--muted)", opacity: 0.35 }}>Offices</p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>Johannesburg</p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>Cape Town</p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>London</p>
          <p className="text-xs pt-6" style={{ color: "var(--muted)", opacity: 0.28 }}>
            &copy; {new Date().getFullYear()} BAC Media
          </p>
        </div>

      </div>
    </footer>
  );
}
