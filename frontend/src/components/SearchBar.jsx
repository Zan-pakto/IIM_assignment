import React, { useState } from 'react';

/**
 * SearchBar component for entering target company name/ticker.
 * @param {object} props
 * @param {function} props.onSearch - Callback function triggered on form submission.
 * @param {boolean} props.isLoading - Whether the search is currently loading.
 */
export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  const quickPicks = [
    { name: 'Apple', ticker: 'AAPL' },
    { name: 'Tesla', ticker: 'TSLA' },
    { name: 'Nvidia', ticker: 'NVDA' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row gap-3 w-full">
        <div className="relative flex-grow">
          {/* Company search icon */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <svg className="w-5 h-5 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Enter company name or stock ticker (e.g. Apple, TSLA, Amazon)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={isLoading}
            className="w-full pl-11 pr-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/50 transition-all duration-300 text-base shadow-inner"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="glow-button px-8 py-4 rounded-xl gold-gradient-bg text-white font-bold tracking-wide transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-gold-primary/20 active:scale-98 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </>
          ) : (
            <>
              Analyze Company
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </form>

      {/* Quick Pick tags */}
      <div className="flex items-center justify-center gap-2.5 flex-wrap text-sm">
        <span className="text-slate-500 dark:text-slate-400">Try these popular companies:</span>
        {quickPicks.map((pick) => (
          <button
            key={pick.ticker}
            type="button"
            onClick={() => {
              setQuery(pick.name);
              onSearch(pick.name);
            }}
            disabled={isLoading}
            className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-gold-primary/50 hover:bg-gold-light dark:hover:bg-gold-primary/10 text-slate-700 dark:text-slate-300 hover:text-gold-primary dark:hover:text-gold-primary transition-all duration-300 text-xs font-semibold cursor-pointer shadow-sm"
          >
            {pick.name} ({pick.ticker})
          </button>
        ))}
      </div>
    </div>
  );
}
