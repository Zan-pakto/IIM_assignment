import React from 'react';

/**
 * AnalysisCard component to display category analysis (e.g., Financials, Risks, Opportunities).
 * @param {object} props
 * @param {string} props.title - Title of the analysis card.
 * @param {object} props.data - Analysis content key-value map.
 */
export default function AnalysisCard({ title, data }) {
  if (!data) return null;

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  // Assign icons based on card title
  const getHeaderIcon = () => {
    switch (title.toLowerCase()) {
      case 'financial analysis':
        return (
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'risk analysis':
        return (
          <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'opportunity analysis':
        return (
          <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-full space-y-6">
      <div className="space-y-4">
        {/* Card Title */}
        <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            {getHeaderIcon()}
          </div>
          <h3 className="text-lg font-bold tracking-tight text-slate-100">{title}</h3>
        </div>

        {/* Card Body Key-Value pairs */}
        <div className="space-y-4">
          {Object.entries(data).map(([key, value]) => {
            if (key === 'summary') return null;

            // If value is a nested object (like risks)
            if (typeof value === 'object' && value !== null) {
              return (
                <div key={key} className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    {formatKey(key)}
                  </span>
                  <div className="pl-3.5 border-l border-white/15 space-y-3">
                    {Object.entries(value).map(([subKey, subVal]) => (
                      <div key={subKey} className="text-sm">
                        <strong className="block text-xs font-semibold text-slate-200 mb-0.5">{formatKey(subKey)}</strong>
                        <p className="leading-relaxed text-slate-400 text-xs">{String(subVal)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={key} className="space-y-1">
                <strong className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {formatKey(key)}
                </strong>
                <p className="text-sm leading-relaxed text-slate-200">{String(value)}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary section at bottom of card */}
      {data.summary && (
        <div className="pt-4 border-t border-white/5 mt-4">
          <div className="bg-gold-500/5 border border-gold-500/10 rounded-xl p-3.5 text-xs">
            <strong className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Summary Verdict
            </strong>
            <p className="italic leading-relaxed text-slate-300 font-medium">"{String(data.summary)}"</p>
          </div>
        </div>
      )}
    </div>
  );
}
