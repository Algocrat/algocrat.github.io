import { certifications } from '@data/certifications';
import { Award, Calendar, CheckCircle } from 'lucide-react';
import styles from './Certifications.module.css';

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={styles.container}>
        <h2>Professional Certifications</h2>
        <p className={styles.intro}>
          Industry-recognized certifications demonstrating expertise in AI/ML, cloud architecture, 
          and project management across AWS, Azure, and professional leadership domains.
        </p>
        
        <div className={styles.certGrid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.certCard}>
              <div className={styles.certIcon}>
                <Award size={40} />
              </div>
              <h3>{cert.title}</h3>
              <div className={styles.certMeta}>
                <div className={styles.certDate}>
                  <Calendar size={16} />
                  <span>Issued {cert.issueDate}</span>
                </div>
                {cert.expiryDate && (
                  <div className={styles.certExpiry}>
                    <CheckCircle size={16} />
                    <span>Expires {cert.expiryDate}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.certHighlights}>
          <div className={styles.highlightCard}>
            <h3>Cloud Architecture Expertise</h3>
            <p>
              Dual-certified in AWS (ML Specialty & Solutions Architect) with proven experience 
              architecting production systems on both AWS and Azure platforms.
            </p>
          </div>
          <div className={styles.highlightCard}>
            <h3>Professional Leadership</h3>
            <p>
              PMP certification validates leadership in managing complex AI/ML initiatives, 
              scaling teams from 5 to 25 members, and delivering $2M+ annual business impact.
            </p>
          </div>
          <div className={styles.highlightCard}>
            <h3>Continuous Learning</h3>
            <p>
              Commitment to staying current with evolving AI/ML technologies through ongoing 
              certification renewals and hands-on implementation of cutting-edge frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
