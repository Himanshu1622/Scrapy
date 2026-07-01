'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import styles from './FAQ.module.css';

const faqs = [
  { question: "Does SCRAPY require any coding skills?", answer: "Not at all. SCRAPY is designed for non-technical users. If you can type a Google search, you can use SCRAPY." },
  { question: "What data does SCRAPY extract from Google Maps?", answer: "Business name, address, phone number, website URL, email (where available), Google rating, number of reviews, and business category." },
  { question: "Can I export data to Excel?", answer: "Yes. You can download a CSV file which opens directly in Microsoft Excel, Google Sheets, or any spreadsheet app." },
  { question: "How many results can SCRAPY extract in one search?", answer: "SCRAPY can extract all available Google Maps listings for your search — typically hundreds to thousands of records depending on the keyword and location." },
  { question: "Is SCRAPY safe to use?", answer: "Yes. SCRAPY reads publicly available data from Google Maps, the same data any user can see in their browser." },
  { question: "Does it work for any country or city?", answer: "Yes. If a business is listed on Google Maps anywhere in the world, SCRAPY can extract it." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.label}>FAQ</div>
            <h2 className={styles.title}>Got Questions? We've Got Answers.</h2>
          </div>
        </ScrollReveal>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}>
                <div 
                  className={styles.faqHeader} 
                  onClick={() => toggleFaq(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(index); } }}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <div className={styles.iconBtn}>
                    {openIndex === index ? (
                      <ChevronUp size={20} color="var(--accent-green)" />
                    ) : (
                      <ChevronDown size={20} color="var(--text-secondary)" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
