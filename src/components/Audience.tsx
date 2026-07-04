import React from "react";
import { Target, Megaphone, User, Building2, TrendingUp, Home } from "lucide-react";
import { motion } from "motion/react";
import { USE_CASES } from "../types";

const iconMap: Record<string, React.ComponentType<any>> = {
  Target,
  Megaphone,
  User,
  Building2,
  TrendingUp,
  Home,
};

export default function Audience() {
  return (
    <section id="audience" className="py-24 border-t border-border-color bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green text-xs font-semibold tracking-wider uppercase mb-4">
            Target Audience
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            Built for Anyone Who Needs Business Data — Fast
          </h2>
          <p className="font-sans text-base text-text-secondary">
            Whether you are searching for localized services or mapping global competitors, SCRAPY extracts actionable contact sheets on demand.
          </p>
        </motion.div>

        {/* Bento Grid Layout for Audience */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]"
        >
          {USE_CASES.map((uc, index) => {
            const IconComponent = iconMap[uc.iconName];
            
            // Make the first and last items span 2 columns on large screens for a bento effect
            const isLarge = index === 0 || index === 5;
            
            return (
              <motion.div
                key={uc.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className={`relative group overflow-hidden rounded-3xl border border-border-color shadow-lg bg-bg-card ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={uc.imageUrl} 
                    alt={uc.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-30"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <div className="w-12 h-12 rounded-xl bg-bg-dark/80 backdrop-blur-sm border border-border-color text-accent-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {IconComponent && <IconComponent size={22} />}
                  </div>

                  <h3 className="font-sans text-xl font-bold text-text-primary mb-3">
                    {uc.title}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-md">
                    {uc.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
