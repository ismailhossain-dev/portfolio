import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink, HiCode, HiEye } from "react-icons/hi"; // আইকন আপডেট
import { FaGithub } from "react-icons/fa"; // গিথুব আইকনের জন্য
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
        "A fast and responsive e-commerce platform with a strong focus on user interface (UI)",
      image: project1,
      tags: ["React", "Tailwind", "NodeJS"],
      backendLink: "https://github.com/ismailhossain-dev/backend.git",
      frontendLink: "https://github.com/ismailhossain-dev/frontend.git",
      liveLink: "https://bookcourier-project.netlify.app",
    },
    {
      id: 3,
      title: "FoodMood – Premium Food Delivery",
      description:
        "A fast and responsive food ordering platform designed for a seamless user experience. It features a modern UI, dynamic menu categories, and an optimized checkout flow for food enthusiasts.",
      image: project2,
      tags: ["React", "Node.js", "Tailwind"],
      backendLink: "https://github.com/ismailhossain-dev/assignment-10-server-project.git",
      frontendLink: "https://github.com/ismailhossain-dev/assignment-10-client-local-food.git",
      liveLink: "https://assignment-10-food-lover.netlify.app",
    },
    {
      id: 2,
      title: "GameVault",
      description:
        "An immersive and high-performance gaming platform designed for enthusiasts. Featuring a dark-themed aesthetic, interactive game cards, and a fully responsive layout optimized for a seamless gaming experience.l",
      image: project3,
      tags: ["React", "Firebase", "Tailwind"],

      frontendLink: "https://github.com/ismailhossain-dev/Assignment-9.git",
      liveLink: "https://assingment-9.netlify.app",
    },
  ];

  return (
    <Container>
      <section
        id="project"
        className="relative py-32 px-6 bg-white dark:bg-slate-950 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-slate-900 dark:text-white leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Project
              </span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl transition-all"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay with 3 specific buttons */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                    {/* Live Link Button */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg w-48 justify-center font-bold text-sm"
                    >
                      <HiEye size={20} /> Live Preview
                    </a>

                    {/* Frontend Github Link */}
                    <a
                      href={project.frontendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all shadow-lg border border-slate-600 w-48 justify-center font-bold text-sm"
                    >
                      <FaGithub size={18} /> Frontend Code
                    </a>

                    {/* Backend Github Link */}
                    <a
                      href={project.backendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all shadow-lg border border-slate-600 w-48 justify-center font-bold text-sm"
                    >
                      <FaGithub size={18} /> Backend Code
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-[10px] font-black rounded-full uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors uppercase italic tracking-tighter">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium italic">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveLink}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black uppercase text-xs tracking-[0.2em] group/link"
                    >
                      Explore Case Study{" "}
                      <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Project;
