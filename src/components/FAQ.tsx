import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../types";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-border-color bg-bg-dark relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green text-xs font-semibold tracking-wider uppercase mb-4">
            Got Questions?
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            We've Got Answers
          </h2>
          <p className="font-sans text-base text-text-secondary">
            Find immediate answers to common questions about data extraction, safety, location coverage, and formats below.
          </p>
        </motion.div>

        {/* Accordion Lists */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="max-w-3xl mx-auto flex flex-col gap-4"
        >
          {FAQ_DATA.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                }}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
                    ? "border-accent-green bg-accent-green/5 shadow-[0_0_20px_rgba(20,184,166,0.08)]"
                    : "border-border-color bg-bg-card/50 hover:border-border-light"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-sans font-bold text-sm sm:text-base text-text-primary focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`p-1.5 rounded-lg border border-border-color bg-bg-dark text-text-secondary transition-all duration-300 flex items-center justify-center ${isOpen ? "text-accent-green border-accent-green rotate-180" : ""
                      }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-border-color/40 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
