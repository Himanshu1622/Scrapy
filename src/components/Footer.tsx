"use client";

import { MapPin, Globe } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <ScrollReveal>
        <div className={`${styles.container} ${styles.footerContent}`}>

          <div className={styles.logoSection}>
            <a href="#" className={styles.logoContainer} onClick={scrollToTop} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.logoIcon}>
                <MapPin size={18} color="white" />
              </div>
              <span className={styles.logoText}>SCRAPY</span>
            </a>
            <p className={styles.tagline}>Extract smarter. Outreach faster.</p>
            <div className={styles.socialLinks}>
              <a href="https://github.com/Himanshu1622" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" height="16" width="16" />
              </a>
              <a href="https://instagram.com/himanshu16_2k" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" height="16" width="16" />
              </a>
              <a href="mailto:himanshuverma162k@gmail.com" className={styles.socialBtn}>
                <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Gmail" height="18" width="18" />
              </a>
              <a href="#" className={styles.socialBtn}>
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Product</h4>
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
              <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>How It Works</a>
              <a href="#demo" onClick={(e) => scrollToSection(e, 'demo')}>Demo</a>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Support</h4>
              <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Us</a>
            </div>
          </div>

        </div>
      </ScrollReveal>

      <div className={styles.bottomBar}>
        <div className={styles.container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className={styles.copyright}>
            <span>© 2025 SCRAPY. All rights reserved. | Built for lead hunters, data nerds & growth teams.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
