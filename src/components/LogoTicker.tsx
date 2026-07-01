import { PenTool, Code, MessageCircle, Globe, Layers } from 'lucide-react';
import styles from './LogoTicker.module.css';

export default function LogoTicker() {
  return (
    <div className={styles.tickerSection}>
      <div className={styles.container}>
        <div className={styles.logoItem}><PenTool size={24} color="var(--text-secondary)" /><span>Salesforce</span></div>
        <div className={styles.logoItem}><Code size={24} color="var(--text-secondary)" /><span>Shopify</span></div>
        <div className={styles.logoItem}><MessageCircle size={24} color="var(--text-secondary)" /><span>Twitter</span></div>
        <div className={styles.logoItem}><Globe size={24} color="var(--text-secondary)" /><span>Chrome</span></div>
        <div className={styles.logoItem}><Layers size={24} color="var(--text-secondary)" /><span>Gitlab</span></div>
      </div>
    </div>
  );
}
