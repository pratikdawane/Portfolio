import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  const experiences = [
    {
      title: "Experiences",
      year: "May 2024 - Jul 2024",
      role: "Full Stack Developer Intern",
      company: "Galaxy Fintech Pvt. Ltd.",
      description: "Developed and maintained multiple web applications with modern JavaScript frameworks, Angular, Express, Node.Js, MongoDB."
    },
    {
      title: "Learning/ Course",
      year: "Jan 2024 - Jan 2025",
      role: "Full Stack Developer Course",
      company: "Apna College",
      description: "Completed full-stack development using MongoDB, Express.js, React, Node.js, RESTful APIs, JWT, completed multiple projects."
    },
    {
      title: "Education",
      year: "Aug 2019 - Jul 2023",
      role: "Electrical Engineering",
      company: "CGPA : 7.79",
      description: "I complete my Btech at P. E. S. College of Engineering, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra."
    }
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.subtitle}>Who I Am</h3>
            <p className={styles.text}>
             Hi, I'm Pratik, a passionate Full-Stack Developer with a strong foundation in building fast, accessible, and responsive web applications. 
             I graduated in 2023 with a CGPA of 7.79 in Electrical Engineering at pes college of engineering, Chhatrapati Sambhajinagar (auranagbad) and 
             later pursued a Full-Stack Development course from Apna College, specializing in React and JavaScript technologies. 
            </p> 

            <p className={styles.text}> I also completed my <span style={{color: "#00f5ff"}}>internship as a Full Stack Developer</span> at Galaxy Fintech Pvt. Ltd., where I worked on real-world projects and enhanced my skills in both frontend and backend development.
            </p>
            <p className={styles.text}>
              My approach combines technical expertise with an eye for design, resulting in 
              applications that are both powerful and delightful to use.
            </p>
            <div className={styles.stats}>
              <motion.div 
                className={styles.statItem}
                whileHover={{ scale: 1.05 }}
              >
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>Years Experience</span>
              </motion.div>
              <motion.div 
                className={styles.statItem}
                whileHover={{ scale: 1.05 }}
              >
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.timeline}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.subtitle}>My Journey</h3>
            <div className={styles.timelineContainer}>
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <span style={{color: "#00f5ff"}}> <b>{exp.title} :</b> </span> &nbsp;
                    <span className={styles.timelineYear}>{exp.year}</span>
                    <p className={styles.timelineRole}>{exp.role}</p>
                    <span className={styles.timelineCompany}>{exp.company}</span>
                    <p className={styles.timelineDescription}>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;