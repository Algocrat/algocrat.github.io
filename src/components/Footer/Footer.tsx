import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Tejas Patel. All rights reserved.</p>
        <p>Hands-on AI Architect & Technical Lead | 23 Years Experience</p>
      </div>
    </footer>
  );
};

export default Footer;
