import React from 'react';
import DecisionBadge from '../components/DecisionBadge';
import RiskMeter from '../components/RiskMeter';

/**
 * Result page view to render the complete dossier.
 * Shows Company, Decision, Confidence, SWOT, Financials, and Risk Score in cards.
 */
export default function Result({ data, onBack }) {
  if (!data) return null;

  const { company, decision, details } = data;

  // Extract SWOT lists from financials, risks, and opportunities for detailed card displays
  const strengths = [
    { label: "Profitability & Margins", desc: details?.financials?.margins || details?.financials?.profit },
    { label: "Free Cash Flow Gen", desc: details?.financials?.cashFlow },
    { label: "Growth Trajectory", desc: details?.financials?.growth },
    { label: "Capital Allocation Efficiency", desc: details?.financials?.capitalAllocation || "Highly efficient management ROIC strategy." }
  ].filter(item => item.desc);

  const weaknesses = [
    { label: "Debt & Balance Sheet Leverage", desc: details?.financials?.debt },
    { label: "Leadership & Transition Risks", desc: details?.risks?.reasons?.leadership },
    { label: "Macro susceptibility", desc: details?.risks?.reasons?.economicRisks }
  ].filter(item => item.desc);

  const opportunitiesList = [
    { label: "Future Growth Runway", desc: details?.opportunities?.futureGrowth },
    { label: "Product Integration & Automation", desc: details?.opportunities?.aiAdoption },
    { label: "Market Expansion & Penetration", desc: details?.opportunities?.marketExpansion },
    { label: "Research & Development Innovation", desc: details?.opportunities?.innovation }
  ].filter(item => item.desc);

  const threats = [
    { label: "Competitor Pressures", desc: details?.risks?.reasons?.competition },
    { label: "Regulatory Hurdles", desc: details?.risks?.reasons?.regulations },
    { label: "Supply Chain & Sector Disruption", desc: details?.risks?.reasons?.industryRisks }
  ].filter(item => item.desc);

  const reportDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 space-y-8 animate-fade-in-up">
      {/* Header Navigation Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-gold-primary/50 hover:bg-gold-light dark:hover:bg-gold-primary/10 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-gold-primary dark:hover:text-white"
        >
          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Search
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
            Analysis Live
          </span>
        </div>
      </div>

      {/* Report Heading and Metadata */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 text-xs text-gold-primary font-semibold tracking-widest uppercase">
          <span>Investment Research Dossier</span>
          <span className="text-slate-300 dark:text-white/20">•</span>
          <span>NexaInvest Engine</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-slate-800 dark:text-white">
          {company}
        </h2>

        {/* Dossier Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-3.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs">
          <div>
            <span className="block text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Evaluation Date</span>
            <span className="font-bold text-slate-750 dark:text-slate-200">{reportDate}</span>
          </div>
          <div>
            <span className="block text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Framework</span>
            <span className="font-bold text-slate-750 dark:text-slate-200">Buffett Value Filter</span>
          </div>
          <div>
            <span className="block text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Security Level</span>
            <span className="font-bold text-gold-primary">Classified Research</span>
          </div>
          <div>
            <span className="block text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Conviction Tier</span>
            <span className="font-bold text-slate-750 dark:text-slate-200">
              {decision?.confidence >= 85 ? "High Conviction" : decision?.confidence >= 70 ? "Moderate Conviction" : "Low Conviction"}
            </span>
          </div>
        </div>
      </div>

      {/* Decision and Risk Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Company Decision */}
        <DecisionBadge 
          decision={decision?.decision} 
          confidence={decision?.confidence} 
        />
        {/* Card 2: Risk Profile Score */}
        {details?.risks?.riskScore !== undefined && (
          <RiskMeter score={details.risks.riskScore} />
        )}
      </div>

      {/* SWOT Analysis Cards Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold font-heading text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <svg className="w-5 h-5 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Strategic SWOT Assessment
        </h3>
        
        {/* Responsive Grid for SWOT Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card: Strengths */}
          <div className="glass-card p-5 rounded-2xl border border-emerald-500/15 dark:border-emerald-500/10 hover:border-emerald-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Strengths</h4>
              </div>
              <ul className="mt-3.5 space-y-3.5">
                {strengths.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <strong className="block text-slate-800 dark:text-slate-200 font-semibold mb-0.5">{item.label}</strong>
                    <span className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card: Weaknesses */}
          <div className="glass-card p-5 rounded-2xl border border-amber-500/15 dark:border-amber-500/10 hover:border-amber-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-amber-600 dark:text-amber-400">Weaknesses</h4>
              </div>
              <ul className="mt-3.5 space-y-3.5">
                {weaknesses.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <strong className="block text-slate-800 dark:text-slate-200 font-semibold mb-0.5">{item.label}</strong>
                    <span className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card: Opportunities */}
          <div className="glass-card p-5 rounded-2xl border border-blue-500/15 dark:border-blue-500/10 hover:border-blue-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">Opportunities</h4>
              </div>
              <ul className="mt-3.5 space-y-3.5">
                {opportunitiesList.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <strong className="block text-slate-800 dark:text-slate-200 font-semibold mb-0.5">{item.label}</strong>
                    <span className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card: Threats */}
          <div className="glass-card p-5 rounded-2xl border border-rose-500/15 dark:border-rose-500/10 hover:border-rose-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-rose-600 dark:text-rose-400">Threats</h4>
              </div>
              <ul className="mt-3.5 space-y-3.5">
                {threats.map((item, idx) => (
                  <li key={idx} className="text-xs">
                    <strong className="block text-slate-800 dark:text-slate-200 font-semibold mb-0.5">{item.label}</strong>
                    <span className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card: Financial Analysis Detail */}
      {details?.financials && (
        <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/5 space-y-4">
          <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200 dark:border-white/5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 font-heading">Financial Statement Analysis</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Revenue Trends</span>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-medium">{details.financials.revenue}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Earnings & Operating Profits</span>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-medium">{details.financials.profit}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Free Cash Flow Generation</span>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-medium">{details.financials.cashFlow}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">Operating margins & Pricing Power</span>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-medium">{details.financials.margins}</p>
            </div>
          </div>

          {details.financials.summary && (
            <div className="pt-4 border-t border-slate-200 dark:border-white/5 mt-4">
              <div className="bg-gold-primary/5 dark:bg-gold-primary/10 border border-gold-primary/10 rounded-xl p-3.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-primary block mb-1">Financial Health Summary</span>
                <p className="text-xs sm:text-sm italic leading-relaxed text-slate-600 dark:text-slate-300 font-semibold">"{details.financials.summary}"</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Card: Investment Rationale Narrative */}
      <div className="relative glass-panel rounded-2xl p-6 md:p-8 space-y-6 border border-gold-primary/20 shadow-xl overflow-hidden shadow-slate-100 dark:shadow-none">
        <div className="absolute inset-y-0 left-0 w-1 gold-gradient-bg"></div>
        
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <svg className="w-5 h-5 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Warren Buffett Investment Thesis
          </h3>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">
            Synthesis Verdict & Economic Moat Rationale
          </p>
        </div>

        <p className="font-serif leading-relaxed text-base sm:text-lg text-slate-700 dark:text-slate-200 whitespace-pre-line border-t border-slate-200 dark:border-white/5 pt-5 tracking-wide">
          {decision?.explanation}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-slate-200 dark:border-white/5 mt-4 text-sm bg-slate-100 dark:bg-white/5 rounded-xl p-4">
          <div className="space-y-1">
            <span className="block text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Recommended Investment Horizon</span>
            <span className="text-base font-bold text-slate-800 dark:text-slate-100">{decision?.investmentHorizon}</span>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Estimated Returns Profile</span>
            <span className="text-base font-bold text-slate-800 dark:text-slate-100">{decision?.expectedReturn}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
