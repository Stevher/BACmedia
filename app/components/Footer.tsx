export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xl font-bold text-white tracking-tight">
          BAC<span className="text-blue-500">media</span>
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} BAC Media. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#capabilities" className="hover:text-gray-300 transition-colors">Capabilities</a>
          <a href="#process" className="hover:text-gray-300 transition-colors">Process</a>
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
