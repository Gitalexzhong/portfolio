import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  // Effect to update body styles and save darkMode in localStorage
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#f5f5f5';
    document.body.style.color = darkMode ? '#fff' : '#333';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div style={{ marginTop: '100px', padding: '16px' }}>
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode}/>
        <Projects darkMode={darkMode}/>
        <Education darkMode={darkMode}/>
        <Contact darkMode={darkMode}/>
      </div>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
