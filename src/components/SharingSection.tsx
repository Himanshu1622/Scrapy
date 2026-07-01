import { Car, Diamond, Shield, MousePointer2, Box } from 'lucide-react';
import styles from './SharingSection.module.css';

export default function SharingSection() {
  return (
    <section className={styles.sharingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Effortless Lead<br />
            Delivery
          </h2>
          <button className="btn-primary">Watch Demo</button>
        </div>

        <div className={styles.visualContainer}>
          
          <div className={styles.nodeItem} style={{ top: '10%', left: '20%' }}>
            <Car size={24} color="var(--text-primary)" />
          </div>
          <div className={styles.nodeItem} style={{ top: '10%', right: '20%' }}>
            <Diamond size={24} color="var(--text-primary)" />
          </div>
          <div className={styles.nodeItem} style={{ top: '60%', left: '5%' }}>
            <MousePointer2 size={24} color="var(--text-primary)" />
          </div>
          <div className={styles.nodeItem} style={{ top: '60%', right: '5%' }}>
            <Shield size={24} color="var(--text-primary)" />
          </div>

          <div className={styles.glowOrb}></div>
          
          <div className={styles.centerNode}>
             <Box size={40} color="var(--accent-green)" />
          </div>
        </div>
      </div>
    </section>
  );
}
