import { StatCard } from '@/types/index';
import styles from './About.module.css';

const stats: StatCard[] = [
  { value: '20+', label: 'Years Experience' },
  { value: '15+', label: 'Major Initiatives Delivered' },
  { value: '5→25', label: 'AI/ML Team Scaled' },
  { value: '$2M+', label: 'Annual Business Impact' }
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Pioneering AI/ML architect and technical leader with 20+ years driving enterprise 
              transformation through multi-agent systems, production-scale machine learning, and 
              cloud-native data platforms. Expert in designing small language model (SLM) architectures, 
              implementing PEFT (Parameter-Efficient Fine-Tuning) techniques, and orchestrating complex 
              AI workflows using LangChain, LangGraph, MetaGPT, and CrewAI.
            </p>
            <p>
              Proven track record of scaling AI/ML teams from 5 to 25 members, partnering with C-level 
              executives on AI adoption roadmaps, and delivering systems with measurable business impact. 
              Architected healthcare AI pipelines saving $2M+ annually, reduced clinical query turnaround 
              by 70%, and increased model inference throughput by 45% through GPU optimization.
            </p>
          </div>
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.thoughtLeadership}>
          <p>
            Active thought leader through my blog{' '}
            <strong>
              <a 
                href="https://www.intenseanalytics.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.blogLink}
              >
                Intense Analytics
              </a>
            </strong>, 
            conference speaking, and technical community initiatives, bridging cutting-edge AI research 
            with practical enterprise applications while championing responsible AI governance frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
