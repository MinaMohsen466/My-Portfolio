import { useState, useEffect } from 'react';
import Nav from "./Components/Nav/Nav"
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  const [language, setLanguage] = useState(false); // false for English, true for Arabic
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or user's preferred color scheme
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : 
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme whenever darkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);
  
  // Set document direction based on language
  useEffect(() => {
    document.documentElement.setAttribute('dir', language ? 'rtl' : 'ltr');
  }, [language]);

  return (
    <>
     <Nav language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />
     <Hero language={language} />
     <Skills language={language} />
     <Projects language={language} />
     <GetInTouch language={language} />
     <Footer language={language} />
     <ScrollToTop />
    </>
  )
}

export default App;
