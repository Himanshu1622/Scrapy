import { Search, Database, FileSpreadsheet, Download, MapPin, CopyPlus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: <Search size={24} color="var(--accent-green)" />,
    title: 'Smart Keyword Search',
    description: 'Search by business type + city (e.g. "dentists in New York") and SCRAPY finds every matching listing on Google Maps automatically.',
  },
  {
    icon: <Database size={24} color="var(--accent-green)" />,
    title: 'Full Business Data Extraction',
    description: 'Get business name, address, phone number, website, email, Google rating, number of reviews, and business category — all in one row.',
  },
  {
    icon: <FileSpreadsheet size={24} color="var(--accent-green)" />,
    title: 'Google Sheets Export',
    description: 'Push extracted data directly into a new or existing Google Sheet with one click. Organized, clean, and ready to use.',
  },
  {
    icon: <Download size={24} color="var(--accent-green)" />,
    title: 'CSV Download',
    description: 'Prefer working offline or in Excel? Download your data as a CSV file instantly — no formatting needed.',
  },
  {
    icon: <MapPin size={24} color="var(--accent-green)" />,
    title: 'Location-Based Targeting',
    description: 'Target any city, state, country, or neighborhood. SCRAPY works globally — if it\'s on Google Maps, SCRAPY can find it.',
  },
  {
    icon: <CopyPlus size={24} color="var(--accent-green)" />,
    title: 'Bulk Extraction',
    description: 'Don\'t stop at 10 results. SCRAPY scrolls and extracts all available listings for your search — giving you the most complete lead list possible.',
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.label}>Features</div>
            <h2 className={styles.title}>Everything You Need to Build a Lead List That Actually Converts</h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>{feature.icon}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
