import { StatCard } from '@/types/index';
import styles from './About.module.css';


const stats: StatCard[] = [
  { value: '22+', label: 'Years Experience' },
  { value: '15+', label: 'Major Initiatives Delivered' },
  { value: '5', label: 'Professional Certifications' },
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
              AI Technology Leader with deep expertise in cloud-native architectures, data 
              engineering, and applied machine learning. Proven ability to architect and deliver 
              scalable AI-driven systems that integrate multi-agent frameworks, retrieval-augmented 
              pipelines, and enterprise data platforms. Expert in designing small language model 
              (SLM) architectures, implementing LoRA/QLoRA fine-tuning techniques, and orchestrating 
              complex AI workflows using LangChain, LangGraph, MetaGPT, and CrewAI.
            </p>
            <p>
              Experienced in leading innovation through event-driven design, real-time analytics, 
              and intelligent automation. Architected healthcare AI pipelines saving $2M+ annually, 
              reduced clinical query turnaround by 70%, and increased model inference throughput by 
              45% through GPU optimization. Skilled at bridging experimental AI research with 
              production-ready solutions, aligning advanced technologies with business strategy.
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
