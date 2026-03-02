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
  SiNpm,
  SiGooglechrome,
  SiAxios,
  SiReacthookform,
} from "react-icons/si";
import { TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";
import Container from "../Container";

const ALL_SKILLS = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Express", icon: SiExpress, color: "text-slate-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "GitHub", icon: SiGithub, color: "text-slate-900 dark:text-white" },
  { name: "TanStack", icon: SiReactquery, color: "text-[#FF4154]" },
  { name: "Stripe", icon: SiStripe, color: "text-[#635BFF]" },
  { name: "Redux", icon: SiReacthookform, color: "text-[#EC5990]" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-[#D63AFF]" },
  { name: "Vercel", icon: SiVercel, color: "text-slate-900 dark:text-white" },
  { name: "Axios", icon: SiAxios, color: "text-[#5A29E4]" },
  { name: "HTML5", icon: TbBrandHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: TbBrandCss3, color: "text-[#1572B6]" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "text-[#007ACC]" },
  { name: "NPM", icon: SiNpm, color: "text-[#CB3837]" },
];

const SkillCard = ({ name, icon: Icon, color, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.03, duration: 0.3 }}
    whileHover={{ y: -4, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
    className="group flex items-center gap-3 p-3 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 rounded-xl transition-all hover:border-blue-500/30 shadow-sm hover:shadow-md"
  >
    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
      <Icon className={`text-xl ${color} transition-transform group-hover:scale-110`} />
    </div>
    <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-300 tracking-tight">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <Container>
      <section
        id="skills"
        className="relative py-24 px-6 bg-white dark:bg-[#020617] transition-colors duration-500"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
              Modern Tech{" "}
              <span className="text-slate-400 dark:text-slate-600 italic font-serif font-light">
                Skills
              </span>
            </h2>
          </div>

          {/* Unified Flex/Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {ALL_SKILLS.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>

          {/* Minimalist Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 pt-8 border-t border-slate-100 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6"
          ></motion.div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
