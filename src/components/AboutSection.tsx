import { Map, Download, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.label}>What is SCRAPY?</div>
            <h2 className={styles.title}>Your Unfair Advantage in Lead Generation</h2>
            <p className={styles.bodyCopy}>
              SCRAPY is a powerful business data extraction tool built for marketers, sales teams, freelancers, and agencies who are tired of manually collecting leads from Google Maps.<br /><br />
              Simply enter a keyword and location — SCRAPY does the rest. It scans Google Maps, collects every relevant business listing, and neatly organizes it all in a spreadsheet you can use immediately.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.cards}>
          <ScrollReveal delay={0}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Map size={24} color="var(--accent-green)" />
              </div>
              <h3 className={styles.cardTitle}>Google Maps Powered</h3>
              <p className={styles.cardDesc}>Pulls live, real-time data straight from Google Maps listings</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Download size={24} color="var(--accent-green)" />
              </div>
              <h3 className={styles.cardTitle}>Instant Export</h3>
              <p className={styles.cardDesc}>One-click export to Google Sheets or download as CSV</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Zap size={24} color="var(--accent-green)" />
              </div>
              <h3 className={styles.cardTitle}>Blazing Fast</h3>
              <p className={styles.cardDesc}>Extract hundreds of business records in minutes, not hours</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
