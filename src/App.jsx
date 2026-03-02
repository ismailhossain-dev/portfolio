import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Hero/LoadingScreen/LoadingScreen.JSX";
import AboutMe from "./components/About/AboutMe";
import Qualification from "./components/Qualification/Qualification";

// Importing Components

function App() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Qualification", href: "#qualification" },

    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  //Loading work
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
  return (
    <div className="selection:bg-blue-500 selection:text-white bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-500 font-sans scroll-smooth">
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

      <Qualification />
      <Project />
      <Contact />
      <Footer navLinks={navLinks} />
    </div>
  );
}

export default App;
