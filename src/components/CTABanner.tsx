"use client";

import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <h2 className={styles.title}>
            Ready To Automate Your<br />
            Maps Extraction?
          </h2>
          <p className={styles.subtitle}>
            Join 1000+ top companies that use Scrapy<br />
            to power their local data strategy.
          </p>
          <button 
            className={styles.ctaBtn} 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
