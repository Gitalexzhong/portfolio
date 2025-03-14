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
  document.title = 'Alex.Dev';

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
        <div style={{ marginBottom: '100px' }}>
          <Home darkMode={darkMode} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <About darkMode={darkMode} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <Experience darkMode={darkMode} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <Projects darkMode={darkMode} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <Education darkMode={darkMode} />
        </div>
        <div style={{ marginBottom: '40px' }}>
          <Contact darkMode={darkMode} />
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
