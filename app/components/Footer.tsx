import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="space-y-3">
          <Image src="/logo.svg" alt="BAC Media" width={76} height={24} className="brightness-0 invert opacity-50" />
          <p className="text-xs text-zinc-700 leading-relaxed pt-1">
            Build. Align. Create.<br />Video &amp; Post Production.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-700 mb-4">Navigation</p>
          {[["Capabilities", "#capabilities"], ["Process", "#process"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} href={href} className="block text-sm text-zinc-600 hover:text-[#ffdd15] transition-colors">{label}</a>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-700 mb-4">Offices</p>
          <p className="text-sm text-zinc-600">Johannesburg</p>
          <p className="text-sm text-zinc-600">Cape Town</p>
          <p className="text-sm text-zinc-600">London</p>
          <p className="text-xs text-zinc-800 pt-6">© {new Date().getFullYear()} BAC Media</p>
        </div>
      </div>
    </footer>
  );
}
