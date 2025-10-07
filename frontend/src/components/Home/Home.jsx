import { motion } from 'framer-motion';
import styles from './Home.module.css';

const Home = () => {
  return (
      <section id="home" className={styles.home}>
        
      <div className={styles.background}></div>
      
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.gradientText}>Pratik Dawane</span>
          </h1>
          <motion.h2 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
           I'm a passionate Full-Stack Developer building fast and responsive web applications with modern technologies.
            Passionate about creating beautiful, functional, and user-centered
            applications.
          </motion.p>
          <div className={styles.buttons}>
            <motion.a
              href="#contact" 
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Get in touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              View my work
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.profile}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.profileImage}>
            <img
              // src="portfolio-2.webp"
              src="/pratik-portfolio.jpeg"
              alt="portfolio-image"
              className={styles.image}
              width={400}
              height={400}
            />
            <div className={styles.profileBorder}></div>
            <div className={styles.techIcons}>
             
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className={styles.scrollDown}>Scroll Down</span>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;