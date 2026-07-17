import logo from "../assets/logo.png";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-6 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Contact Info */}
        <div>
          <img src={logo} alt="Property CRM" className="h-10 mb-5" />

          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <span className="text-green-700">📞</span>
              +971 457 13703
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-700">📞</span>
              +92 300 1110365
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-700">✉️</span>
              info@propertycrm.net
            </p>
            <p className="flex items-start gap-2">
              <span className="text-green-700">🏢</span>
              Office #1904, Metropolis Tower Business Bay
              <br />
              Dubai, UAE
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition"
            >
              <span className="font-bold text-lg">P</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Features & Benefits */}
        <div>
          <h4 className="text-lg font-bold text-slate-900 mb-5">
            Features & Benefits
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> Cloud Enabled
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> Biggest Sale Assets
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> Organize Sale Activities
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> AI Tools
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-slate-900 mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> About Us
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> Contact us
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> Features
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> Blogs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-900">›</span> Sitemap
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold text-slate-900 mb-5">
            Newsletter
          </h4>
          <p className="text-gray-700 mb-5">
            Register now to avail discounts & Latest update.
          </p>
          <div className="flex rounded-full overflow-hidden shadow bg-white">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button className="bg-green-700 text-white font-semibold px-5 py-2 text-sm hover:bg-green-800 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-12 pt-5 text-center text-sm text-gray-500">
        © 2025 Property CRM | All Rights Reserved. Powered By{" "}
        <a href="#" className="hover:text-green-700">
          Connect Solutions
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923001110365"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <span className="text-white text-2xl">💬</span>
      </a>
    </footer>
  );
};

export default Footer;
