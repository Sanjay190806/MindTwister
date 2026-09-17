import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckSquare, Square, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { MatchScoreResult } from '../../types';
import { formatCompactINR } from '../../utils/finance';
import { useAssessment } from '../../context/AssessmentContext';

interface OtherSuitableSchemesProps {
  results: MatchScoreResult[]; // excluding top 1
  onOpenCompareModal: () => void;
}

export const OtherSuitableSchemes: React.FC<OtherSuitableSchemesProps> = ({
  results,
  onOpenCompareModal
}) => {
  const { selectedCompareIds, toggleCompareScheme } = useAssessment();
  const [sortBy, setSortBy] = useState<'score' | 'funding' | 'rate'>('score');

  // Sort other schemes based on filter selection
  const sorted = [...results].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'funding') return b.scheme.maxFunding - a.scheme.maxFunding;
    if (sortBy === 'rate') return a.scheme.mockInterestRate - b.scheme.mockInterestRate;
    return 0;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 sm:p-8 space-y-6">
      
      {/* Header and Sort bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Other Suitable Government Schemes
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Alternative central credit and subsidy frameworks evaluated against your business criteria.
          </p>
        </div>

        {/* Sort Controls & Compare Trigger */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-2.5 py-1.5 rounded-lg border border-slate-200">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-medium text-slate-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
            >
              <option value="score">Match Score</option>
              <option value="funding">Funding Ceiling</option>
              <option value="rate">Interest Rate (Low to High)</option>
            </select>
          </div>

          <button
            onClick={onOpenCompareModal}
            className="text-xs font-bold bg-[#0B2545] hover:bg-[#134B70] text-white px-3.5 py-1.5 rounded-lg shadow-xs transition flex items-center gap-1.5"
          >
            <span>Compare Selected ({selectedCompareIds.length})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid of Other Schemes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.slice(0, 6).map((item) => {
          const { scheme, score, matchTier } = item;
          const isSelected = selectedCompareIds.includes(scheme.id);

          return (
            <div
              key={scheme.id}
              className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                    {scheme.code}
                  </span>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-slate-900 block">
                      {score}% Match
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {matchTier}
                    </span>
                  </div>
                </div>

                <h4 className="font-bold text-sm text-slate-900 leading-snug line-clamp-1">
                  {scheme.name}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {scheme.shortDescription}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Funding</span>
                    <strong className="text-slate-800">{formatCompactINR(scheme.maxFunding)}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Mock Rate</span>
                    <strong className="text-emerald-700">{scheme.mockInterestRate}% p.a.</strong>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => toggleCompareScheme(scheme.id)}
                  className={`text-xs font-semibold flex items-center gap-1.5 transition ${
                    isSelected ? 'text-blue-900 font-bold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {isSelected ? (
                    <CheckSquare className="w-4 h-4 text-blue-800 fill-blue-50" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400" />
                  )}
                  <span>Compare</span>
                </button>

                <Link
                  to={`/schemes/${scheme.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
