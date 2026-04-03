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
    icon: <FaGithub />,
    href: "https://github.com/ismailhossain-dev",
    label: "Github",
    color: "hover:text-white",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/mohammad-ismail-hossain-475183396",
    label: "LinkedIn",
    color: "hover:text-[#0077b5]",
  },
  {
    icon: <FaFacebookF />,
    href: "https://web.facebook.com/md.sabbir.926093",
    label: "Facebook",
    color: "hover:text-[#1877f2]",
  },
];

const Hero = () => {
  const [text] = useTypewriter({
    words: ROLES,
    loop: true,
    delaySpeed: 2000,
  });

  // সিম্পল এবং ফাস্ট অ্যানিমেশন ভেরিয়েন্ট
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#020617] py-16 overflow-hidden">
      {/* Background - গ্রিড ইফেক্ট যা দ্রুত লোড হয় */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeIn}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                🚀 Available for Hire
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6"
            >
              I'm <span className="text-blue-500">Ismail Hossain</span>
              <br />
              <span className="text-slate-400 text-3xl md:text-5xl">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build high-performance, accessible, and scalable web applications using the
              <span className="text-white font-semibold"> MERN Stack</span>. Focused on clean code
              and great UX.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5"
            >
              <a
                href="https://docs.google.com/document/d/1-1w49whhg-f-UDQb3x1pbcSqaEJMQZwECEk7LrgPNb8/edit?usp=sharing"
                target="_blank"
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                View Resume <FiArrowUpRight />
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-slate-700 hover:border-blue-500 text-white rounded-lg font-bold transition-all flex items-center gap-2"
              >
                Contact Me <FiSend />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeIn}
              className="flex gap-6 mt-10 justify-center lg:justify-start text-2xl text-slate-500"
            >
              {SOCIAL_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${link.color} transition-colors`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Clean Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                <img
                  src={myImg}
                  alt="Ismail"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Stats/Experience Badge - কোম্পানি এগুলো বেশি নোটিস করে */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-xl">
                <p className="text-blue-500 font-bold text-2xl">6+</p>
                <p className="text-slate-400 text-xs uppercase tracking-tighter">
                  Month of Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
