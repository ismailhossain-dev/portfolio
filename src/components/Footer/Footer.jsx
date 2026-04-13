import React from "react";
import { motion } from "framer-motion";
import { HiHeart, HiMail, HiPhone, HiArrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Container from "../Container";

const Footer = ({ navLinks }) => {
  return (
    <footer className="relative bg-[#020617] pt-24 pb-10 border-t border-slate-900 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Middle Section: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand & Socials */}
            <div className="space-y-8 text-center md:text-left">
              <div className="text-3xl font-bold tracking-tighter">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  ISMAIL
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Crafting high-performance web applications with a focus on modern UI/UX and scalable
                clean code.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {[
                  {
                    icon: FaGithub,
                    link: "https://github.com/ismailhossain-dev",
                    color: "hover:text-[#fff]",
                  },
                  {
                    icon: FaLinkedin,
                    link: "https://www.linkedin.com/in/mohammad-ismail-hossain-475183396/",
                    color: "hover:text-[#0077b5]",
                  },
                  {
                    icon: FaFacebook,
                    link: "https://web.facebook.com/md.sabbir.926093",
                    color: "hover:text-[#1877f2]",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-slate-500 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col space-y-5 text-center md:text-left">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] opacity-50">
                Services
              </h4>
              <ul className="space-y-3 text-slate-400 text-sm font-medium">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  MERN Development
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Frontend Architecture
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  UI/UX Implementation
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-5 text-center md:text-left">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] opacity-50">
                Explore
              </h4>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] opacity-50">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:programmarsabbir@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <HiMail
                    className="text-blue-500 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className="text-sm">programmarsabbir@gmail.com</span>
                </a>
                <a
                  href="tel:01619408991"
                  className="flex items-center justify-center md:justify-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <HiPhone
                    className="text-indigo-500 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <span className="text-sm">+880 1619408991</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
