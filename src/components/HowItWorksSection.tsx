"use client";

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import styles from './HowItWorksSection.module.css';

const steps = [
  {
    number: '01',
    title: 'Enter Your Search',
    description: 'Type in your target business category and location. Example: "plumbers in Chicago" or "restaurants in Dubai." SCRAPY understands natural search terms — just like Google.',
  },
  {
    number: '02',
    title: 'SCRAPY Extracts the Data',
    description: 'Hit extract and watch SCRAPY do the heavy lifting. It scans every Google Maps listing matching your search and pulls business name, contact info, rating, reviews, website, and more — automatically.',
  },
  {
    number: '03',
    title: 'Export & Use Your Data',
    description: 'Choose to export directly to Google Sheets or download a CSV file. Your leads are clean, structured, and ready for outreach, analysis, or CRM import — instantly.',
  }
];

export default function HowItWorksSection() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.label}>How It Works</div>
            <h2 className={styles.title}>From Search to Spreadsheet in 3 Simple Steps</h2>
          </div>
        </ScrollReveal>

        <div className={styles.stepsContainer}>

          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.2}>
              <div className={styles.step}>
                <div className={styles.stepNumberContainer}>
                  <div className={styles.stepNumber}>{step.number}</div>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Step {idx + 1} — {step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
