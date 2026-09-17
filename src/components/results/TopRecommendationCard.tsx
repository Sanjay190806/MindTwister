import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, ArrowRight, Sparkles, Building2, Tag } from 'lucide-react';
import { MatchScoreResult } from '../../types';
import { formatCompactINR } from '../../utils/finance';

interface TopRecommendationCardProps {
  matchResult: MatchScoreResult;
  onOpenCompare: () => void;
}

export const TopRecommendationCard: React.FC<TopRecommendationCardProps> = ({
  matchResult,
  onOpenCompare
}) => {
  const { scheme, score, matchTier, matchReasons, eligibilityNote } = matchResult;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#0B2545]/30 shadow-gov-lg overflow-hidden">
      {/* Top recommendation banner */}
      <div className="bg-gradient-to-r from-[#0B2545] via-[#103A69] to-[#134B70] text-white p-5 sm:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-md text-xs uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                Primary Recommendation
              </span>
              <span className="text-xs text-blue-200">
                Highest Demo Match For Your Profile
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              {scheme.name}
            </h2>
            <div className="flex items-center gap-2 text-xs text-blue-100 flex-wrap">
              <span className="font-semibold">{scheme.ministry}</span>
              <span>•</span>
              <span className="bg-blue-900/80 px-2 py-0.5 rounded border border-blue-600 font-mono text-[11px]">
                {scheme.code}
              </span>
            </div>
          </div>

          {/* Match Score Badge */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shrink-0">
            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-black text-amber-300 leading-none">
                {score}%
              </div>
              <div className="text-[11px] font-bold text-white uppercase tracking-wider mt-1">
                {matchTier}
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center">
              <Award className="w-7 h-7 text-amber-300" />
            </div>
          </div>

        </div>
      </div>

      {/* Body & Reasons */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Quick summary line */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
          {scheme.shortDescription}
        </p>

        {/* Why this matches you */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              Why JANSAHAY AI Recommends This Scheme For You:
            </h4>
            <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
              Demo Rule Engine
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {matchReasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-emerald-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{reason}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-emerald-200/80 text-[11px] text-emerald-800 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>{eligibilityNote}</span>
          </div>
        </div>

        {/* Key Scheme Action CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <Link
              to={`/schemes/${scheme.id}`}
              className="inline-flex items-center gap-1.5 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs transition"
            >
              <span>View Full Scheme Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={onOpenCompare}
              className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition"
            >
              <span>Compare With Alternatives</span>
            </button>
          </div>

          <a
            href={scheme.officialPortalUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-500 hover:text-blue-700 inline-flex items-center gap-1 font-medium"
          >
            <span>Official Portal Gateway</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
