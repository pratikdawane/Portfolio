
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Skills.module.css';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiBootstrap, DiNodejsSmall, DiDatabase, DiNetbeans, DiGit, DiGithubBadge } from "react-icons/di";
import { CgCodeSlash } from "react-icons/cg";


const skillsData = [
  { name: 'HTML', level: 95, icon: <DiHtml5/>, category: 'Frontend' },
  { name: 'CSS', level: 90, icon: <DiCss3/>, category: 'Frontend' },
  { name: 'JavaScript', level: 85, icon: <DiJavascript1/>, category: 'Frontend' },
  { name: 'React.js', level: 80, icon: <DiReact />, category: 'Frontend' },
  { name: 'Bootstrap', level: 90, icon: <DiBootstrap/>, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 75, icon: <CgCodeSlash/>, category: 'Frontend' },
  { name: 'Redux', level: 70, icon: <CgCodeSlash/>, category: 'Frontend' },
  { name: 'Node.js', level: 70, icon: <DiNodejsSmall/>, category: 'Backend' },
  { name: 'Express', level: 70, icon: <CgCodeSlash />, category: 'Backend' },
  { name: 'RESTful APIs', level: 65, icon: <CgCodeSlash />, category: 'Backend' },
  { name: 'JWT', level: 65, icon: <CgCodeSlash />, category: 'Backend' },
  { name: 'MongoDB', level: 70, icon: <DiDatabase/>, category: 'Database' },
  { name: 'SQL', level: 75, icon: <DiNetbeans/>, category: 'Database' },
  { name: 'Git', level: 85, icon: <DiGit/>, category: 'Tools' },
  { name: 'GitHub', level: 85, icon: <DiGithubBadge />, category: 'Tools' },
  { name: 'VS Code', level: 85, icon: <CgCodeSlash />, category: 'Tools' },
  { name: 'Render', level: 85, icon: <CgCodeSlash />, category: 'Tools' }
];

const categories = ['All Skills', ...new Set(skillsData.map(skill => skill.category))];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All Skills');

  const filteredSkills = activeCategory === 'All Skills' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className={styles.categoryTabs}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className={styles.skillsBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.skillsGrid}>
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className={styles.skillCard}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={styles.skillHeader}>
                 
                    <div style={{fontSize: "25px", color: "#00f5ff"}}>
                        {skill.icon}
                    </div>
                
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.progressBar}>
                  <motion.div 
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    style={{
                      background: `linear-gradient(90deg, var(--primary), var(--secondary))`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;