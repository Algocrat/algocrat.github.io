import { Project } from '@/types/index';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <h3>{project.title}</h3>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.projectBody}>
        <p>{project.description}</p>
        <div className={styles.projectMetrics}>
          {project.metrics.map((metric, index) => (
            <div key={index} className={styles.metric}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
