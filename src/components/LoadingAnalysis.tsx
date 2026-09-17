import React from 'react';
import { Sparkles, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';

interface LoadingAnalysisProps {
  currentStep: number; // 1 to 5
  message: string;
}

export const LoadingAnalysis: React.FC<LoadingAnalysisProps> = ({ currentStep, message }) => {
  const steps = [
    { num: 1, title: 'Entrepreneur Demographic Assessment', detail: 'Evaluating citizen category, age, state & special provisions' },
    { num: 2, title: 'Business Profile & Activity Validation', detail: 'Cross-checking manufacturing/service sector against MSMED Act' },
    { num: 3, title: 'Multi-Scheme Rule Engine Execution', detail: 'Benchmarking 8 national credit & capital subsidy frameworks' },
    { num: 4, title: 'Financial Burden & Subsidy Computation', detail: 'Simulating monthly EMI, tenure amortization & net interest cost' },
    { num: 5, title: 'Document Readiness & Facilitation Routing', detail: 'Auditing missing compliance papers & locating nearest support desk' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Animated Icon and Title */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-[#0B2545] text-amber-300 flex items-center justify-center mx-auto shadow-lg relative">
            <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              JANSAHAY AI Scheme Engine
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Evaluating marginal entrepreneur eligibility against Government of India support schemes
            </p>
          </div>
        </div>

        {/* Current status bar */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-950">
            <Loader2 className="w-4 h-4 animate-spin text-blue-700" />
            <span>{message || 'Processing rules...'}</span>
          </div>
        </div>

        {/* Progress steps checklist */}
        <div className="mt-6 space-y-3">
          {steps.map((s) => {
            const isDone = currentStep > s.num;
            const isCurrent = currentStep === s.num;
            return (
              <div 
                key={s.num}
                className={`flex items-start gap-3 p-2.5 rounded-lg text-xs transition-all ${
                  isDone 
                    ? 'bg-emerald-50/60 border border-emerald-200 text-emerald-950' 
                    : isCurrent 
                    ? 'bg-blue-50/70 border border-blue-300 text-blue-950 shadow-xs' 
                    : 'bg-slate-50/50 border border-slate-100 text-slate-400'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px] text-slate-400">
                      {s.num}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className={`text-[11px] mt-0.5 ${isDone ? 'text-emerald-700' : isCurrent ? 'text-blue-700' : 'text-slate-400'}`}>
                    {s.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info badge */}
        <div className="mt-6 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
          <span>Smart India Hackathon 2026 • Real-time Mock Scoring Engine</span>
        </div>
      </div>
    </div>
  );
};
