import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: '100px', padding: '16px' }}>
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
