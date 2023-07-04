import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='App'>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
