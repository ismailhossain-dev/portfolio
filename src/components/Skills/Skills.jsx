import React from "react";
import { motion } from "framer-motion";
import { BiLogoVisualStudio } from "react-icons/bi";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiVercel,
  SiGithub,
  SiReactrouter,
  SiJsonwebtokens,
  SiReactquery,
  SiStripe,
  SiNetlify,
  SiEslint,
  SiPrettier,
  SiNpm, // অনেক সময় SiNPM কাজ না করলে SiNpm কাজ করে
  SiGooglechrome,
  SiAxios,
  SiReacthookform,
} from "react-icons/si";
import { TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";

const SkillBadge = ({ name, icon: Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: delay * 0.05 }}
    whileHover={{ y: -5 }}
    className="relative group flex flex-col items-center"
  >
    {/* Glow Background Effect */}
    <div
      className={`absolute -inset-3 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-15 blur-xl transition-all duration-500 rounded-full`}
    />

    <div className="relative flex flex-col items-center gap-3">
      <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm group-hover:shadow-xl group-hover:border-transparent transition-all duration-300">
        <Icon
          className={`text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110 ${color}`}
        />
      </div>
      <span className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        {name}
      </span>
    </div>
  </motion.div>
);

const SkillCategory = ({ title, skills, colorGradient }) => (
  <div className="mb-16 w-full">
    <div className="flex items-center gap-4 mb-10">
      <h3
        className={`text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap px-4 py-1.5 rounded-lg bg-gradient-to-r ${colorGradient} text-white`}
      >
        {title}
      </h3>
      <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800 opacity-50"></div>
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
      {skills.map((skill, index) => (
        <SkillBadge key={skill.name} {...skill} delay={index} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const categories = {
    proficient: [
      { name: "React.js", icon: SiReact, color: "text-blue-400" },
      { name: "JS ES6+", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: TbBrandHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: TbBrandCss3, color: "text-blue-600" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "React Router", icon: SiReactrouter, color: "text-red-500" },
    ],
    comfortable: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-slate-800 dark:text-white" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
      { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
      { name: "TanStack Query", icon: SiReactquery, color: "text-red-400" },
      { name: "Axios", icon: SiAxios, color: "text-indigo-500" },
      { name: "Hook Form", icon: SiReacthookform, color: "text-pink-600" },
      { name: "Stripe", icon: SiStripe, color: "text-indigo-600" },
    ],
    tools: [
      { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-500" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-900 dark:text-white" },
      { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
      { name: "Netlify", icon: SiNetlify, color: "text-cyan-500" },
      { name: "Figma", icon: SiFigma, color: "text-purple-500" },
      { name: "Chrome Dev", icon: SiGooglechrome, color: "text-yellow-500" },
      { name: "NPM", icon: SiNpm, color: "text-red-600" },
      { name: "ESLint", icon: SiEslint, color: "text-indigo-400" },
      { name: "Prettier", icon: SiPrettier, color: "text-pink-400" },
    ],
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-slate-50/50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-mono text-sm tracking-[0.3em] uppercase block mb-4"
          >
            Technical Stack
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
            My Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Expertise
            </span>
          </h2>
        </div>

        <SkillCategory
          title="Proficient"
          skills={categories.proficient}
          colorGradient="from-blue-600 to-cyan-500"
        />
        <SkillCategory
          title="Comfortable"
          skills={categories.comfortable}
          colorGradient="from-purple-600 to-pink-500"
        />
        <SkillCategory
          title="Tools & Ecosystem"
          skills={categories.tools}
          colorGradient="from-emerald-500 to-teal-400"
        />
      </div>
    </section>
  );
};

export default Skills;
