import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Airbnb Clone App",
    description: "Developed a full-featured Airbnb-like app with listings, authentication, reviews, and ratings, CRUD operations with MongoDB, Express.js, and Node.js.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js", "4+"],
    image: "/Airbnb-app-image.webp",
    link: "https://wonderlust-pogc.onrender.com/listings",
    github: "https://github.com/pratikdawane/Wonderlust"
  },
  {
    title: "Trading App",
    description: "Developed a full-stack trading platform designed a UI similar to Zerodha (clone) by using React, Node.js, Express, MongoDB, Material-UI and Chat.js.",
    tags: ["React", "MongoDB", "Node.js", "Express","Chart.js", "3+"],
    image: "/zerodha-app-image.jpg",
    link: "#",
    github: "https://github.com/pratikdawane/Zerodha-Clone"
  },
  {
    title: "Zoom Meeting App",
    description: "Built a real-time video app by using WebRTC for low-latency peer-to-peer video/audio communication with screen sharing and JWT authentication.",
    tags: ["React", "Node.js", "MongoDB", "WebRTC", "Material-UI", "4+"],
    image: "/zoom.jpg",
    link: "https://zoom-meeting-app-frontend-zxhk.onrender.com",
    github: "https://github.com/pratikdawane/Zoom-Meeting-App"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting application with moder design, user-friendly and responsive UI structure.",
    tags: ["React", "OpenWeather API", "Material-UI", "Geolocation", "2+"],
    image: "/wheather.png",
    link: "https://unique-frangipane-7f724f.netlify.app/",
    github: "https://github.com/pratikdawane/Weather-App"
  },
   {
    title: "LinkedIn Project",
    description: "Built a professional social network clone with real-time messaging, post feeds, professional UI design and user connections with secure JWT authentication.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "3+"],
    image: "/linkedinn.jpg",
    link: "#",
    github: "#"
  },
   {
    title: "ChatGPT Project",
    description: "Built a AI chat interface clone with real-time responses, conversation memory, modern UI, message history, and responsive AI interactions with markdown support.",
    tags: ["React", "Node.js", "OpenAI API", "CSS3", "JWT", "3+"],
    image: "/chatGPTTT.jpeg",
    link: "#",
    github: "#"
  },

];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}> 
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div 
          className={styles.projectsGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.projectImage}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectLinks}>
                  <motion.a 
                    href={project.link} 
                    className={styles.projectLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.github} 
                    className={styles.projectLinkSecondary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p style={{marginTop: "5rem", marginBottom: "4rem",textAlign: "center", color: "#94a3b8"}}>Want to see more of my work? Check out my GitHub for additional projects.  <br /> <br /> <a style={{color: "#00f5ff", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "0.6rem 2rem", borderRadius: "1rem"}} href="https://github.com/pratikdawane">  Click <span className={styles.waving}>👉</span></a></p> 

      </div>
    </section>
  );
};

export default Projects;