"use client";

import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './DemoVideoSection.module.css';

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handlePlayVideo = () => {
      setIsPlaying(true);
    };

    window.addEventListener('playDemoVideo', handlePlayVideo);
    return () => {
      window.removeEventListener('playDemoVideo', handlePlayVideo);
    };
  }, []);

  return (
    <section className={styles.demoVideo} id="demo">
      <ScrollReveal>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.label}>See It In Action</div>
            <h2 className={styles.title}>Watch SCRAPY Extract 500 Leads in Under 3 Minutes</h2>
            <p className={styles.subtext}>
              No fluff. No setup confusion. Just a real screen recording of SCRAPY pulling live business data from Google Maps and exporting it straight into a spreadsheet.
            </p>
          </div>

          <div className={styles.videoWrapper}>
            {!isPlaying ? (
              <div className={styles.videoPlaceholder} onClick={() => setIsPlaying(true)}>
                <div className={styles.playButton}>
                  <Play size={32} color="white" className={styles.playIcon} />
                </div>
              </div>
            ) : (
              <video 
                src="/scrapy.mp4" 
                controls 
                autoPlay 
                className={styles.videoPlayer}
              />
            )}
            <p className={styles.videoCaption}>
              🎯 What you'll see: Live keyword search &rarr; Real-time data extraction &rarr; One-click export to Google Sheets
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
