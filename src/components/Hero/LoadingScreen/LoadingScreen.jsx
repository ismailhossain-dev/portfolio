import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-950">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Modern Loader Animation */}
        <div className="relative w-24 h-24 mb-8">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-4 border-r-4 border-blue-600 rounded-full"
          />
          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-b-4 border-l-4 border-purple-500 rounded-full opacity-50"
          />
          {/* Center Pulse */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg shadow-blue-500/20"
          />
        </div>

        {/* Text Section */}
        <div className="overflow-hidden text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic"
          >
            PORTFOLIO<span className="text-blue-600">.</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-2"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 mt-3"
          >
            Initializing Creative Assets
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
