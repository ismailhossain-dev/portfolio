import React from "react";
import { motion } from "framer-motion";
import { HiHeart, HiMail, HiPhone, HiArrowRight, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook, FaDiscord } from "react-icons/fa";

const Footer = ({ navLinks }) => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-24 pb-10 border-t border-slate-200 dark:border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Hire Me CTA */}

        {/* Middle Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="text-3xl font-black italic tracking-tighter">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                SABBIR
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Crafting high-performance web applications with a focus on modern UI/UX and scalable
              clean code.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: FaGithub,
                  link: "https://github.com/ismailhossain-dev",
                  color: "hover:bg-slate-900",
                },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/mohammad-ismail-hossain-475183396/",
                  color: "hover:bg-blue-700",
                },
                {
                  icon: FaFacebook,
                  link: "https://web.facebook.com/md.sabbir.926093",
                  color: "hover:bg-blue-600",
                },
                { icon: FaDiscord, link: "#", color: "hover:bg-indigo-600" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 bg-slate-100 dark:bg-slate-900 rounded-xl text-slate-600 dark:text-slate-400 hover:text-white transition-all border border-transparent ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services (New Section for Professionalism) */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-2 text-slate-900 dark:text-white border-l-4 border-blue-600 pl-3">
              Services
            </h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400 font-bold text-sm">
              <li className="hover:text-blue-600 cursor-default">Full-stack Development</li>
              <li className="hover:text-blue-600 cursor-default">Frontend Architecture</li>
              <li className="hover:text-blue-600 cursor-default">UI/UX Design Integration</li>
              <li className="hover:text-blue-600 cursor-default">E-commerce Solutions</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-2 text-slate-900 dark:text-white border-l-4 border-purple-600 pl-3">
              Explore
            </h4>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors font-bold w-fit text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-2 text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-3">
              Contact Me
            </h4>
            <a
              href="mailto:programmarsabbir@gmail.com"
              className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 font-bold transition-colors group"
            >
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                <HiMail size={18} />
              </div>
              <span className="text-sm">programmarsabbir@gmail.com</span>
            </a>
            <a
              href="tel:01619408991"
              className="flex items-center gap-3 text-slate-500 dark:text-slate-400 hover:text-green-600 font-bold transition-colors group"
            >
              <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-all">
                <HiPhone size={18} />
              </div>
              <span className="text-sm">+880 1619408991 🇧🇩</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 font-bold tracking-widest uppercase text-[10px] flex items-center gap-2">
            © 2026 SABBIR — Handcrafted with <HiHeart className="text-red-500 animate-pulse" /> in
            Bangladesh
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              Terms of Use
            </span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
