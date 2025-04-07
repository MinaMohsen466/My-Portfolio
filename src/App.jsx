import { useState } from 'react';
import Nav from "./Components/Nav/Nav"

function App() {
  const [language, setLanguage] = useState(false); // false for English, true for Arabic

  return (
    <>
     <Nav language={language} setLanguage={setLanguage} />
    </>
  )
}

export default App;
