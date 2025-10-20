import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Tejas Patel</h1>
      <div className={styles.position}>Data & AI Technology Leader</div>
      <p className={styles.subtitle}>
        22+years architecting AI/ML systems, multi-agent platforms, and cloud-native solutions.
        Leading teams, driving innovation, and delivering measurable ROI across healthcare, government, and enterprise sectors.
      </p>
      <div className={styles.ctaButtons}>
        <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
          View Projects
        </a>
        <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
