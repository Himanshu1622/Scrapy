import React, { useState } from "react";
import { Send, CheckCircle, Mail, User, HelpCircle, FileSpreadsheet } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [usage, setUsage] = useState("");
  const [format, setFormat] = useState("CSV");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !usage) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset
      setName("");
      setEmail("");
      setUsage("");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 border-t border-border-color bg-bg-card/20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-bg-card border border-border-color rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-green/5 -translate-y-16 translate-x-16" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center max-w-xl mx-auto mb-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-xs font-semibold uppercase tracking-wider mb-4">
                    Get in Touch
                  </span>
                  <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
                    Have Custom Lead Scraping Needs?
                  </h2>
                  <p className="font-sans text-sm text-text-secondary">
                    Tell us what local leads you are after. We'll set up a tailored pipeline for your agency or enterprise.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Himanshu Verma"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-bg-dark border border-border-color focus:border-accent-green focus:outline-none font-sans text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="himu1622@gmail.com"
                          className="w-full pl-11 pr-4 py-3 rounded-xl bg-bg-dark border border-border-color focus:border-accent-green focus:outline-none font-sans text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Textarea usage */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      How will you use SCRAPY?
                    </label>
                    <div className="relative">
                      <HelpCircle className="absolute left-4 top-4 text-text-secondary" size={16} />
                      <textarea
                        required
                        rows={4}
                        value={usage}
                        onChange={(e) => setUsage(e.target.value)}
                        placeholder="I run an SEO agency in Seattle and want to find plumbers and builders who don't have websites so I can sell them web design..."
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-bg-dark border border-border-color focus:border-accent-green focus:outline-none font-sans text-sm text-text-primary transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>

                  {/* Format preference */}
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
                      Preferred Lead Export Format
                    </label>
                    <div className="flex gap-4">
                      {["CSV", "Google Sheets"].map((fmt) => (
                        <button
                          key={fmt}
                          type="button"
                          onClick={() => setFormat(fmt)}
                          className={`flex-1 py-3 px-4 rounded-xl border text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${format === fmt
                              ? "border-accent-green bg-accent-green/5 text-accent-green shadow-[0_0_15px_rgba(20,184,166,0.15)]"
                              : "border-border-color bg-bg-dark hover:border-border-light text-text-secondary"
                            }`}
                        >
                          <FileSpreadsheet size={16} />
                          {fmt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent-green hover:opacity-90 text-white font-sans font-bold rounded-xl shadow-[0_4px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_4px_30px_rgba(20,184,166,0.5)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent-green/10 border border-accent-green/30 flex items-center justify-center text-accent-green mb-6 shadow-[0_0_20px_rgba(20,184,166,0.25)] animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
                  Inquiry Received!
                </h2>
                <p className="font-sans text-sm text-text-secondary max-w-md leading-relaxed mb-8">
                  Thank you for contacting SCRAPY. Our team will review your usage request and send you a custom extraction report or account setup instructions within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-bg-dark border border-border-color text-text-primary rounded-lg text-xs font-semibold hover:border-accent-green hover:text-accent-green transition-colors duration-200 cursor-pointer"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
