import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">

      <div className="flex items-center">
        <img src={logo} alt="Property CRM Logo" className="h-12 w-auto" />
      </div>

      <ul className="hidden md:flex gap-8 text-slate-700 font-semibold text-[15px]">
        <li><a href="#home" className="hover:text-emerald-700 transition-colors">Home</a></li>
        <li><a href="#features" className="hover:text-emerald-700 transition-colors">Features</a></li>
        <li><a href="#about" className="hover:text-emerald-700 transition-colors">About</a></li>
      </ul>

      <div className="flex items-center gap-6">
        <a href="https://wa.me/923001110365" className="hidden lg:flex items-center gap-2.5 text-slate-800 font-semibold text-[15px] hover:text-emerald-700 transition-colors">
          <span className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.68 2 12.04 2Z"/>
            </svg>
          </span>
          +92 300 1110365
        </a>

        <a href="#contact" className="bg-emerald-700 text-white px-7 py-3 rounded-full font-semibold text-[15px] shadow-md shadow-emerald-700/25 hover:bg-emerald-800 hover:shadow-lg transition-all duration-200">
          Book a Demo
        </a>
      </div>

    </nav>
  );
}

export default Navbar;