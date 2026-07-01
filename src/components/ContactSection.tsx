"use client";

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
    isHuman: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Captcha
    if (!formData.isHuman) {
      alert("Please check the box to confirm you are not a robot.");
      return;
    }

    // Simulate form submission
    alert("Thank you! Your access request has been received.");
    setFormData({ name: '', email: '', business: '', message: '', isHuman: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.contactSection} id="contact">
      <ScrollReveal>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.label}>Get Access</div>
            <h2 className={styles.title}>Ready to Start Extracting?</h2>
            <p className={styles.subtitle}>
              To get access to SCRAPY, please fill out the form below. Our team will connect with you shortly to set up your account and get you started.
            </p>
          </div>

        <div className={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="business">Business</label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
                placeholder="Acme Corp"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">How will you use SCRAPY?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us a bit about your use case..."
              />
            </div>

            <div className={styles.recaptchaContainer}>
              <div className={styles.recaptchaLeft}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={formData.isHuman}
                    onChange={(e) => setFormData(prev => ({ ...prev, isHuman: e.target.checked }))}
                  />
                  <span className={styles.checkmark}></span>
                  <span className={styles.checkboxLabel}>I'm not a robot</span>
                </label>
              </div>
              <div className={styles.recaptchaRight}>
                <div className={styles.recaptchaLogoWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.recaptchaIcon}>
                    <path d="M21 2v6h-6"></path>
                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                    <path d="M3 22v-6h6"></path>
                    <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                  </svg>
                  <span className={styles.recaptchaBrand}>reCAPTCHA</span>
                </div>
                <div className={styles.recaptchaLinks}>
                  <span>Privacy</span> • <span>Terms</span>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
