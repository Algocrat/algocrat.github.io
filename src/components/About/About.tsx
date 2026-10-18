import { StatCard } from '@/types/index';
import styles from './About.module.css';

const stats: StatCard[] = [
  { value: '23', label: 'Years Experience' },
  { value: '6', label: 'Live AI Products Shipped' },
  { value: '3', label: 'Active Certifications' },
  { value: '12', label: 'Years at Booz Allen' }
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Hands-on AI architect and engineer with 23 years of experience. I design and build
              agentic AI applications myself, mostly in Python, R and TypeScript. At CDC I built a
              Playwright crawler that tests a STARLIMS lab system with no hand-written scripts.
            </p>
            <p>
              On my own time, under Algocrat Labs, I build AI products including a federal procurement
              intelligence platform, Dragon Farm (an R package for SLM fine-tuning) and a D3 data
              storytelling pipeline. Strong background in data architecture, HL7 healthcare data and
              federal health IT. I lead the automation team at CDC and build alongside them.
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
            I write about applied AI on my blog{' '}
            <strong>
              <a
                href="https://www.intenseanalytics.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blogLink}
              >
                Intense Analytics
              </a>
            </strong>{' '}
            and demo agentic automation work at the Booz Allen Atlanta AI Community of Practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
