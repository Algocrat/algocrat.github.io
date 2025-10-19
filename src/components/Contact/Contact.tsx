import { Mail, Phone, MapPin, Globe, Linkedin, FileText } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2>Get In Touch</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Mail size={32} />
            </div>
            <h3>Email</h3>
            <a href="mailto:tejas-patel@hotmail.com">tejas-patel@hotmail.com</a>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Phone size={32} />
            </div>
            <h3>Phone</h3>
            <a href="tel:404-583-8581">404-583-8581</a>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <MapPin size={32} />
            </div>
            <h3>Location</h3>
            <p>Atlanta, GA 30319</p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Linkedin size={32} />
            </div>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/algocrat/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/algocrat
            </a>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Globe size={32} />
            </div>
            <h3>Blog</h3>
            <a href="https://intenseanalytics.com" target="_blank" rel="noopener noreferrer">
              intenseanalytics.com
            </a>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FileText size={32} />
            </div>
            <h3>LinkedIn Articles</h3>
            <a href="https://www.linkedin.com/in/algocrat/recent-activity/articles/" target="_blank" rel="noopener noreferrer">
              View Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
