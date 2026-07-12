import React from 'react';

/**
 * DecisionBadge component to display the final action recommendation.
 * @param {object} props
 * @param {string} props.decision - The recommendation (e.g. INVEST or PASS).
 * @param {number} props.confidence - Conviction/confidence score (0-100).
 */
export default function DecisionBadge({ decision, confidence }) {
  const isInvest = decision === 'INVEST';
  
  return (
    <div className={`glass-card p-6 rounded-2xl flex flex-col justify-between space-y-6 border transition-all duration-500 ${
      isInvest 
        ? 'border-emerald-500/20 dark:border-emerald-500/10 shadow-lg shadow-emerald-500/5' 
        : 'border-rose-500/20 dark:border-rose-500/10 shadow-lg shadow-rose-500/5'
    }`}>
      <div>
        <span className="block text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
          Final Recommendation
        </span>
        <div className="flex items-center gap-3 mt-2">
          {/* Action indicator icon */}
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isInvest 
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
              : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
          }`}>
            {isInvest ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
              </svg>
            )}
          </div>
          <span className={`text-4xl font-black tracking-tight ${
            isInvest ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
          }`}>
            {decision || 'PENDING'}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <span className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
            Conviction Rating
          </span>
          <span className="text-xl font-extrabold text-slate-800 dark:text-slate-200">{confidence}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-300/30 dark:border-white/5">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${
              isInvest ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' : 'bg-gradient-to-r from-rose-600 to-rose-400'
            }`} 
            style={{ width: `${confidence}%` }}
          />
        </div>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
          Confidence rating is synthesized from structural metrics, debt-to-equity leverage, and competitor barriers.
        </p>
      </div>
    </div>
  );
}
