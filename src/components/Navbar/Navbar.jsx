import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiMenuAlt3 } from "react-icons/hi";
<<<<<<< HEAD
import { Home, User, GraduationCap, MessageSquare, Code2, Layers } from "lucide-react";
import { BiCodeAlt } from "react-icons/bi";
import Container from "../Container";

const Navbar = ({ active, setActive, isOpen, setIsOpen, navLinks }) => {
  const icons = {
    home: <Home size={15} />,
    about: <User size={15} />,
    skills: <BiCodeAlt size={15} />,
    projects: <Code2 size={15} />,
    qualification: <GraduationCap size={15} />,
    contact: <MessageSquare size={15} />,
=======
import { Home, User, GraduationCap, MessageSquare, Send, Code2, Layers } from "lucide-react";
import { BiCodeAlt } from "react-icons/bi";
import Container from "../Container";

// Props gola app.jsx teke astese
const Navbar = ({ active, setActive, isOpen, setIsOpen, navLinks }) => {
  const icons = {
    home: <Home size={16} />,
    about: <User size={16} />,
    skills: <BiCodeAlt size={16} />,
    projects: <Code2 size={16} />,
    qualification: <GraduationCap size={16} />,
    contact: <MessageSquare size={16} />,
>>>>>>> 0968919d399e556c51f4dc06109d7978980e3f8b
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
<<<<<<< HEAD
      rootMargin: "-40% 0px -60% 0px",
=======
      rootMargin: "-30% 0px -70% 0px", // Improved sensitivity
>>>>>>> 0968919d399e556c51f4dc06109d7978980e3f8b
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const currentLink = navLinks.find(
<<<<<<< HEAD
            (link) => link.href.replace("#", "").toLowerCase() === id.toLowerCase()
=======
            (link) => link.href.replace("#", "").toLowerCase() === id.toLowerCase(),
>>>>>>> 0968919d399e556c51f4dc06109d7978980e3f8b
          );
          if (currentLink) setActive(currentLink.name);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.replace("#", ""));
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 80) setActive("Home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks, setActive]);

  const handleNavLinkClick = (name) => {
    setActive(name);
    setIsOpen(false);
  };

<<<<<<< HEAD
  // Animation variants for Mobile Menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    },
    exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full   transition-all duration-300">
      <Container>
        <div className="flex justify-center px-4">
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-between items-center max-w-7xl w-full px-6 py-3 
                     bg-slate-950/60 backdrop-blur-xl border border-slate-800/60
                     shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-full relative"
          >
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={() => handleNavLinkClick("Home")}
              className="flex items-center gap-2 group relative z-[101]"
            >
              <span className="text-xl font-black tracking-wider text-white">
                ISMAIL<span className="text-blue-500">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1 bg-slate-900/40 border border-slate-800/40 p-1 rounded-full">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.name)}
                    className={`px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 rounded-full flex items-center gap-2 relative z-10 ${
                      active === link.name ? "text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span className="opacity-80 transition-opacity group-hover:opacity-100">
                      {icons[link.name.toLowerCase()] || <Layers size={15} />}
                    </span>
                    {link.name}

                    {active === link.name && (
                      <motion.div
                        layoutId="navTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-indigo-600/15 border border-blue-500/30 rounded-full -z-[1]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Buttons & Mobile Toggle */}
            <div className="flex items-center gap-4 relative z-[101]">
              <motion.a
                href="#contact"
                onClick={() => handleNavLinkClick("Contact")}
                whileHover={{ scale: 1.02, translateY: -1 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:brightness-110 transition-all"
              >
                Hire Me
              </motion.a>

              {/* Mobile Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-slate-300 p-2 hover:text-white hover:bg-slate-800/50 rounded-full transition-all focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
              </button>
            </div>
          </motion.nav>
        </div>

        {/* Mobile Fullscreen Glass Overlay Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl lg:hidden z-[99] flex items-center justify-center"
            >
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col gap-4 w-full max-w-sm px-6 text-center"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={itemVariants}>
                    <a
                      href={link.href}
                      onClick={() => handleNavLinkClick(link.name)}
                      className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-base font-medium tracking-wide transition-all border ${
                        active === link.name
                          ? "bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border-blue-500/30 text-white shadow-md"
                          : "text-slate-400 border-transparent hover:bg-slate-900/50 hover:text-slate-200"
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        {icons[link.name.toLowerCase()] || <Layers size={18} />}
                        {link.name}
                      </span>
                      {active === link.name && (
                        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      )}
                    </a>
                  </motion.li>
                ))}
                
                {/* Mobile Hire Me Button inside menu */}
                <motion.li variants={itemVariants} className="mt-4 md:hidden">
                  <a
                    href="#contact"
                    onClick={() => handleNavLinkClick("Contact")}
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl text-sm font-bold tracking-wide shadow-xl shadow-blue-500/20"
                  >
                    Hire Me
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Navbar;
=======
  return (
    <div className="pb-10">
      <header className="fixed top-0 left-0 right-0 z-[100] w-full ">
        <Container>
          <div className="flex justify-center px-4 py-8 md:py-10">
            <motion.nav
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex justify-between items-center w-full max-w-5xl px-6 py-2.5 
                       bg-slate-950/40 backdrop-blur-md border border-slate-800/50
                       shadow-2xl rounded-full relative"
            >
              {/* Brand Logo */}
              <a
                href="#home"
                onClick={() => handleNavLinkClick("Home")}
                className="flex items-center gap-2 group"
              >
                <span className="text-lg font-bold tracking-tight text-white  sm:block">
                  ISMAIL<span className="text-blue-500"></span>
                </span>
              </a>

              {/* Desktop Navigation */}
              <ul className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      onClick={() => handleNavLinkClick(link.name)}
                      className={`px-4 py-2 text-[12px] uppercase tracking-widest font-bold transition-all duration-300 rounded-full flex items-center gap-2 relative z-10 ${
                        active === link.name ? "text-white" : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <span className="opacity-70 group-hover:opacity-100">
                        {icons[link.name.toLowerCase()] || <Layers size={16} />}
                      </span>
                      {link.name}

                      {active === link.name && (
                        <motion.div
                          layoutId="navTab"
                          className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-full -z-[1]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <motion.a
                  href="#contact"
                  onClick={() => handleNavLinkClick("Contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center gap-2 bg-blue-500 text-black px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-xl text-white"
                >
                  Hire Me
                </motion.a>

                {/* Mobile Toggle */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
              </div>
            </motion.nav>
          </div>

          {/* Mobile Sidebar-style Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="fixed top-28 left-6 right-6 bg-slate-900/95 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-3xl border border-slate-800 lg:hidden z-[99]"
              >
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => handleNavLinkClick(link.name)}
                        className={`w-full flex items-center gap-5 px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all ${
                          active === link.name
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {icons[link.name.toLowerCase()] || <Layers size={18} />}
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
    </div>
  );
};

export default Navbar;
>>>>>>> 0968919d399e556c51f4dc06109d7978980e3f8b
