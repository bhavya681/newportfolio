import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import Footer from './components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is saved in local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply the theme to the body class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle the dark mode
  };

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode}/>
      <Skills isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
};

export default App;



