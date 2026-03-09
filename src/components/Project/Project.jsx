import React from "react";
import { motion } from "framer-motion";
import { HiDownload, HiEye, HiArrowRight, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import project1 from "../../assets/bookCourier.png";
import project2 from "../../assets/food.png";
import project3 from "../../assets/project-3.png";
import Container from "../Container";

const Project = () => {
  const projectsData = [
    {
      id: 1,
      title: "BookCourier E-commerce",
      description:
        "A fast and responsive e-commerce platform with a focus on seamless UI/UX and efficient product delivery management.",
      image: project1,
      tags: ["React", "Tailwind", "NodeJS"],
      backendLink: "https://github.com/ismailhossain-dev/backend.git",
      frontendLink: "https://github.com/ismailhossain-dev/frontend.git",
      liveLink: "https://bookcourier-project.netlify.app",
    },
    {
      id: 2,
      title: "FoodMood – Premium Food",
      description:
        "A premium food delivery experience featuring dynamic menu categories and optimized checkout flow for enthusiasts.",
      image: project2,
      tags: ["React", "Node.js", "Tailwind"],
      backendLink: "https://github.com/ismailhossain-dev/assignment-10-server-project.git",
      frontendLink: "https://github.com/ismailhossain-dev/assignment-10-client-local-food.git",
      liveLink: "https://assignment-10-food-lover.netlify.app",
    },
    {
      id: 3,
      title: "GameVault Platform",
      description:
        "An immersive gaming platform with a dark-themed aesthetic, interactive cards, and high-performance layouts.",
      image: project3,
      tags: ["React", "Firebase", "Tailwind"],
      frontendLink: "https://github.com/ismailhossain-dev/Assignment-9.git",
      liveLink: "https://assingment-9.netlify.app",
    },
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <Container>
        <section id="project" className="relative z-10 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section - Matches Skills Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div className="space-y-4">
                <h3 className="text-blue-500 font-mono tracking-tighter text-sm uppercase">
                  Selected Works
                </h3>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                  Featured <span className="text-slate-500">Projects</span>
                </h2>
              </div>
              <p className="text-slate-400 max-w-sm text-sm md:text-base leading-relaxed border-l border-slate-800 pl-6">
                A collection of web applications built with modern tools, focused on solving
                real-world problems.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group flex flex-col bg-slate-900/40 border border-slate-800/50 rounded-3xl overflow-hidden backdrop-blur-sm hover:bg-slate-800/40 transition-all duration-500"
                >
                  {/* Image Container with Custom Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-bold shadow-lg shadow-blue-900/20"
                      >
                        <HiEye size={18} /> Live Demo
                      </a>
                      <div className="flex gap-2">
                        <a
                          href={project.frontendLink}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all border border-slate-700 shadow-xl"
                          title="Frontend Code"
                        >
                          <FaGithub size={20} />
                        </a>
                        {project.backendLink && (
                          <a
                            href={project.backendLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all border border-slate-700 shadow-xl"
                            title="Backend Code"
                          >
                            <HiCode size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-lg uppercase tracking-widest border border-blue-500/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-slate-800/50">
                      <a
                        href={project.liveLink}
                        className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group/link hover:text-blue-400 transition-colors"
                      >
                        View Project Detail
                        <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Project;
