import { useState, useEffect } from 'react';
import Nav from "./Components/Nav/Nav"
import Hero from './Components/Hero/Hero';

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

  return (
    <>
     <Nav language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />
     <Hero language={language} />
    </>
  )
}

export default App;
