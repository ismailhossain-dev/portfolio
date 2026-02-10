import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", color: "text-blue-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Tailwind", color: "text-cyan-400" },
    { name: "MongoDB", color: "text-green-600" },
    { name: "Express", color: "text-slate-400" },
    { name: "Firebase", color: "text-yellow-500" },
    { name: "Framer Motion", color: "text-pink-500" },
    { name: "GitHub", color: "text-slate-900 dark:text-white" },
  ];

  return (
    <section
      id="skill"
      className="py-32 px-6 flex flex-col items-center bg-white dark:bg-slate-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase italic">
          Skills <span className="text-blue-600">&</span> Tools
        </h2>
        <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, rotate: 2 }}
            className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 shadow-lg flex flex-col items-center justify-center gap-4 group"
          >
            <div
              className={`w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center ${skill.color} text-3xl font-black shadow-inner`}
            >
              {skill.name[0]}
            </div>
            <span className="font-bold text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
