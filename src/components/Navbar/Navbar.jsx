import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiMenuAlt3 } from "react-icons/hi";
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
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -70% 0px", // Improved sensitivity
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const currentLink = navLinks.find(
            (link) => link.href.replace("#", "").toLowerCase() === id.toLowerCase(),
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

  return (
    <div className="pb-10">
      <header className="fixed top-0 left-0 right-0 z-[100] w-full ">
        <Container>
          <div className="flex justify-center px-4 ">
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
