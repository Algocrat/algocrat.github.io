import { Experience } from '@/types/index';
import styles from './Experience.module.css';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  return (
    <div className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
      <div className={styles.timelineContent}>
        <div className={styles.timelineDate}>
          {experience.startDate} - {experience.endDate}
        </div>
        <h3>{experience.company}</h3>
        <h4>{experience.position}</h4>
        <p>{experience.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
