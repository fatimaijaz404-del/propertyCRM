import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">

      <div className="flex items-center gap-2.5">
        <img src={logo} alt="Property CRM Logo" className="h-9 w-auto" />
        <span className="text-xl font-bold tracking-tight">
          <span className="text-slate-900">Property</span>
          <span className="text-emerald-700">CRM</span>
        </span>
      </div>

      <ul className="hidden md:flex gap-10 text-slate-600 font-medium text-sm">
        <li><a href="#home" className="hover:text-emerald-700 transition-colors">Home</a></li>
        <li><a href="#features" className="hover:text-emerald-700 transition-colors">Features</a></li>
        <li><a href="#about" className="hover:text-emerald-700 transition-colors">About</a></li>
      </ul>

      <a href="#contact" className="bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-md shadow-emerald-700/20 hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-700/30 hover:-translate-y-0.5 transition-all duration-200">
        Book a Demo
      </a>

    </nav>
  );
}

export default Navbar;