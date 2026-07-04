import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import videoSrc from "@/assets/scrapy.mp4";

export default function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleInitialPlay = () => {
    if (!hasPlayed && videoRef.current) {
      videoRef.current.play();
      setHasPlayed(true);
    }
  };

  return (
    <section id="demo" className="py-24 border-t border-border-color bg-bg-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(112,0,255,0.2)]">
            See it in Action
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-6 drop-shadow-md">
            Watch How Fast SCRAPY Works
          </h2>
          <p className="font-sans text-lg text-zinc-300 font-medium">
            Experience the power of automated lead generation. No more manual copy-pasting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] glass-panel group aspect-video bg-bg-dark flex items-center justify-center ${!hasPlayed ? 'cursor-pointer' : ''}`}
          onClick={!hasPlayed ? handleInitialPlay : undefined}
        >
          {/* Local video controlled by native controls after first play */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            controls={hasPlayed}
            poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom play button indicator and gradient (hidden after first play) */}
          {!hasPlayed && (
            <>
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-10"></div>

              {/* Custom play button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500 group-hover:scale-110 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-green blur-2xl opacity-60 lg:opacity-40 rounded-full lg:group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="w-24 h-24 bg-white/20 lg:bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_40px_var(--accent-shadow)] relative z-10 lg:group-hover:bg-white/20 transition-colors duration-300">
                    <Play className="text-white w-10 h-10 ml-2 drop-shadow-[0_0_10px_var(--accent-shadow)]" fill="currentColor" />
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Decorative background blurs with GPU acceleration */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-accent-purple/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none z-0 transform-gpu"></div>
      <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-accent-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0 transform-gpu"></div>
    </section>
  );
}
