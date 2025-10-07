import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const appRef = useRef(null);

  // Smooth scroll and section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Custom cursor effect
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app" ref={appRef}>
      {/* Animated cursor */}
      <br /> 
      <motion.div 
        className="custom-cursor"
        animate={{
          x: cursorPosition.x - 15,
          y: cursorPosition.y - 15,
          transition: { type: 'spring', damping: 20, stiffness: 300 }
        }}
      />
      
      <Navbar activeSection={activeSection} />
      
      <AnimatePresence>
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;