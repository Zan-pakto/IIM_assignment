import React from 'react';

/**
 * Error component to display failure messages.
 * @param {object} props
 * @param {string} props.message - The error message text.
 * @param {function} props.onRetry - Callback to retry search.
 */
export default function Error({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[350px] text-center px-6 py-8 max-w-md mx-auto glass-panel rounded-2xl border border-rose-500/20 dark:border-rose-500/15 shadow-xl shadow-slate-100 dark:shadow-none space-y-6 animate-fade-in-up">
      {/* Warning/Alert Icon */}
      <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <div className="space-y-2">
        <h4 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Research Pipeline Failed</h4>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
          {message || 'An unexpected error occurred during the investment evaluation run.'}
        </p>
      </div>

      {onRetry && (
        <button 
          onClick={onRetry}
          className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-gold-primary/50 hover:bg-gold-light dark:hover:bg-gold-primary/10 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300 text-slate-700 dark:text-slate-300"
        >
          Re-run Pipeline
        </button>
      )}
    </div>
  );
}
