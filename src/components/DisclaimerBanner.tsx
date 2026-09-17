import React, { useState } from 'react';
import { AlertCircle, X, ShieldCheck } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-amber-50/90 border-b border-amber-200/80 text-amber-950 text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1">
          <span className="inline-flex items-center gap-1 bg-amber-200/80 text-amber-900 font-semibold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider shrink-0">
            <AlertCircle className="w-3.5 h-3.5 text-amber-800" />
            SIH 2026 Demo Prototype
          </span>
          <span className="text-slate-700 leading-tight">
            <strong>Demonstration Notice:</strong> Scheme terms, eligibility rules, interest rates (mock demo values) & facilitation locations are simulated for Smart India Hackathon 2026 (Problem Statement SIH26092). Not an official Government of India approval platform.
          </span>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-amber-700 hover:text-amber-950 p-1 hover:bg-amber-100/60 rounded shrink-0 transition"
          title="Dismiss banner"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
