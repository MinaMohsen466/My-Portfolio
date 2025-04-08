import { useState } from 'react';
import Nav from "./Components/Nav/Nav"
import Hero from './Components/Hero/Hero';

function App() {
  const [language, setLanguage] = useState(false); // false for English, true for Arabic

  return (
    <>
     <Nav language={language} setLanguage={setLanguage} />
     <Hero language={language} />
    </>
  )
}

export default App;
