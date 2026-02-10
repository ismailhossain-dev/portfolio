import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";

const Project = () => {
  const projects = [1, 2, 3]; // আপনি পরে এখানে আপনার ডাটা বসাতে পারবেন

  return (
    <section id="project" className="py-32 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Featured <span className="text-blue-600">Work</span>
          </h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="p-4 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                  >
                    <HiExternalLink size={24} />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-slate-800 text-white rounded-full hover:bg-blue-600 transition-all shadow-xl"
                  >
                    <HiCode size={24} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-[10px] font-black rounded-full uppercase">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-[10px] font-black rounded-full uppercase">
                    Tailwind
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-blue-600 transition-colors">
                  Creative Platform {item}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium italic">
                  একটি ফাস্ট এবং রেসপন্সিভ ওয়েব অ্যাপ্লিকেশন যা ইউজার ইন্টারফেসের ওপর ফোকাস করা।
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-black uppercase text-xs tracking-widest"
                >
                  Live Demo <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
