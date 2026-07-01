import { Briefcase, Megaphone, User, Building2, BarChart, Home } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './UseCasesSection.module.css';

const useCases = [
  {
    icon: <Briefcase size={24} color="var(--accent-orange)" />,
    title: 'Sales & Lead Gen Teams',
    description: 'Stop buying expensive lead lists. Generate your own targeted B2B leads in any city, any niche — on demand.',
  },
  {
    icon: <Megaphone size={24} color="var(--accent-orange)" />,
    title: 'Digital Marketing Agencies',
    description: 'Find local businesses that need your services. Build outreach lists in minutes, not days.',
  },
  {
    icon: <User size={24} color="var(--accent-orange)" />,
    title: 'Freelancers',
    description: 'Land more clients by targeting businesses in your niche locally or globally — no cold outreach tools needed.',
  },
  {
    icon: <Building2 size={24} color="var(--accent-orange)" />,
    title: 'Startups & SMBs',
    description: 'Research competitors, find partners, and discover market opportunities using real Google Maps data.',
  },
  {
    icon: <BarChart size={24} color="var(--accent-orange)" />,
    title: 'Data Analysts & Researchers',
    description: 'Collect structured, real-world business data for analysis, reports, market mapping, or academic research.',
  },
  {
    icon: <Home size={24} color="var(--accent-orange)" />,
    title: 'Real Estate & Local Businesses',
    description: 'Find vendors, suppliers, and neighborhood businesses fast without hours of manual searching.',
  },
];

export default function UseCasesSection() {
  return (
    <section className={styles.useCases}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.label}>Who Uses SCRAPY?</div>
            <h2 className={styles.title}>Built for Anyone Who Needs Business Data — Fast</h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {useCases.map((useCase, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>{useCase.icon}</div>
                <h3 className={styles.cardTitle}>{useCase.title}</h3>
                <p className={styles.cardDesc}>{useCase.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
