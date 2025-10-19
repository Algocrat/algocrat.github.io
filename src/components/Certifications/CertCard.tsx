import { Certification } from '@/types/index';
import styles from './Certifications.module.css';

interface CertCardProps {
  certification: Certification;
}

const CertCard = ({ certification }: CertCardProps) => {
  return (
    <div className={styles.certCard}>
      <h3>{certification.title}</h3>
      <div className={styles.certDate}>
        Issued {certification.issueDate}
        {certification.expiryDate && ` | Expires ${certification.expiryDate}`}
      </div>
    </div>
  );
};

export default CertCard;
