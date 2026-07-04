import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoDemo from "./components/VideoDemo";
import Features from "./components/Features";
import Playground from "./components/Playground";
import Audience from "./components/Audience";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    // Hide preloader after 1.5 seconds
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Force scroll to top on page load and disable browser scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary overflow-x-hidden selection:bg-accent-green selection:text-white">
      {/* Animated Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-bg-dark flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <div className="bg-accent-green text-white p-5 rounded-[1.5rem] flex items-center justify-center shadow-[0_0_40px_var(--accent-shadow-strong)] animate-pulse">
                <Database size={48} className="stroke-[2.5]" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-sans text-2xl font-extrabold tracking-[0.2em] text-text-primary"
              >
                SCRAPY
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-orange to-accent-green z-50 shadow-[0_2px_15px_var(--accent-shadow)]" />

      {/* Main app blocks */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <VideoDemo />
      <Features />
      <Playground />
      <Audience />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

