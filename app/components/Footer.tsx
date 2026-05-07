import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12">

        {/* Logo + tagline */}
        <div className="space-y-4">
          <Image src="/logo.svg" alt="BAC Media" width={80} height={25} className="brightness-0 invert opacity-60" />
          <p className="text-xs text-zinc-600 leading-relaxed">
            Build. Align. Create.<br />Video &amp; Post Production.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <p className="text-xs font-bold tracking-widest uppercase text-zinc-700 mb-4">Navigation</p>
          {["#capabilities", "#process", "#about", "#contact"].map((href) => (
            <a key={href} href={href} className="block text-sm text-zinc-500 hover:text-[#ffdd15] transition-colors capitalize">
              {href.replace("#", "")}
            </a>
          ))}
        </div>

        {/* Location + legal */}
        <div className="space-y-3">
          <p className="text-xs font-bold tracking-widest uppercase text-zinc-700 mb-4">Location</p>
          <p className="text-sm text-zinc-500">Johannesburg &amp; London</p>
          <p className="text-xs text-zinc-700 pt-6">
            © {new Date().getFullYear()} BAC Media.<br />All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
