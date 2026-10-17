import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Tejas Patel</h1>
      <div className={styles.position}>Hands-on AI Architect & Technical Lead</div>
      <p className={styles.subtitle}>
        Agentic AI &bull; Intelligent Test Automation &bull; Model Fine-Tuning.
        23 years of experience designing and building AI applications across federal health, government and SaaS.
      </p>
      <div className={styles.ctaButtons}>
        <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
          View Projects
        </a>
        <a href="/Tejas_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`}>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
