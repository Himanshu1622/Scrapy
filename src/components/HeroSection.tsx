"use client";

import { MapPin, Database, Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const handleWatchDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch event to trigger video play after scrolling
      setTimeout(() => {
        window.dispatchEvent(new Event('playDemoVideo'));
      }, 800); // Wait for smooth scroll to finish
    }
  };

  return (
    <section className={styles.hero} id="product">
      <ScrollReveal>
        <div className={styles.container}>
          <div className={styles.eyebrow}>
            #1 Google Maps Data Extractor
          </div>

          <h1 className={styles.title}>
            Extract <span className={styles.highlightText}>Business Data</span> from <br />
            Google Maps — <span className={styles.highlightText}>In Seconds.</span>
          </h1>

          <p className={styles.subtitle}>
            SCRAPY pulls real business leads — names, phones, emails, addresses, ratings & more — directly from Google Maps and exports them clean into Google Sheets or CSV. No coding. No manual copy-paste. Just results.
          </p>

          <div className={styles.actions}>
            <button className="btn-primary" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Start Extracting
            </button>
            <button className="btn-outline" onClick={handleWatchDemo}>
              Watch Demo <Play size={16} style={{ marginLeft: 8 }} />
            </button>
          </div>

          <div className={styles.scrollDown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--accent-green, #53d9b8)" className="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
            </svg>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
