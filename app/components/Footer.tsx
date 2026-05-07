export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-lg font-bold text-white tracking-tight">
          BAC<span className="text-[#ffdd15]">media</span>
        </p>
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} BAC Media. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="#capabilities" className="hover:text-[#ffdd15] transition-colors">Capabilities</a>
          <a href="#process" className="hover:text-[#ffdd15] transition-colors">Process</a>
          <a href="#about" className="hover:text-[#ffdd15] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#ffdd15] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
