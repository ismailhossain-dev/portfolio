import React from "react";
import { motion } from "framer-motion";
import myImg from "../../assets/sabbir.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 ">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-[25rem] h-[25rem] bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 space-y-8 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-widest uppercase mt-7">
            🚀 Full-Stack Developer
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
            I'm <br />
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Ismail Hossain
            </motion.span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
            Creative developer specializing in building{" "}
            <span className="text-slate-900 dark:text-white font-bold underline underline-offset-4 decoration-blue-500/50">
              digital experiences
            </span>
            .
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <motion.a
              href="#project"
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-10 py-4 rounded-2xl bg-blue-600 text-white font-black shadow-xl"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-10 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-black"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="relative group">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-[4rem] bg-white dark:bg-slate-800 shadow-2xl p-4 z-10 overflow-hidden border border-slate-100 dark:border-slate-700"
            >
              <div className="w-full h-full overflow-hidden rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={myImg}
                  alt="Sabbir Profile"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
