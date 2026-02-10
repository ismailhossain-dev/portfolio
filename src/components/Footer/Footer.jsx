import React from "react";
import { HiHeart } from "react-icons/hi";

const Footer = ({ navLinks }) => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <div className="text-3xl font-black italic tracking-tighter">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SABBIR
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Crafting high-performance web applications with a focus on user experience and clean
            code.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-black uppercase tracking-widest mb-2">Quick Links</h4>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors font-bold w-fit"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-black uppercase tracking-widest mb-2">Subscribe</h4>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
            Get the latest updates on my projects and blogs.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-slate-100 dark:border-slate-900">
        <p className="text-slate-500 font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-2">
          © 2026 SABBIR — Built with <HiHeart className="text-red-500 animate-bounce" /> in
          Bangladesh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
