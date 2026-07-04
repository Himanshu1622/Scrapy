import { useState, useEffect } from "react";
import { Menu, X, Database, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { name: "Features", id: "features" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Playground", id: "playground" },
    { name: "Audience", id: "audience" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nav-bg backdrop-blur-md border-b border-border-color py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group cursor-pointer focus:outline-none">
          <div className="bg-accent-green text-white p-2 rounded-lg flex items-center justify-center shadow-[0_0_15px_var(--accent-shadow)] transition-transform duration-300 group-hover:scale-110">
            <Database size={20} className="stroke-[2.5]" />
          </div>
          <span className="font-sans text-xl font-extrabold tracking-tight text-text-primary">
            SCRAPY
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="font-sans text-sm font-medium text-text-secondary hover:text-accent-green transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border-color hover:border-accent-green hover:text-accent-green bg-bg-card text-text-secondary transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => scrollToSection("playground")}
            className="font-sans text-sm font-semibold bg-text-primary text-bg-dark px-5 py-2.5 rounded-lg hover:shadow-[0_0_15px_var(--accent-shadow)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
          >
            Try Free Simulator
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border-color bg-bg-card text-text-secondary transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-primary focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-bg-dark border-b border-border-color"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="font-sans text-base font-medium text-text-secondary hover:text-accent-green transition-colors duration-200 text-left cursor-pointer focus:outline-none"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-border-color flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("playground")}
                  className="font-sans text-center font-semibold bg-text-primary text-bg-dark py-3 rounded-lg shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
                >
                  Try Free Simulator
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
