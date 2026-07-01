import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>
            Hear from Our<br />
            <span className="glow-text">Satisfied Customers</span>
          </h2>
          <div className={styles.controls}>
            <button className={styles.controlBtn}><ArrowLeft size={20} /></button>
            <button className={styles.controlBtn}><ArrowRight size={20} /></button>
          </div>
        </div>

        <div className={styles.slider}>
          
          <div className={`${styles.card} ${styles.cardInactive}`}>
            <div className={styles.avatar}></div>
            <div className={styles.authorInfo}>
              <div className={styles.authorName}>John Smith</div>
              <div className={styles.authorRole}>Data Scientist, Tech Corp</div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardActive}`}>
            <Quote className={styles.quoteIcon} size={32} color="var(--accent-orange)" />
            <p className={styles.quoteText}>
              "Absolutely incredible. Best tool for building local business lead lists. 
              Our team relies on it daily."
            </p>
            <div className={styles.authorInfoActive}>
              <div className={styles.avatarSmall}></div>
              <div>
                 <div className={styles.authorName}>Maria Gonzalez</div>
                 <div className={styles.authorRole}>Lead Data Engineer</div>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardInactive}`}>
            <div className={styles.avatar}></div>
            <div className={styles.authorInfo}>
              <div className={styles.authorName}>Emily Chen</div>
              <div className={styles.authorRole}>Scraping Engineer</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
