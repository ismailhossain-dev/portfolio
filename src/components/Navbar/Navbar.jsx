import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ active, setActive, isOpen, setIsOpen, navLinks }) => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 ">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex justify-between items-center w-full max-w-5xl px-6 py-2 
                   bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800/50
                   shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-full relative"
      >
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter italic">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SABBIR
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1 bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-300/30 dark:border-slate-700/30">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`px-5 py-2 text-sm font-bold transition-all duration-200 rounded-full block relative z-10 ${
                  active === link.name
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-500"
                }`}
              >
                {link.name}
                {active === link.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-md"
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-black shadow-lg shadow-blue-500/20 transition-colors"
          >
            Hire Me
          </motion.button>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 dark:text-white text-2xl p-1"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl p-6 rounded-[2rem] shadow-2xl border border-white/20 dark:border-slate-800 md:hidden"
          >
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setIsOpen(false);
                    }}
                    className={`w-full text-center block py-3 rounded-xl text-lg font-bold transition-all ${
                      active === link.name
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
