import React from "react";
import { motion } from "framer-motion";
import { HiDownload, HiChatAlt2 } from "react-icons/hi";
//etar madome meanStack write ta hoyteche
import { Cursor, useTypewriter } from "react-simple-typewriter";
import myImg from "../../assets/sabbir.jpg";

const Hero = () => {
  // Typewriter effect setup
  const [text] = useTypewriter({
    words: ["MERN STACK DEVELOPER.", "FRONTEND DEVELOPER.", "Problem Solver."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-30 overflow-hidden bg-slate-50 dark:bg-slate-950 "
    >
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[35rem] h-[35rem] bg-purple-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-8 text-center md:text-left"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              Available for New Projects
            </span>
          </div>

          {/* Headline with Typewriter */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter text-slate-900 dark:text-white">
              I AM A <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent italic">
                {text}
              </span>
              <Cursor cursorColor="#3b82f6" />
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium italic">
            Hi, I'm <span className="text-slate-900 dark:text-white font-bold">Ismail Hossain</span>
            . I work with the latest technologies to build web applications that are fast,
            responsive, and user-friendly. I am passionate about learning new technologies and
            building innovative solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 justify-center md:justify-start pt-6">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase text-sm tracking-widest shadow-2xl transition-all"
            >
              Download CV <HiDownload size={20} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 border-2 border-blue-600 dark:border-blue-500 font-black uppercase text-sm tracking-widest shadow-lg transition-all"
            >
              Let's Talk <HiChatAlt2 size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[5rem] rotate-6 scale-105 blur-sm" />

          <div className="relative group">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-[5rem] bg-white dark:bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] p-4 z-10 overflow-hidden border border-slate-100 dark:border-slate-800"
            >
              <div className="w-full h-full overflow-hidden rounded-[4rem] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={myImg}
                  alt="Sabbir Profile"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-1 -right-6 md:right-0 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 dark:border-slate-700 hidden sm:block"
            >
              <div className="text-center z">
                <span className="block text-3xl font-black text-blue-600 tracking-tighter">
                  06+
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Month Experience
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
