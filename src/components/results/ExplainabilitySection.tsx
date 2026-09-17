import React from 'react';
import { HelpCircle, Check, Info, Sparkles, TrendingUp } from 'lucide-react';
import { MatchScoreResult, EntrepreneurProfile } from '../../types';

interface ExplainabilitySectionProps {
  matchResult: MatchScoreResult;
  profile: EntrepreneurProfile;
}

export const ExplainabilitySection: React.FC<ExplainabilitySectionProps> = ({
  matchResult,
  profile
}) => {
  const { scheme, breakdown, score, cautionNotes } = matchResult;

  // Convert raw points to 0-100% bars for explainability display
  const bars = [
    {
      label: 'Business Category Alignment',
      score: Math.round((breakdown.businessType / 20) * 100),
      detail: `Your sector (${profile.businessType}) is supported by ${scheme.code}`
    },
    {
      label: 'Funding Requirement Fit',
      score: Math.round((breakdown.fundingRange / 20) * 100),
      detail: `Requested ₹${profile.requiredFunding.toLocaleString('en-IN')} fits demo range`
    },
    {
      label: 'Business Stage Match',
      score: Math.round((breakdown.businessStage / 15) * 100),
      detail: `${profile.businessStage} units are prioritized under guidelines`
    },
    {
      label: 'Entrepreneur Demographics',
      score: Math.round((breakdown.entrepreneurType / 15) * 100),
      detail: `Qualifies for priority citizen / social category benefits`
    },
    {
      label: 'Document Readiness Score',
      score: Math.round((breakdown.documentReadiness / 10) * 100),
      detail: `Readiness based on available mandatory KYC & financial proofs`
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 sm:p-8 space-y-6">
      
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h3 className="text-lg font-bold text-slate-900">
            Why JANSAHAY AI Recommended This
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-0.5">
          Explainable AI decomposition illustrating the sub-score breakdown across all evaluation dimensions.
        </p>
      </div>

      {/* 5 Horizontal Explainability Bars */}
      <div className="space-y-4">
        {bars.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-800">{item.label}</span>
              <span className="font-mono font-bold text-[#0B2545]">{item.score}%</span>
            </div>

            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#0B2545] to-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${item.score}%` }}
              ></div>
            </div>

            <p className="text-[11px] text-slate-500">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Plain Language Summary Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed space-y-2">
        <div className="font-bold text-slate-900 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-blue-700" />
          Natural Language Recommendation Explanation
        </div>
        <p>
          Your requested funding amount of <strong>₹{profile.requiredFunding.toLocaleString('en-IN')}</strong> fits comfortably within the scheme's demonstration funding range, and your business category (<strong>{profile.businessType}</strong>) and operational stage (<strong>{profile.businessStage}</strong>) align with the configured demo eligibility rules under {scheme.code}.
        </p>
        {cautionNotes && cautionNotes.length > 0 && (
          <div className="pt-2 border-t border-slate-200 text-amber-800 text-[11px]">
            <strong>Note for official application:</strong> {cautionNotes.join('. ')}
          </div>
        )}
      </div>

    </div>
  );
};
