import React, { useState, useEffect, useRef, createContext } from "react";
import "./styles.css";

// Components
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Achievements from "./components/Achievements";
import Reflections from "./components/Reflections";
import Samples from "./components/Samples";
import Extracurricular from "./components/Extracurricular";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Context
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const sections = {
    personal: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    achievements: useRef(null),
    reflections: useRef(null),
    samples: useRef(null),
    extracurricular: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    sections[id].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <div className="app">
        {/* Header */}
        <Header scrollToSection={scrollToSection} />

        {/* Main Sections */}
        <main>
          <div ref={sections.personal}>
            <PersonalInfo />
          </div>
          <div ref={sections.education}>
            <Education />
          </div>
          <div ref={sections.skills}>
            <Skills />
          </div>
          <div ref={sections.experience}>
            <WorkExperience />
          </div>
          <div ref={sections.achievements}>
            <Achievements />
          </div>
          <div ref={sections.reflections}>
            <Reflections />
          </div>
          <div ref={sections.samples}>
            <Samples />
          </div>
          <div ref={sections.extracurricular}>
            <Extracurricular />
          </div>
          <div ref={sections.resume}>
            <Resume />
          </div>
          <div ref={sections.contact}>
            <Contact />
          </div>
        </main>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button className="back-to-top" onClick={scrollToTop}>
            ↑
          </button>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
