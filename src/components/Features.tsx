import React from "react";
import { Search, Database, FileSpreadsheet, Download, MapPin, CopyPlus } from "lucide-react";
import { motion } from "motion/react";
import { FEATURES } from "../types";

const iconMap: Record<string, React.ComponentType<any>> = {
  Search,
  Database,
  FileSpreadsheet,
  Download,
  MapPin,
  CopyPlus,
};

export default function Features() {
  return (
    <section id="features" className="py-24 border-t border-border-color bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_var(--accent-green-glow)]">
            Product Features
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-6 drop-shadow-md">
            Everything You Need to Build a Lead List That Actually Converts
          </h2>
          <p className="font-sans text-base text-text-secondary">
            Stop buying overpriced, outdated B2B lists. Generate your own fresh, live data straight from the world's most comprehensive local business directory.
          </p>
        </motion.div>

        {/* Premium Grid Layout for Features */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feat, index) => {
            const IconComponent = iconMap[feat.iconName];
            return (
              <motion.div
                key={feat.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="group relative overflow-hidden rounded-[2rem] glass-panel flex flex-col h-full border border-accent-green/30 lg:border-transparent lg:hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.6)] lg:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] lg:hover:border-accent-green/50"
              >
                {/* Image Header with smooth mask fade */}
                <div className="relative h-64 w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] -webkit-[mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
                  <div className="absolute inset-0 bg-black/40 z-10 opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                  <img 
                    src={feat.imageUrl} 
                    alt={feat.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 scale-110 lg:scale-100 lg:group-hover:scale-110 opacity-100 lg:opacity-80 lg:group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                
                {/* Content Block */}
                <div className="p-8 flex flex-col flex-1 relative z-30 -mt-20">
                  <div className="w-16 h-16 rounded-2xl bg-bg-dark/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-accent-green mb-6 shadow-[0_0_20px_var(--accent-shadow)] lg:shadow-xl scale-110 lg:scale-100 lg:group-hover:scale-110 lg:group-hover:shadow-[0_0_20px_var(--accent-shadow)] transition-all duration-500 relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    {IconComponent && <IconComponent size={28} className="stroke-[1.5]" />}
                  </div>
                  <h3 className="font-sans text-2xl font-extrabold text-accent-green lg:text-text-primary mb-3 tracking-tight lg:group-hover:text-accent-green transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-300 leading-relaxed flex-1 font-medium">
                    {feat.description}
                  </p>
                </div>

                {/* Subtle bottom highlight on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-purple to-accent-orange opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_var(--accent-green)]"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
