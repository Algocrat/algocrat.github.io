import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2>Featured Projects</h2>
        <p className={styles.intro}>
          Independent projects are side projects I build on my own time under the Algocrat Labs name,
          separate from my Booz Allen work.
        </p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
