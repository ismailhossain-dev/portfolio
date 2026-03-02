import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiMenuAlt3 } from "react-icons/hi";
import { Home, User, GraduationCap, MessageSquare, Send } from "lucide-react";
import Container from "../Container";
import { BiCodeAlt } from "react-icons/bi";

const Navbar = ({ active, setActive, isOpen, setIsOpen, navLinks }) => {
  // Icon helper function
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "#":
        return <Home size={16} />;
      case "about":
        return <User size={16} />;
      case "skills":
        return <BiCodeAlt className="text-blue-black" size={16} />;
      case "qualification":
        return <GraduationCap size={16} />;
      case "projects":
        return <Code2 size={16} />;
      case "contact":
        return <MessageSquare size={16} />;
      default:
        return null;
    }
  };

  // Intersection Observer for Scroll-spy logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const currentLink = navLinks.find((link) => link.href === `#${id}`);
          if (currentLink) setActive(currentLink.name);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navLinks, setActive]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      <Container>
        {/* Navbar Wrapper with Margin Bottom (via padding-top for the whole container if needed) */}
        <div className="flex justify-center px-4 py-6">
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center w-full max-w-6xl px-5 py-2.5 
                       bg-slate-950/80 backdrop-blur-2xl border border-white/10
                       shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-full relative"
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                S
              </div>
              <span className="text-xl font-bold tracking-tighter text-white hidden sm:block uppercase">
                Sabbir<span className="text-indigo-500">.Dev</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center bg-white/5 p-1 rounded-full border border-white/5 gap-1">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    className={`px-5 py-2 text-[12px] font-bold tracking-wide transition-all duration-300 rounded-full flex items-center gap-2 relative z-10 ${
                      active === link.name ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className={`${active === link.name ? "text-white" : "text-indigo-500"}`}>
                      {getIcon(link.name)}
                    </span>
                    {link.name}

                    {active === link.name && (
                      <motion.div
                        layoutId="navTab"
                        className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side Action: Contact Me */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-full text-[12px] font-black uppercase tracking-wider hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
              >
                Contact Me <Send size={14} />
              </motion.a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white text-3xl transition-transform active:scale-75"
              >
                {isOpen ? <HiX className="text-indigo-500" /> : <HiMenuAlt3 />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute top-24 left-4 right-4 bg-slate-900/98 backdrop-blur-3xl p-6 rounded-[2.5rem] shadow-2xl border border-white/10 lg:hidden overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 blur-[80px]"></div>

              <ul className="flex flex-col gap-2 relative z-10">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-black tracking-widest transition-all ${
                        active === link.name
                          ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {getIcon(link.name)}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Navbar;
