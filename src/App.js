import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <Projects />
    {/* <About />
    
    <Skills />
    <Contact /> */}
    </div>
  );
}

export default App;
