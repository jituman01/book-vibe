import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-20">
      <div className="footer container mx-auto p-10 flex flex-col md:flex-row justify-between items-start">
        {/* Brand Section */}
        <aside className="max-w-xs">
          <h2 className="text-3xl font-bold mb-4">Book Vibe</h2>
          <p className="text-gray-500">
            Discover your next favorite book with us. We provide the best collection 
            of books to keep your vibe alive.
          </p>
          <div className="flex gap-4 mt-4">
             {/* Social Icons (Optional) */}
             <button className="btn btn-ghost btn-circle btn-sm">FB</button>
             <button className="btn btn-ghost btn-circle btn-sm">TW</button>
             <button className="btn btn-ghost btn-circle btn-sm">IG</button>
          </div>
        </aside>

        {/* Links Sections */}
        <nav>
          <h6 className="footer-title opacity-100 font-bold text-lg text-black">Services</h6>
          <a className="link link-hover text-gray-500">Branding</a>
          <a className="link link-hover text-gray-500">Design</a>
          <a className="link link-hover text-gray-500">Marketing</a>
          <a className="link link-hover text-gray-500">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-lg text-black">Company</h6>
          <a className="link link-hover text-gray-500">About us</a>
          <a className="link link-hover text-gray-500">Contact</a>
          <a className="link link-hover text-gray-500">Jobs</a>
          <a className="link link-hover text-gray-500">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-lg text-black">Legal</h6>
          <a className="link link-hover text-gray-500">Terms of use</a>
          <a className="link link-hover text-gray-500">Privacy policy</a>
          <a className="link link-hover text-gray-500">Cookie policy</a>
        </nav>
      </div>

      {/* Bottom Footer */}
      <div className="footer footer-center p-4 bg-base-300 text-base-content border-t border-gray-300">
        <aside>
          <p>© {new Date().getFullYear()} - All right reserved by <strong>Book Vibe</strong> Ltd.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;