"use client";

import { useState, useEffect } from 'react';
import { MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeSidebar();
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeSidebar();
    }
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logoContainer} onClick={scrollToTop}>
          <div className={styles.logoIcon}>
            <MapPin size={18} color="white" />
          </div>
          <span className={styles.logoText}>SCRAPY</span>
        </a>
        
        <nav className={`${styles.navLinks} ${isSidebarOpen ? styles.open : ''}`}>
          <div className={styles.sidebarHeader}>
            <a href="#" className={styles.logoText} onClick={scrollToTop} style={{ color: 'inherit', textDecoration: 'none' }}>SCRAPY</a>
            <button className={styles.closeBtn} onClick={closeSidebar}>
              <X size={24} />
            </button>
          </div>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>How It Works</a>
          <a href="#demo" onClick={(e) => scrollToSection(e, 'demo')}>Demo</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          <div className={styles.mobileActions}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <ThemeToggle />
            </div>
            <button className="btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>Get Started <ArrowRight size={18} /></button>
          </div>
        </nav>
        
        <div className={styles.actions}>
          <ThemeToggle />
          <button className="btn-primary" onClick={(e) => scrollToSection(e, 'contact')} style={{ marginLeft: '16px' }}>
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        <button className={styles.menuBtn} onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      </div>
      {isSidebarOpen && <div className={styles.overlay} onClick={closeSidebar} />}
    </header>
  );
}
