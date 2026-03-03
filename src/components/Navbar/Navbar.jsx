import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiMenuAlt3 } from "react-icons/hi";
import { Home, User, GraduationCap, MessageSquare, Send, Code2, Layers } from "lucide-react";
import { BiCodeAlt } from "react-icons/bi";
import Container from "../Container";

const Navbar = ({ active, setActive, isOpen, setIsOpen, navLinks }) => {
  const icons = {
    home: <Home size={18} />,
    about: <User size={18} />,
    skills: <BiCodeAlt size={18} />,
    qualification: <GraduationCap size={18} />,
    projects: <Code2 size={18} />,
    contact: <MessageSquare size={18} />,
  };

  useEffect(() => {
    // ১. Intersection Observer Logic
    const observerOptions = {
      root: null,
      // rootMargin কিছুটা লুজ করা হয়েছে যাতে সব ডিভাইসে কাজ করে
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.1],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // যদি ইউজার ম্যানুয়ালি স্ক্রল করে এবং সেকশনটি স্ক্রিনে আসে
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const currentLink = navLinks.find(
            (link) => link.href.replace("#", "").toLowerCase() === id.toLowerCase(),
          );
          if (currentLink) {
            setActive(currentLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    // ২. স্পেশাল স্ক্রল লিসেনার (ফুটার থেকে হোমে আসার সমস্যার জন্য)
    const handleScroll = () => {
      // যদি ইউজার একদম উপরে চলে আসে (Home Section)
      if (window.scrollY < 100) {
        setActive("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks, setActive]);

  // ক্লিক হ্যান্ডলার
  const handleNavLinkClick = (name) => {
    setActive(name);
    setIsOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      <Container>
        <div className="flex justify-center px-4 py-6">
          <motion.div
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center w-full max-w-6xl px-5 py-2.5 
                       bg-slate-950/80 backdrop-blur-2xl border border-white/10
                       shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-full relative"
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavLinkClick("Home")}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform">
                S
              </div>
              <span className="text-xl font-bold tracking-tighter text-white hidden sm:block uppercase">
                Sabbir<span className="text-indigo-500">.Dev</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center bg-white/5 p-1 rounded-full border border-white/5 gap-1">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.name)}
                    className={`px-5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 rounded-full flex items-center gap-2 relative z-10 ${
                      active === link.name ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="transition-colors duration-300">
                      {icons[link.name.toLowerCase()] || <Layers size={18} />}
                    </span>
                    {link.name}

                    {active === link.name && (
                      <motion.div
                        layoutId="navTab"
                        className="absolute inset-0 bg-indigo-600 rounded-full -z-[1]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#contact"
                onClick={() => handleNavLinkClick("Contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-full text-[12px] font-black uppercase tracking-wider hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
              >
                Contact Me <Send size={14} />
              </motion.a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white text-3xl focus:outline-none"
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-24 left-4 right-4 bg-slate-900/95 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/10 lg:hidden"
            >
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => handleNavLinkClick(link.name)}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-base font-bold transition-all ${
                        active === link.name
                          ? "bg-indigo-600 text-white"
                          : "text-slate-400 hover:bg-white/5"
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
  );
};

export default Navbar;
