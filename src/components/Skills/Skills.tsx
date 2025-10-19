import { skillCategories } from '@data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2>Technical Expertise</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <div key={category.id} className={styles.skillCategory}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
