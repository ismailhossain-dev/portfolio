import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Hero/LoadingScreen/LoadingScreen.JSX";
import AboutMe from "./components/About/AboutMe";
import Qualification from "./components/Qualification/Qualification";
import SubContact from "./components/Contact/SubContact";

// Importing Components

function App() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Project", href: "#project" },
    // { name: "Qualification", href: "#qualification" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Loading work
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  // এখানে গ্লোবাল ব্যাকগ্রাউন্ডটি ডিফাইন করা হয়েছে
  return (
    <div className="selection:bg-blue-500/30 selection:text-white bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-500 font-sans scroll-smooth relative overflow-x-hidden antialiased">
      
      {/* ─── ১. গ্লোবাল গ্রিড ইফেক্ট (শুধু ডার্ক মোডে দেখাবে) ─── */}
      <div
        className="fixed inset-0 z-0 opacity-0 dark:opacity-[0.12] pointer-events-none transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* ─── ২. গ্লোবাল নিওন গ্লো ইফেক্টস (শুধু ডার্ক মোডে দেখাবে) ─── */}
      <div className="fixed top-[-10%] right-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/0 dark:bg-blue-600/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none z-0 transition-all duration-500" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-indigo-600/0 dark:bg-indigo-600/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none z-0 transition-all duration-500" />

      {/* ─── ৩. মেইন কন্টেন্ট লেয়ার ─── */}
      <div className="relative z-10">
        <Navbar
          active={active}
          setActive={setActive}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          navLinks={navLinks}
        />

        <Hero />
        <AboutMe />
        <Skills />
        <Project />
        {/* <Qualification /> */}
        <SubContact />
        <Footer navLinks={navLinks} />
      </div>
    </div>
  );
}

export default App;