import { MapPin, MessageSquare, Database, Clock, ShieldCheck } from 'lucide-react';
import styles from './FeaturesGrid.module.css';

export default function FeaturesGrid() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            Scale Your Maps<br />
            <span className="glow-text">Extraction</span>
          </h2>
          <p className={styles.description}>
            Use our enterprise-grade infrastructure to collect local data reliably at any scale.
          </p>
        </div>

        <div className={styles.grid}>
          
          <div className={styles.card}>
            <div className={`${styles.iconBox} ${styles.iconRed}`}>
              <MapPin size={20} color="white" />
            </div>
            <h3>Local Business Data</h3>
            <p>Extract names, addresses, phone numbers, and websites from any location.</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.iconBox} ${styles.iconRed}`}>
              <MessageSquare size={20} color="white" />
            </div>
            <h3>Reviews & Ratings</h3>
            <p>Scrape detailed customer reviews and ratings to analyze sentiment.</p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.iconBox} ${styles.iconWhite}`}>
              <Database size={20} color="white" />
            </div>
            <h3>Export Anywhere</h3>
            <p>Download your Maps data in JSON, CSV, Excel, or send via Webhook.</p>
          </div>
          
          <div className={styles.card}>
            <div className={`${styles.iconBox} ${styles.iconWhite}`}>
              <Clock size={20} color="white" />
            </div>
            <h3>Scheduled Scraping</h3>
            <p>Run your scrapers on a recurring schedule to keep local data fresh.</p>
          </div>

          <div className={`${styles.card} ${styles.cardWide}`}>
            <div className={`${styles.iconBox} ${styles.iconWhite}`}>
              <ShieldCheck size={20} color="white" />
            </div>
            <h3>Anti-Bot Bypass</h3>
            <p>Our infrastructure automatically handles Google's rate limits and captchas so you never get blocked.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
