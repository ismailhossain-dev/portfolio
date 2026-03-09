import React from "react";
import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Qualification = () => {
  const education = [
    {
      title: "H.S.C (Class 12)",
      institute: "Kachalong Govt.High School ",
      duration: "2023 - Present",
      desc: "Currently pursuing Higher Secondary Certificate. Focusing on core subjects and skill development.",
    },
    {
      title: "S.S.C (Secondary School)",
      institute: "Upazila Administration School & College",
      duration: "2021 - 2023",
      desc: "Successfully completed Secondary School Certificate with a strong academic record.",
    },
    {
      title: "Junior School (Class 8)",
      institute: "Upazila Administration School & College",
      duration: "2018 - 2020",
      desc: "Completed Junior School Certificate (JSC) and developed a foundation in science and math.",
    },
    {
      title: "Primary School (Class 5)",
      institute: "Baghaichhari Government Primary School",
      duration: "2013 - 2017",
      desc: "Early education journey and completed Primary School Certificate (PSC).",
    },
  ];

  return (
    <section
      id="qualification"
      className="py-20 px-4 md:py-32 relative overflow-hidden bg-[#020617] bg-[radial-gradient(circle_at_50%_50%,#0f172a_0%,#020617_100%)]"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-24 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]"></div>

      {/* Header Section */}
      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="flex items-center justify-center gap-2 text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4">
            <Sparkles size={14} className="animate-pulse" /> My Academic Path
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Quali<span className="text-indigo-500">fication</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Label Container */}
        <div className="flex justify-center mb-20">
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 px-10 py-4 rounded-3xl flex items-center gap-4 shadow-2xl">
            <GraduationCap className="text-indigo-500 w-6 h-6" />
            <span className="text-white font-black tracking-[0.2em] uppercase text-xs md:text-sm">
              Educational Journey
            </span>
          </div>
        </div>

        {/* Timeline Logic */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"></div>

          <div className="space-y-12 md:space-y-20">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[46%] pl-16 md:pl-0">
                  <div className="group relative p-6 md:p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-indigo-500/40 transition-all duration-500 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    {/* Duration Badge */}
                    <div
                      className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                    >
                      <div className="bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                        <span className="text-indigo-400 font-bold text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-2">
                          <Calendar size={12} /> {item.duration}
                        </span>
                      </div>
                    </div>

                    <h3
                      className={`text-xl md:text-2xl font-black text-white group-hover:text-indigo-400 transition-colors leading-tight ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`flex items-center gap-2 text-slate-400 text-sm font-bold mt-3 mb-4 ${
                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      <MapPin size={14} className="text-indigo-500" />
                      {item.institute}
                    </p>

                    <p
                      className={`text-slate-500 text-xs md:text-sm leading-relaxed font-medium ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      {item.desc}
                    </p>

                    {/* Decorative Corner Light */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Timeline Node (Center Dot) */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="relative group/node">
                    <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-40 group-hover/node:opacity-100 animate-pulse transition-opacity"></div>
                    <div className="relative w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-950 border-[3px] border-indigo-600 z-10 group-hover/node:scale-125 group-hover/node:bg-indigo-600 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Empty Space for Desktop Grid */}
                <div className="hidden md:block w-[46%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
