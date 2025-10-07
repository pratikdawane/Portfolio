import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaInstagram , FaTwitter, FaWhatsapp} from "react-icons/fa";



const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/pratikdawane', icon: <FaGithub/> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pratik-dawane-57185b25a/', icon: <FaLinkedin/> },
  { name: 'Twitter', url: 'https://x.com/?lang=en', icon: <FaTwitter/> },
  { name: 'Whatsappp', url: 'https://web.whatsapp.com/', icon: <FaWhatsapp/> },
  { name: 'Instagram', url: 'https://www.instagram.com/m_romeo_07/', icon: <FaInstagram/> }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <motion.div 
            className={styles.footerLogo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className={styles.logo}>
              <span className={styles.gradientText}>{"<PratikDev/>"}</span>
            </a>
            <p className={styles.footerText}>
              A modern portfolio showcasing my skills, projects and my journey.
            </p>
          </motion.div>

          <motion.div 
            className={styles.footerLinks}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.linksTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><a href="#home" className={styles.link}>Home</a></li>
              <li><a href="#skills" className={styles.link}>Skills</a></li>
              <li><a href="#projects" className={styles.link}>Projects</a></li>
             
            </ul>
          </motion.div>

          <motion.div 
            className={styles.footerSocial}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.socialTitle} style={{marginLeft: "4rem"}}>Connect With Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                 {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className={styles.copyright}>
            &copy; {currentYear} Pratik Dawane. All rights reserved.
          </p>
          <p className={styles.credit}>
            Designed & Built with ❤️ by Me
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;