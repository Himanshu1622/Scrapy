import { Database, Github, Instagram, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-card border-t border-border-color pt-16 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border-color">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="bg-accent-green text-white p-2 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-transform duration-300">
                <Database size={18} className="stroke-[2.5]" />
              </div>
              <span className="font-sans text-lg font-extrabold tracking-tight text-text-primary">
                SCRAPY
              </span>
            </a>
            <p className="font-sans text-sm text-text-secondary max-w-sm leading-relaxed">
              Extract business data from Google Maps in seconds. Empowering sales squads, agencies, and local startups to generate real-time lead pipelines with zero code.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-border-color hover:border-accent-green hover:text-accent-green text-text-secondary transition-colors duration-200"
                aria-label="GitHub Link"
              >
                <Github size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-border-color hover:border-accent-green hover:text-accent-green text-text-secondary transition-colors duration-200"
                aria-label="Instagram Link"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:himu1622@gmail.com"
                className="p-2 rounded-full border border-border-color hover:border-accent-green hover:text-accent-green text-text-secondary transition-colors duration-200"
                aria-label="Email Contact"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links Section 1 */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium text-text-secondary">
              <li>
                <a href="#features" className="hover:text-accent-green transition-colors duration-150">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-accent-green transition-colors duration-150">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#playground" className="hover:text-accent-green transition-colors duration-150">
                  Playground Sandbox
                </a>
              </li>
              <li>
                <a href="#audience" className="hover:text-accent-green transition-colors duration-150">
                  Use Cases
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="md:col-span-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-text-primary mb-4">
              Support &amp; Contact
            </h4>
            <ul className="space-y-3 text-sm font-medium text-text-secondary">
              <li>
                <a href="#contact" className="hover:text-accent-green transition-colors duration-150">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="mailto:himu1622@gmail.com" className="hover:text-accent-green transition-colors duration-150 flex items-center gap-1.5">
                  himu1622@gmail.com
                  <ExternalLink size={12} />
                </a>
              </li>
              <li className="text-xs text-text-secondary/60">
                Developed App URL:
                <span className="block font-mono text-[10px] text-accent-green mt-1 select-all truncate">
                  https://scrapy.himanshu-verma.info/
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-text-secondary">
          <span>&copy; {currentYear} SCRAPY. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-accent-green cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent-green cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
