import React, { useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { HiDownload, HiChatAlt2 } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import myImg from "../../assets/sabbir.jpg";
import Container from "../Container";

// Constants moved outside to prevent unnecessary re-renders
const ROLES = ["MERN STACK DEVELOPER", "FRONTEND ENGINEER", "PROBLEM SOLVER"];

const SOCIAL_LINKS = [
  { icon: <FaGithub />, href: "#", label: "Github", color: "hover:text-[#333]" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn", color: "hover:text-[#0077b5]" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook", color: "hover:text-[#1877f2]" },
  { icon: <FaTwitter />, href: "#", label: "Twitter", color: "hover:text-[#1da1f2]" },
];

const Hero = () => {
  const [text] = useTypewriter({
    words: ROLES,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  // Mouse Tracking Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <Container>
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden bg-[#fafafa] dark:bg-[#020617] transition-colors duration-500 cursor-none">
        {/* Custom Cursor */}
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-[9999] hidden md:block"
          style={{ x: cursorX, y: cursorY }}
        />

        {/* Background: Subtle Grid & Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[120px]" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-16"
        >
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Available for Hire
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400">
                Hello, I'm Ismail
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Expert in <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl">
                  {text}
                </span>
                <Cursor cursorStyle="|" />
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              I craft high-performance web applications using the
              <span className="text-slate-900 dark:text-white font-semibold"> MERN Stack</span>.
              Focused on building clean, scalable, and user-centric digital experiences.
            </motion.p>

            {/* Social Links - Responsive & Integrated */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-5 pt-2"
            >
              {SOCIAL_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={`text-xl text-slate-400 transition-all duration-300 ${link.color} hover:-translate-y-1`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <button className="group relative px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold overflow-hidden transition-all shadow-lg">
                <span className="relative z-10 flex items-center gap-2">
                  Download CV{" "}
                  <HiDownload className="group-hover:translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="px-8 py-3.5 border border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-slate-700 dark:text-slate-300">
                Let's Talk
              </button>
            </motion.div>
          </div>

          {/* Right Content: Image & Floating Elements */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Tech Stack Bubbles (Senior Touch) */}
              <TechBubble
                icon={<FaReact className="text-blue-400" />}
                className="top-0 -left-8"
                delay={0}
              />
              <TechBubble
                icon={<FaNodeJs className="text-green-500" />}
                className="bottom-20 -left-12"
                delay={1}
              />
              <TechBubble
                icon={<SiMongodb className="text-green-600" />}
                className="top-10 -right-8"
                delay={2}
              />
              <TechBubble
                icon={<SiTailwindcss className="text-cyan-400" />}
                className="bottom-10 -right-4"
                delay={1.5}
              />

              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] p-3 border border-slate-200 dark:border-slate-800 rounded-[3rem] rotate-3 hover:rotate-0 transition-transform duration-500 bg-white dark:bg-slate-900 shadow-2xl">
                <div className="w-full h-full overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-800">
                  <img
                    src={myImg}
                    alt="Ismail Portfolio"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Container>
  );
};

// Sub-component for Floating Icons
const TechBubble = ({ icon, className, delay }) => (
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay }}
    className={`absolute z-20 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 text-2xl hidden sm:block ${className}`}
  >
    {icon}
  </motion.div>
);

export default Hero;
