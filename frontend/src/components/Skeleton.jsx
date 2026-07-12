import React from 'react';

/**
 * Shimmering Skeleton Loader component.
 * Displays placeholders mimicking the Results layout during loading phases.
 */
export function CardSkeleton({ heightClass = "h-40" }) {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl p-6 space-y-4 animate-pulse relative overflow-hidden">
      {/* Shimmer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
      <div className="w-1/3 h-4 bg-slate-300 dark:bg-slate-800 rounded-lg"></div>
      <div className={`w-full ${heightClass} bg-slate-200 dark:bg-slate-800/60 rounded-xl`}></div>
    </div>
  );
}

export default function Skeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-fade-in-up py-4">
      {/* Header skeleton */}
      <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/10 pb-5">
        <div className="w-32 h-9 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse"></div>
        <div className="w-24 h-5 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
      </div>

      {/* Meta details bar skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-1.5 animate-pulse">
            <div className="w-1/2 h-3 bg-slate-300 dark:bg-slate-800 rounded"></div>
            <div className="w-3/4 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
          </div>
        ))}
      </div>

      {/* Decision and Risk Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardSkeleton heightClass="h-28" />
        <CardSkeleton heightClass="h-28" />
      </div>

      {/* SWOT Cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-5 rounded-2xl space-y-4 animate-pulse">
            <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200 dark:border-white/5">
              <div className="w-8 h-8 rounded-lg bg-slate-300 dark:bg-slate-800"></div>
              <div className="w-1/2 h-4 bg-slate-300 dark:bg-slate-800 rounded"></div>
            </div>
            <div className="space-y-3">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="space-y-1">
                  <div className="w-2/3 h-3 bg-slate-300 dark:bg-slate-800 rounded"></div>
                  <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800/60 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Rationale narrative skeleton */}
      <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-6 rounded-2xl space-y-4 animate-pulse">
        <div className="w-1/4 h-5 bg-slate-300 dark:bg-slate-800 rounded"></div>
        <div className="space-y-2 border-t border-slate-200 dark:border-white/5 pt-4">
          <div className="w-full h-4 bg-slate-200 dark:bg-slate-800/60 rounded"></div>
          <div className="w-full h-4 bg-slate-200 dark:bg-slate-800/60 rounded"></div>
          <div className="w-5/6 h-4 bg-slate-200 dark:bg-slate-800/60 rounded"></div>
          <div className="w-4/5 h-4 bg-slate-200 dark:bg-slate-800/60 rounded"></div>
        </div>
      </div>
    </div>
  );
}
