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
  SiJsonwebtokens,
  SiReactquery,
  SiStripe,
  SiNpm,
  SiAxios,
} from "react-icons/si";
import { TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";
import Container from "../Container";

const ALL_SKILLS = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Express", icon: SiExpress, color: "text-slate-400" },

  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "TanStack", icon: SiReactquery, color: "text-[#FF4154]" },
  { name: "Stripe", icon: SiStripe, color: "text-[#635BFF]" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-[#D63AFF]" },
  { name: "Axios", icon: SiAxios, color: "text-[#5A29E4]" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "HTML5", icon: TbBrandHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: TbBrandCss3, color: "text-[#1572B6]" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "text-[#007ACC]" },
  { name: "NPM", icon: SiNpm, color: "text-[#CB3837]" },
];

const SkillCard = ({ name, icon: Icon, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
    className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm transition-all hover:bg-slate-800/40"
  >
    {/* Subtle Glow Effect on Hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative z-10">
      <Icon
        className={`text-4xl ${color} filter drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all`}
      />
    </div>
    <span className="relative z-10 text-[12px] font-medium text-slate-400 group-hover:text-white uppercase tracking-widest transition-colors">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[140px] rounded-full" />

      <Container>
        <section id="skills" className="relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <h3 className="text-blue-500 font-mono tracking-tighter text-sm uppercase">
                  Technical Arsenal
                </h3>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                  Modern <span className="text-slate-500">Tech</span> Stack
                </h2>
              </div>
              <p className="text-slate-400 max-w-sm text-sm md:text-base leading-relaxed border-l border-slate-800 pl-6">
                I use the latest tools and technologies to build scalable, high-performance web
                applications.
              </p>
            </div>

            {/* Grid Layout - 1 Row on Mobile, Grid on Larger */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {ALL_SKILLS.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </div>

            {/* Bottom Accent Line */}
            <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Skills;
