import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
// আপনার ইমপোর্ট করা ইমেজগুলো
import project1 from "../../assets/project-1.jpeg";
import project2 from "../../assets/project-2.jpeg";
import project3 from "../../assets/project-3.jpeg";

const Project = () => {
  // ডাইনামিক প্রোজেক্ট ডাটা অ্যারে
  const projectsData = [
    {
      id: 1,
      title: "Premium E-commerce",
      description:
        "একটি ফাস্ট এবং রেসপন্সিভ ই-কমার্স প্ল্যাটফর্ম যা ইউজার ইন্টারফেসের ওপর ফোকাস করা।",
      image: project1,
      tags: ["React", "Tailwind", "NodeJS"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Real Estate Portal",
      description: "আধুনিক প্রপার্টি ম্যানেজমেন্ট সিস্টেম যেখানে ইউজাররা সহজে ঘরবাড়ি খুঁজে পাবে।",
      image: project2,
      tags: ["NextJS", "Firebase", "Tailwind"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description:
        "ব্যক্তিগত ব্র্যান্ডিংয়ের জন্য তৈরি একটি এনিমেটেড এবং ক্লিন পোর্টফোলিও ওয়েবসাইট।",
      image: project3,
      tags: ["React", "Framer Motion", "Tailwind"],
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
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
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Work
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
                  src={project.image} // এখানে ডাইনামিক ইমেজ বসানো হয়েছে
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white text-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                  >
                    <HiExternalLink size={24} />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800 text-white rounded-full hover:bg-blue-600 transition-all shadow-xl border border-slate-700"
                  >
                    <HiCode size={24} />
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

                <a
                  href={project.liveLink}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black uppercase text-xs tracking-[0.2em] group/link"
                >
                  Explore Case Study{" "}
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
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
