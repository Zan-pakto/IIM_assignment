import React from 'react';
import SearchBar from '../components/SearchBar';

/**
 * Home page view of the app.
 * @param {object} props
 * @param {function} props.onSearch - Search action handler.
 * @param {boolean} props.isLoading - Whether the search is running.
 */
export default function Home({ onSearch, isLoading }) {
  const pillars = [
    {
      title: "Economic Moat",
      description: "Evaluate pricing power, consumer switching costs, brand equity, and cost advantages protecting historical cash flows.",
      icon: (
        <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Margin of Safety",
      description: "Compute intrinsic business value discounting, evaluate PE ratios, and build a protective valuation cushion.",
      icon: (
        <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Capital Allocation",
      description: "Inspect Return on Invested Capital (ROIC), Return on Equity (ROE), buyback campaigns, and dividend stability.",
      icon: (
        <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Risk Matrix",
      description: "Uncover industry disruption vectors, high supply chain reliance, regulatory obstacles, and competitive erosion risks.",
      icon: (
        <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full py-10 md:py-16 space-y-16 animate-fade-in-up">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl filter pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 -z-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl filter pointer-events-none"></div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-gold-300 select-none">
          ✨ Automated Value Investing Analysis
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-800 dark:text-white">
          Value Investment <br className="hidden sm:inline" />
          <span className="gold-gradient-text font-serif italic font-normal">Research Dossier</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Instantly evaluate corporate balance sheets, competitive moats, growth runways, 
          and core risk profiles synthesized through a Warren Buffett-style filter.
        </p>
      </div>

      {/* Centered Searchbar Form */}
      <div className="relative max-w-3xl mx-auto px-4">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border shadow-md relative">
          {/* Subtle gold glow behind search card */}
          <div className="absolute inset-0 -z-10 bg-gold-primary/5 blur-xl rounded-2xl"></div>
          
          <SearchBar onSearch={onSearch} isLoading={isLoading} />
        </div>
      </div>

      {/* Four Pillars section */}
      <div className="space-y-8 max-w-6xl mx-auto px-4 pt-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white">The 4 Pillars of Analysis</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-lg mx-auto font-medium">
            Our automated evaluation engine runs every ticker through structural investment filters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card p-6 rounded-xl space-y-4 hover:border-gold-primary/30 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-lg bg-gold-light dark:bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{pillar.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
