import React from "react";
import { motion } from "framer-motion";
import { HiMail, HiChatAlt2 } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
            Any project in mind? Let's turn it into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <HiMail size={28} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">
                Email
              </h3>
              <p className="text-lg font-bold">programmarsabbir@gmail.com</p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <HiChatAlt2 size={28} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-950 dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-500 hover:text-white transition-all"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 rounded-[3.5rem] bg-white dark:bg-slate-900 border border-slate-200 shadow-2xl">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-blue-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-blue-500 transition-all"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="md:col-span-2 w-full px-6 py-4 rounded-[2rem] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 ring-blue-500 transition-all resize-none"
              ></textarea>
              <button className="md:col-span-2 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest transition-all shadow-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
