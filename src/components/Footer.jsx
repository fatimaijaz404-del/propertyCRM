import logo from "../assets/logo.png";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 3H21l-6.55 7.49L22.5 21h-6.62l-5.19-6.62L4.7 21H2.6l7.02-8.02L1.5 3h6.78l4.68 6.06L18.9 3Zm-1.16 16.17h1.17L7.34 4.75H6.08l11.66 14.42Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.25 1.22.6 1.77 1.15.5.5.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.25-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 6.5 4.27 6.82 4.27 9.5v5c0 2.68.01 3 .06 4.04.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.04.06-1.36.06-4.04v-5c0-2.68-.01-3-.06-4.04-.04-.87-.18-1.34-.3-1.65a2.75 2.75 0 0 0-.66-1.02 2.75 2.75 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8Zm0 3.32a4.88 4.88 0 1 1 0 9.76 4.88 4.88 0 0 1 0-9.76Zm0 8.04a3.16 3.16 0 1 0 0-6.32 3.16 3.16 0 0 0 0 6.32Zm5.08-8.24a1.14 1.14 0 1 1-2.28 0 1.14 1.14 0 0 1 2.28 0Z" />
  </svg>
);

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
              <FacebookIcon />
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
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition"
            >
              <InstagramIcon />
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
