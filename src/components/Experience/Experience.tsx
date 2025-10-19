import { experiences } from '@data/experience';
import TimelineItem from './TimelineItem';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.container}>
        <h2>Work Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
