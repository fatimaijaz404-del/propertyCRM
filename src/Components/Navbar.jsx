function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
          <span className="text-white font-bold text-sm">P</span>
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">
          Property CRM
        </span>
      </div>

      <ul className="hidden md:flex gap-10 text-slate-600 font-medium text-sm">
        <li><a href="#home" className="hover:text-amber-700 transition-colors">Home</a></li>
        <li><a href="#features" className="hover:text-amber-700 transition-colors">Features</a></li>
        <li><a href="#about" className="hover:text-amber-700 transition-colors">About</a></li>
      </ul>

      <a href="#contact" className="bg-amber-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-md shadow-amber-700/20 hover:bg-amber-800 hover:shadow-lg hover:shadow-amber-700/30 hover:-translate-y-0.5 transition-all duration-200">
        Book a Demo
      </a>

    </nav>
  );
}

export default Navbar;