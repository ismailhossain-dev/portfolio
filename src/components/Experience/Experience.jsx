import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full opacity-20" />

          {/* Item 1 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 group">
            <div className="hidden md:flex w-5/12 justify-end pr-12">
              <span className="text-xl font-black text-slate-400">2023 - 2024</span>
            </div>
            <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white dark:bg-slate-950 border-4 border-blue-600 rounded-full z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="ml-12 md:ml-0 md:w-5/12 p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <span className="md:hidden block mb-2 font-bold text-blue-600">2023 - 2024</span>
              <h3 className="text-2xl font-black mb-1">MERN Stack Graduate</h3>
              <h4 className="text-blue-600 font-bold mb-4 text-sm tracking-widest uppercase">
                Programming Hero
              </h4>
              <p className="text-slate-600 dark:text-slate-400 italic font-medium">
                একদম জিরো থেকে ওয়েব ডেভেলপমেন্টের যাত্রা শুরু। ফুল স্ট্যাক প্রজেক্টের মাধ্যমে
                রিয়েল লাইফ প্রবলেম সলভিং শিখেছি।
              </p>
            </motion.div>
          </div>

          {/* Item 2 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 ml-12 md:ml-0 md:w-5/12 p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl md:text-right"
            >
              <span className="md:hidden block mb-2 font-bold text-purple-600">Present</span>
              <h3 className="text-2xl font-black mb-1">Independent Developer</h3>
              <h4 className="text-purple-600 font-bold mb-4 text-sm tracking-widest uppercase">
                Freelance & Open Source
              </h4>
              <p className="text-slate-600 dark:text-slate-400 italic font-medium">
                গত ৮ মাস ধরে ক্লায়েন্টদের জন্য কাস্টম ওয়েব সলিউশন এবং পার্সোনাল প্রজেক্ট নিয়ে কাজ
                করছি।
              </p>
            </motion.div>
            <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white dark:bg-slate-950 border-4 border-purple-600 rounded-full z-10 shadow-[0_0_20px_rgba(147,51,234,0.4)]" />
            <div className="hidden md:flex w-5/12 pl-12 order-2">
              <span className="text-xl font-black text-slate-400">Present Status</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
