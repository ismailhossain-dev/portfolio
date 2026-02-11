import React from "react";
import { motion } from "framer-motion";
import { HiMail, HiChatAlt2, HiPhone } from "react-icons/hi"; // HiPhone যোগ করা হয়েছে
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase italic text-slate-900 dark:text-white">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium italic">
            Any project in mind? Let's turn it into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Phone Number Card */}
            <a
              href="tel:01619408991"
              className="block p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:border-green-500 transition-all group"
            >
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                <HiPhone size={28} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">
                Phone & WhatsApp 🇧🇩
              </h3>
              <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-green-500 transition-colors tracking-tighter">
                +880 1619408991
              </p>
            </a>

            {/* Email Card */}
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <HiMail size={28} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">
                Email
              </h3>
              <p className="text-lg font-bold text-slate-900 dark:text-white tracking-tighter">
                programmarsabbir@gmail.com
              </p>
            </div>

            {/* Social Media Card */}
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <HiChatAlt2 size={28} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mohammad-ismail-hossain-475183396/"
                  className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-md"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/ismailhossain-dev"
                  className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-950 dark:hover:bg-white dark:hover:text-black transition-all shadow-md"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://web.facebook.com/md.sabbir.926093"
                  className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-500 hover:text-white transition-all shadow-md"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 rounded-[3.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 ring-blue-500 transition-all dark:text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 ring-blue-500 transition-all dark:text-white"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="md:col-span-2 w-full px-6 py-4 rounded-[2rem] bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 ring-blue-500 transition-all resize-none dark:text-white"
              ></textarea>
              <button className="md:col-span-2 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] active:scale-95 text-white font-black uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]">
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
