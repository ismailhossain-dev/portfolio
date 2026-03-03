import React from "react";
import { Award, Headphones, Download, ArrowRight, Sparkles, Code2 } from "lucide-react";
import { motion } from "framer-motion"; // Scroll animation er jonno
import sabbirImage from "../../assets/sabbir.jpg";
import { HiDownload } from "react-icons/hi";

const AboutMe = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 lg:px-8 relative overflow-hidden bg-[#020617]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
          About <span className="text-indigo-500">Me</span>
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Image with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative group flex justify-center lg:sticky lg:top-32"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition duration-700"></div>

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-[420px] xl:h-[420px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 group-hover:rotate-2">
            <img
              src={sabbirImage}
              alt="Sabbir - MERN Developer"
              className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="lg:col-span-7 space-y-10">
          {/* Professional Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] flex items-center gap-5 group hover:border-indigo-500/40 transition-all shadow-xl"
            >
              <div className="bg-indigo-500/10 p-4 rounded-2xl text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Award size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-wide">Experience</h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  7+ Months Active
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] flex items-center gap-5 group hover:border-indigo-500/40 transition-all shadow-xl"
            >
              <div className="bg-purple-500/10 p-4 rounded-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Headphones size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-wide">Support</h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  Online 24/7
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bio Content Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/20 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-[2.5rem] relative group"
          >
            <Code2 className="absolute top-6 right-8 text-indigo-500/20 w-12 h-12" />

            <div className="relative space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
              <p>
                I am a passionate{" "}
                <span className="text-white font-bold border-b-2 border-indigo-500/50">
                  MERN Stack Developer
                </span>{" "}
                with hands-on experience in building modern and responsive web applications. I
                specialize in{" "}
                <span className="text-indigo-400 font-bold italic tracking-wide">
                  React.js, Node.js, Express.js, and MongoDB
                </span>
                .
              </p>

              <p>
                Focusing on creating clean UI, secure authentication, and scalable full-stack
                solutions, I have developed several projects including{" "}
                <span className="text-white font-semibold italic uppercase text-sm">
                  E-commerce platforms, dashboards, and portfolio websites
                </span>
                .
              </p>

              <p className="text-slate-400 text-sm md:text-base border-l-4 border-indigo-600 pl-6 py-2 bg-indigo-500/5 rounded-r-xl">
                Experienced with Firebase, REST APIs, and Git. Currently advancing my skills in
                performance optimization and real-world problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <motion.a
              href="/resume.pdf"
              download="Sabbir_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold overflow-hidden transition-all shadow-lg flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV{" "}
                <HiDownload
                  className="group-hover:translate-y-0.5 transition-transform"
                  size={18}
                />
              </span>

              {/* Blue Hover Slide Up Effect */}
              <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>

            {/* Let's Talk Button (আগের স্টাইল) */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-800/40 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/40 text-white px-10 py-3.5 rounded-xl font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all group"
            >
              Let's Talk
              <ArrowRight
                size={20}
                className="text-indigo-500 group-hover:translate-x-2 transition-transform"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
