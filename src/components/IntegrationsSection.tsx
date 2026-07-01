import { Layers, Box, Webhook } from 'lucide-react';
import styles from './IntegrationsSection.module.css';

export default function IntegrationsSection() {
  return (
    <section className={styles.integrations}>
      <div className={styles.circuitBackground}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Integrations</h2>
        <p className={styles.subtitle}>
          Export Google Maps leads directly to your favorite CRM, sales tools, and databases using our native integrations.
        </p>

        <div className={styles.pipeline}>
          
          <div className={styles.node}>
            <Layers size={20} color="var(--text-secondary)" />
          </div>
          
          <div className={styles.connector}></div>
          
          <div className={`${styles.node} ${styles.nodeActive}`}>
            <Box size={24} color="white" />
          </div>
          
          <div className={styles.connector}></div>
          
          <div className={`${styles.node} ${styles.nodeBrand}`}>
            <span className={styles.brandText}>X</span>
          </div>
          
          <div className={styles.connector}></div>
          
          <div className={styles.node}>
             <span className={styles.dots}>...</span>
          </div>
          
          <div className={styles.connector}></div>
          
          <div className={styles.node}>
            <Webhook size={20} color="var(--text-secondary)" />
          </div>

        </div>
      </div>
    </section>
  );
}
