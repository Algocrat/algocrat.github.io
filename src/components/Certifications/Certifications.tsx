import { certifications } from '@data/certifications';
import { Award, Calendar, CheckCircle } from 'lucide-react';
import styles from './Certifications.module.css';

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={styles.container}>
        <h2>Professional Certifications</h2>
        <p className={styles.intro}>
          Active certifications in machine learning, cloud architecture and project management.
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
              PMP certification backs up hands-on technical leadership: setting direction for an
              automation team at CDC and owning delivery to the client.
            </p>
          </div>
          <div className={styles.highlightCard}>
            <h3>Continuous Learning</h3>
            <p>
              I keep certifications current and test new tools hands-on in my independent projects
              before bringing them to client work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
