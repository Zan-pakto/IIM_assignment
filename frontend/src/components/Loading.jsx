import React, { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

/**
 * Loading component displaying during analysis runs.
 * Shows a shimmering page Skeleton in the background, overlaid with the live pipeline log.
 */
export default function Loading({ companyName = 'Company' }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Retrieving SEC Filings & Financials", desc: "Downloading 10-K statements and balance sheet records..." },
    { title: "Analyzing Economic Moat", desc: "Calculating capital efficiency metrics (ROE, ROIC) and pricing power indicators..." },
    { title: "Assessing Growth & Valuations", desc: "Computing discount rates and modeling intrinsic value ranges..." },
    { title: "Synthesizing Risk Matrix", desc: "Cross-referencing regulatory hurdles and competitive threat indicators..." },
    { title: "Buffett Decision Synthesis", desc: "Assembling final dossier report and generating Invest/Pass verdict..." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[600px] flex flex-col justify-center items-center">
      {/* 1. Background Shimmering Skeleton representing the upcoming content layout */}
      <div className="w-full opacity-40 dark:opacity-20 pointer-events-none select-none">
        <Skeleton />
      </div>

      {/* 2. Floating Centered Loading Pipeline Card */}
      <div className="absolute z-20 w-full max-w-xl mx-auto px-4 animate-fade-in-up">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 -z-10 bg-gold-primary/5 blur-xl rounded-2xl"></div>

          {/* Stepper Header */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 border-b border-slate-200 dark:border-white/5 pb-5">
            {/* Spinning Ring */}
            <div className="relative w-12 h-12 flex-shrink-0">
              <div className="absolute inset-0 rounded-full border-2 border-slate-200 dark:border-white/5 border-t-gold-primary animate-spin"></div>
              <div className="absolute inset-1 rounded-full border border-slate-200 dark:border-white/5 border-b-gold-primary animate-spin [animation-duration:1.5s]"></div>
            </div>
            
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white">Analyzing {companyName}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                NexaInvest's valuation model is evaluating the long-term compounding potential.
              </p>
            </div>
          </div>

          {/* Stepper Pipeline List */}
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-wider mb-2">
              <span>PIPELINE PROCESS LOG</span>
              <span className="text-gold-primary">Progress: {Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>

            <div className="space-y-3.5">
              {steps.map((step, idx) => {
                const isCompleted = idx < currentStep;
                const isActive = idx === currentStep;
                const isPending = idx > currentStep;

                return (
                  <div key={idx} className={`flex items-start gap-3 transition-opacity duration-300 ${isPending ? 'opacity-30' : 'opacity-100'}`}>
                    {/* Status Dot */}
                    <div className="mt-0.5">
                      {isCompleted ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : isActive ? (
                        <div className="w-4 h-4 rounded-full bg-gold-light dark:bg-gold-primary/20 border border-gold-primary flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-ping"></span>
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                          <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                        </div>
                      )}
                    </div>

                    {/* Text Details */}
                    <div className="flex-grow">
                      <h5 className={`text-xs sm:text-sm font-semibold ${isActive ? 'text-gold-primary' : isCompleted ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400 dark:text-slate-500'}`}>
                        {step.title}
                      </h5>
                      {isActive && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                          {step.desc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
