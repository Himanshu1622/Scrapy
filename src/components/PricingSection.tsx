import { Check } from 'lucide-react';
import styles from './PricingSection.module.css';

const plans = [
  {
    name: 'Free Plan',
    price: '$0',
    period: '/month',
    features: [
      '100 extractions per day',
      'CSV export only',
      '1 keyword search at a time',
      'Community support'
    ],
    buttonText: 'Get Started \u2192',
    isPopular: false,
  },
  {
    name: 'Pro Plan',
    price: '$19',
    period: '/month',
    features: [
      'Unlimited extractions',
      'Google Sheets + CSV export',
      'Multiple searches simultaneously',
      'Priority support',
      'Auto-scroll bulk extraction'
    ],
    buttonText: 'Get Started \u2192',
    isPopular: true,
  },
  {
    name: 'Agency Plan',
    price: '$49',
    period: '/month',
    features: [
      'Everything in Pro',
      'Team access (up to 5 users)',
      'Scheduled extraction',
      'API access',
      'Dedicated support'
    ],
    buttonText: 'Get Started \u2192',
    isPopular: false,
  }
];

export default function PricingSection() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>Pricing</div>
          <h2 className={styles.title}>Simple, Honest Pricing. No Hidden Fees.</h2>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div key={idx} className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`}>
              {plan.isPopular && <div className={styles.popularBadge}>Most Popular</div>}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
              </div>
              
              <ul className={styles.featureList}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className={styles.featureItem}>
                    <Check size={18} color="var(--accent-green)" className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`${styles.button} ${plan.isPopular ? 'btn-primary' : 'btn-outline'}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
