import { ArrowRight, MapPin, Database, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Animated Aurora / Neon Blobs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-green/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent-purple/20 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-accent-orange/15 blur-[100px]"
        />

        {/* Dark overlay for better text contrast without heavy GPU blur */}
        <div className="absolute inset-0 bg-bg-dark/85 pointer-events-none z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_var(--accent-green-glow)]"
          >
            <Zap size={14} className="fill-accent-green animate-pulse" />
            Google Maps Powered
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-6 drop-shadow-xl"
          >
            Extract from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green via-accent-purple to-accent-orange drop-shadow-[0_0_25px_var(--accent-shadow-strong)] pb-2 inline-block">
              Google Maps
            </span>
            <br />
            Your Advantage in Lead Gen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-text-secondary leading-relaxed mb-8 max-w-xl font-medium"
          >
            SCRAPY pulls real business leads — names, phones, emails, addresses, ratings & reviews — directly from Google Maps and exports them clean into Google Sheets or CSV. No coding, no manual copy-paste. Just B2B results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-4"
          >
            <button
              onClick={() => document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-text-primary text-bg-dark font-sans font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_var(--accent-shadow)] hover:scale-[1.03] active:scale-95 transition-all duration-300 group cursor-pointer focus:outline-none"
            >
              <span className="flex items-center gap-2">
                Start Extracting Free
                <ArrowRight size={18} />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-panel inline-flex items-center justify-center gap-2 text-text-primary hover:text-white font-sans font-semibold px-8 py-4 rounded-xl border border-white/10 hover:border-accent-purple/50 hover:shadow-[0_0_20px_rgba(112,0,255,0.3)] transition-all duration-300 cursor-pointer focus:outline-none"
            >
              See How It Works
            </button>
          </motion.div>
        </div>

        {/* Right Side Visual Graphic */}
        <div className="lg:col-span-5 flex justify-center perspective-[1000px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15, rotateX: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: [-5, 5, -5],
              rotateX: [2, -2, 2],
              y: [0, -15, 0]
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              scale: { duration: 0.8, delay: 0.3 },
              rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="glass-panel relative w-full max-w-[440px] aspect-square rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border-t border-l border-white/20 transform-gpu"
          >
            {/* Visual background rings */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full border-[1px] border-accent-purple/20 -translate-y-16 translate-x-16 blur-[2px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border-[1px] border-accent-green/20 translate-y-12 -translate-x-12 blur-[1px]" />

            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="flex justify-between items-start z-10 relative">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
                <span className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 backdrop-blur-md">
                <MapPin size={12} className="text-accent-cyan" />
                <span className="font-mono text-[10px] text-zinc-300 font-bold tracking-wider">SCRAPY_NODE_OK</span>
              </div>
            </div>

            {/* Simulated Map / Lead Extraction visualization */}
            <div className="flex-1 flex flex-col justify-center items-center py-6 z-10 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)] pointer-events-none" />
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Simulated radar rings */}
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border-2 border-accent-green shadow-[0_0_20px_var(--accent-shadow)]"
                />
                <motion.div
                  animate={{ scale: [1, 1.6], opacity: [0.9, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.8, ease: "easeOut" }}
                  className="absolute inset-4 rounded-full border border-accent-purple shadow-[0_0_15px_rgba(112,0,255,0.5)]"
                />
                <div className="w-20 h-20 rounded-full bg-bg-dark/90 backdrop-blur-xl border border-white/20 flex items-center justify-center z-10 shadow-[0_0_40px_var(--accent-shadow-strong)]">
                  <Database size={32} className="text-white animate-pulse drop-shadow-[0_0_10px_var(--accent-green)]" />
                </div>
              </div>
              <div className="mt-8 text-center bg-black/40 px-6 py-2 rounded-xl backdrop-blur-md border border-white/10">
                <span className="font-sans text-sm font-bold text-white block tracking-wide">System Ready</span>
                <span className="font-mono text-[11px] text-accent-green mt-1.5 block">SELECT * FROM MAPS</span>
              </div>
            </div>

            <div className="z-10 flex items-center gap-3 w-full pt-5 border-t border-white/10 relative">
              <div className="flex-1 h-2 rounded-full bg-black/60 overflow-hidden border border-white/5 shadow-inner">
                <motion.div
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-accent-green via-accent-purple to-accent-orange shadow-[0_0_10px_var(--accent-green)]"
                />
              </div>
              <span className="font-mono text-[10px] text-zinc-400 font-bold tracking-widest">CRAWLING</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
