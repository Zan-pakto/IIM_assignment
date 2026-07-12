import React from 'react';

/**
 * RiskMeter component to visualize the risk profile score.
 * @param {object} props
 * @param {number} props.score - Risk score (0-100).
 */
export default function RiskMeter({ score }) {
  const getRiskDetails = (s) => {
    if (s < 30) {
      return {
        label: 'Low Risk',
        color: 'text-emerald-600 dark:text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20 dark:border-emerald-500/10',
        bar: 'bg-gradient-to-r from-emerald-600 to-emerald-400',
        desc: 'Strong defensive characteristics and insulated business model.'
      };
    }
    if (s < 70) {
      return {
        label: 'Moderate Risk',
        color: 'text-amber-600 dark:text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20 dark:border-amber-500/10',
        bar: 'bg-gradient-to-r from-amber-600 to-amber-400',
        desc: 'Some sector headwinds or minor capital vulnerability detected.'
      };
    }
    return {
      label: 'High Risk',
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20 dark:border-rose-500/10',
      bar: 'bg-gradient-to-r from-rose-600 to-rose-400',
      desc: 'Significant exposure to disruption, capital stress, or regulatory pressure.'
    };
  };

  const details = getRiskDetails(score);

  return (
    <div className={`glass-card p-6 rounded-2xl flex flex-col justify-between space-y-6 border transition-all duration-500 ${details.border} shadow-lg shadow-slate-100 dark:shadow-none`}>
      <div>
        <span className="block text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
          Risk Profile Index
        </span>
        <div className="flex items-center gap-3 mt-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${details.bg} ${details.color}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <span className={`text-4xl font-black tracking-tight ${details.color}`}>
            {score}/100
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <span className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">
            Assessment Status
          </span>
          <span className={`text-lg font-extrabold ${details.color}`}>{details.label}</span>
        </div>
        <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-300/30 dark:border-white/5">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${details.bar}`} 
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
          {details.desc}
        </p>
      </div>
    </div>
  );
}
