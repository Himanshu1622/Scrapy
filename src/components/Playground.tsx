import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, Database, Loader2, Download, Check, RefreshCw, Terminal, FileSpreadsheet } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MOCK_CRAWL_LEADS, LeadRow } from "../types";

export default function Playground() {
  const [keyword, setKeyword] = useState("dentists");
  const [location, setLocation] = useState("Miami");
  const [isCrawling, setIsCrawling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [extractedLeads, setExtractedLeads] = useState<LeadRow[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal logs without scrolling the whole page
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleStartCrawl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword || !location) return;

    setIsCrawling(true);
    setProgress(0);
    setLogs([]);
    setExtractedLeads([]);
    setIsCompleted(false);

    // Identify standard mock data key or generate generic one
    const key = `${keyword.toLowerCase().trim()}_${location.toLowerCase().trim()}`;
    const targetLeads = MOCK_CRAWL_LEADS[key] || [
      { name: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} Pros`, phone: "+1 555-0100", website: "localbusiness.com", email: "info@localbusiness.com", rating: 4.8, reviews: 120, address: `100 Main St, ${location}`, category: keyword },
      { name: `Elite ${keyword.charAt(0).toUpperCase() + keyword.slice(1)} Hub`, phone: "+1 555-0200", website: "elitebiz.com", email: "support@elitebiz.com", rating: 4.9, reviews: 85, address: `200 Broadway, ${location}`, category: keyword },
      { name: `City ${keyword.charAt(0).toUpperCase() + keyword.slice(1)} Specialists`, phone: "+1 555-0300", website: "cityspecialists.net", email: "hello@cityspecialists.net", rating: 4.5, reviews: 42, address: `450 Pine Ave, ${location}`, category: keyword },
      { name: `${location} ${keyword.charAt(0).toUpperCase() + keyword.slice(1)} & Co.`, phone: "+1 555-0400", website: "localco.com", email: "contact@localco.com", rating: 4.7, reviews: 156, address: `800 Ocean Dr, ${location}`, category: keyword },
      { name: `Green Light ${keyword.charAt(0).toUpperCase() + keyword.slice(1)}`, phone: "+1 555-0500", website: "greenlight.org", email: "office@greenlight.org", rating: 4.6, reviews: 74, address: `1200 Sunset Blvd, ${location}`, category: keyword }
    ];

    addLog(`INITIALIZING: Contacting SCRAPY crawl cluster...`);

    setTimeout(() => {
      addLog(`RESOLVED: Connected to Google Maps headless gateway.`);
      addLog(`SEARCH_REQUEST: Querying '${keyword}' in '${location}'...`);
    }, 400);

    setTimeout(() => {
      addLog(`NAVIGATION: Loading viewport map grids...`);
      addLog(`SCROLL_ENGINE: Simulating page interactions to trigger lazy-load.`);
    }, 1000);

    setTimeout(() => {
      addLog(`PARSER: Found ${targetLeads.length} matching business listings. Starting row-by-row parsing...`);
    }, 1800);

    // Staggered lead loading simulator
    targetLeads.forEach((lead, i) => {
      setTimeout(() => {
        setExtractedLeads((prev) => [...prev, lead]);
        setProgress(Math.round(((i + 1) / targetLeads.length) * 100));
        addLog(`EXTRACTED [${i + 1}/${targetLeads.length}]: Found '${lead.name}'. Website and contact details mapped.`);

        if (i === targetLeads.length - 1) {
          setTimeout(() => {
            setIsCrawling(false);
            setIsCompleted(true);
            addLog(`SUCCESS: All available Google Maps leads extracted. Export ready!`);
          }, 600);
        }
      }, 2400 + i * 1500);
    });
  };

  const handleDownloadCSV = () => {
    if (extractedLeads.length === 0) return;

    const headers = ["Business Name", "Phone", "Website", "Email", "Google Rating", "Reviews", "Address", "Category"];
    const rows = extractedLeads.map((lead) => [
      `"${lead.name.replace(/"/g, '""')}"`,
      `"${lead.phone}"`,
      `"${lead.website}"`,
      `"${lead.email}"`,
      lead.rating,
      lead.reviews,
      `"${lead.address.replace(/"/g, '""')}"`,
      `"${lead.category}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `scrapy_leads_${keyword}_${location}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLead = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="playground" className="py-24 border-t border-border-color bg-bg-card/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-accent-orange text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(255,144,0,0.2)]">
            Interactive Sandbox
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4 drop-shadow-md">
            Test SCRAPY in Real-Time
          </h2>
          <p className="font-sans text-base text-text-secondary">
            Select a target keyword and city below, then witness Scrapy crawl, pull public B2B contact lists, and output clean spreadsheets.
          </p>
        </motion.div>

        {/* Form Selection Row */}
        <form onSubmit={handleStartCrawl} className="max-w-4xl mx-auto mb-12 glass-panel p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center z-10 relative">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
            <select
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              disabled={isCrawling}
              className="w-full pl-11 pr-4 py-4 rounded-xl bg-bg-dark/40 border border-border-color hover:border-accent-green/50 focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green transition-colors font-sans text-sm font-medium text-text-primary cursor-pointer disabled:opacity-50 appearance-none"
            >
              <option value="dentists" className="bg-bg-dark">Dentists</option>
              <option value="plumbers" className="bg-bg-dark">Plumbers</option>
              <option value="restaurants" className="bg-bg-dark">Restaurants</option>
              <option value="gyms" className="bg-bg-dark">Gyms / Fitness</option>
              <option value="lawyers" className="bg-bg-dark">Lawyers</option>
            </select>
          </div>

          <div className="flex-1 w-full relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={isCrawling}
              className="w-full pl-11 pr-4 py-4 rounded-xl bg-bg-dark/40 border border-border-color hover:border-accent-green/50 focus:border-accent-green focus:outline-none focus:ring-1 focus:ring-accent-green transition-colors font-sans text-sm font-medium text-text-primary cursor-pointer disabled:opacity-50 appearance-none"
            >
              <option value="Miami" className="bg-bg-dark">Miami, FL</option>
              <option value="Chicago" className="bg-bg-dark">Chicago, IL</option>
              <option value="Dubai" className="bg-bg-dark">Dubai, UAE</option>
              <option value="New York" className="bg-bg-dark">New York, NY</option>
              <option value="London" className="bg-bg-dark">London, UK</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isCrawling}
            className="w-full md:w-auto px-8 py-4 bg-text-primary text-bg-dark font-sans font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-shadow)] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isCrawling ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Extracting...
              </>
            ) : (
              <>
                <Database size={18} />
                Search &amp; Extract
              </>
            )}
          </button>
        </form>

        {/* Dashboard Grid (Terminal + Output Table) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto relative z-10">
          {/* Simulated Terminal Console (Left) */}
          <div className="lg:col-span-4 bg-bg-card border border-border-color rounded-2xl overflow-hidden flex flex-col h-[480px] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <div className="bg-bg-dark px-4 py-3 flex justify-between items-center border-b border-border-color">
              <div className="flex gap-1.5 mr-4">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 flex-1 justify-center">
                <Terminal size={14} className="text-zinc-500" />
                <span className="font-mono text-[10px] text-zinc-500 font-semibold tracking-wider">CRAWL_CONSOLE</span>
              </div>
            </div>

            <div ref={logsContainerRef} className="flex-1 p-4 font-mono text-[11px] text-zinc-300 overflow-y-auto space-y-2 select-text scrollbar-thin scroll-smooth">
              {logs.length === 0 ? (
                <div className="text-zinc-500 italic flex items-center justify-center h-full">
                  Waiting to connect and crawl...
                </div>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="leading-relaxed break-all">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Table Spreadsheet Output (Right) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl flex flex-col h-[480px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative">
            {/* Header / Table Toolbar */}
            <div className="px-6 py-4 border-b border-border-color bg-bg-card/40 flex justify-between items-center flex-wrap gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center border border-accent-green/30">
                  <FileSpreadsheet className="text-accent-green" size={16} />
                </div>
                <span className="font-sans text-sm font-bold text-text-primary">
                  Mapped Listings spreadsheet <span className="text-zinc-500 font-normal">({extractedLeads.length} parsed)</span>
                </span>
              </div>

              {/* Export Trigger */}
              {isCompleted && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex gap-2">
                  <button
                    onClick={handleDownloadCSV}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-green text-black font-sans text-xs font-bold rounded-lg hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer shadow-[0_0_15px_var(--accent-shadow)]"
                  >
                    <Download size={14} />
                    Download CSV
                  </button>
                  <button
                    onClick={() => {
                      alert("Successfully initiated oauth flow proxy and pushed leads to your Google Drive Sheets folder!");
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-bg-dark/50 border border-border-color hover:border-accent-purple text-text-primary font-sans text-xs font-semibold rounded-lg hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer"
                  >
                    Google Sheets
                  </button>
                </motion.div>
              )}
            </div>

            {/* Table wrapper */}
            <div className="flex-1 overflow-x-auto overflow-y-auto bg-bg-dark/20">
              <table className="w-full text-left font-sans text-xs border-collapse">
                <thead className="bg-bg-dark/60 sticky top-0 text-zinc-400 uppercase tracking-wider font-bold border-b border-border-color backdrop-blur-md z-10">
                  <tr>
                    <th className="py-4 px-5">Business Name</th>
                    <th className="py-4 px-5">Phone</th>
                    <th className="py-4 px-5">Website</th>
                    <th className="py-4 px-5">Email</th>
                    <th className="py-4 px-5">Rating</th>
                    <th className="py-4 px-5">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {extractedLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-20 text-center text-text-secondary italic">
                        No active records in workspace. Initiate crawler search above.
                      </td>
                    </tr>
                  ) : (
                    extractedLeads.map((lead, index) => (
                      <motion.tr
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className="hover:bg-bg-dark/50 transition-colors"
                      >
                        <td className="py-3.5 px-4 font-semibold text-text-primary break-words min-w-[150px]">
                          {lead.name}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-text-secondary whitespace-nowrap">
                          {lead.phone}
                        </td>
                        <td className="py-3.5 px-4 text-accent-green break-all">
                          <a href={`https://${lead.website}`} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                            {lead.website}
                          </a>
                        </td>
                        <td className="py-3.5 px-4 text-text-secondary font-mono break-all">
                          {lead.email}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-amber-500 font-bold whitespace-nowrap">
                          ★ {lead.rating} ({lead.reviews})
                        </td>
                        <td className="py-3.5 px-4 text-text-secondary font-medium">
                          {lead.category}
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Progress overlay during active crawls */}
            {isCrawling && (
              <div className="absolute inset-0 bg-bg-dark/80 backdrop-blur-sm flex flex-col justify-center items-center z-20 px-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-green blur-xl opacity-50 rounded-full animate-pulse" />
                  <Loader2 size={48} className="text-accent-green animate-spin relative z-10 mb-6" />
                </div>
                <span className="font-sans text-base font-bold text-text-primary tracking-wide">
                  CRAWLER ENGAGED: Extracting from Maps...
                </span>
                <span className="font-mono text-sm text-accent-green mt-2 font-bold">
                  {progress}% Complete
                </span>
                <div className="w-72 h-2 bg-white/10 rounded-full mt-6 overflow-hidden border border-white/5 relative">
                  <div className="absolute inset-0 bg-white/5" />
                  <div
                    className="h-full bg-gradient-to-r from-accent-green to-accent-cyan shadow-[0_0_10px_var(--accent-green)] transition-all duration-300 relative"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
