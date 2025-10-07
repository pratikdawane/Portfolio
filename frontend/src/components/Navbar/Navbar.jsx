import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { FaArrowDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    // { id: 'resume', label: 'Resume ↓'},
    
  ];

  return (
    <motion.header 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className={styles.container}>
        <motion.a 
          href="#home" 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
        >
          <span className={styles.gradientText}>{"<PratikDev/>"}</span>
        </motion.a>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <motion.li 
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${link.id}`}
                  className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <span className={styles.linkHover}></span>
                </a>
              </motion.li>

            ))}

            <motion.a 
            className={styles.resume}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1tIA_bm07hiV-NXvwIX2dtbXtp2ojy8Xg/view?usp=sharing" 
            style={{color: "#94a3b8", fontSize: "0.8rem", border: "1px solid #00f5ff", padding: "0.4rem", borderRadius: "6px"}}> 
              Resume <FaArrowDown color='#00f5ff' /> 
            </motion.a>

          </ul>
        </nav>

        <motion.button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span><FaBars /></span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;