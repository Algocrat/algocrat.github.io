import { ExternalLink } from 'lucide-react';
import { Project } from '@/types/index';
import styles from './Projects.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <div>
          <span className={styles.projectContext}>{project.context}</span>
          <h3>{project.title}</h3>
        </div>
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
        {project.highlights.length > 0 && (
          <ul className={styles.highlights}>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        {project.links.length > 0 && (
          <div className={styles.projectLinks}>
            {project.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                {link.label} <ExternalLink size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
