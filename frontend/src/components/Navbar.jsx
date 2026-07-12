import React, { useState, useEffect } from 'react';

/**
 * Navbar component for NexaInvest.
 * Features branding cleanups (no AI references) and a theme toggle selector.
 */
export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    // Default to light theme, check localStorage for stored dark preference
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <nav className="w-full sticky top-0 z-50 glass-panel border-b transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3 group cursor-pointer">
          {/* Brand Logo - Abstract Gold Shield/Moat */}
          <div className="w-9 h-9 rounded-lg gold-gradient-bg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-wide text-lg text-slate-800 dark:text-white">
              NexaInvest
            </span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold -mt-0.5 hidden sm:inline">
              Value Investment Research Dossier
            </span>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-gold-primary/50 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
          >
            {isDark ? (
              // Sun Icon (Light Mode trigger)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              // Moon Icon (Dark Mode trigger)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Research Pipeline Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Research Engine Active
          </div>
        </div>
      </div>
    </nav>
  );
}
