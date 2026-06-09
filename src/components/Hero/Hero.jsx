import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import myImg from "../../assets/myImage.jpg";
import Container from "../Container";

const ROLES = ["MERN Stack Developer", "Frontend Developer"];

const SOCIAL_LINKS = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/ismailhossain-dev",
    label: "Github",
    color: "hover:text-white hover:border-slate-700 hover:bg-slate-900",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    href: "https://www.linkedin.com/in/mohammad-ismail-hossain-475183396",
    label: "LinkedIn",
    color: "hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5",
  },
  {
    icon: <FaFacebookF size={18} />,
    href: "https://web.facebook.com/md.sabbir.926093",
    label: "Facebook",
    color: "hover:text-[#1877f2] hover:border-[#1877f2]/30 hover:bg-[#1877f2]/5",
  },
];

const Hero = () => {
  const [text] = useTypewriter({
    words: ROLES,
    loop: true,
    delaySpeed: 2000,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // এখানে bg-[#030712] পরিবর্তন করে bg-transparent করা হয়েছে এবং ভেতরের ব্যাকগ্রাউন্ড ডিভগুলো সরানো হয়েছে।
    <section className="relative min-h-screen flex items-center bg-transparent pt-28 pb-16 md:py-24 overflow-hidden">
      <Container>
        <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Content (Spans 7 columns on large screens) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="text-center lg:text-left lg:col-span-7 order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400/90">
                Available for Hire
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Ismail</span>
              <br />
              <span className="text-2xl sm:text-4xl md:text-5xl font-bold inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium"
            >
              I build high-performance, accessible, and scalable web applications using the
              <span className="text-white font-semibold"> MERN Stack</span>. Focused on crafting clean code and exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://docs.google.com/document/d/1-1w49whhg-f-UDQb3x1pbcSqaEJMQZwECEk7LrgPNb8/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 text-sm tracking-wide"
              >
                View Resume <FiArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 border border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700 text-slate-200 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm tracking-wide"
              >
                Contact Me <FiSend size={15} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeIn}
              className="flex gap-4 mt-10 justify-center lg:justify-start text-slate-400"
            >
              {SOCIAL_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-11 h-11 flex items-center justify-center rounded-xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-sm transition-all duration-300 ${link.color}`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Modern Framed Image (Spans 5 columns on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end lg:col-span-5 order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] group">
              
              {/* background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Spinning Accent border */}
              <div className="absolute -inset-3 rounded-[2rem] border-2 border-dashed border-slate-800/60 group-hover:border-blue-500/40 transition-colors duration-500 animate-[spin_60s_linear_infinite]" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={myImg}
                  alt="Ismail Hossain"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                />
                {/* Overlay Gradient on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Status Card */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-slate-900/90 border border-slate-800/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-black text-lg sm:text-xl">6+</span>
                </div>
                <div>
                  <p className="text-white font-bold text-xs sm:text-sm tracking-wide">Months</p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Experience</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;